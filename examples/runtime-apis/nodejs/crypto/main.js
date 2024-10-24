/**
 * An example of using the Node.js Crypto API in a Azion Edge Function.
 * Support:
 * - Extended by library `crypto-browserify`
 * - Implemented aditional methods:
 *  - randomUUID (named exported only)
 * @module runtime-apis/nodejs/crypto/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build
 * npx edge-functions dev
 */
import { createHmac, randomUUID } from "node:crypto";

/**
 * Example of using the Node.js Crypto API
 * @param {*} event
 * @returns
 */
const main = async (event) => {
  const hmac = createHmac("sha256", "a secret");
  hmac.update("Azion Edge Functions");
  const hmacResult = hmac.digest("hex");
  console.log(hmacResult);
  // 5f2f3c2b9

  const uuid = randomUUID();
  console.log(uuid);
  // 1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4c1e

  return new Response(uuid, { status: 200 });
};

export default main;
