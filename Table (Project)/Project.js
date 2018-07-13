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
        userInputDiv.innerHTML = 10;
    }

    averageGrade()
}

// averageGrade calculates 

function averageGrade() {
debugger;
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

// removeDay Button function

function removeDay() {

    for (let j = 0; j < 10; j++) {
        let removeDay = document.querySelector('.studentGrades');
        removeDay.parentNode.removeChild(removeDay);
    }
    let removeDate = document.querySelector(".dateDiv")
    removeDate.parentNode.removeChild(removeDate)
}
document.getElementById("remove").addEventListener("click", removeDay)