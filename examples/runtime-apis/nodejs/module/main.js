/**
 * An Example of using the Node.js Module API in a Azion Edge Function.
 * Support:
 * - Partially supported
 * @module runtime-apis/nodejs/module/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build
 * npx edge-functions dev
 */
import module from "node:module";

/**
 * An example of using the Node.js Module API in a Azion Edge Function.
 * @param {*} event
 * @returns {Promise<Response>}
 */
const main = async (event) => {
  return new Promise((resolve, reject) => {
    module.builtinModules.forEach((moduleName) => {
      console.log(moduleName);
    });
    resolve(new Response("Done"));
  });
};

export default main;
