function generateResponse(data: any, status: number = 200): Response {
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json"
    },
    status,
  });
}

function notFoundRoute(): Response {
  return generateResponse({ message: "Not Found" }, 404);
}

function methodNotAllowed(): Response {
  return generateResponse({ message: "Method Not Allowed" }, 405);
}

function unauthorized(): Response {
  return generateResponse({ message: "Unauthorized" }, 401);
}

export { generateResponse, notFoundRoute, methodNotAllowed, unauthorized }
