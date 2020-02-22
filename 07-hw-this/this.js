const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


function getMyTaxes(salary){
    return salary * this.tax;
}
console.log(getMyTaxes.call(litva, 1000));


function getMiddleTaxes(){
    return this.tax * this.middleSalary;
}
console.log(getMiddleTaxes.call(ukraine));


function getTotalTaxes(){
    return this.tax * this.middleSalary *this.vacancies;
}
console.log(getTotalTaxes.call(ukraine));

function getMySalary(){
    const salaryInfo = {};
    salaryInfo.salary = Math.floor(Math.random() *(2000-1500) + 1500);
    salaryInfo.taxes = this.tax * salaryInfo.salary; 
    salaryInfo.profit = salaryInfo.salary - salaryInfo.taxes;
    return salaryInfo;
}
setInterval(()=> console.log(getMySalary.call(ukraine)), 10000);



