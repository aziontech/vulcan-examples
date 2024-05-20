import { Router } from "itty-router";
import { GET, POST } from "../lib/auth/index.js";

/**
 * Api route using the itty-router library.
 *
 * @returns {RouterType<import("itty-router").Route, any[]>}
 */
export const ApiRouter = () => {
  const router = Router({
    base: "/api",
  });
  router.get("/auth/*", GET);
  router.post("/auth/*", POST);

  return router;
};
