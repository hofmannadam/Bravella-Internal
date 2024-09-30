import medication from './Pharmacopoeia.js';

const candesartan = new medication ('Candesartan', 'Atacand', [8, 16, 32], 'mg', 'once daily', 'per os');
const irbesartan = new medication ('Irbesartan', 'Avapro', [150, 300], 'mg', 'once daily', 'per os');
const losartan = new medication ('Losartan', 'Cozaar', [25, 50, 100], 'mg', 'once daily', 'per os');
const olmesartan = new medication ('Olmesartan', 'Olmetec', [20, 40], 'mg', 'once daily', 'per os');
const valsartan = new medication ('Valsartan', 'Diovan', [80, 160, 320], 'mg', 'once daily', 'per os');


export {candesartan, irbesartan, losartan, olmesartan, valsartan };
export { medication };

