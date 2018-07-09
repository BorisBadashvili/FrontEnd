// Date Object

let myDates = [ new Date("2018-04-30"), new Date("2018-05-02") ];

function getNextStudyDate(date) {
    var tomorrow = new Date();
    tomorrow.setDate(date.getDate()+2);

    if([1, 3, 5, 6].indexOf(tomorrow.getDay()) !== -1) {
        return tomorrow
    }
    else {
        return getNextStudyDate(tomorrow)
    }
}

//  addDay Button function

function addDay() {

    
    
    for(k = 0; k < 10; k++){
        let div = document.createElement("div");
        div.style.background = "red"
        div.style.color = "white"
        div.style.width = "20px"
        div.style.height = "20px"
        div.style.margin = "0.5px"
        div.style.textAlign = "center"
        div.style.borderRadius = "6px"
        div.setAttribute("class", "studentGrades");
        
        div.innerHTML = "0"
        
        document.querySelector("#container3").appendChild(div)
    }
        let dateDiv = document.createElement("div");
        dateDiv.setAttribute("id", "dateDiv");
        dateDiv.style.background = "green"
        dateDiv.style.color = "white"
        dateDiv.style.width = "20px"
        dateDiv.style.height = "20px"
        dateDiv.style.margin = "0.5px"
        dateDiv.style.textAlign = "center"
        dateDiv.style.borderRadius = "6px"

        dateDiv.innerHTML = "date"

        document.querySelector("#container3").appendChild(dateDiv)

    }
    
document.getElementById("add").addEventListener("click", addDay);


// removeDay Button function

function removeDay() {

    for(let j = 0; j < 11 ; j++){

        let removeDay = document.querySelector('.studentGrades');
        removeDay.parentNode.removeChild(removeDay);
}}

function removeDate() {
    let removeDate = document.getElementById('#dateDiv');
    removeDate.parentNode.removeChild(removeDate);
}

document.getElementById("remove").addEventListener("click", removeDay, removeDate)