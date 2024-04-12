import {registerApplication, start, LifeCycles, navigateToUrl} from "single-spa";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

function startsWithOneOf(path: string, prefixes: string[]) {
    return prefixes.some((prefix) => path.startsWith(prefix))
}

registerApplication({
    name: "@kkostadinov/navbar",
    app: () => System.import("@kkostadinov/navbar") as any,
    activeWhen: () => true,
});


registerApplication({
    name: "@kkostadinov/app-one",
    app: () => System.import("@kkostadinov/app-one") as any,
    activeWhen: (location) => startsWithOneOf(location.pathname, ["/app-one"]),
});

start({
    urlRerouteOnly: true,
});

function navigateTo(to: string) {
    navigateToUrl(to);
}

export {
    navigateTo
}
