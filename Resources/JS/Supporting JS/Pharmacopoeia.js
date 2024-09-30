// Cardiovascular Drugs

class medication {
    constructor (genericName, tradeName, doses, unit, frequency, route) {
    this._genericName = genericName;
    this._tradeName= tradeName;
    this._doses = doses;
    this._unit = unit;
    this._frequency = frequency;
    this._route = route;
    }
    get allDoseLevels() {
        let doseArrays = [];
        for (let i=0; i<this._doses.length; i++) {
            doseArrays.push([this._genericName, this._tradeName, this._doses[i],this._unit,this._frequency, this._route])
        }   
        return doseArrays;
        }
    }
    

export default medication;

