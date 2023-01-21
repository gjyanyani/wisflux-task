// Write a program to check total marks of a student in various examinations.

function exam_status(totalmarks,is_exam)
  {
  if (is_exam) {
    return totalmarks >= 90;
  }else{
    return (totalmarks >= 89 && totalmarks <= 100);
  }
 }

console.log(exam_status("78", " "));
console.log(exam_status("89", "true "));
console.log(exam_status("99", "true "));
