
function calculateDemerits(speed){
        speed = prompt("Please enter a speed.")
        //declaring a variable for the  speed limit. 
        let legalSpeed = 70;
        // declaring a condition that returns "ok" if the speed is below or equal to 70 which is the speed limit(legalSpeed) 
            if(speed <= legalSpeed){
                return ("ok")
            }
            // declaring a variable that calculates the number of demrit points for drivers who are above the speed limit
        let demerits = (speed - legalSpeed)/5;

        // declaring a condtion that returns the number of demerit points for drivers above the speed limit
        
        if(speed > legalSpeed && demerits <= 12){
            return (`Points: ${demerits}`);
        }
        // declaring a condition that returns "licence suspended" if the drivers demerit points are greater than 12 points
        else {
            return (`License Suspended.`)
        }
        
    }
    console.log(calculateDemerits())