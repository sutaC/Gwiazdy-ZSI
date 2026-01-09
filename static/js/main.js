// @ts-check
const dialogHelpWanted = /** @type {HTMLDialogElement} */ (
    document.getElementById("dialogHelpWanted")
);

dialogHelpWanted?.addEventListener(
    "close",
    () => {
        localStorage.setItem("helpwantedclosed", "true");
    },
    { once: true }
);
document.getElementById("btnHelpWantedClose")?.addEventListener("click", () => {
    dialogHelpWanted?.close();
});
document.getElementById("btnHelpWantedOpen")?.addEventListener("click", () => {
    dialogHelpWanted?.show();
});

if (!Boolean(JSON.parse(localStorage.getItem("helpwantedclosed") ?? "false"))) {
    setTimeout(() => dialogHelpWanted?.show(), 1000);
}
