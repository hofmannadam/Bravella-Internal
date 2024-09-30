import medication from './Pharmacopoeia.js';

const hctz = new medication ('HCTZ', 'HCTZ', [12.5, 25, 50], 'mg', 'once daily', 'per os');
const furosemide = new medication ('Furosemide', 'Lasix', [20, 40, 80, 160, 320, 500], 'mg', ['once daily', 'twice daily'], 'per os');
const spironolactone = new medication ('Spironolactone', 'Aldactone', [25, 50, 100], 'mg', 'once daily', 'per os');
const amiloride = new medication ('Amiloride', 'Midamor', [5, 10], 'mg', 'once daily', 'per os');
const eplerenone = new medication ('Eplerenone', 'Inspra', [50], 'mg', ['once daily', 'twice daily'], 'per os');


export { hctz, furosemide, spironolactone, amiloride, eplerenone };
export { medication };
