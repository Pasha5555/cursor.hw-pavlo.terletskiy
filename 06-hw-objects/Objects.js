
const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

//1.
function getSubjects(student){
    let bigWord = [];
    student = Object.keys(student.subjects);
    student = student.map((subject)=>{
    if(subject.includes("_")){
        subject = subject.replace("_", " ");
    }
    bigWord = subject[0].toUpperCase();
    subject = subject.slice(1);
    subject = bigWord.concat(subject);

    return subject;
});
    return student;
}
console.log(getSubjects(students[0]));

//2.
function getAverageMark(student){
    student = Object.values(student.subjects);
    student = student.map((subject)=>{
        return (subject.reduce((acc, mark)=> acc + mark) / subject.length);
    }); 
    return (student.reduce((sum, EachSubjectMark)=> sum + EachSubjectMark) / student.length).toFixed(2);
}
console.log(getAverageMark(students[0]));


//3.
function getStudentInfo(student){
    let averageStudentMark = getAverageMark(student);
    let obj = {};
    obj.course = student.course;
    obj.name = student.name;
    obj.averageMark = averageStudentMark;

    return obj;
}
console.log(getStudentInfo(students[0]));

//4.
function getStudentsNames(students){
    let studentsNames = [];
    for(let i = 0; i<students.length; i++){
        studentsNames.push(students[i].name);
    }
    return studentsNames.sort();
}
console.log(getStudentsNames(students));


//5.
function getBestStudent(students){
    let max = 0.0;
    let stud = [];
    let bestStudent;
    for(let i = 0; i < students.length; i++){
        stud.push(getStudentInfo(students[i]));
        if(max < stud[i].averageMark){
            max = stud[i].averageMark;
            bestStudent = stud[i].name;
        }
    }
    return bestStudent;
}
console.log("Найкращий студент: " + getBestStudent(students));

//6.
function calculateWordLetters(word){
    let obj = {};

    for(i = 0; i < word.length; i++){
        if(!(Object.keys(obj).includes(word[i]))){
            obj[word[i]] = 1;
        }else obj[word[i]] +=1;
    }
    return obj;
}
console.log(calculateWordLetters("табуретка"));