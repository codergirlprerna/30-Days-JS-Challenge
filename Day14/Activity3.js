//Importing entire module

//ek module banao jisme multiple constants aur functions export kiye gye ho.Doosri file me poore module ko ek object ki tarah import karo aur uske properties use karo.

import * as utils from "./utils.js";


console.log("Area of circle:",utils.areaOfCircle(5));
console.log("PI Value:",utils.PI);
console.log("App Name:",utils.appName);
console.log("Addition of number",utils.add(2,3));
