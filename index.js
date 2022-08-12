const cats = [
    "Milo",
    "Otis",
    "Garfield"
];

function destructivelyAppendCat() {
    return cats.push("Ralph");
}

function destructivelyPrependCat() {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    return cats.pop("Garfield");
}

function destructivelyRemoveFirstCat() {
    return cats.shift("Milo");
}

function appendCat() {
    let copycats = [...cats, "Broom"];
    return copycats;
}

function prependCat() {
    let copycats = ["Arnold", ...cats];
    return copycats;
}

function removeLastCat() {
    let copycats = cats.slice(0, cats.length -1);
    return copycats;
}

function removeFirstCat() {
    let copycats = cats.slice(1);
    return copycats;
}