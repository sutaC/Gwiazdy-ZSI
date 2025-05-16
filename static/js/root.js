// @ts-check

if (!Boolean(JSON.parse(localStorage.getItem("helpwantedclosed") ?? "false"))) {
    const dialogHelpWanted = /** @type {HTMLDialogElement} */ (
        document.getElementById("dialogHelpWanted")
    );
    dialogHelpWanted.addEventListener("close", () => {
        localStorage.setItem("helpwantedclosed", "true");
    });
    document
        .getElementById("btnHelpWantedClose")
        ?.addEventListener("click", () => {
            dialogHelpWanted.close();
        });
    dialogHelpWanted.show();
}
