// grade A >= 90
// grade B >= 80
// grade C >= 70
// grade D >= 60
// grade F

const students = [
  { name: "Alice", scores: [85, 92, 78] },
  { name: "Bob", scores: [59, 63, 70] },
  { name: "Charlie", scores: [100, 95, 98] },
  { name: "David", scores: [45, 52, 60] },
  { name: "Eve", scores: [75, 80, 82] },
];

students[0].scores[0];
//Najdi prosek
for (let i = 0; i < students.length; i++) {
  let totalScores = 0;
  for (let j = 0; j < students[i].scores.length; j++) {
    totalScores += students[i].scores[j];
  }
  const average = totalScores / students[i].scores.length;
  students[i].average = average.toFixed(2);
}

console.log(students);

//Najdi Ocenka
function calculateGrade(students) {
students.forEach((student) => {
  const average = student.average;
  const grade =
    average >= 90
      ? "A"
      : average >= 80
      ? "B" 
      : average >= 70
      ? "C"
      : average >= 60
      ? "D"
      : "F";
  student.grade = grade;
});
}

calculateGrade(students);
console.log(students);
