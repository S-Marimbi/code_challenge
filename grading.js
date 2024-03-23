// Prompt the user to input student marks
const input = prompt('Enter students marks here- between 0 and 100');

// Making sure the grade is between 0 and 100
if(!(marks >= 0 && marks <= 100)){
    console.log('Please enter a valid mark between 0 and 100');
} else {
    //Fuction to calculate the student's grade
    function calculateGrade(marks){
       if(marks >79){
       grade = 'A';
    }else if (marks >= 60){
       grade = 'B';
    }else if (marks >= 50){
       grade = 'C';
    }else if (marks >= 40){
       grade = 'D';
    }else{
        grade = 'E';
    }
return grade
 }
const grade = (marks);
console.log(`Grade: ${grade}`) ;
}





