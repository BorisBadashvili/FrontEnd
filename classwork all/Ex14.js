let borka = {name: 'boris', age: 22}
let mari = {name: 'mari', age: 27}
let gio = {name: 'gio', age: 30}

let users = [borka, mari, gio]

function sortByName(arr) {
    arr.sort((a, b) => a.name > b.name);
}