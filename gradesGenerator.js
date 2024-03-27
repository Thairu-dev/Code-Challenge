// Students grade generator 
// Ask the user to enter an input which will be the value of marks.
let marks = prompt("Please enter a number between 0 and 100.");
function gradingMarks(marks){
//check if the user's input is valid (a number between o and 100) so that if the input is invalid it asks the user to try again with the right input(ie try again on that one hahaha).
// if (marks < 0 || marks > 100 || isNaN(marks)) {
//     alert("Invalid input, please try again with a number between 0 and 100.")
//     }
 
//i declare an empty variable "grade" which i will use in combination with condtional if statements to set a grade  for the each marks range as per instructions

// declaring conditional statements that returns a grade for each range of marks.
// this if condition grades the marks as "A" if the value is greater than 79
   if(marks > 79){
        grade = "A"
    } 
    // this if condition grades the marks as "B" if the value of marks is greater or equal to 60 and also less than or equal to 79
    else if (marks >= 60 && marks <= 79) {
        grade = "B"
    }
    // this if condition grades the marks as "C" if the value of marks is greater or equal to 49 and also less than or equal to 59
    else if(marks >= 49 && marks <= 59){
        grade = "C"
    }
// / this if condition grades the marks as "D" if the value of marks is greater or equal to 40 and also less than or equal to 49
    else if(marks >= 40 && marks <= 49){
        grade = "D"
    }
    // this condition grades any marks that's less than 40 as an "E"
    else{
    grade = "E"}
    
    return(`${grade}`)
    }
console.log(gradingMarks())



