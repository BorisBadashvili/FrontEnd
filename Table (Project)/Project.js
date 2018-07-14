// Date Object
// let myDate = new Date(2018, 3, 30)
// console.log(myDate)
// let dateNumber = myDate.getDate()
// let monthNumber = myDate.getMonth()
// let dayNumber = myDate.getDay()
// let newdate = dateNumber + "</br>" + monthNumber + "</br>" + dayNumber
// Month number into Month Name


// function monthNumberToMonthNumes(monthNumber) {

//     var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     return monthNames[monthNumber];
// }
// function weekNumberToWeekName(dayNumber) {
//     var weekDay = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
//     return weekDay[dayNumber];
// }

//  addDay Button function  

function addDay() {
    
    // For loop to create 10 div elements. (For Grades)
    
    for (k = 1; k < 11; k++) {
        let div = document.createElement("div");
        div.setAttribute("class", "studentGrades")
        div.className += " sgID" + k
        div.setAttribute("onclick", "userInput(this, Number(prompt('Please, enter number here')))");
        div.innerHTML = "0"
        document.querySelector("#container3").appendChild(div)
    }
    // Creates 1 div element. (For Date)
    let dateDiv = document.createElement("div");
    dateDiv.setAttribute("class", "dateDiv");

    dateDiv.innerHTML = "sup"

    document.querySelector("#container3").appendChild(dateDiv)
    averageGrade()

}
document.getElementById("add").addEventListener("click", addDay); // eventListener for AddDay Button, Calls addDay function.

// addDay function --- END ---

// removeDay Button function

function removeDay() {
    // Delets div which contains (date div - greenbox)
    let removeDate = document.querySelector(".dateDiv:last-child")
    removeDate.parentNode.removeChild(removeDate)

    // Looping through all 10 div (grades - redbox) elements to delete them.
    for (let j = 0; j < 10; j++) {
        let removeDay = document.querySelector('.studentGrades:last-child')
        removeDay.parentNode.removeChild(removeDay);
    }

}
document.getElementById("remove").addEventListener("click", removeDay) //eventListener for removeDay button, Calls removeDay function.

//removeDay Button function --- END ---


// Function for userInput, changes color if number is inputed also, rounds and binds numbers to certain logic. (0.5 = 1... etc.)
function userInput(userInputDiv, todaysResult) {
    if (todaysResult > 5) {
        userInputDiv.innerHTML = 5;
        userInputDiv.style.background = "darkblue";

    } else if (todaysResult <= 5 && todaysResult >= 0) {
        userInputDiv.innerHTML = (Math.round(todaysResult));
        userInputDiv.style.background = "darkblue";

    }
    else {
        userInputDiv.innerHTML = 0;
    }

    averageGrade()
}
// --- END --- Of userInput function.

// Creating function averageGrade --- calculates totaldays by looping through .dateDiv (green box), Takes .average as an array.

function averageGrade() {
    let totalDays = document.querySelectorAll(".dateDiv").length
    let studentsAvg = Array.from(document.querySelectorAll(".average"))

    for (let j = 0; j < studentsAvg.length; j++) {
        let grades = Array.from(document.querySelectorAll(".sgID" + (j + 1)))
        let sum = 0
        for (let z = 0; z < totalDays; z++) {
            sum += Number(grades[z].textContent)
        }
        studentsAvg[studentsAvg.length - j - 1].textContent = (sum / totalDays).toFixed(2)
    }
}

// --- END --- averageGrade function --- END ---

// Statistics - totalDays.

    function statTotalDays() { // This function creates SPAN pushes content into it.
    let spanTdays = document.createElement("span")
    document.querySelector(".totalDays").appendChild(spanTdays)
    spanTdays.setAttribute("id", "spanTdays")

    let statisticsTotalDay = Number(document.querySelectorAll(".dateDiv").length) // Calculates how much .dateDiv-s are there and throws a number into a previously created SPAN.
    document.querySelector("#spanTdays").innerHTML = statisticsTotalDay

}
setInterval(statTotalDays, 100);

//--- END --- Statistics - totalDays --- END ---



//  Statistics - Missed Lessons

// function missedLessons() {
//     debugger;
    
//     {
//         let mLessons = 0
//         mLessons++;

//         let missedLessonSpan = document.createElement("span")
//         document.querySelector(".missedLessons").appendChild(missedLessonSpan)
//         spanTdays.setAttribute("id", "missedLessonSpan")
//         document.querySelector("#missedLessonSpan").innerHTML = mLessons;
//         let sum = 0;
//         sum + 1;
//         } 
// } 
// setInterval(missedLessons, 100);

// --- END --- Statistics - Missed Lessons --- END ---
