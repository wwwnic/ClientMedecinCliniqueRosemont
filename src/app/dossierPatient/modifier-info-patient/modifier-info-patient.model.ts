

export interface Ipatient {
    id: number,
    nom: string,
    prenom: string,
    password: string,
    email: string,
    ddn: string,
    age: number,
    sexe: string,
    allergies: string
}

export class Patient implements Ipatient {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public password: string,
        public email: string,
        public ddn: string,
        public age: number,
        public sexe: string,
        public allergies: string
    ){}
}