
const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];
const random = [Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1)];

function getPairs() {
    const boys = ["Саша", "Игорь", "Алексей"];
    const girls = ["Лена", "Ира", "Светлана"];
    let newStudents = [];
    for (let i = 0; i < students.length/2; i++) {
        newStudents.push([boys[i],girls[i]]);
    }
    return newStudents;
  }
const pairs = getPairs();
console.log(pairs);


function themesForStudents(){
    let studentsWithThemes = [];
    for(i = 0; i < pairs.length; i++){
        studentsWithThemes.push([pairs[i].join(" и "), themes[i]]);
    }
    return studentsWithThemes;
}
const studentsThemes = themesForStudents()
console.log(studentsThemes);


function studentsWithMarks(){
    let studentsAndMarks = [];
    for(i = 0; i < students.length; i++){
        studentsAndMarks[i] = [students[i], marks[i]];
    }
    return studentsAndMarks;
}
const studentsMarks = studentsWithMarks();
console.log(studentsMarks);


function getMarksForPair(){
    let marksForPair = [];
    for(i = 0; i < students.length/2; i++){
        marksForPair[i] = studentsThemes[i].concat(random[i]);
    }
    return marksForPair;
}
const pairsMarks = getMarksForPair();
console.log(pairsMarks);

document.writeln(
    `<strong> 1. Розподіл по парах: <br></strong> ${pairs.join(" |<br>")} |<br><br>
    <strong> 2. Отримання кожною парою теми проекту: <br></strong> ${studentsThemes.join(" |<br>")} |<br><br>
    <strong> 3. Оцінювання кожного студента: <br></strong> ${studentsMarks.join(" |<br>")} |<br><br>
    <strong> 4. Оцінювання кожної пари: <br></strong> ${pairsMarks.join(" |<br>")} |<br><br>`
);









