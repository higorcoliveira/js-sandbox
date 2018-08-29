var DayOfTheWeek;
(function (DayOfTheWeek) {
    DayOfTheWeek[DayOfTheWeek["SUN"] = 0] = "SUN";
    DayOfTheWeek[DayOfTheWeek["MON"] = 1] = "MON";
    DayOfTheWeek[DayOfTheWeek["TUE"] = 2] = "TUE";
    DayOfTheWeek[DayOfTheWeek["WED"] = 3] = "WED";
    DayOfTheWeek[DayOfTheWeek["THU"] = 4] = "THU";
    DayOfTheWeek[DayOfTheWeek["FRI"] = 5] = "FRI";
    DayOfTheWeek[DayOfTheWeek["SAT"] = 6] = "SAT";
})(DayOfTheWeek || (DayOfTheWeek = {}));
var day;
day = DayOfTheWeek.MON;
if (day === DayOfTheWeek.MON) {
    console.log('Go to work!');
}
