/**
 * An example of using the Node.js Buffer API in a Azion Edge Function.
 * Support:
 * - Fully supported
 * @module runtime-apis/nodejs/buffer/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build
 * npx edge-functions dev
 */
import { Buffer } from "node:buffer";

/**
 * Example of using the Node.js Buffer API
 * Writes `string` to `buf` at `offset` according to the character encoding in`encoding`. The `length` parameter is the number of bytes to write. If `buf` did
 * not contain enough space to fit the entire string, only part of `string` will be
 * written. However, partially encoded characters will not be written.
 * @param {*} event
 * @returns {Promise<Response>}
 */
const main = async (event) => {
  const helloBuffer = Buffer.from("Hello Edge!", "utf8");
  console.log(helloBuffer.toString("hex"));
  // 48656c6c6f204564676521
  console.log(helloBuffer.toString("base64"));
  // SGVsbG8gRWRnZSE=

  helloBuffer.write("World", 6, 5, "utf8");
  console.log(helloBuffer.toString());
  // Hello World!
  return new Response(helloBuffer.toString(), { status: 200 });
};

export default main;
