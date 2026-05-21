/* =========================
   DIGITAL CLOCK
========================= */

// Function for clock

function updateClock() {

    // Current Time
    let now = new Date();

    // Get Time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Show Time
    document.getElementById("clock").innerHTML =
        `${hours}:${minutes}:${seconds}`;

    // Show Date
    document.getElementById("date").innerHTML =
        now.toDateString();
}

// Run every second
setInterval(updateClock, 1000);

// Initial Run
updateClock();


/* =========================
   STOPWATCH
========================= */

let hr = 0;
let min = 0;
let sec = 0;

let timer = null;

// Stopwatch function

function stopwatch() {

    sec++;

    // Convert seconds
    if (sec == 60) {

        sec = 0;
        min++;
    }

    // Convert minutes
    if (min == 60) {

        min = 0;
        hr++;
    }

    // Format
    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;

    // Display
    document.getElementById("stopwatch").innerHTML =
        `${h}:${m}:${s}`;
}

/* =========================
   START BUTTON
========================= */

document.getElementById("startBtn")
    .addEventListener("click", function () {

        if (timer !== null) {

            clearInterval(timer);
        }

        timer = setInterval(stopwatch, 1000);
    });

/* =========================
   PAUSE BUTTON
========================= */

document.getElementById("pauseBtn")
    .addEventListener("click", function () {

        clearInterval(timer);
    });

/* =========================
   RESET BUTTON
========================= */

document.getElementById("resetBtn")
    .addEventListener("click", function () {

        clearInterval(timer);

        hr = 0;
        min = 0;
        sec = 0;

        document.getElementById("stopwatch").innerHTML =
            "00:00:00";
    });
