// All ACEi medications available in Canada

import medication from './Pharmacopoeia.js';

const ramipril = new medication ('Ramipril', 'Altace', [1.25, 2.5, 5, 7.5, 10], 'mg', 'once daily', 'per os');
const perindopril = new medication ('Perindopril', 'Coversyl', [1,2,4,8,16], 'mg', 'once daily', 'per os');
const trandolapril = new medication ('Trandolapril', 'Mavik', [1,2,4], 'mg', 'once daily', 'per os');
const enalapril = new medication ('Enalapril', 'Vasotec', [5, 10, 20, 40], 'mg', 'once daily', 'per os');
const benazepril = new medication ('Benazepril', 'Lotensin', [10, 20, 40], 'mg', 'once daily', 'per os');
const captopril = new medication ('Captopril', 'Capoten', [6.25, 12.5, 25, 50], 'mg', 'three times daily', 'per os');
const quinapril = new medication ('Quinapril', 'Accupril', [10, 20, 40], 'mg', 'once daily', 'per os');
const fosinopril = new medication ('Fosinopril', 'Monopril', [10, 20, 40], 'mg', 'once daily', 'per os');

export {ramipril, perindopril, trandolapril, enalapril, benazepril, captopril, quinapril, fosinopril };
export { medication };



