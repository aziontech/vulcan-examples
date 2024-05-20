import { Router } from "itty-router";
import { indexHTML } from "../pages/home/index.js";

/**
 * Page route using the itty-router library.
   For more details check out https://itty.dev/itty-router
 *  
 * @returns {RouterType<import("itty-router").Route, any[]>}
 */
export const BaseRouter = () => {
  const router = Router();
  router.get("/", homePageHandler);

  return router;
};

/**
 * Home Page Handler
 * @param {*} request
 * @param {*} request.metadata e.g ${geoip_country_code} https://www.azion.com/en/documentation/products/edge-application/rules-engine/#variables
 * @param {*} extras
 * @param {*} extras.args function args e.g
 * @returns {Response} HTML page
 */
const homePageHandler = async (request, _extras) => {
  const authURL =
    process.env.NEXTAUTH_URL || Azion.env.get("NEXTAUTH_URL") || request.url;
  const html = indexHTML(authURL);

  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
    status: 200,
  });
};
