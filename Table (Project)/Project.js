// Date Object

let myDate = new Date(2018, 3, 30)
console.log(myDate)
let dateNumber = myDate.getDate()
let monthNumber = myDate.getMonth()
let dayNumber = myDate.getDay()

let newdate = dateNumber + "</br>" + monthNumber + "</br>" + dayNumber







// Month number into Month Name
function monthNumberToMonthNumes(monthNumber) { 

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 return monthNames[monthNumber];
}



// Week number into WeekDay Name

function weekNumberToWeekName(dayNumber) {
    var weekDay = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
return weekDay[dayNumber];
}



//  addDay Button function  

function addDay() {  
    
    for(k = 0; k < 10; k++){
        let div = document.createElement("div");
        div.style.background = "red"
        div.style.color = "white"
        div.style.width = "40px"
        div.style.height = "20px"
        div.style.margin = "0.5px"
        div.style.textAlign = "center"
        div.style.borderRadius = "6px"
        div.setAttribute("class", "studentGrades");
        div.setAttribute("id", "sgID")
        div.setAttribute("onclick", "averageFunc(this, Number(prompt('Please, enter number here')))");
        
        div.innerHTML = "0"
        
        document.querySelector("#container3").appendChild(div)
    }
        let dateDiv = document.createElement("div");
        dateDiv.setAttribute("id", "dateDiv");
        dateDiv.style.background = "green"
        dateDiv.style.color = "white"
        dateDiv.style.width = "40px"
        dateDiv.style.height = "20px"
        dateDiv.style.margin = "0.5px"
        dateDiv.style.textAlign = "center"
        dateDiv.style.borderRadius = "6px"
        dateDiv.style.fontSize = "0.5em"

        dateDiv.innerHTML = "sup"

        document.querySelector("#container3").appendChild(dateDiv)
    }

    document.getElementById("add").addEventListener("click", addDay);
    

    function averageFunc(oreo, todaysResult) {
        if (todaysResult > 5) {
            oreo.innerHTML = 5;
            oreo.style.background = "green";
    
            // if students result for current day is from 0, till 5, write rounded result.
        } else if (todaysResult <= 5 && todaysResult >= 0) {
            oreo.innerHTML = (Math.round(todaysResult));
            oreo.style.background = "green";
    
        }
        else {
            oreo.innerHTML = 0;
        }}


// removeDay Button function

function removeDay() {

    for(let j = 0; j < 10; j++){

        let removeDay = document.querySelector('.studentGrades');
        removeDay.parentNode.removeChild(removeDay);
}}

document.getElementById("remove").addEventListener("click", removeDay)

function removeDate() {

    let removeDate = document.querySelector("#dateDiv")
    removeDate.parentNode.removeChild(removeDate)
}

document.getElementById("remove").addEventListener("click", removeDate)


