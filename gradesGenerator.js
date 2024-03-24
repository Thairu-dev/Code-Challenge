// Students grade generator 
// Ask the user to enter an input which will be the value of marks.
let marks = prompt("Please enter a number between 0 and 100.");

//check if the user's input is valid (a number between o and 100) so that if the input is invalid it asks the user to try again with the right input(ie try again on that one hahaha).
if (marks < 0 || marks > 100 || isNaN(marks)) {
    alert("Invalid input, please try again with a number between 0 and 100.")
    }
 
//i declare an empty variable "grade" which i will use in combination with condtional if statements to set a grade  for the each marks range as per instructions
else {
let grade;
// declaring conditional statements that returns a grade for each range of marks.
    if(marks > 79){
        grade = "A"
    } 
    else if (marks >= 60) {
        grade = "B"
    }
    else if(marks >= 50){
        grade = "C"
    }   
    else if(marks >= 40){
        grade = "D"
    }
    else{
    grade = "E"}
    
    alert(`${grade}`)
}



