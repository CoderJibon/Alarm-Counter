
//get elements
const counterSub = document.querySelector('#counters');
const countdown = document.querySelector('#countdown');
const stopAlarm = document.querySelector('.stopAleam');
const bar       = document.querySelector('.bar');



let timeKeeper = null;

// by default
countdown.innerHTML = ` <div id="tiles">
                                    <span>0</span>
                                    <span>0</span>
                                    <span>00</span>
                                    <span>00</span>
                                </div>
                                <div class="labels">
                                    <li>Days</li>
                                    <li>Hours</li>
                                    <li>Mins</li>
                                    <li>Secs</li>
                                </div>`; 


 //audio object call
    let audio = new Audio('../audio/alarm-clock-short.mp3');                              


//submit order form 
counterSub.onsubmit = (e) => {
    e.preventDefault();

    clearInterval(timeKeeper);

    const form_value = new FormData(e.target);
    const { date, time } = Object.fromEntries(form_value.entries());
    
    if (!time || !date) {
        alert('Those Field must not be empty!');
    } else {
        e.target.reset();

        //time val
        const start_time    = Date.now();
        const end_time      = new Date(date +' '+ time);

        timeKeeper = setInterval(() => { 
            alertTime(date, time, timeKeeper, countdown, audio);
            // progress bar
            let barWidth = progressBar(start_time, end_time);

            bar.style.width = `${100 - barWidth}%`;

            if (barWidth >= 0 && barWidth <= 33) {
                bar.style.backgroundColor = "red";
            } else if (barWidth >= 34 && barWidth <= 66) {
                 bar.style.backgroundColor = "yellow";
            } else {
                 bar.style.backgroundColor = "greenyellow";
            }

            if (barWidth >= 1) {
                bar.style.display = `block`;
            }

            if (barWidth == 1) {
                bar.style.display = `none`;
            }

            console.log(100 - barWidth);
        }, 1000);
    }

}

//stop alarm 
stopAlarm.onclick = (e) => {
    e.preventDefault();
    audio.pause();
}