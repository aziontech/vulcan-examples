/**
 * An example of using the Node.js `events` module in Azion Edge Functions.
 * Support:
 * - Fully supported
 * - Extended by library `events`
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build
 * npx edge-functions dev
 */
import { EventEmitter } from "node:events";

/**
 * Emit an event and listen to it.
 * @param {*} event
 * @returns {Response} Response
 */
const main = async (event) => {
  const emitter = new EventEmitter();

  emitter.on("hello-event", (...args) => {
    console.log("an event occurred!", ...args);
  });

  emitter.emit("hello-event", 1, 2, 3);
  return new Response("Event emitted", { status: 200 });
};

export default main;
