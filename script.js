// days of the week
const dayOfWeek = ['Mon', ' Tue', 'Wed', ' Thu', 'Fri', 'Sat', 'Sun'];

//the digital clock function
function digitalClock(){
    let date = new Date();
    let day = date.getDay();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    //changing the time of day to AM or PM
    if (hours > 12) {
    hours = hours - 12;
    document.querySelector('.AM-PM').innerHTML = 'PM';
    }else{
     document.querySelector('.AM-PM').innerHTML = 'AM';
    }

    //making the numbers double digits
    hours = hours < 10? `0` + hours: hours;
    mins  = mins  < 10? `0` + mins: mins;
    secs  = secs  < 10? `0` + secs: secs;

    //displaying the current day and time.bottom
    document.querySelector('.day').innerHTML = dayOfWeek[day];
    document.querySelector('.hour').innerHTML = hours;
    document.querySelector('.minute').innerHTML = mins;
    document.querySelector('.seconds').innerHTML = secs;

    //to make the clock refresh after every second.
    requestAnimationFrame(digitalClock);
} 
digitalClock();