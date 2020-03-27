const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const array =  [ukraine, latvia, litva];
const eachCountry = func => (array.map(number=> func.call(number))).join(" / ");

function getMiddleTaxes(){
    return this.tax * this.middleSalary;
}
export { eachCountry, getMiddleTaxes};
