// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An",lastName: "sok",batch: "2023", age: 20 },
  { firstName: "Bình",lastName: "dok",batch: "2023", age: 22 },
  { firstName: "Cẩm",lastName: "bo",batch: "2023", age: 21 },
  { firstName: "An",lastName: "nie",batch: "2023", age: 19 }, // Duplicate first name !
];

/**
 Update 1 student age, given his/her first name 
 * @param {string} firstName - The student's first name
 * @param {string} lastName - The student's last name
 * @param {string} batch - The student's batch
 * @param {age} newAge - The new age to set for the student
*/
function updateStudentAge(firstName,lastName, newAge) {
  let student = STUDENTS_DATA.find((s) => s.firstName === firstName);
  if (student) {
    student.age = newAge;
  }
}

// 1 - Update An age to 30
updateStudentAge("An","nie",30);

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA,null,2));
