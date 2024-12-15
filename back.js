document.addEventListener('DOMContentLoaded', function () {
    const monthYear = document.getElementById('month-year');
    const daysContainer = document.getElementById('days');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    let currentDate = new Date();
    let today = new Date();
    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();
        monthYear.textContent = `${months[month]} ${year}`;
        daysContainer.innerHTML = '';
        
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = firstDay; i > 0; i--) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = prevMonthLastDay - i + 1;
            dayDiv.classList.add('fade');
            daysContainer.appendChild(dayDiv);
        }
       
        for (let i = 1; i <= lastDay; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayDiv.classList.add('today');
            }
            daysContainer.appendChild(dayDiv);
        }
       
        const nextMonthStartDay = 7 - new Date(year, month + 1, 0).getDay() - 1;
        for (let i = 1; i <= nextMonthStartDay; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            dayDiv.classList.add('fade');
            daysContainer.appendChild(dayDiv);
        }     
    }
    prevButton.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });
    nextButton.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });
    renderCalendar(currentDate);
});
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

document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const parent = toggle.parentElement;
            const nested = parent.querySelector('.nested');

            if (nested) {
                const isOpen = nested.style.display === 'block';
                nested.style.display = isOpen ? 'none' : 'block';
                toggle.classList.toggle('open', !isOpen);
            }
        });
    });
});