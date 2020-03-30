import sumPrices from './HW/hw#1';
import getMaxDigit from './HW/hw#3'
import getPairs from './HW/hw#4';
import { getAverage, getMedian} from './HW/hw#5';
import { getMiddleTaxes, eachCountry } from './HW/hw#7';
import starWars from './HW/hw#12';
import  './HW/apiStyle.css';

console.log("HW#1 - ", sumPrices);
console.log("HW#3 - ", getMaxDigit(253574));
console.log("HW#4 - ", getPairs());
console.log("HW#5 - ", getAverage(20,-40,50, 3.75, 2.5, 30));
console.log("HW#5 - ", getMedian(6, 2, 55, 8.441, 23.05, 11, 78, 2, 55, 5.75, 77, 57, 87, 23, 2, 56, 3, 2, 2.3));
console.log("HW#7 - Україна/Латвія/Литва:", eachCountry(getMiddleTaxes));
starWars();
