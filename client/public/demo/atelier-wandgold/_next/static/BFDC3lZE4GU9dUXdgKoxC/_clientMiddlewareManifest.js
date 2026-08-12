self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/demo\\/atelier-wandgold(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/static|_next\\/image|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff2?|mp4|webm|json)$).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff2?|mp4|webm|json)$).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()