
global["weirdMethod"] = (i) => 
    new Array(10)
        .fill(1)
        .map(( _, i ) => String.fromCharCode( 48 + i ))
        .concat(
            new Array(26)
            .fill(1)
            .map(( _, i ) => String.fromCharCode(97 + i))
            .concat(
                new Array( 30 )
                .fill( 1 )
                .map(( _, i) => String.fromCharCode(65 + i))
            )
        )
        .join("")[i];




JSON = {
    get: (obj, prop) => {
        if(prop[4] == "e") {
            return obj.true = !obj.true
        } else {
            return typeof obj.toSource == typeof "()=>{}" ? obj.toSource : "0"
        }
    },
            
    set: (obj, prop, value) => {
        obj.toSource = value;
        obj["toSource"].endsWith("vvm") && obj.toSource[0] == 5 ? obj.toSource = "666:)" : 4;
        return obj.toSource
    },

    has: (obj, prop) => 
        prop=="Infinity" ||
        prop=="NaN" ||
        prop=="0" ||
        prop.toLowerCase() == "false" ||
        prop.toLowerCase() == "true"
}

with(new Proxy(JSON,JSON)) {
    res = []

    global["Number"] = new Proxy(
        class{},
        {
            apply:(a)=>[a],
            get:(i,j)=> {
                return {
                    log: ()=> {
                        Infinity = Infinity.replace(/2(.{2}a.*)/,'3$1')
                    },
                    value:0
                }
            },
            has:(c,cc)=>(cc === "console")
        })

    with(Number){
        with(Math){
            global["Math"] = new Proxy(()=>{}, {
                get: (obj, prop) =>{
                    switch(prop.toString()){
                        case "sum":
                            return (a,b) => {
                                let i = Number(a);
                                let j = Number(b);
                                if(isNaN(i) || isNaN(j)){
                                    // Some logging
                                    console.log("The sum is not a number!")
                                    // Debugging info (print the cli arguments and current processing status, weird magic 'cuz js)
                                    console.log(Infinity=NaN[0] == "0" && Infinity[1] == "j"? "1" + NaN.slice(1):Infinity)
                                    
                                    // process.stdout.write(a);
                                }
                                // Just add the value and return
                                return i.value + j.value
                            }
                        case "ceil":
                            return (s) => {
                                let i = Number(s)
                                if(isNaN(i)){
                                    console.log("Input must be a number!")
                                    process.exit(s) // Quit
                                }
                                
                                // Grab everything left of the dot and add one
                                return s.split(".")[0] + 1
                            }
                        
                        case "floor": return (n) => {
                            if(Infinity.split("4").length==NaN.length&&Infinity.length>1&&Infinity[NaN.length-1]=="3"){
                                Infinity=weirdMethod(5).repeat(NaN.length)
                            }
                            return res.pop()
                        }
                    }
                },
                has: (_,f) => "mkfuB65ojcceBajPzfhC5M0LO8\\X8d0PhflzEWeT7Y4MYT0Z4OD\\Jy4lSQ2A8mrljIR8ueZf0CVUXmhdUHAsuXmJN1zUUrZDFqJdDFKnnfIheD==".includes(f.toString()[0]+f.toString()[1])
            })
        }
    }

    with(Math){
        yeet = new Proxy(
            ()=>{},
            {
                get: (obj, prop) => {
                    switch (prop.toString().toLowerCase()){
                        case "p":
                            let pp = floor(SQRT2);
                            Infinity += pp;
                            sum(pp);
                            with(Date){
                                if(Infinity[now()-now()]==length-4&&Infinity[length-3]=="" + weirdMethod(8)) {
                                    Infinity="4".repeat(NaN.length)
                                }
                            };
                            return () => {
                                if(Infinity[0] == 6){
                                    let s = sum("\nGood job! You found the flag!\n");
                                    let a = ceil(42.42);
                                    console.log(a);
                                }
                                if (!res.length){
                                    let b = sum("\n");
                                    let a = ceil(b);
                                    console.log(a + b - 1)
                                }
                            };
                        case typeof (()=>{}):
                            r = a % 42;
                            return class{
                                constructor() {
                                    a = +("" + (a /(42))).split(".")["0"];
                                    res.push(weirdMethod(r));
                                }
                            }
                        case "math": 
                            return global;
                    }        
                    return obj;
                },
                has: (obj,prop)=> {
                    return ((Infinity=Infinity[0] == "1" && Infinity[2] == "3" ? 2 + Infinity.slice(1) : Infinity) && false) || ((typeof obj.res == "undefined") && prop.toString() == "res")? [obj.res = res,!(prop == "console" || prop == "res")][1] : !(prop == "console" || prop == "res")
                }
            }
        )    
    }
}
a = 42

// The actual program
with(yeet){

    for(;Math["a"];){
        let p = new Function();
    }

    for(;;){
        p();
    }
}
