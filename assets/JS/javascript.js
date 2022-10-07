var currentDayEL = $("#currentDay")
var textInfo = document.querySelector('textarea')

currentDayEL.text(moment().format("dddd, MMMM Do YYYY"))
setInterval(function (){
    currentDayEL.text(moment().format("dddd, MMMM Do YYYY"))
}, 1000)

$('.saveBtn').click(function(){
    var hr13 = document.getElementById("1").value;
    localStorage.setItem('text1', hr13)
    var hr12 = document.getElementById("12").value;
    localStorage.setItem('text12', hr12)
    var hr11 = document.getElementById("11").value;
    localStorage.setItem('text11', hr11)
    var hr10 = document.getElementById("10").value;
    localStorage.setItem('text10', hr10)
    var hr9 = document.getElementById("9").value;
    localStorage.setItem('text9', hr9)
})

var savedhr13 = localStorage.getItem("text1");
document.getElementById("1").value = savedhr13;

var savedhr12 = localStorage.getItem("text12");
document.getElementById("12").value = savedhr12;

var savedhr11 = localStorage.getItem("text11");
document.getElementById("11").value = savedhr11;

var savedhr10 = localStorage.getItem("text10");
document.getElementById("10").value = savedhr10;

var savedhr9 = localStorage.getItem("text9");
document.getElementById("9").value = savedhr9;