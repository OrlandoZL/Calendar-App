var currentDayEL = $("#currentDay")

currentDayEL.text(moment().format("dddd, MMMM Do YYYY"))
setInterval(function (){
    currentDayEL.text(moment().format("dddd, MMMM Do YYYY"))
}, 1000);

//stores the plans in localstorage
$('.saveBtn').click(function(){
    var hr21 = document.getElementById("21").value;
    localStorage.setItem('text21', hr21)
    var hr17 = document.getElementById("17").value;
    localStorage.setItem('text17', hr17)
    var hr16 = document.getElementById("16").value;
    localStorage.setItem('text16', hr16)
    var hr15 = document.getElementById("15").value;
    localStorage.setItem('text15', hr15)
    var hr14 = document.getElementById("14").value;
    localStorage.setItem('text14', hr14)
    var hr13 = document.getElementById("13").value;
    localStorage.setItem('text13', hr13)
    var hr12 = document.getElementById("12").value;
    localStorage.setItem('text12', hr12)
    var hr11 = document.getElementById("11").value;
    localStorage.setItem('text11', hr11)
    var hr10 = document.getElementById("10").value;
    localStorage.setItem('text10', hr10)
    var hr9 = document.getElementById("9").value;
    localStorage.setItem('text9', hr9)
});

//displays the saved localstorage plans
var savedhr21 = localStorage.getItem("text21");
document.getElementById("21").value = savedhr21;

var savedhr17 = localStorage.getItem("text17");
document.getElementById("17").value = savedhr17;

var savedhr16 = localStorage.getItem("text16");
document.getElementById("16").value = savedhr16;

var savedhr15 = localStorage.getItem("text15");
document.getElementById("15").value = savedhr15;

var savedhr14 = localStorage.getItem("text14");
document.getElementById("14").value = savedhr14;

var savedhr13 = localStorage.getItem("text13");
document.getElementById("13").value = savedhr13;

var savedhr12 = localStorage.getItem("text12");
document.getElementById("12").value = savedhr12;

var savedhr11 = localStorage.getItem("text11");
document.getElementById("11").value = savedhr11;

var savedhr10 = localStorage.getItem("text10");
document.getElementById("10").value = savedhr10;

var savedhr9 = localStorage.getItem("text9");
document.getElementById("9").value = savedhr9;

for (var i=9; i<18; i++){
    if (i < currentHour) {
        document.getElementById(i.toString()).classList.add("past");
    }
    else if (i === currentHour) {
        document.getElementById(i.toString()).classList.add("present");
    }
    else if (i > currentHour) {
        document.getElementById(i.toString()).classList.add("future");
    }
}