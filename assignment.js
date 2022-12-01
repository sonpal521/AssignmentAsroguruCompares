/**
 * 
 * 1. Write a function astroguru that:
A. Takes four arguments: number of children, spouses name, location and job
B. Output the following string: “You will be a ‘job’ in ‘location’ and married to ‘partner’ with ‘numkids’.”
 * 
 * 
 */


function astroGuru(jobTitle, geolocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geolocation + ' and married to ' +
    partner + ' with ' + numKids + ' kids.';
    console.log(future);
  }
  
  astroGuru('astronaut', 'Spain', 'Shaq', 3);




  
/**
 * 2. Write a function that compares two numbers and returns the larger of the two.
Bonus: Output appropriate message if numbers cant be compared or are equal
 *
 */

function greaterNum(num1, num2) {
    if (num1 === num2) {
    console.log('Both numbers are equal');
    } else if (num1 > num2) {
    return num1;
    } else if (num2 > num1) {
    return num2;
    } else {
    console.log('These are simply incomparable!');
    }
    }
    greaterNum(3, 3);
    greaterNum(5, 'dog');



