class CustomMatch {
  constructor(value) {
    this.value = value;
  }

  plus(n) {
    this.value += n;
    return this;
  }

  minus(n) {
    this.value -= n;
    return this;
  }

  multiply(n) {
    this.value *= n;
    return this;
  }

  divide(n) {
    if (n === 0) throw new Error("Sıfıra bölmək olmaz!");
    this.value /= n;
    return this;
  }

  getResult() {
    return this.value;
  }
}

const result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);
console.log("Task 1:", result.getResult());


function sortDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}

const numbers = [5, 3, 8, 1, 9, 2, 7];
console.log("Task 2:", sortDescending(numbers));


function wordLetterCounts(str) {
  return str.split(" ").filter(word => word.length > 0).map(word => word.length);
}

console.log("Task 3:", wordLetterCounts("hello world javascript"));
console.log("Task 3:", wordLetterCounts("I am a student"));


const universityGroup = {
  groupName: "CS-101",
  students: [],

  addStudent(student) {
    this.students.push({ ...student, grades: student.grades || [] });
  },

  removeStudent(id) {
    const index = this.students.findIndex(s => s.id === id);
    if (index === -1) return null;
    return this.students.splice(index, 1)[0];
  },

  getStudent(id) {
    return this.students.find(s => s.id === id) || null;
  },

  getAverageGrade(id) {
    const student = this.getStudent(id);
    if (!student || student.grades.length === 0) return 0;
    const sum = student.grades.reduce((acc, g) => acc + g, 0);
    return sum / student.grades.length;
  },

  addGrade(id, grade) {
    const student = this.getStudent(id);
    if (!student) return;
    student.grades.push(grade);
  },

  getTopStudent() {
    if (this.students.length === 0) return null;
    return this.students.reduce((top, student) => {
      const topAvg = this.getAverageGrade(top.id);
      const currentAvg = this.getAverageGrade(student.id);
      return currentAvg > topAvg ? student : top;
    });
  },

  getAllStudents() {
    return this.students;
  },

  getBestStudentName() {
    const top = this.getTopStudent();
    return top ? top.name : null;
  }
};

universityGroup.addStudent({ id: 1, name: "Əli", age: 20 });
universityGroup.addStudent({ id: 2, name: "Vüsal", age: 21 });
universityGroup.addStudent({ id: 3, name: "Aysel", age: 19 });

universityGroup.addGrade(1, 90);
universityGroup.addGrade(1, 85);
universityGroup.addGrade(2, 70);
universityGroup.addGrade(2, 95);
universityGroup.addGrade(3, 100);
universityGroup.addGrade(3, 92);

console.log("\nTask 4:");
console.log("Bütün tələbələr:", universityGroup.getAllStudents());
console.log("Əlinin orta qiyməti:", universityGroup.getAverageGrade(1));
console.log("Vüsalın orta qiyməti:", universityGroup.getAverageGrade(2));
console.log("Ayselin orta qiyməti:", universityGroup.getAverageGrade(3));
console.log("Ən yaxşı tələbə:", universityGroup.getTopStudent());
console.log("Ən yaxşı tələbənin adı:", universityGroup.getBestStudentName());

universityGroup.removeStudent(2);
console.log("Vüsal silindikdən sonra:", universityGroup.getAllStudents());
console.log("ID 2 ilə axtarış:", universityGroup.getStudent(2));
