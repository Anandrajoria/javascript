const prompt = require("prompt-sync")();

let userinput=prompt("enter your age to verify");
if (userinput>=18) {
    console.log("you can access the website")
}
else{
    console.log("you can't access the websites")
}