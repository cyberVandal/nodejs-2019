console.log("TEST");

var ime = "Simona"; // String
var godini = 26; // Number - Integer
var vistina = 1.82; // Number - Float
var vikend = false; // Boolean

var condition = true && (true || false) || false; // true

if(condition) {
    console.log("TRUE");
} else {
    console.log("FALSE");
};


if(condition) {
    // ...
};


if(condition) {
    // ...
} else {
    // ...
};


if(condition) {
    // ...
} else if(condition) {
    // ...
} else if(condition) {
    // ...
} else {
    // ...
};


var bukva = "a";
switch(bukva) {
    case "a" :
    console.log("bukva a");
    break;
    case "b" :
    console.log("bukva b");
    break;
    case "c" :
    console.log("bukva c");
    break;
    default :
    console.log("nepoznata bukva");
    break;
};

function zdravo() {
    console.log("Zdravo Simona")
};

var pozdrav = function() {
    console.log("Zdravo Simona")
};

var hello = () => {
    console.log("Zdravo Simona")
};

var calc = (a, b) => {
    return a + b;
};

var res = calc(2, 6);
console.log(res);

var call = (a, b, fn) => {
    fn(a + b);
};
call(4, 7, (r) => {
    console.log(r * 2)
}); 


var calc = (a, b, op, cb) => {
    cb(a + b, op); // 34, "div"
};

var math = (r, o) => {
    switch(o) {
        case "div":
        console.log( r / 2);
        break;
        case "mul":
        console.log( r * 2);
        break;
        case "sub":
        console.log( r - 2);
        break;
        case "add":
        console.log( r + 2);
        break;
    }
}
calc(23, 11, "div", math);
console.log(calc);

var ime = "Pero";

var vetuvanje = () => {
    return new Promise((succ, fail) => { // succ & fail se funkcii!
        if(ime === "Pero") {
            return succ(ime);
        } else {
            return fail(ime);
        }
    });
}

vetuvanje()
    .then(i => {
        console.log("SUCCESS", i);
    }, i => {
        console.log("FAIL", i)
});