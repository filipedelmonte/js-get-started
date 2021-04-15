# Ensinando o ga a programar

## Cheatsheet

### Data types
```
let age = 18;                           // number 
let name = "Jane";                      // string
let truth = true;                      // boolean
let falshy = false;                      // boolean
let sheets = ["HTML","CSS","JS"];       // array
let name = { first:"Jane", last:"Doe" };  // object
let a; typeof a;                        // undefined
let a = null;                           // value null

let date = { day: 12, month: "dwfewf", isHoliday: false  }


// object
let date = { day: 12, month: "dwfewf", isHoliday: false, timezone: { name: "Brazil", code: "UTC-3" }  }
console.log(date.month)
console.log(date.timezone)
```

### Operators
```
a = b + c - d;      // addition, substraction
a = b * (c / d);    // multiplication, division
x = 100 % 48;       // modulo. 100 / 48 remainder = 4
a++; b--;           // increment and decrement
```

### Conditional flow
#### If / Else
```
if (STATEMENT) {
    // code
} else {
   // code 
}
```
#### switch case
```
let text;
switch (new Date().getDay()) {      // input is current day
    case 6:                         // if (day == 6)
        text = "Saturday";          
        break;
    case 0:                         // if (day == 0)
        text = "Sunday";
        break;
    default:                        // else...
        text = "Whatever";
}
```

### Loops

#### While
```
let i = 1;                      // initialize
while (i < 100) {               // enters the cycle if statement is true
    i *= 2;                     // increment to avoid infinite loop
    document.write(i + ", ");   // output
}
```
#### For
```
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i of ["a", "b", "c"]) {
    console.log(i);
}
```

#### Output
```
console.log(VARIABLE); // prints var to the console
```