import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = function (context, next) {
    if (context.url.pathname !== "/") {
      return context.redirect("/");
    }
  
    return next();
  };