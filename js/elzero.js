// Count Down For Events

const years = document.querySelector("#years")
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const timeUnit = document.querySelector(".events .time");
const eventStart = document.querySelector(".eventStart");

const newEventTime = new Date("March, 2029 1:28:00").getTime();

const updateCountDown = setInterval(() => {
    const currentTime = new Date();
    let diff = newEventTime - currentTime;

    let d = Math.floor(diff / 1000 / 60 / 60 / 24) % 365;
    let h = Math.floor(diff / 1000 / 60 / 60) % 24;
    let m = Math.floor(diff / 1000 / 60) % 60;
    let y = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);

    years.innerHTML = y;
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;

    if (diff < 0) {
        clearInterval(updateCountDown);
        timeUnit.style.display = "none";
        eventStart.style.display = "block";
    }

}, 1000);

// Count From Zero To Number In Stats Section

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = () => {
    if (window.scrollY >= statsSection.offsetTop - 520) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

// Scroll To Top

let arrow = document.querySelector(".up");

window.onscroll = () => {
    if (this.scrollY >= 1000) {
        arrow.classList.add("show");
    } else {
        arrow.classList.remove("show");
    }
};

arrow.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


