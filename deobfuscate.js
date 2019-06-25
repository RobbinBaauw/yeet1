mapToBase42 = (i) =>
    new Array(10)
        .fill(1)
        .map((_, i) => String.fromCharCode(48 + i))
        .concat(
            new Array(26)
                .fill(1)
                .map((_, i) => String.fromCharCode(97 + i))
                .concat(
                    new Array(30)
                        .fill(1)
                        .map((_, i) => String.fromCharCode(65 + i))
                )
        )
        .join("")[i];

number = "0";
setNumber = (nr) => {
    number = nr;

    nr.endsWith("vvm") && number[0] == 5 ? number = "666:)" : 4;

    console.log("New number: " + nr);
    console.trace();
    return nr;
};

logStr = (str) => {
    console.log(str);
};

regex = () => {
    startsWith2xx = /2(.{2}a.*)/.test(number);
    if (startsWith2xx) {
        setNumber(number.replace(/2(.{2}a.*)/,'3$1'))
    }
};

doSomething = (a, b) => {

    regex();

    let startsWith0j = number[0] == "0" && number[1] == "j";
    if (startsWith0j) {
        setNumber("1" + number.slice(1))
    }

    let numberStartsWith1x3 = number[0] == "1" && number[2] == "3";
    if (numberStartsWith1x3) {
        setNumber("2" + number.slice(1))
    }

    regex();

    logStr("Result part: " + a);

    return NaN
};

// Numbers to convert to base42 (in order)
res = [];

a = process.argv[2];

// Iterates the amount of times needed to fill the res array
// This res array wil contain all the numbers that will be converted to base42 later on (in order)
// These numbers will then be +'d to each other to return the result
while (a != 0) {
    r = a % 42;

    a = +("" + (a / 42)).split(".")[0];
    res.push(mapToBase42(r));
    logStr(res)
}

for (;;) {
    logStr("nr: " + number);

    // Amount of parts obtained by splitting on 4 is the same as the length of the number
    // Length > 1
    // Last char is 3
    if (number.split("4").length == number.length && number.length > 1 && number[number.length - 1] == "3") {
        setNumber("5".repeat(number.length))
    }

    // Removes last item
    let pp = res.pop();

    setNumber(number + pp);

    doSomething(pp);

    // If starts with 3
    // And 5th char is 8
    if (number[0] == 3 && number[4] == "8") {
        setNumber("4".repeat(number.length))
    }

    if (number[0] == 6) {
        let s = doSomething("\nGood job! You found the flag!\n");
        process.exit(42.42);
    }
    if (!res.length) {
        let b = doSomething("\n");
        process.exit(b);
    }
}
