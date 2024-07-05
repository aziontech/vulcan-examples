/* eslint-disable */
import { getCookie, setCookie } from "azion/cookies";

export default async function main(event) {
  const cookieKey = "auth";
  const cookie = getCookie(event.request, cookieKey);
  const response = new Response("Hello, Cookies 🍪!", { status: 200 });
  if (!cookie) {
    try {
      console.log("Setting cookie 🍪🍪🍪");
      setCookie(response, cookieKey, "123", { maxAge: 30 });
    } catch (e) {
      console.error(e);
    }
  }
  return response;
}
