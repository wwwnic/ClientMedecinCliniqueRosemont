export interface ILogin {
    username?: string;
    pasword?: string;
}

export class Login implements ILogin {
    constructor(
        public usename: string,
        public pasword: string
    ){}
}