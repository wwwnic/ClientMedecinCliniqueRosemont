export interface ILogin {
    id: number;
    password: string;
}

export class Login implements ILogin {
    constructor(
        public id: number,
        public password: string
    ){}
}