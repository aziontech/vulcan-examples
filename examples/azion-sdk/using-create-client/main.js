import { createClient } from 'azion';
import getDatabase from './functions/getDatabase.js';
import getStorage from './functions/getStorage.js';
import postPurge from './functions/postPurge.js';

const main = async (event) => {
  const client = createClient({ token: process.env.AZION_TOKEN, debug: true });
  const url = new URL(event.request.url);
  let response;

  const htmlHeader = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Demonstração Azion</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-100 p-8">
      <div class="max-w-4xl mx-auto">
  `;

  const htmlFooter = `
      </div>
    </body>
    </html>
  `;

  if (url.pathname === '/sql') {
    const { databases, createTableQuery, selectUsersQuery, users } = await getDatabase(client);
    const userRows = users.map((user) => `<tr><td class="border px-4 py-2">${user[0]}</td><td class="border px-4 py-2">${user[1]}</td></tr>`).join('');
    const dbRows = databases.map((db) => `<tr><td class="border px-4 py-2">${db.name}</td></tr>`).join('');
    const html = `
      ${htmlHeader}
        <h1 class="text-3xl font-bold mb-6 text-center text-blue-600">Usuários e Bancos de Dados</h1>
        <h2 class="text-2xl font-bold mb-4 text-center text-blue-500">Bancos de Dados</h2>
        <table class="w-full bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <thead class="bg-gray-200">
            <tr>
              <th class="px-4 py-2">Nome do Banco de Dados</th>
            </tr>
          </thead>
          <tbody>
            ${dbRows}
          </tbody>
        </table>
        <h2 class="text-2xl font-bold mb-4 text-center text-blue-500">Consulta para Criar Tabela</h2>
        <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">${createTableQuery}</pre>
        <h2 class="text-2xl font-bold mb-4 text-center text-blue-500">Consulta para Selecionar Usuários</h2>
        <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">${selectUsersQuery}</pre>
        <h2 class="text-2xl font-bold mb-4 text-center text-blue-500">Usuários</h2>
        <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead class="bg-gray-200">
            <tr>
              <th class="px-4 py-2">ID</th>
              <th class="px-4 py-2">Nome</th>
            </tr>
          </thead>
          <tbody>
            ${userRows}
          </tbody>
        </table>
      ${htmlFooter}
    `;
    response = new Response(html, { headers: new Headers([['Content-Type', 'text/html']]), status: 200 });
  } else if (url.pathname === '/storage') {
    const storageData = await getStorage(client);
    const html = `
      ${htmlHeader}
        <h1 class="text-3xl font-bold mb-6 text-center text-blue-600">Demonstração de Operações de Armazenamento</h1>
        <div id="results" class="space-y-6">
          ${Object.entries(storageData).map(([key, value]) => `
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-xl font-semibold mb-4 text-gray-800">${key}</h2>
              <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">${JSON.stringify(value, null, 2)}</pre>
            </div>
          `).join('')}
        </div>
      ${htmlFooter}
    `;
    response = new Response(html, { headers: new Headers([['Content-Type', 'text/html']]), status: 200 });
  } else if (url.pathname === '/purge') {
    const formHtml = `
    <form id="purgeForm" class="mb-8">
      <div class="mb-4">
        <label for="purgeType" class="block text-gray-700 text-sm font-bold mb-2">Tipo de Purge:</label>
        <select id="purgeType" name="purgeType" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="url">URL</option>
          <option value="cacheKey">Cache Key</option>
          <option value="wildcard">Wildcard</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="purgeUrls" class="block text-gray-700 text-sm font-bold mb-2">URLs/Cache Keys/Wildcards (uma por linha):</label>
        <textarea id="purgeUrls" name="purgeUrls" rows="5" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Executar Purge</button>
    </form>
    <div id="result" class="mt-8"></div>
  `;
  
  const html = `
    ${htmlHeader}
      <h1 class="text-3xl font-bold mb-6 text-center text-blue-600">Demonstração de Purge</h1>
      ${formHtml}
      <script>
        document.getElementById('purgeForm').addEventListener('submit', async (e) => {
          e.preventDefault();
          const type = document.getElementById('purgeType').value;
          const urls = document.getElementById('purgeUrls').value;
          const response = await fetch('/purge-action', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type, urls }),
          });
          const result = await response.json();
          document.getElementById('result').innerHTML = '<pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">' + JSON.stringify(result, null, 2) + '</pre>';
        });
      </script>
    ${htmlFooter}
  `;
    response = new Response(html, { headers: new Headers([['Content-Type', 'text/html']]), status: 200 });
  } else if (url.pathname === '/purge-action') {
    const { type, urls } = await event.request.json();
    const purgeResult = await postPurge(client, type, urls);
    response = new Response(JSON.stringify(purgeResult), { headers: new Headers([['Content-Type', 'application/json']]), status: 200 });
  } else {
    const html = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Demonstração Azion</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-100 p-8 h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-3xl font-bold mb-6 text-blue-600">Bem-vindo</h1>
          <p class="text-lg mb-4">Escolha uma das opções abaixo:</p>
          <div class="flex justify-center space-x-4">
            <a href="/sql" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SQL</a>
            <a href="/storage" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Storage</a>
            <a href="/purge" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Purge</a>
          </div>
        </div>
      </body>
      </html>
    `;
    response = new Response(html, { headers: new Headers([['Content-Type', 'text/html']]), status: 200 });
  }

  return response;
};

export default main;