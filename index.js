// Write your solution here!
const cats = [
    "Milo", 
    "Otis",
    "Garfield"
];

function destructivelyAppendCat(name) {
    cats.splice(3,0,name);
};

console.log(destructivelyAppendCat(Ralph));

function destructivelyPrependCat(name) {
    cats.splice(0,0,name);
};

console.log(destructivelyPrependCat(Bob));

function destructivelyRemoveLastCat() {
    cats.splice(2,1)
};

function destructivelyRemoveFirstCat() {
    cats.splice(0,1)
};

function appendCat(name) {
    const newCats = [...cats, name]
    return newCats;
};

console.log(appendCat("Milo"));

function prependCat(name) {
    const newCats1 = [name, ...cats]
    return newCats1;
};

console.log(appendCat("Gus"));

function removeLastCat() {
    const oneLessCat = cats.slice(0, cats.length -1);
    return oneLessCat;
};

function removeFirstCat() {
    const oneLessCat1 = cats.slice(1);
    return oneLessCat1;
};







