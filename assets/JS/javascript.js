var currentDayEL = $("#currentDay")

currentDayEL.text(moment().format("dddd, MMMM Do YYYY"))
setInterval(function (){
    currentDayEL.text(moment().format("dddd, MMMM Do YYYY"))
}, 1000)