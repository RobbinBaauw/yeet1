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

// Numbers to convert to base42 (in order)
res = []

global["Number"] = new Proxy(
    class{},
    {
        apply:(a)=>[a],
        get:(i,j)=> {
            return {
                log: ()=> {
                    number = number.replace(/2(.{2}a.*)/,'3$1')
                },
                value:0
            }
        },
        has:(c,cc)=>(cc === "console")
    });

with (Number) {
    with (Math) {
        global["Math"] = new Proxy(() => {}, {
            get: (obj, prop) => {
                switch (prop.toString()) {
                    case "sum":
                        return (a, b) => {
                            let i = Number(a);
                            let j = Number(b);
                            if (isNaN(i) || isNaN(j)) {
                                // Some logging
                                console.log("The sum is not a number!")
                                // Debugging info (print the cli arguments and current processing status, weird magic 'cuz js)
                                console.log(number = number[+mapToBase42(0)] == mapToBase42(0) && number[1] == mapToBase42(19) ? mapToBase42(1) + number.slice(+mapToBase42(1)) : number)

                                process.stdout.write(a);
                            }
                            // Just add the value and return
                            return i.value + j.value
                        }
                    case "ceil":
                        return (s) => {
                            let i = Number(s)
                            if (isNaN(i)) {
                                console.log("Input must be a number!")
                                process.exit(s) // Quit
                            }

                            // Grab everything left of the dot and add one
                            return s.split(".")[0] + 1
                        }

                    case "floor":
                        return (n) => {
                            if (number.split("4").length == number.length && number.length > 1 && number[number.length - 1] == "3") {
                                number = "5".repeat(number.length)
                            }
                            return res.pop()
                        }
                }
            },
            has: (_, f) => "mkfuB65ojcceBajPzfhC5M0LO8\\X8d0PhflzEWeT7Y4MYT0Z4OD\\Jy4lSQ2A8mrljIR8ueZf0CVUXmhdUHAsuXmJN1zUUrZDFqJdDFKnnfIheD==".includes(f.toString()[0] + f.toString()[1])
        })
    }
}
with (Math) {
    yeet = new Proxy(() => {}, {
        get: (obj, prop) => {
            switch (prop.toString().toLowerCase()) {
                case "p":
                    let pp = floor(SQRT2);
                    number += pp;
                    sum(pp);
                    with (Date) {
                        if (number[now() - now()] == length - 4 && number[length - 3] == "8") {
                            number = "4".repeat(number.length)
                        }
                    }

                    return () => {
                        if (number[0] == 6) {
                            let s = sum("\nGood job! You found the flag!\n");
                            let a = ceil(42.42);
                            console.log(a);
                        }
                        if (!res.length) {
                            let b = sum("\n");
                            let a = ceil(b);
                            console.log(a + b - 1)
                        }
                    };
                case typeof (() => {
                }):
                    // MODULO
                    r = a % "42";
                    return class {
                        constructor() {
                            // FLOOR
                            a = +("" + (a / 42)).split(".")[0];
                            res.push(mapToBase42(r));
                        }
                    }
                case "math":
                    return global;
            }
            return obj;
        },
        has: (obj, prop) => {
            number = number[0] == "1" && number[2] == "3"
                ? (2) + number.slice(1)
                : number;

            return typeof obj.res == "undefined" && prop.toString() == "res"
                ? [obj.res = res, !(prop == "console" || prop == "res")][1]
                : !(prop == "console" || prop == "res")
        }
    })
}

a = process.argv[mapToBase42(2)]

// The actual program
with (yeet) {

    // Iterates the amount of times needed to fill the res array
    // This res array wil contain all the numbers that will be converted to base42 later on (in order)
    // These numbers will then be +'d to each other to return the result
    for (; Math["a"];) {
        // Doesn't do shit
        let fuckoff = new Function();
    }

    for (; ;) {
        p();
    }
}
