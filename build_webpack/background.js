chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    cancel: details.url.indexOf("://youtube.com/") != -1
  },
  {
    urls: ["<all_urls>"]
  },
  [
    "blocking"
  ]
)
