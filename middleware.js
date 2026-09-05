const UPDATE_MODE = process.env.UPDATE_MODE === "true";
const OFFLINE_MODE = process.env.OFFLINE_MODE === "true";

export default function middleware(request) {
    if (!UPDATE_MODE && !OFFLINE_MODE) {
        return;
    }

    const url = new URL(request.url);
    const pathname = url.pathname;

    if (pathname === "/updating.html" || pathname === "/updating") {
        return;
    }

    if (pathname === "/offline.html" || pathname === "/offline") {
        return;
    }

    if (pathname.startsWith("/api/")) {
        return;
    }

    if (pathname === "/sw.js") {
        return;
    }

    if (request.destination !== "document") {
        return;
    }

    if (UPDATE_MODE) {
        return Response.redirect(
            new URL("/updating.html", request.url),
            307
        );
    }

    return Response.redirect(
        new URL("/offline", request.url),
        307
    );
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico).*)"
    ]
};