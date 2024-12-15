document.addEventListener("DOMContentLoaded", () => {
    const pie = document.getElementById("pie");
  //Dessa värden hämtas från en databas istället
    const data = {
      sommar: 400, // Summer wheels
      vinter: 50, // Winter wheels
      allAround: 30, // All-around wheels
    };
  
    const total = data.sommar + data.vinter + data.allAround;
  
    // Alla set varandra delat på två gånger 
    let sommarPercent = (data.sommar / total) * 100;
    let vinterPercent = (data.vinter / total) * 100;
    let allAroundPercent = (data.allAround / total) * 100;
  
    let currentPercent = 0;
    const targetPercent = [
      sommarPercent,
      sommarPercent + vinterPercent,
      sommarPercent + vinterPercent + allAroundPercent,
    ];
  

    const animatePie = () => {
      if (currentPercent <= 100) {
        const currentSommar = Math.min(currentPercent, targetPercent[0]);
        const currentVinter = Math.min(currentPercent, targetPercent[1]);
        const currentAllAround = Math.min(currentPercent, targetPercent[2]);
  
        pie.style.background = `
          conic-gradient(
            rgb(245, 188, 84) ${currentSommar}%,
            rgb(28, 97, 150) ${currentSommar}% ${currentVinter}%,
            rgb(19, 169, 52) ${currentVinter}% ${currentAllAround}%
          )
        `;
  
        currentPercent++;
        requestAnimationFrame(animatePie);
        
      }
    };
  
    
    animatePie();
    pie.addEventListener("mouseover",(e)=>{
        let xMouse=e.clientX;
        let yMouse=e.clientY;
        console.log(xMouse, yMouse);

        if(xMouse===pie.style.backgroundColor==="red"){
            console.log("hej");
        }
    })
    pie.addEventListener("mouseleave",()=>{
    
      
    })
  });
  
