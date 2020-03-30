export default function getPairs() {
    const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
    const boys = ["Саша", "Игорь", "Алексей"];
    const girls = ["Лена", "Ира", "Светлана"];
    let newStudents = [];
    for (let i = 0; i < students.length/2; i++) {
        newStudents[i] = [boys[i],girls[i]];
    }
    return newStudents;
  }
