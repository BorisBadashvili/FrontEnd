function btnFnc() {
    let randomNumber = Math.floor((Math.random() * 20)) + 1

    let box = document.querySelector(`#id${randomNumber}`);
    if(box.style.backgroundColor == '') {
        box.style.backgroundColor = "green";
    } else if(box.style.backgroundColor == "green") {
        box.style.backgroundColor = "blue ";
    } else if (box.style.backgroundColor == "blue") {
        box.style.backgroundColor = "purple"; 
    } else if(box.style.backgroundColor == "purple"){
        box.style.backgroundColor = '';
    }
}

btn.addEventListener('click', btnFnc);