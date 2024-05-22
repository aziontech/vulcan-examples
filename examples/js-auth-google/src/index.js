import { ApiRouter } from "./router/api.router";
import { BaseRouter } from "./router/base.router";

async function handleRequest(request, args) {
  const baseRouter = BaseRouter();

  baseRouter.all("/api/*", ApiRouter().fetch);

  baseRouter.all("*", (request) => {
    return new Response(`Welcome to the Edge!`, { status: 404 });
  });

  return baseRouter.fetch(request, { args });
}

export { handleRequest };
