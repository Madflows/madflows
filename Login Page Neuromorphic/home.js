let time = prompt("Enter The Time", "0 - 23");
if (time == 1 || time == 2 ||time == 3 ||time == 4 ||time == 5 ||time == 6 ||time == 7 ||time == 8 ||time == 9 ||time == 10 ||time == 11) {
    alert("Good Morning");
} else if (time == 12 || time == 13 || time == 14 || time == 15) {
    alert("Good Afternoon");
} else if (time == 16 || time == 17 || time == 18 || time == 19) {
    alert("Good Evening");
} else if (time == 20 || time == 21 || time == 22 || time == 23 || time == 0) {
    alert("It's late already, Good-Night!");
} else {
    alert("Input a Time Between 1 - 24 Please")
}
