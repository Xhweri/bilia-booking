document.addEventListener("DOMContentLoaded", () => {
    const folders = document.querySelectorAll(".folder");

    folders.forEach(folder => {
        folder.addEventListener("click", () => {
            const siblingUl = folder.nextElementSibling;
            if (siblingUl && siblingUl.tagName === "UL") {
                siblingUl.style.display = siblingUl.style.display === "none" ? "block" : "none";
            }
        });
    });
});