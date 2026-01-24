self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("mobispace").then(c =>
      c.addAll(["/", "/index.html"])
    )
  );
});