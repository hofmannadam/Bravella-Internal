// Bravella Health Example Site JS Algos

import medication from './Supporting JS/Pharmacopoeia.js';
import {ramipril, perindopril, trandolapril, enalapril, benazepril, captopril, quinapril, fosinopril } from './Supporting JS/ACEinhibitors.js';
import {candesartan, irbesartan, losartan, olmesartan, valsartan }  from './Supporting JS/ARBs.js';
import { hctz, furosemide, spironolactone, amiloride, eplerenone } from './Supporting JS/diuretics.js';
import {metoprolol, bisoprolol, acebutolol, carvedilol, labetalol, atenolol, nadolol, propanolol  } from './Supporting JS/betablockers.js';
import {amlodipine, diltiazem, felodipine, nifedipine, verapamil } from './Supporting JS/CCBs.js';

//Home BP functions - add line and calculate average values to 0 decimals

const addHomeBPButton = document.getElementById('addhomebpbutton');
const homeBPDiv = document.getElementById('avghomebp');
const calculateAvgBP = document.getElementById('calculateavgbp');
const avgHomeSBP = document.getElementById('avgsbp');
const avgHomeDBP = document.getElementById('avgdbp');
const avgHomePulse = document.getElementById('avgpulse');

addHomeBPButton.addEventListener('click', addHomeBPLine);

let BPiteration = 0;
function addHomeBPLine(e) {
    e.preventDefault();
    let line = `
                <label>SBP:</label>
                <input type="number" id="SBP${BPiteration}" name="SBP"/>
                <label>DBP:</label>
                <input type="number" id="DBP${BPiteration}" name="DBP"/>
                <label for="pulse">Pulse:</label>
                <input type="number" id="pulse${BPiteration}" name="pulse"/><br>
                `
    homeBPDiv.appendChild(document.createElement('p')).innerHTML = line;
    BPiteration ++
    console.log(`Iteration number: ${BPiteration}`)
    return BPiteration;
}

calculateAvgBP.addEventListener('click', calculateAvgBPValues);

function calculateAvgBPValues(e) {
    e.preventDefault();
    calculateAvgBP.removeEventListener('click', calculateAvgBPValues);
    let avgSBP, totalSBP = 0;
    let avgDBP, totalDBP = 0;
    let avgPulse, totalPulse = 0;

    for (let i=0; i<BPiteration; i++) {
        let SBPvalue = document.getElementById(`SBP${i}`).valueAsNumber;
        if (SBPvalue) {totalSBP += SBPvalue}
          else {homeBPDiv.appendChild(document.createElement('p')).innerHTML = `<strong>A critical value is missing!</strong>`;}
        console.log(`Total SBP = ${totalSBP}`);
        let DBPvalue = document.getElementById(`DBP${i}`).valueAsNumber;
        if (DBPvalue) {totalDBP += DBPvalue}
        else {homeBPDiv.appendChild(document.createElement('p')).innerHTML = `<strong>A critical value is missing!</strong>`;}
        console.log(`Total DBP = ${totalDBP}`);
        let pulseValue = document.getElementById(`pulse${i}`).valueAsNumber;
        if (pulseValue) {totalPulse += pulseValue}
        else {homeBPDiv.appendChild(document.createElement('p')).innerHTML = `<strong>A critical value is missing!</strong>`;}
        console.log(`Total pulse = ${totalPulse}`);
    }
    console.log('BP iteration is = ' + BPiteration);
    avgSBP = totalSBP/BPiteration;
    avgDBP = totalDBP/BPiteration;
    avgPulse = totalPulse/BPiteration;
    console.log(`Average = ${avgSBP}/${avgDBP} ${avgPulse} `)
    avgHomeSBP.innerHTML = avgSBP.toFixed(0);
    avgHomeDBP.innerHTML = avgDBP.toFixed(0);
    avgHomePulse.innerHTML = avgPulse.toFixed(0);
    patientSBP.value = avgSBP.toFixed(0);
    patientDBP.value = avgDBP.toFixed(0);
    patientPulse.value = avgPulse.toFixed(0);
}


//BMI and Obesity Class calculator

const patientWeight = document.getElementById('weight');
const patientHeight = document.getElementById('height');
const BMIInputSpan = document.getElementById('bmicalc');
const obesityClassSpan = document.getElementById('obesityclasscalc');

const BMIInputEventTargets = document.getElementsByClassName('bmiinput');
for (let i=0; i<BMIInputEventTargets.length; i++) {
    BMIInputEventTargets[i].addEventListener('change', calculateBMI);
};

function calculateBMI(e) {
    e.preventDefault();
    let Wt = patientWeight.value;
    let Ht = patientHeight.value;
    let BMI = Wt/(Ht/100)**2;
    BMIInputSpan.innerHTML = BMI.toFixed(2);

    if (BMI > 25 && BMI <= 29.99) {
        obesityClassSpan.innerHTML = "Overweight";
    } else if (BMI > 30 && BMI <= 34.99) {
        obesityClassSpan.innerHTML = "Class 1";
    } else if (BMI > 35 && BMI <= 39.99)  {
        obesityClassSpan.innerHTML = "Class 2";
    } else if (BMI > 40) {
        obesityClassSpan.innerHTML = "Class 3";
    } else if (BMI > 18.5 && BMI <= 25)  {
        obesityClassSpan.innerHTML = "Normal Weight";
    } else {
        obesityClassSpan.innerHTML = "Underweight";
    }
}
// Unit Conversion

// lbs to kg

const weightConversionButton = document.getElementById('convertlbs');

weightConversionButton.addEventListener('click', convertWeight);

function convertWeight(e) {
    e.preventDefault();
    patientWeight.value = (patientWeight.value/2.2).toFixed(2);
    calculateBMI(e);
};

// in to cm

const heightConversionButton = document.getElementById('convertin');

heightConversionButton.addEventListener('click', convertHeight);

function convertHeight(e) {
    e.preventDefault();
    patientHeight.value = (patientHeight.value*2.54).toFixed(2);
    calculateBMI(e);
};

//Smoking data subsection toggle and analysis functions

const numberCigs = document.getElementById('cigsperday');
const numberPacks = document.getElementById('packsperday');
const ageStartedSmoking = document.getElementById('agestartsmoking');
const yearsSpentSmoking = document.getElementById('yearssmoking');
const smokingPackYearsP = document.getElementById('smokingpackyears');

numberCigs.addEventListener('change', calculatePackYears);
numberPacks.addEventListener('change', calculatePackYears);
ageStartedSmoking.addEventListener('change', calculatePackYears);
yearsSpentSmoking.addEventListener('change', calculatePackYears);

function calculatePackYears(e) {
   if (numberCigs.valueAsNumber) {
    numberPacks.value = (numberCigs.value/25).toFixed(1);
   } else if (numberPacks.valueAsNumber) {
    numberCigs.value = (numberPacks.value*25).toFixed(0);
   }
//    numberCigs.removeEventListener('change', calculatePackYears);
//    numberPacks.removeEventListener('change', calculatePackYears);
   let totalYearsSpentSmoking = 0;
   if (ageStartedSmoking.valueAsNumber) {
    totalYearsSpentSmoking = patientAge.value - ageStartedSmoking.valueAsNumber;
   } else if (yearsSpentSmoking.valueAsNumber) {
    totalYearsSpentSmoking = yearsSpentSmoking.valueAsNumber;
   }
   smokingPackYearsP.innerHTML = `The patient has a ${totalYearsSpentSmoking*numberPacks.value}-pack-year history of smoking.`;
   document.getElementById('smokinganalysis').innerHTML = smokingPackYearsP.innerHTML;
}


document.getElementById('smoking').addEventListener('click', ()=> {
    if (SmokerCheckbox.checked) {
        document.getElementById('smokingdatadiv').classList.toggle('hidden');
    } else {
        document.getElementById('smokingdatadiv').classList.toggle('hidden');
    }
});



// CKD EPi Calculator 
const patientAge = document.getElementById('patientage');
const creatInput = document.getElementById('Creat');
const GFRinput = document.getElementById('GFR');
const patientsexmale = document.getElementById('patientsexmale');
const patientsexfemale = document.getElementById('patientsexfemale');

creatInput.addEventListener('change', translateCreatToGFR);
patientAge.addEventListener('change', translateCreatToGFR);

function translateCreatToGFR(e) {
    let A;
    let B;
    let age = patientAge.value;
    let Scr = creatInput.value;
    let ScrNonSI = Scr/88.4;

        if (patientsexmale.checked && ScrNonSI <= 0.9) {
            A = 0.9;
            B = -0.302;
        } else if (patientsexmale.checked && ScrNonSI > 0.9) {
            A = 0.9;
            B = -1.2;
        } else if (patientsexfemale.checked && ScrNonSI <= 0.7) {
            A = 0.7;
            B =  -0.241;
        } else if (patientsexfemale.checked && ScrNonSI > 0.7) {
            A = 0.7;
            B = -1.2;
        }
    
    let GFR = patientsexfemale.checked ? 142 * (ScrNonSI/A)**B * 0.9938**age * 1.012 : 142 * (ScrNonSI/A)**B * 0.9938**age ; 
    console.log(`The patient's age = ${age}`);
    console.log(`Scr = ${Scr} and its value in non SI is ${Scr/88.4} (Should equal ${ScrNonSI})`)
    console.log(`A = ${A} and B = ${B} and the patient's sex is recorded here as ${patientsexmale.checked ? "M" : "F" }`);
    console.log(`The patient's GFR is = ${GFR.toFixed(2)}`);
    GFRinput.value = GFR.toFixed(2);
    document.getElementById('currentGFR').innerHTML = GFR.toFixed(2);
    document.getElementById('currentcreatinine').innerHTML = Scr;
    let CKDstage;
    if (GFR > 91) {
        CKDstage = 'The patient does not have significant kidney disease'
    } else if (GFR <= 90 && GFR >60) {
        CKDstage = 'The patient has stage 2 chronic kidney disease'
    } else if (GFR <= 60 && GFR >45) {
        CKDstage = 'The patient has stage 3A chronic kidney disease'
    } else if (GFR <= 45 && GFR >30) {
        CKDstage = 'The patient has stage 3B chronic kidney disease'
    } else if (GFR <= 30 && GFR >15) {
        CKDstage = 'The patient has stage 4 chronic kidney disease'
    } else if (GFR <= 15) {
        CKDstage = 'The patient has stage 5 chronic kidney disease'
    }
    document.getElementById('currentCKDstage').innerHTML = CKDstage;
    return GFR;
}

// Framingham Score Calculator

// Reference: https://www.ahajournals.org/doi/10.1161/01.cir.97.18.1837?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed

const framinghamScoreOutput = document.getElementById('framinghamscore');
const CVDRiskEstimate = document.getElementById('CVDriskcategory');
const currentLDLSpan = document.getElementById('currentLDL');
const targetLDLSpan = document.getElementById('targetLDL');
const patientLDL = document.getElementById('LDL');
const patientHDL = document.getElementById('HDL');
const patientSBP = document.getElementById('SBP');
const patientApoB = document.getElementById('ApoB');

const DMCheckbox = document.getElementById('DM');
const SmokerCheckbox = document.getElementById('smoking');
const PMHCVDCheckbox = document.getElementById('CVD');
const CholCheckBox = document.getElementById('takingcholmeds');


const framinghamButtons = document.getElementsByClassName('framinghamcalc');
for (let i=0; i<framinghamButtons.length; i++) {
    framinghamButtons[i].addEventListener('change', calculateFramingham);
}

function calculateFramingham(e) {
    e.preventDefault();
    let Age = patientAge.value;
    let agePts;
    if (Age >= 30 && Age <= 35) {
        agePts = -9;
    } else if (Age > 35 && Age <= 39) {
        agePts = -4;
    } else if (Age > 39 && Age <= 44) {
        agePts = 0;
    } else if (Age > 44 && Age <= 49) {
        agePts = 3;
    } else if (Age > 49 && Age <= 54) {
        agePts = 6;
    } else if (Age > 54 && Age <= 59) {
        agePts = 7;
    } else if (Age > 59 && Age <= 64) {
        agePts = 8;
    } else if (Age > 64 && Age <= 69) {
        agePts = 8;
    } else if (Age > 69) {
        agePts = 8;
    } else {
        alert('minimum age for Framingham calculation is 30 years');
    }
    console.log(`FRS Agepts =${agePts}`)

    let LDLC = patientLDL.value;
    let LDLpts;
    if (LDLC < 2.59) {
        LDLpts = -2;
    } else if (LDLC > 2.59 && LDLC  <= 4.15) {
        LDLpts = 0;
    } else if (LDLC > 4.15) {
        LDLpts = 2;
    }
    console.log(`FRS LDLpts =${LDLpts}`)

    let HDLC = patientHDL.value;
    let HDLpts;
    if (HDLC < 0.9 ) {
        HDLpts = 5;
    } else if (HDLC >= 0.9 && HDLC < 1.16) {
        HDLpts = 2;
    } else if (HDLC >= 1.16 && HDLC < 1.29) {
        HDLpts = 1;
    } else if (HDLC >= 1.30 && HDLC < 1.55 ) {
        HDLpts = 0 ;
    } else if (HDLC >= 1.55) {
        HDLpts = -2;
    } 
    console.log(`FRS HDLpts =${HDLpts}`)

    let SBP = patientSBP.value;
    let SBPpts;
    if (SBP < 120) {
        SBPpts = -3;
    } else if (SBP >= 120 && SBP < 140) {
        SBPpts = 0;
    } else if (SBP >= 140 && SBP < 160 ) {
        SBPpts = 2;
    } else if (SBP >= 160) {
        SBPpts = 3;
    }
    console.log(`FRS SBPpts =${SBPpts}`);

    let DMpts;
    if (DMCheckbox.checked) {
        DMpts = 4;
    } else {
        DMpts = 0;
    }
    console.log(`FRS DMpts =${DMpts}`);

    let smokerpts;
    if (SmokerCheckbox.checked) {
        smokerpts =2;
    } else {
        smokerpts = 0;
    }
    console.log(`FRS Smokerpts =${smokerpts}`);

    let targetLDLValue ='';
    if (PMHCVDCheckbox.checked) {
        framinghamScoreOutput.innerHTML ='Prior History of CVD';
        CVDRiskEstimate.innerHTML = 'Elevated';
        targetLDLValue = 1.8;
        targetLDLSpan.innerHTML = ` Less than ${targetLDLValue} mmol/L`;
        CVDRiskEstimate.classList.add('riskColorHigh');
        CVDRiskEstimate.classList.remove('riskColorLow');
        CVDRiskEstimate.classList.remove('riskColorModerate');
        currentLDLSpan.innerHTML = ` ${patientLDL.value} mmol/L`;
        if (patientLDL.value > targetLDLValue ) {
            currentLDLSpan.classList.add('riskColorHigh');
            currentLDLSpan.classList.remove('riskColorLow');
        } else {
            currentLDLSpan.classList.add('riskColorLow');
            currentLDLSpan.classList.remove('riskColorHigh');
        }

    } else {
        let TotalCVDpts = agePts + LDLpts + HDLpts + SBPpts + DMpts + smokerpts;
        console.log(`TotalCVDPts = ${TotalCVDpts}`);
            if (TotalCVDpts <= -2) {
                riskPercentage = 1;
                framinghamScoreOutput.innerHTML =`Less than or equal to ${riskPercentage}%`
            } else if (TotalCVDpts > -2 && TotalCVDpts <= 1) {
                riskPercentage = 2;
                framinghamScoreOutput.innerHTML =`${riskPercentage}%`
            } else if (TotalCVDpts > 1 && TotalCVDpts <= 3 ) {
                riskPercentage = 3 ;
                framinghamScoreOutput.innerHTML =`${riskPercentage}%`
            } else if (TotalCVDpts == 4) {
                riskPercentage = 4;
                framinghamScoreOutput.innerHTML =`${riskPercentage}%`
            } else if (TotalCVDpts == 5) {
                riskPercentage = 5 ;
                framinghamScoreOutput.innerHTML =`${riskPercentage}%`
            } else if (TotalCVDpts == 6) {
                riskPercentage = 6 ;
                framinghamScoreOutput.innerHTML =`${riskPercentage}%`
            } else if (TotalCVDpts == 7) {
                riskPercentage = 7 ;
                framinghamScoreOutput.innerHTML =`${riskPercentage}%`
            } else if (TotalCVDpts == 8) {
                riskPercentage = 8 ;
                framinghamScoreOutput.innerHTML =`${riskPercentage}%`
            } else if (TotalCVDpts == 9) {
                riskPercentage = 9 ;
                framinghamScoreOutput.innerHTML =`${riskPercentage}%`
            } else if (TotalCVDpts == 10) {
                riskPercentage = 11 ;
                framinghamScoreOutput.innerHTML =`${riskPercentage}%`
            } else if (TotalCVDpts == 11) {
                riskPercentage = 13 ;
                framinghamScoreOutput.innerHTML =`${riskPercentage}%`
            } else if (TotalCVDpts == 12) {
                riskPercentage = 15;
                framinghamScoreOutput.innerHTML =`${riskPercentage}%`
            } else if (TotalCVDpts == 13) {
                riskPercentage = 17;
                framinghamScoreOutput.innerHTML =`${riskPercentage}%`
            } else if (TotalCVDpts == 14) {
                riskPercentage = 20;
                framinghamScoreOutput.innerHTML =`${riskPercentage}%`
            } else if (TotalCVDpts == 15) {
                riskPercentage = 24;
                framinghamScoreOutput.innerHTML =`${riskPercentage}%`
            } else if (TotalCVDpts == 16) {
                riskPercentage =  27 ;
                framinghamScoreOutput.innerHTML =`${riskPercentage}%`
            } else if (TotalCVDpts >= 17) {
                riskPercentage = 32 ;
                framinghamScoreOutput.innerHTML =`greater than or equal to ${riskPercentage}%`
            }
        console.log(`riskPercentage =${riskPercentage}`)

        if (riskPercentage <=9 ) {
            CVDRiskEstimate.innerHTML ="Low";
            CVDRiskEstimate.classList.add('riskColorLow');
            CVDRiskEstimate.classList.remove('riskColorModerate');
            CVDRiskEstimate.classList.remove('riskColorHigh');
            if (patientLDL.value <= 5.0  && patientApoB.value < 1.45 && !CholCheckBox.checked) {
                targetLDLSpan.innerHTML = " Current LDL is less than or equal to 5.0 mmol/L, the ApoB is less than 1.45 g/L. No treatment required" ; //Consider adding GFR criteria... without breaking the function: && GFRinput.value > 60 && !GFRinput.value !==''
                currentLDLSpan.classList.remove('riskColorHigh');
                currentLDLSpan.classList.remove('riskColorLow');
            } else {
                targetLDLValue = 2.0;
                targetLDLSpan.innerHTML = ` ${targetLDLValue} mmol/L`;
                if (patientLDL.value <= targetLDLValue ) {
                    currentLDLSpan.classList.add('riskColorLow');
                    currentLDLSpan.classList.remove('riskColorHigh');
                } else {
                    currentLDLSpan.classList.add('riskColorHigh');
                    currentLDLSpan.classList.remove('riskColorLow');
                }
            }  

        } else if (riskPercentage > 10 && riskPercentage <= 19) {
            CVDRiskEstimate.innerHTML ="Moderate";
            CVDRiskEstimate.classList.add('riskColorModerate');
            CVDRiskEstimate.classList.remove('riskColorLow');
            CVDRiskEstimate.classList.remove('riskColorHigh');
            if (patientLDL.value <= 3.5 && patientApoB.value < 1.05 && !CholCheckBox.checked) {
                targetLDLSpan.innerHTML = " Current LDL is less than or equal to 3.5 mmol/L, the ApoB is less than 1.05 g/L. No treatment required"
                currentLDLSpan.classList.remove('riskColorHigh');
                currentLDLSpan.classList.remove('riskColorLow');  
            } else {
                targetLDLValue = 2.0;
                targetLDLSpan.innerHTML = ` ${targetLDLValue} mmol/L`;
                if (patientLDL.value <= targetLDLValue ) {
                    currentLDLSpan.classList.add('riskColorLow');
                    currentLDLSpan.classList.remove('riskColorHigh');
                } else {
                    currentLDLSpan.classList.add('riskColorHigh');
                    currentLDLSpan.classList.remove('riskColorLow');
                }
            }
        } else if (riskPercentage > 20) {
            CVDRiskEstimate.innerHTML ="Elevated";
            CVDRiskEstimate.classList.add('riskColorHigh');
            CVDRiskEstimate.classList.remove('riskColorLow');
            CVDRiskEstimate.classList.remove('riskColorModerate');
            targetLDLValue = 2.0;
            targetLDLSpan.innerHTML = ` ${targetLDLValue} mmol/L`;
            if (patientLDL.value <= targetLDLValue ) {
                currentLDLSpan.classList.add('riskColorLow');
                currentLDLSpan.classList.remove('riskColorHigh');
            } else {
                currentLDLSpan.classList.add('riskColorHigh');
                currentLDLSpan.classList.remove('riskColorLow');
            }
        }
        calculateBPValues();
        currentLDLSpan.innerHTML = ` ${patientLDL.value} mmol/L`;
        
    }
    };

// Blood Pressure Management

const currentSBP = document.getElementById('currentSBP');
const currentDBP = document.getElementById('currentDBP');
const currentPulse = document.getElementById('currentpulse');
const targetSBP = document.getElementById('targetSBP');
const targetDBP = document.getElementById('targetDBP');
const targetBPExplanation = document.getElementById('targetBPExplanation');
targetBPExplanation.style.fontSize = 'small';

const patientDBP = document.getElementById('DBP');
const patientPulse = document.getElementById('pulse');

const BPInputButtons = document.getElementsByClassName('BPinput');
for (let i=0; i<BPInputButtons.length; i++) {
    BPInputButtons[i].addEventListener('change', calculateBPValues)
}

let riskPercentage;

function calculateBPValues(e) {
    let sprintBoolean = false;
    if (patientAge.value >= 50 && patientSBP.value >= 130 && CVDRiskEstimate.innerHTML == "Elevated" ) {
        sprintBoolean = true;
        console.log('sprintBoolean is: '+ sprintBoolean);
    } else {
        console.log('sprintBoolean is: '+ sprintBoolean);
    }

    let targetSBPValue;
    let targetDBPValue;
    currentSBP.innerHTML = patientSBP.value;
    currentDBP.innerHTML = patientDBP.value;
    currentPulse.innerHTML = patientPulse.value;


    if (sprintBoolean ===  true && DMCheckbox.checked) {
        targetSBPValue = 120;
        targetDBPValue = 80;
        targetSBP.innerHTML = `Less than ${targetSBPValue} mmHg`
        targetDBP.innerHTML = `Less than ${targetDBPValue} mmHg`
        targetBPExplanation.innerHTML = "Patient with diabetes who does qualify for SPRINT criteria"

    }   else if (sprintBoolean ===  true && !DMCheckbox.checked) {
        targetSBPValue = 120;
        targetDBPValue = 90;
        targetSBP.innerHTML = `Less than ${targetSBPValue} mmHg`
        targetDBP.innerHTML = `Less than ${targetDBPValue} mmHg`
        targetBPExplanation.innerHTML = "Patient without diabetes who qualifies for SPRINT criteria"
    } else if (DMCheckbox.checked && sprintBoolean === false)  {
        targetSBPValue = 130;
        targetDBPValue = 80;
        targetSBP.innerHTML = `Less than ${targetSBPValue} mmHg`
        targetDBP.innerHTML = `Less than ${targetDBPValue} mmHg`
        targetBPExplanation.innerHTML = "Patient with diabetes who does not qualify for SPRINT criteria"
    } else {
        targetSBPValue = 140;
        targetDBPValue = 90;
        targetSBP.innerHTML = `Less than ${targetSBPValue} mmHg`
        targetDBP.innerHTML = `Less than ${targetDBPValue} mmHg`
        targetBPExplanation.innerHTML = "Patient without diabetes who does not qualify for SPRINT criteria"
    }
    
    if (patientSBP.value <= targetSBPValue) {
        currentSBP.classList.add('riskColorLow');
        currentSBP.classList.remove('riskColorHigh');
    } else if (patientSBP.value > targetSBPValue) {
        currentSBP.classList.remove('riskColorLow');
        currentSBP.classList.add('riskColorHigh');
    }

    if (patientDBP.value <= targetDBPValue) {
        currentDBP.classList.add('riskColorLow');
        currentDBP.classList.remove('riskColorHigh');
    }  else if (patientDBP.value > targetDBPValue) {
        currentDBP.classList.remove('riskColorLow');
        currentDBP.classList.add('riskColorHigh');

};
};

// Diabetes checkbox trigger

const A1CInput = document.getElementById('A1C');

A1CInput.addEventListener('change', updateDMCheckBox);

function updateDMCheckBox(e) {
    e.preventDefault();
    if (A1CInput.value >= 6.5) {
        DMCheckbox.checked = true;
        calculateBPValues()

    }
}

//Diabetes Analysis 

const currentA1c = document.getElementById('currenta1c');
const A1cAnalysis = document.getElementById('a1canalysis');

A1CInput.addEventListener('change', updateCurrentA1C);

function updateCurrentA1C(e) {
    e.preventDefault();
    currentA1c.innerHTML = A1CInput.value;
    if (A1CInput.value < 6.5 && A1CInput.value >= 6.0 ) {
        currentA1c.classList.add('riskColorLow');
        currentA1c.classList.remove('riskColorModerate');
        currentA1c.classList.remove('riskColorHigh');
        A1cAnalysis.innerHTML = 'A1C is at or below target value. If the patient is not being treated for diabetes, they are currently pre-diabetic.'
    } else if (A1CInput.value > 6.4 && A1CInput.value < 7.1 ) {
        currentA1c.classList.remove('riskColorLow');
        currentA1c.classList.add('riskColorModerate');
        currentA1c.classList.remove('riskColorHigh');
        A1cAnalysis.innerHTML = 'A1C is at or below target value. The patient has well-controlled diabetes.'
    } else if (A1CInput.value >= 7.1) {
        currentA1c.classList.remove('riskColorLow');
        currentA1c.classList.remove('riskColorModerate');
        currentA1c.classList.add('riskColorHigh');
        A1cAnalysis.innerHTML = 'A1C is above target value. The patient may need a change in therapy.'
} else if (A1CInput.value < 6.0 ) {
        currentA1c.classList.add('riskColorLow');
        currentA1c.classList.remove('riskColorModerate');
        currentA1c.classList.remove('riskColorHigh');
        A1cAnalysis.innerHTML = 'A1C is at or below target value. If the patient is not being treated for diabetes, they are currently not diabetic.'
}
}

//Medication Section CSS and Display Logic

const antihypertensiveList = document.getElementById('antihypertensivelist');
const antihypertensiveListButton = document.getElementById('antihtbutton');
const medicationListItem = document.getElementsByClassName('medicationlistitem');
for (let i=0; i<medicationListItem.length; i++) {
    medicationListItem[i].addEventListener('click', toggleSelectedStatus)
};

function toggleSelectedStatus(e) {
    e.preventDefault()
    e.target.classList.toggle('selected');
}

antihypertensiveListButton.onclick = () => {
    antihypertensiveList.classList.toggle('visible');
    antihypertensiveList.classList.toggle('hidden');
}

const antiDMlist = document.getElementById('antidmlist');
const antiDMListButton = document.getElementById('antidmbutton');

antiDMListButton.onclick = () => {
    antiDMlist.classList.toggle('visible');
    antiDMlist.classList.toggle('hidden');
}

const antiDlplist = document.getElementById('antidlplist');
const antiDlpListButton = document.getElementById('antidlpbutton');

antiDlpListButton.onclick = () => {
    antiDlplist.classList.toggle('visible');
    antiDlplist.classList.toggle('hidden'); 
}

const antiSmokinglist = document.getElementById('antismokinglist');
const antiSmokingListButton = document.getElementById('antismokingbutton');

antiSmokingListButton.onclick = () => {
    antiSmokinglist.classList.toggle('visible');
    antiSmokinglist.classList.toggle('hidden'); 
}

const antiPlateletlist = document.getElementById('antiplateletlist');
const antiPlateletListButton = document.getElementById('antiplateletbutton');

antiPlateletListButton.onclick = () => {
    antiPlateletlist.classList.toggle('visible');
    antiPlateletlist.classList.toggle('hidden'); 
}

// Medication Section Add Note

const addmedicationul=document.getElementById("addmedicationlist");


document.getElementById("addmedications").addEventListener('keydown', addLiMed )

function addLiMed(e) {
    if (e.key === 'Enter'){
        const inp=document.getElementById("addmedications");
        if(inp.value==""){ 
            alert("Please enter data");
        } else {
            addmedicationul.innerHTML+=`<li class="addli">${inp.value}<span class="removeli">\u00D7</span></li>`
        inp.value=""
        }
    }
  
};


addmedicationul.onclick=ev=>
  ev.target.tagName=="SPAN" 
  && ev.target.parentNode.tagName=="LI"
  && ev.target.parentNode.remove();


//Manipulation of the therapeutic option section
const unselectedOptions = document.getElementsByClassName('unselectedoption');
for (let i=0; i<unselectedOptions.length; i++){
    unselectedOptions[i].addEventListener("click", toggleEmphasize)
}

function toggleEmphasize(e) {
    e.preventDefault();
    e.target.classList.toggle('unselectedoption')
};



// External JS module linkages

const ACEIbutton = document.getElementById('ACEi');
ACEIbutton.addEventListener('click', loadACEiList)

function loadACEiList(e) {
    ACEIbutton.appendChild(document.createElement('select'))
        .setAttribute('id', 'ACEilist');
        document.getElementById('ACEilist').classList.add('Rxselectoroption');
    const ACEilist = document.getElementById('ACEilist');
    ACEilist.appendChild(document.createElement("option"))
        .setAttribute('id', 'perindoprillist')
    document.getElementById('perindoprillist').innerHTML += 'Perindopril';
    ACEilist.appendChild(document.createElement("option"))
        .setAttribute('id', 'ramiprillist');
        document.getElementById('ramiprillist').innerHTML += 'Ramipril';
    ACEilist.appendChild(document.createElement("option"))
        .setAttribute('id', 'trandolaprillist');
        document.getElementById('trandolaprillist').innerHTML += 'Trandolapril';
    ACEilist.appendChild(document.createElement("option"))
        .setAttribute('id', 'quinaprillist');
        document.getElementById('quinaprillist').innerHTML += 'Quinapril';
    ACEilist.appendChild(document.createElement("option"))
        .setAttribute('id', 'enalaprillist');
        document.getElementById('enalaprillist').innerHTML += 'Enalapril';
    ACEilist.appendChild(document.createElement("option"))
        .setAttribute('id', 'fosinoprillist');
        document.getElementById('fosinoprillist').innerHTML += 'Fosinopril';
    ACEIbutton.removeEventListener('click', loadACEiList);
    
        // document.getElementById(`Perindopril${[i]}`).textContent = `Perindopril ${i**(i-1)}mg PO daily`
    }





