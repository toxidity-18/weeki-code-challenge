function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed < speedLimit) {
        return "Ok";
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        
        if (demeritPoints > 12) {
            return "License suspended";
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}
//example
const speed = parseInt(prompt("Enter the speed of the car (km/h):"), 10);
console.log(speedDetector(speed));


