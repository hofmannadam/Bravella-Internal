import medication from './Pharmacopoeia.js';

const amlodipine = new medication ('Amlodipine', 'Norvasc', [2.5, 5, 7.5, 10], 'mg', 'once daily', 'per os');
const diltiazem = new medication ('Diltiazem LA', 'Tiazac XC', [120, 240, 360, 480], 'mg', 'once daily', 'per os');
const felodipine = new medication ('Felodipine', 'Plendil', [2.5, 5, 7.5, 10], 'mg', 'once daily', 'per os');
const nifedipine = new medication ('Nifedipine XL', 'Adalat XL', [30, 60, 90], 'mg', 'once daily', 'per os');
const verapamil = new medication ('Verapamil SR', 'Isoptin SR', [120, 240, 360, 480], 'mg', 'once daily', 'per os');


export {amlodipine, diltiazem, felodipine, nifedipine, verapamil };
export { medication };






// amlodipine (Norvasc)
// diltiazem (Cardiazem, Tiazac, Tiazac XC )
// felodipine (Plendil)
// nifedipine XL (Adalat XL)
// verapamil (Isoptin, Isoptin SR, Verelan)
