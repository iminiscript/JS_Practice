export function redirectToStep(to, from) {
    if (window.location.search === "") {
        window.history.pushState(to, "", from);
    }
}
