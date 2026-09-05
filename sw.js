const CACHE_NAME = "urYZY-v32";

const STATIC_FILES = [
    "/",
    "/index.html",
    "/downloads.html",
    "/updates.html",
    "/updating.html",
    "/offline.html",
    "/404.html",
    "/theme.css",
    "/footer.js",
    "/transitions.js",
    "/ambient-background.js",

    "/assets/LOGO2.png",
    "/assets/logo.png",
    "/assets/err.png",
    "/assets/IAPW.png",
    "/assets/IAPWE.png",
    "/assets/WAR.jpg",
    "/assets/BADBITCHPLAYBOOKPREVULTURES1.png",
    "/assets/BADBITCHPLAYBOOK.png",
    "/assets/BADBITCHPLAYBOOK2.png",
    "/assets/NO_CIERTO_BESAME_MAMA.png",
    "/assets/BULLYLP.png",
    "/assets/BULLYPV.png",
    "/assets/BULLYDG.png",
    "/assets/WW3.png",
    "/assets/CUCK.png",
    "/assets/05 Bully MIX.03_03.mp3",

    "/fonts/yeezy_tstar-bold-webfont.woff",
    "/fonts/yeezy_tstar-regular-webfont.woff",
    "/assets/AwesomeBi_polar-Regular.otf",
    "/WAR.zip",
    "/Bad Bitch Playbook (Pre VULTURES 1).zip",
    "/Bad Bitch Playbook.zip",
    "/Bad Bitch Playbook Vol. 2.zip"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async cache => {
            for (const file of STATIC_FILES) {
                try {
                    const response = await fetch(file, { cache: "no-store" });

                    if (response.ok) {
                        await cache.put(file, response);
                    }
                } catch (error) {
                    console.warn("Could not cache:", file);
                }
            }

            await self.skipWaiting();
        })
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    if (event.request.method !== "GET") return;

    const url = new URL(event.request.url);

    if (url.origin !== self.location.origin) return;

    event.respondWith(
        fetch(event.request)
            .then(response => {
                if (response.ok) {
                    const copy = response.clone();

                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, copy);
                    });
                }

                return response;
            })
            .catch(() =>
                caches.match(event.request).then(cached => {
                    if (cached) {
                        return cached;
                    }

                    if (event.request.mode === "navigate") {
                        return caches.match("/offline.html");
                    }

                    return new Response("", {
                        status: 503,
                        statusText: "Offline"
                    });
                })
            )
    );
});