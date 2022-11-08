export function redirectToStep() {
    if (window.location.search === '') {
        window.history.pushState("", "", `/?step-0`);
    }
}