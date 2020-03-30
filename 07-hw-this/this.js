const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const array =  [ukraine, latvia, litva];
const eachCountry = func => (array.map(number=> func.call(number))).join(" / ");

 //1.
function getMyTaxes(salary){
    return salary * this.tax;
}
console.log(getMyTaxes.call(litva, 1800));

//2.
function getMiddleTaxes(){
    return this.tax * this.middleSalary;
}
console.log("Україна/Латвія/Литва:", eachCountry(getMiddleTaxes));

//3.
function getTotalTaxes(){
    return this.tax * this.middleSalary *this.vacancies;
}
console.log("Україна/Латвія/Литва:", eachCountry(getTotalTaxes));;

//4.
function getMySalary(){
    const salaryInfo = {};
    salaryInfo.salary = Math.floor(Math.random() *(2000-1500) + 1500);
    salaryInfo.taxes = (this.tax * salaryInfo.salary).toFixed(2); 
    salaryInfo.profit = (salaryInfo.salary - salaryInfo.taxes).toFixed(2);
    return salaryInfo;
}
setInterval(()=> console.log(getMySalary.call(ukraine)), 10000);