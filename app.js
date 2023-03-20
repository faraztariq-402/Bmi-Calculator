function bmiconverter(){
let heightInFeet = document.getElementById('heightInFeet').value
heightInFeet = Number(heightInFeet);
heightInFeet = heightInFeet * 12;
let heightInInch = document.getElementById('heightInInch').value
heightInInch = Number(heightInInch);

heightInInch = heightInFeet + heightInInch;
let weightInKgs = document.getElementById('weightInKgs').value
weightInKgs = Number(weightInKgs);

let heightInMeter = heightInInch * 0.0254;
heightInMeter = Number(heightInMeter);

let heightInMeterSquare = heightInMeter * heightInMeter;
heightInMeterSquare = Number(heightInMeterSquare);

let Bmi = weightInKgs/heightInMeterSquare;
Bmi = (Bmi).toFixed(2);
let bodyMassIndex = "Your Bmi is " + Bmi;
let idealWeight = (22 * heightInMeterSquare).toFixed(2);

let weightToLose = (weightInKgs - idealWeight).toFixed(2);
let weightToGain = (idealWeight - weightInKgs).toFixed(2);
idealWeight = "Your Ideal Weight is " + idealWeight;

let suggestion = "You are ";
if (Bmi > 30){
    suggestion += `Obese you are supposed to lose ${weightToLose}Kgs`;
    
}else if (Bmi > 25){
    suggestion += `Overweight you are supposed to lose ${weightToLose}Kgs`
}else if (Bmi > 18.5){
    if (Bmi > 22) {
        suggestion += `Normal but optionally you may lose ${weightToLose}Kgs
        to become ideally fit`
    }else if (parseInt(Bmi) === 22){
        suggestion += `ideally fit`
    }
     else {
        suggestion += `Normal but optionally you may gain ${weightToGain}Kgs
        to become ideally fit`
    }
}else{
    suggestion += `Underweight you are supposed to gain ${weightToGain}Kgs` 
}

document.getElementById('finalanswer').innerHTML = bodyMassIndex;
document.getElementById('suggestion').innerHTML = suggestion;
document.getElementById('idealWeight').innerHTML = idealWeight;





}

