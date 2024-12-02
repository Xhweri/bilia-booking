let container=document.querySelectorAll(".content");
let extrainf=document.querySelectorAll(".extraInf");
extrainf.forEach(element=>{
    element.addEventListener("click",()=>{
        console.log("hej");
    })
})

let penEd=document.querySelectorAll(".penEd");
    penEd.forEach(element=>{
        element.addEventListener("click",()=>{
            console.log("hej");
        })
    });

let statElements = document.querySelectorAll(".status");

statElements.forEach(element => {
    let parentContent = document.querySelector(".content");
    element.addEventListener("click", () => {
        console.log("status ändrad");
        if(element.textContent==="-"){
            element.textContent="M";
            element.style.backgroundColor="#086600"
        }
        else if(element.textContent==="M"){
            element.textContent="P";
            element.style.backgroundColor="#0055ff"
        }
        else if(element.textContent==="P"){
            element.textContent="K";
            element.style.backgroundColor="#ffd000"
        }
        else if(element.textContent==="K"){
            element.textContent="U";
            element.style.backgroundColor="#cda34f"
        }
        else if(element.textContent==="U"){
            element.textContent="FU";
            element.style="width: auto";
            element.style.backgroundColor="#52064c";
            if (!element.querySelector(".pEl")) {
                let avikDiv = document.createElement("i"); // Create <i> element
                avikDiv.classList.add("pEl", "fa-regular", "fa-file"); // Add relevant classes
                element.appendChild(avikDiv); // Append to the clicked element
            }
        }
        else if(element.textContent==="FU"){
            //alert("Du ändrade status från Utlämnad till ingen alls")
            element.textContent="-";
            element.style="width: 2rem"
            let icon = element.querySelector(".pEl");
            if (icon) icon.remove();
        }
    });
});
