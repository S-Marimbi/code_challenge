const payeRates = [
    {
        min: 0,
        max: 24000,
        deduction: 10,
    },
    {
        min: 24000,
        max: 32333.33,
        deduction: 25,
    },  
    {
        min: 32333.33,
        max: 499999.99,
        deduction: 30,
    },  
    {
        min: 500000.00,
        max: 799999.00,
        deduction: 32.5,
    },   
];
const readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);

function getTaxRate(salary) {
    if(salary <= 24000) {
        return 10;

    }

    if(salary > 24000 && salary <= 32333.33){
        return 25;
    }

    if(salary > 32333.33 && salary <= 499999.99){
        return 30;
    }
    if(salary > 499999.99 && salary < 500000.00){
        return 32.5;
    }
 return 35;
}

function salaryAfterPaye(salary){
    const rate = getTaxRate(salary) /100;
    const taxable = salary * rate;
    const income = salary - taxable;
    const net = income + 2640;
    return net;
}
function nhifDeductable(income){
    if (income <= 6000) {
        return 150;
    } if (income >= 6000 && value <= 8000) {
        return 300;
    } if (income >= 8000 && value <= 12000) {
        return 400;
    } if (income >= 12000 && value <= 15000) {
        return 500;
    } if (income >= 15000 && value <= 20000) {
        return 600;
    } if (income >= 20000 && value <= 25000) {
        return 750;
    }  if (income>= 25000 && value <= 30000) {
        return 850;
    }  if (income>= 30000 && value <= 35000) {
        return 900;
    }  if (income >= 35000 && value <= 40000) {
        return 950;
    }  if (income >= 40000 && value <= 45000) {
        return 1000;
    }  if (income >= 45000 && value <= 50000) {
        return 1100;
    }  if (income >= 50000 && value <= 60000) {
        return 1200;
    }  if (income >= 60000 && value <= 70000) {
        return 1300;
    }  if (income >= 70000 && value <= 80000) {
        return 1400;
    }  if (income >= 80000 && value <= 90000) {
        return 1500;
    }  if (income >= 90000 && value <= 100000) {
        return 1600;
    }
        return 1700;
    } 

    function NetSalary(salary){
        const afterPay = salaryAfterPaye(salary);
        const nhif = nhifDeductable(salary);
     //const netsalary = Afterpay - nhif;
        return Afterpay - nhif

    }
    function main() {
        rl.question("Enter your gross salary\n ", (salary) => {
           let s = parseInt(salary);
           if(isNaN(s)) {
              console.log("Please enter a number\n");
              main();
              return;
     }
         console.log(
            "if your gross is ",
            salary, 
            "Your net is " ,
            NetSalary(salary),
         "That is not right"
        );
         rl.close();
     });
     
    }
     
    main();

    