import medication from './Pharmacopoeia.js';

const metoprolol = new medication ('Metoprolol', 'Lopressor', [12.5, 25, 50, 75, 100], 'mg', 'twice daily', 'per os');
const bisoprolol = new medication ('Bisoprolol', 'Monocor', [150, 300], 'mg', 'once daily', 'per os');
const acebutolol = new medication ('Acebutolol', 'Sectral', [200, 400], 'mg', 'twice daily', 'per os');
const carvedilol = new medication ('Carvedilol', 'Coreg', [3.125, 6.25, 12.5, 25], 'mg', 'twice daily', 'per os');
const labetalol = new medication ('Labetalol', 'Trandate', [100, 200, 400], 'mg', 'twice daily', 'per os');
const atenolol = new medication ('Atenolol', 'Tenormin', [25, 50, 75, 100], 'mg', 'once daily', 'per os');
const nadolol = new medication ('Nadolol', 'Corgard', [40, 80, 120, 160, 200, 240, 280, 320], 'mg', 'once daily', 'per os');
const propanolol = new medication ('Propanolol', 'Inderal LA', [80, 160], 'mg', 'once daily', 'per os');


export {metoprolol, bisoprolol, acebutolol, carvedilol, labetalol, atenolol, nadolol, propanolol  };
export { medication };


