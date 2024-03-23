function clock() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let end = "AM";

    if(hours>12){
        hours = "0"+hours%12;
        end = "PM";
    }
    else if(hours<12){
        hours = "0" + hours;
    }

    if(minutes<10){
        minutes = "0"+minutes; 
    }

    if(seconds<10){
        seconds = "0"+seconds; 
    }

    document.getElementById("clock").textContent = hours + " : " + minutes + " : " + seconds +" "+ end;

}

setInterval(clock,1000);