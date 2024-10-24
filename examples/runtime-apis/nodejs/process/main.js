/**
 * An example of using the Node.js Process API in a Azion Edge Function.
 * Support:
 *  - Extended by library `process`
 *    Portions of this file Copyright Roman Shtylman, licensed under the MIT license.
 * @module runtime-apis/nodejs/process/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build
 * npx edge-functions dev
 */
import { env, nextTick } from "node:process";

/**
 * Example of using the process api
 * @param {*} event
 */
const main = async (event) => {
  console.log(process.env.NODE_ENV);

  nextTick(() => {
    console.log("Hello, Next Tick!");
    // Hello, Next Tick!
  });

  return new Response(`NODE_ENV: ${process.env.NODE_ENV}`, { status: 200 });
};

export default main;
