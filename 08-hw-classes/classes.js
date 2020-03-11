class Student{
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }
    marks = [5, 4, 4, 5];

    getInfo(){
        console.log(`Cтудент ${this.course}-го курсу університету ${this.university} м. Львів, ${this.fullName}`);
    }

    set setMark(numb){
        if(this.marks === null){
            return null;
        }else{
            this.marks = [...this.marks, numb];
            return this.marks;
        }
    }

    get getMark(){
        return this.marks;
    }

    getAverage(){
        return (this.marks.reduce((sum, mark) => sum += mark) / this.marks.length);
    }

    dismiss(){
        this.marks = null;
        return this.marks;
    }

    recover(){
        return this.marks = [5,4,4,5];
    }

}
const student = new Student("Львівська політехніка", 4, "Terletskiy Pavlo");
student.getInfo();
student.setMark = 5;
console.log(student.getMark);
console.log("Середня оцінка", student.getAverage());
console.log("Виключили студента, тому що оцінки -", student.dismiss());
console.log("Відновили студента:", student.recover());

class BudgetStudent extends Student{
    constructor(university, course, fullName, scholarship){
        super(university, course, fullName);
        this.scholarship = scholarship;
        setInterval(()=> {this.getScholarship()}, 30000);
    }

    getScholarship(){
        if(this.marks !== null && this.getAverage() >= 4){
            console.log("Ви отримали 1400 грн. степендії");
        }
    }
}
console.log("<-----------------Advanced------------------->");
const budgetStudent = new BudgetStudent("LNU im.Ivana Franka", 3, "Novachok Stas");
budgetStudent.getScholarship();
budgetStudent.getInfo();