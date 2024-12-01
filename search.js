let searchInp = document.querySelector("#search-input");
let searchCat = document.querySelector("#search-cat");
let searchBtn=document.querySelector("#search-button");
let aniLogo=document.querySelector("#animated-image");
console.log(searchInp);

searchCat.addEventListener("change", () => {
    let selectedValue = searchCat.value;

    if (selectedValue === "RegNr") {
        console.log("RegNr");
        searchBtn.innerHTML=`<i class="fa-solid fa-magnifying-glass ii"></i>`;
    }
    if (selectedValue === "Namn") {
        console.log("RegNr");
        searchBtn.innerHTML=`<i class="fa-solid fa-id-card ii"></i>`;
        
    }
    if (selectedValue === "Bil") {
        console.log("Bil");
        searchBtn.innerHTML=`<i class="fa-solid fa-car ii"></i>`;
        
    }
});

