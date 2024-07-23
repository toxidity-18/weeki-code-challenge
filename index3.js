function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payeeTax = calculatePayeeTax(grossSalary);
    const nhifDeduction = calculateNHIF(grossSalary);
    const nssfDeduction = calculateNSSF(grossSalary);
    const netSalary = grossSalary - payeeTax - nhifDeduction - nssfDeduction;

    return {
        grossSalary,
        payeeTax,
        nhifDeduction,
        nssfDeduction,
        netSalary
    };
}

function calculatePayeeTax(grossSalary) {
    let payee = 0;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        payee = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);
    } else if (grossSalary <= 500000) {
        payee = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.3);
    } else if (grossSalary <= 800000) {
        payee = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.3) + ((grossSalary - 500000) * 0.325);
    } else {
        payee = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.3) + ((800000 - 500000) * 0.325) + ((grossSalary - 800000) * 0.35);
    }
    return payee;
}

function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    else if (grossSalary <= 7999) return 300;
    else if (grossSalary <= 11999) return 400;
    else if (grossSalary <= 14999) return 500;
    else if (grossSalary <= 19999) return 600;
    else if (grossSalary <= 24999) return 750;
    else if (grossSalary <= 29999) return 850;
    else if (grossSalary <= 34999) return 900;
    else if (grossSalary <= 39999) return 950;
    else if (grossSalary <= 44999) return 1000;
    else if (grossSalary <= 49999) return 1100;
    else if (grossSalary <= 59999) return 1200;
    else if (grossSalary <= 69999) return 1300;
    else if (grossSalary <= 79999) return 1400;
    else if (grossSalary <= 89999) return 1500;
    else if (grossSalary <= 99999) return 1600;
    else return 1700;
}

function calculateNSSF(grossSalary) {
    return grossSalary * 0.06 > 1080 ? 1080 : grossSalary * 0.06;
}

