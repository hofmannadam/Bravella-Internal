// JS for Osteoporosis.html

import {toggleDiv, addToggleHiddenEventListener} from './Supporting JS/toggleHiddenCheckBox.js'; //employ top level: addToggleHiddenEventListener(targetCheckBoxElement, divToTarget)
import {translateCreatToGFR, calculateCKDStage} from './Supporting JS/CKDEpiGFRCalculator.js'; //calculateCKDStage (GFR) return CKDStage --- translateCreatToGFR(patientAge, creatinine, sex, targetGFROutput) return GFR


// BMI Section
const htInCm = document.getElementById('htInCm');
const htInIn = document.getElementById('htInIn');
const wtInKg = document.getElementById('wtInKg');
const wtInLbs = document.getElementById('wtInLbs');

const BMICalcEventClass = document.getElementsByClassName('BMICalcEvent');

for (let i=0; i<BMICalcEventClass.length; i++) {
    BMICalcEventClass[i].addEventListener('change', generateBMI);
}

function generateBMI() {
    if (htInIn.value > 0) {
        htInCm.value=(2.54*htInIn.value).toFixed(2);
    }
    if (wtInLbs.value > 0) {
        wtInKg.value=(wtInLbs.value/2.2).toFixed(2);
    }
    
    if (wtInKg.value > 0 && htInCm.value > 0 ) {
            let BMI = wtInKg.value/(htInCm.value/100)**2;
            document.getElementById('BMIvalue').value = BMI.toFixed(2);
            document.getElementById('BMIvalue').value <= 20 ? document.getElementById('BMIcutoff').checked = true : document.getElementById('BMIcutoff').checked = false; 
        };


    };





// Creat to GFR CKD Calc
const patientAge = document.getElementById('patientage');
const patientSexCheckbox = document.getElementsByClassName('patientSexCheckbox');
const creatinine = document.getElementById('creatinine');
const GFRoutput = document.getElementById('GFR')
let patientSex;

for (let i=0; i<2; i++) {
    patientSexCheckbox[i].addEventListener('click', ()=> {
        document.getElementById('patientsexfemale').checked ? patientSex = 'F' : patientSex = 'M';
        translateCreatToGFR(patientAge.value, creatinine.value, patientSex, GFRoutput)
    })
};

creatinine.addEventListener('change', () => {
    document.getElementById('patientsexfemale').checked ? patientSex = 'F' : patientSex = 'M';
    translateCreatToGFR(patientAge.value, creatinine.value, patientSex, GFRoutput)
});
patientAge.addEventListener('change', () => {
    document.getElementById('patientsexfemale').checked ? patientSex = 'F' : patientSex = 'M';
    translateCreatToGFR(patientAge.value, creatinine.value, patientSex, GFRoutput)
});
creatinine.addEventListener('change', () => {
    document.getElementById('patientsexfemale').checked ? patientSex = 'F' : patientSex = 'M';
    translateCreatToGFR(patientAge.value, creatinine.value, patientSex, GFRoutput)
});
    

// Toggle Hidden Divs Section

    //DEXA Div dropdown
const DEXAPerformed = document.getElementById('DEXAPerformed');
const DEXANotPerformed = document.getElementById('DEXANotPerformed');
const DEXAInfoDiv = document.getElementById('DEXAInfo');

addToggleHiddenEventListener(DEXAPerformed,DEXAInfoDiv);
addToggleHiddenEventListener(DEXANotPerformed,DEXAInfoDiv);










