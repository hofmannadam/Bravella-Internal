
function translateCreatToGFR(patientAge, creatinine, ptSex, targetGFROutput) {
    let A;
    let B;
    let age = patientAge;
    let Scr = creatinine;
    let ScrNonSI = Scr/88.4;
    let sex = ptSex;



        if (sex == 'M' && ScrNonSI <= 0.9) {
            A = 0.9;
            B = -0.302;
        } else if (sex == 'M' && ScrNonSI > 0.9) {
            A = 0.9;
            B = -1.2;
        } else if (sex == 'F' && ScrNonSI <= 0.7) {
            A = 0.7;
            B =  -0.241;
        } else if (sex == 'F' && ScrNonSI > 0.7) {
            A = 0.7;
            B = -1.2;
        }
    
       let GFR = sex == 'F' ? 142 * (ScrNonSI/A)**B * 0.9938**age * 1.012 : 142 * (ScrNonSI/A)**B * 0.9938**age ; 
    
    
    console.log(`The patient's age = ${age}`);
    console.log(`Scr = ${Scr} and its value in non SI is ${Scr/88.4} (Should equal ${ScrNonSI})`)
    console.log(`A = ${A} and B = ${B} and the patient's sex is recorded here as ${ sex == 'M' ? "M" : "F" }`);
    console.log(`The patient's GFR is = ${GFR.toFixed(2)}`);

    (GFR > 0 && GFR < 150) ? targetGFROutput.value = GFR.toFixed(2) : null ;

    return GFR;
}


function calculateCKDStage (GFR) {
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
    return CKDStage;
}

export {translateCreatToGFR, calculateCKDStage};

