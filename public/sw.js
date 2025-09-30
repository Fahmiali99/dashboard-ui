self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("dashboard-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/_offline",
        "/manifest.json",
        "/icons/icon-192x192.png",
        "/icons/icon-512x512.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("/_offline");
          }
        })
      );
    })
  );
});
