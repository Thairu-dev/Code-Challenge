let grossSalary = prompt("Please enter your gross salary.")
// setting tax rate for each income range
const taxRate1 = 0.1
const taxRate2 = 0.25
const taxRate3 = 0.30
const taxRate4 = 0.325
const taxRate5 = 0.35
// setting nhif deductions for each income range
const nhifDeductions;
if (grossSalary <= 5999){nhifDeductions = 150}
else if(grossSalary >= 6000 && grossSalary <= 7999){nhifDeductions = 300}
else if (grossSalry >= 8000 && grossSalary <= 11999){nhifDeductions = 400}
else if (grossSalry >= 12000 && grossSalary <= 14999){nhifDeductions = 500}
else if (grossSalry >= 15000 && grossSalary <= 19999){nhifDeductions = 600}
else if (grossSalry >= 20000 && grossSalary <= 24999){nhifDeductions = 750}
else if (grossSalry >= 25000 && grossSalary <= 29999){nhifDeductions = 850}
else if (grossSalry >= 30000 && grossSalary <= 34999){nhifDeductions = 900}
else if (grossSalry >= 35000 && grossSalary <= 39999){nhifDeductions = 950}
else if (grossSalry >= 40000 && grossSalary <= 44999){nhifDeductions = 1000}
else if (grossSalry >= 45000 && grossSalary <= 49999){nhifDeductions = 1100}
else if (grossSalry >= 50000 && grossSalary <= 59999){nhifDeductions = 1200}
else if (grossSalry >= 60000 && grossSalary <= 69999){nhifDeductions = 1300}
else if (grossSalry >= 70000 && grossSalary <= 79999){nhifDeductions = 1400}
else if (grossSalry >= 80000 && grossSalary <= 89999){nhifDeductions = 1500}
else if (grossSalry >= 90000 && grossSalary <= 99999){nhifDeductions = 1600}
else{nhifDeductions = 1700}