const clientURL = "https://ckh4.github.io/imgur-client#";

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Exclude tag pages and home page
    if (details.url.match(/^https?:\/\/(www\.)?imgur.com\/t\//) || /^https?:\/\/(www\.)?imgur.com\/?$/.test(details.url)) {
      return;
    }

    return {
      redirectUrl:
        clientURL + details.url
    };
  },
  {
    urls: [
      "*://imgur.com/*",
      "*://www.imgur.com/*",
      "*://i.imgur.com/*",
    ],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other",
    ]
  },
  ["blocking"]
);
