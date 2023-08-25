
const destDate= new Date("nov 12, 2023 00:00:00").getTime();
function countDown(){
    const currDate= new Date().getTime();
    var diff= destDate- currDate;

    var days = Math.floor(diff/(1000*60*60*24));
    var hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((diff%(1000*60*60))/(1000*60));
    var seconds = Math.floor((diff%(1000*60))/1000);

    document.getElementById("days").innerHTML= days;
    document.getElementById("hours").innerHTML= formatTime(hours);
    document.getElementById("min").innerHTML= formatTime(minutes);
    document.getElementById("sec").innerHTML= formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? ('0'+ time) : time;
}

countDown();

setInterval(countDown, 1000);