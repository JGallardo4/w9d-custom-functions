// Functions

function function1(n1, n2) {
    var sum = n1 + n2;
    var result = sum * 5;
    return result;
}

function function2(string) {
    return string.length > 10 ? true : false;
}

function function3(string_array) {
    var result = "";

    for (let index = 0; index < string_array.length; index++) {
        const element = string_array[index];
        if (element.startsWith("ph")) {
            result = element;
            break;
        }
    }

    return result;
}

// Tests

console.log(function1(4, 7));
console.log(function1(10, 2));
console.log(function1(1, 0));

console.log(function2("fun"));
console.log(function2("applicable"));
console.log(function2("Antidisestablishmentarianism"));

console.log(function3(["phone", "elephant", "joy"]));
console.log(function3(["animal", "phone", "joy"]));
console.log(function3([" phoney", "joy", "phone"]));