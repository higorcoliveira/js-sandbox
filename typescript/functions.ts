function add(a: number, b: number) {
    return a + b;
}

let result = add(1, 2);
console.log(result);

function addVarargs(a: number, b: number, c?: number) { // optional argument, can be assign a value as well (c = 0)
    return a + b + c;
}

let result2 = addVarargs(1, 2, 3);
console.log(result2);
