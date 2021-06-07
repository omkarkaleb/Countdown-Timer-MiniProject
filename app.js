days1 = document.getElementById("days");
hours1 = document.getElementById("hours");
minutes1 = document.getElementById("minutes");
seconds1 = document.getElementById("seconds");


const diwali = '24 Nov 2021';

function countdown(){
    const diwalidate = new Date(diwali);
    const currentdate = new Date();

    const totalseconds = (diwalidate - currentdate) / 1000;
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600) % 24;
    const minutes = (Math.floor(totalseconds/60) % 24)%60;
    const seconds = Math.floor(totalseconds)%60
    console.log(days, hours, minutes, seconds);

    days1.innerHTML = formattime(days);
    hours1.innerHTML = formattime(hours);
    minutes1.innerHTML = formattime(minutes);
    seconds1.innerHTML = formattime(seconds);
}

function formattime(time){
    if (time<10){
        return "0"+time;
    }else {
        return time;
    }
}

countdown();

setInterval(countdown, 1000)

