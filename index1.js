
function genarateGrade() {
    let marks = prompt("Enter student marks (0-100):");
    marks = Number(marks);
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
      return;
    }
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 49 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    console.log(`The grade is: ${grade}`);
}
gradeGenerator();
