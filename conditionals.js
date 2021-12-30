const age = parseInt( prompt("How old are you?"));

if(isNaN(age) || age<0 ) {
    console.log("Plese write a real positive number")
} else if(age < 18) {
    console.log("You are too young")
} else if(age >=18 && age <= 50) {
    console.log("You can drink")
} else if(age > 51) {
    console.log("Take care of your health")
}