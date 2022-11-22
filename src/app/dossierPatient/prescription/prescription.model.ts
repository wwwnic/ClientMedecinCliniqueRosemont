export interface IPrescription {
    id?: number,
    id_medecin?: number,
    id_patient?: number,
    description?: string,
    notes?: string,
    references?: string
}

export class Prescription implements IPrescription {
    constructor(
        public id: number,
        public id_medecin: number,
        public id_patient: number,
        public description: string,
        public notes: string,
        public references: string
    ){}
}