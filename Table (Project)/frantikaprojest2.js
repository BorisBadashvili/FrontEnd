// let containerdiv = document.querySelector(".students");

// // Creating new column in Table.
// for (let j = 0; j < 10; j++) {
    //     var div = document.createElement("div");
    //     div.textContent = "0" ;
    //     containerdiv.appendChild(div);
    //     div.setAttribute("className", "grades")
    // }
    
    // gradesdiv.style.background = "red";
    // div.style.color = "white";
    // div.style.textAlign = "center";
    
    // document.getElementById("average").style.color = "green";
    





    // function renderStudentList(students) {
    //     let html = createStudentNamesList(students)
    //     let div = document.createElement('div');
    //     div.innerHTML = html;
    //     document.getElementById('studentsList').appendChild(div);
    // }





// tarigis obieqti ---
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


// იქმნება students მასივი, რომელშიც იქნებიან მოთავსებული სტუდენტები ობიექტის სახით,ობიექტებს შიგნით ექნებათ property names || grades     
// ხოლო value-კი იქნება "jemali" || grades: [3,2] - ანუ value-ში კიდევ  1 მასივი.
let students = [{ 
    name: "jemali", 
    grades: [3, 2]
}, {
    name: "otari",
    grades: [4, 5]
},{
    name: "oto", 
    grades: [5, 4]
},{
    name: "naruto",
    grades: [1, 6]
},{
    name: "sasuke", 
    grades: [2, 8]
},{
    name: "borisi", 
    grades: [3, 6]
},{
    name: "jano",
     grades: [1, 4]
},{
    name: "jemali21",
    grades: [7, 6]
}];

function createStudentNamesList(students) {
    let html = ''
    for(let i in students) {
        let student = students[i]
        html += '<li class="studentEntry">' + student["name"] + '</li>'
    }
    return "<ol>" + html + "</ol>";
}




window.onload = function(){
    renderStudentTable(students, myDates)
}

function createStudentTable(students, dates) {
    let html = '<tr> <td></td> <td>Average</td>';
    for (let j in dates) {
        let date = dates[j];
        html += "<td>" + date.getDate() + "-" + (date.getMonth() + 1) + "</td>"
    }
    html += "</tr>"
    for(let j in students) {
        let student = students[j]
    html += "<tr><td>" + student.name + "</td>" 
    html += "<td>" + calculateAvg(student.grades) + "</td>"
    for (let k in student.grades) {
        let studentGrade = student.grades[k]
        html += "<td>" + studentGrade + "</td>"
    }
    html += "</tr>"
    }
    return "<table>" + html + "</table>"
}



function renderStudentTable (students, dates) {
    let html = createStudentTable(students, dates)
    let div = document.createElement('div');
    div.innerHTML = html;
    document.getElementById('studentsList').appendChild(div);
}














function calculateAvg(array) {
    let sum = 0
    for(let i in array) {
        sum += array[i]
    }
    return sum / array.length 
}






