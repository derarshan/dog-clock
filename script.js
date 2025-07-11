    function updateClock(){

        const timeNow = new Date();
        let hours = timeNow.getHours();
        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        hours = hours.toString().padStart(2, 0);
        const mins = timeNow.getMinutes().toString().padStart(2, 0);
        const seconds = timeNow.getSeconds().toString().padStart(2, 0);
        const timeString = `${hours}:${mins}:${seconds}<span class="meridiem">${meridiem}</span>`
        document.getElementById("clock").innerHTML = timeString;

    }

    updateClock();
    setInterval(updateClock, 1000);