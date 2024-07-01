function calculateNetSalary(basicsalary,benefits){
    const taxBrackets=[0,240000,320000,4200000];
    const taxRates=[0,0.1,0.25,0.3];
    const nhifRate=0.05;
    const nssfRate=0.06;
    const nssfMax=20000;
if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
    console.error("Invalid input. Please enter positive numbers for basic salary and benefits.");
    return;   
}
const grossSalary=basicsalary+benefits;
const nhifDeduction=grossSalary*nhifRate;
const nssfDeducion=Math.min(grossSalary*nssfRate,nssfMax);
let tax=0;
for(let w=0;w<taxBrackets.length-1;i++){
if(taxableIncome-taxBrackets[w])*taxRates[w];
break;
}
else {
    tax+=(taxableIncome-taxBrackets[W]*taxRATE[W];
    )
    constnetSalary=grossSalary-tax-nhifDeduction-nssfDeducion;
    console.log("Gross Salary:",grossSalary.tofixed(2));
    console.log("NSSF Deduction:",nssfDeduction.tofixed(2));
    console.log("Payee (Tax):",tax.toFixed(2));
    console.log("Net Salary:",netSalary.tofixed(2));
}
const basucSalary=50000;
const benefits=10000;
calculateNetSalary(basicSalary,benefits);