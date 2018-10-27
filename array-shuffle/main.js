let myArr = [];

for (let i = 0; i < 150; i++) {
    myArr.push(i)
}

let markup = function (arr) {
    arr.forEach(element => {
        let myElement = document.createElement("div");
        myElement.textContent = element;
        myElement.className = "myClass"
        myElement.addEventListener("click", remove)
        wrapper.appendChild(myElement);
    });
}

markup(myArr);

function remove(e) {
    let index = parseInt(e.target.textContent);
    numsArr.splice(index, 1);
    wrapper.innerHTML = "";
    markup(myArr);
}

function ascendNums(e) {
    myArr.sort(function (a, b) {
        return a - b;
    });
    wrapper.innerHTML = "";
    markup(myArr);
}

function descendNums(e) {
    myArr.sort(function (a, b) {
        return b - a;
    });
    wrapper.innerHTML = "";
    markup(myArr);
}

function shuffleNums(e) {
    wrapper.innerHTML = "";
    for (let i = 0; i < 150; i++) {
        randomNum = Math.floor(Math.random() * 150);
        [myArr[i], myArr[randomNum]] = [myArr[randomNum], myArr[i]];
    }
    markup(myArr);
    console.log("hello");
}

ascending.addEventListener("click", ascendNums);
descending.addEventListener("click", descendNums);
shuffle.addEventListener("click", shuffleNums);