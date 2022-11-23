export interface IinfoPatient {
    id?: number,
    nom?: string,
    prenom?: string,
    email?: string,
    ddn?: string,
    age?: string,
    sexe?: string,
    allergies?: string
}

export class infoPatient implements IinfoPatient {
    constructor(
        public id?: number,
        public nom?: string,
        public prenom?: string,
        public email?: string,
        public ddn?: string,
        public age?: string,
        public sexe?: string,
        public allergies?: string
    ){}
}



