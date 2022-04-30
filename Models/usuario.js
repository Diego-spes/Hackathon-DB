const db = require('../Util/database');

module.exports = class Paciente{
    
    constructor(_nombre, _apellidoP,_apellidoM,_numTelP,_diabetes){
    
        this.Nombre = _nombre;
        this.ApellidoP = _apellidoP;
        this.ApellidoM = _apellidoM;
        this.NumTelP = _numTelP;
        this.Diabetes = _diabetes;
    };
    
    static getPaciente(){
        return db.execute('SELECT * FROM Pacientes WHERE idPaciente = (?)'), [this.id]
    };

    static fetchOnePaciente(idPaciente) {
        return db.execute('SELECT * FROM Empleado WHERE idPaciente=?', [idPaciente]);
    };

}