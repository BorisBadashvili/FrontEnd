let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let a = 0;
let b = 0;
let totalDays = a;

document.getElementById("removeDay").disabled = true;


let params = {
    grandParentSelector: ".table",

    parentTagName: "div",
    pAttName: "id",
    pAttValue: "trainingDay ",

    elementTagName: "div",
    attName: "id",
    attValue: "student_TrnDay_",
    count: 16,
}

document.getElementById("addDaybutton").addEventListener("click", function () {

    a++;

    //#region date 

    if (a % 4 == 1 || a % 4 == 2 || a % 4 == 3) {
        b += 2;
    }

    else if (a % 4 == 0) {
        b++;
    }

    let apr = new Date(2018, 3, 28 + b, )
    let day = days[apr.getDay()];
    let date = apr.getDate();
    let month = months[apr.getMonth()];
    let newdate = day + " </br> " + month + " " + date;


    //#endregion 


    function addingColumn(arg) {

        let grandParentClass = document.querySelector(arg.grandParentSelector);
        let parentNode = document.createElement(arg.parentTagName);

        grandParentClass.appendChild(parentNode).setAttribute(arg.pAttName, arg.pAttValue + a);


        for (let i = 0; i < arg.count; i++) {

            let parentId = document.querySelector(".table").lastElementChild;
            let elementNode = document.createElement(arg.elementTagName);
            let elementText = document.createTextNode("0");
            parentId.appendChild(elementNode).setAttribute(arg.attName, arg.attValue + i + "_" + a);
            elementNode.setAttribute("onclick", "averageFunc(this, Number(prompt('Please, enter number here')))");
            elementNode.style.background = "red"
            elementNode.appendChild(elementText);
        }

        document.getElementById(arg.pAttValue + a).firstChild.innerHTML = newdate;
        document.getElementById(arg.pAttValue + a).firstChild.style.background = "silver";
        document.getElementById("totalDays").innerHTML = "Total Days &emsp;&emsp;&emsp;" + a;

    }
    addingColumn(params);


    document.getElementById("removeDay").disabled = false;

});

document.getElementById("removeDay").addEventListener("click", function () {
    if (a > 0) {
        // Removes an element from the document
        if (a % 4 == 1 || a % 4 == 2 || a % 4 == 3) {
            b -= 2;
        }

        else if (a % 4 == 0) {
            b--;
        }

        a--;
        let element = document.querySelector(".table").lastElementChild;
        element.parentNode.removeChild(element);
        document.getElementById("totalDays").innerHTML = "Total Days &emsp;&emsp;&emsp;" + a;
    }
    if (a == 0) {
        document.getElementById("removeDay").disabled = true;
    }
});

function averageFunc(elmnt, todaysResult) {
    if (todaysResult > 5) {
        elmnt.innerHTML = 5;
        elmnt.style.background = "green";

        // if students result for current day is from 0, till 5, write rounded result.
    } else if (todaysResult <= 5 && todaysResult >= 0) {
        elmnt.innerHTML = (Math.round(todaysResult));
        elmnt.style.background = "green";

    }
    //if students result for current day is belou 0, write 0. 
    else {
        elmnt.innerHTML = 0;
    }

    missedLesson = 0;

    for (let k = 1; k <= 15; k++) {
        let sum = 0;
        let average = 0;
        for (let j = 1; j <= a; j++) {

            sum += Number(document.getElementById("student_TrnDay_" + k + "_" + j).innerHTML);
            average = sum / j;
            document.getElementById("av" + k).innerHTML = parseFloat(Math.round(average * 10) / 10);

            if (Number(document.getElementById("student_TrnDay_" + k + "_" + j).innerHTML) == 0) {
                missedLesson++;
            }

        }
    }
    document.getElementById("missedLessons").innerHTML = "Missed Lessons &emsp;" + missedLesson;


    let sumAverage = 0;
    for (let v = 1; v <= 15; v++) {
        sumAverage += Number(document.getElementById("av" + v).innerHTML)
        averageAverage = parseFloat(Math.round((sumAverage / 15) * 100) / 100);
    }

    document.getElementById("averageMark").innerHTML = "Average Mark  &emsp; &nbsp;" + averageAverage;


}


document.getElementById("update").addEventListener("click", function () {
    missedLesson = 0;

    for (let k = 1; k <= 15; k++) {
        let sum = 0;
        let average = 0;
        for (let j = 1; j <= a; j++) {

            sum += Number(document.getElementById("student_TrnDay_" + k + "_" + j).innerHTML);
            average = sum / j;
            document.getElementById("av" + k).innerHTML = parseFloat(Math.round(average * 10) / 10);

            if (Number(document.getElementById("student_TrnDay_" + k + "_" + j).innerHTML) == 0) {
                missedLesson++;
            }

        }
    }
    document.getElementById("missedLessons").innerHTML = "Missed Lessons &emsp;" + missedLesson;


    let sumAverage = 0;
    for (let v = 1; v <= 15; v++) {
        sumAverage += Number(document.getElementById("av" + v).innerHTML)
        averageAverage = parseFloat(Math.round((sumAverage / 15) * 100) / 100);
    }

    document.getElementById("averageMark").innerHTML = "Average Mark  &emsp; &nbsp;" + averageAverage;


});


// document.getElementById("averageMark").innerHTML = "Average Mark  &emsp; &nbsp;" + averageAverage;
// console.log(averageAverage);
// console.log(missedLesson);
// document.getElementById("missedLessons").innerHTML = "Missed Lessons &emsp;" + missedLesson;
