enum DayOfTheWeek {
    SUN, MON, TUE, WED, THU, FRI, SAT
}

let day: DayOfTheWeek;
day = DayOfTheWeek.MON;

if (day === DayOfTheWeek.MON) {
    console.log('Go to work!');
}