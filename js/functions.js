//alert time
alertTime = (date, time, timeKeeper, countdown, audio) => {
    
        //timestamps
            const start_time    = Date.now();
            const end_time      = new Date(date +' '+ time);
            const alert_time    = Math.floor(Math.abs(end_time.getTime() - start_time));

        //get val form time
            const total_sec     = Math.floor(alert_time / 1000);
            const total_min     = Math.floor(total_sec / 60);
            const total_hour    = Math.floor(total_min / 60);
            const total_day     = Math.floor(total_hour / 24);
           

            const hour = total_hour - (total_day * 24);
            const min  = total_min - (total_day * 24 * 60) - (hour * 60) ;
            const sec  = total_sec - (total_day * 24 * 60 * 60) - (hour * 60 * 60) - (min * 60) ;
            
        //clear time
        if (total_sec <= 0) {
            clearInterval(timeKeeper);
            audio.play();
        }
    
    
         countdown.innerHTML = ` <div id="tiles">
                                    <span>${total_day}</span>
                                    <span>${hour}</span>
                                    <span>${min}</span>
                                    <span>${sec}</span>
                                </div>
                                <div class="labels">
                                    <li>Days</li>
                                    <li>Hours</li>
                                    <li>Mins</li>
                                    <li>Secs</li>
                                </div>`;
    
 
}

// progress bar

const progressBar = (start_time, end_time) => {

    const duration = end_time.getTime() - start_time;

    const timeChange = end_time - Date.now();

    return Math.floor((100 * timeChange) / duration);
    
}