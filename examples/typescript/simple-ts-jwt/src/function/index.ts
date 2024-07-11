import { decode, sign, verify } from "azion/jwt";
import { CustomEvent } from "../types/event";

const SECRET = 'MY_SECRET';
const USER = 'user1@test.com';
const PASSWORD = 'My_Pass*';

async function generateToken() {
  const inPayload = {
    sub: USER,
    role: 'admin',
    exp: Math.floor(Date.now() / 1000) + 60 * 5, // Token expires in 5 minutes
  };
  const token = await sign(inPayload, SECRET);

  return token;
}

async function decodeJwt(token: string) {
  await verify(token, SECRET);

  const { header, payload } = decode(token);

  return { header, payload };
}

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

async function loginRoute(request: Request): Promise<Response> {
  const body = await request.json();
  const { user, password } = body;

  if (user === USER && password === PASSWORD) {
    const token = await generateToken();
    return generateResponse({ token });
  } else {
    return unauthorized();
  }
}

async function protectedRoute(request: Request): Promise<Response> {
  const authHeader = request.headers.get("Authorization") || "";
  const token = authHeader.split("Bearer ")[1];

  try {
    const jwt = await decodeJwt(token);

    const data = {
      jwt,
      message: "Protected route.",
    };

    return generateResponse(data);
  } catch (error: any) {
    return generateResponse({ message: `${error}` }, 500);
  }
}

function publicRoute(): Response {
  return generateResponse({ message: "Public route." });
}

async function handleRequest({ request, args }: CustomEvent): Promise<Response> {
  const { method, url } = request;
  const path = (new URL(url)).pathname;

  switch (path) {
    case '/login':
      return (method === 'POST') ?
        loginRoute(request) :
        methodNotAllowed();
    case '/protected':
      return (method === 'GET') ?
        protectedRoute(request) :
        methodNotAllowed();
    case '/public':
      return (method === 'GET') ?
        publicRoute() :
        methodNotAllowed();
    default:
      return notFoundRoute();
  }
}

export { handleRequest };
