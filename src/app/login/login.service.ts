import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { ILogin } from "./login.model";

@Injectable({ providedIn: 'root' })
export class LoginService {

    constructor(private http: HttpClient) { }
    idMedecin = new Subject<number>();
    password = ""

    subUserId(){
        return this.idMedecin;
    }

    loadUserId(id: number, password: string) {
        this.login(id as number, password as string)
        .subscribe((res: HttpResponse<boolean>) => {
            let estValide = res.body ?? false;
            if(estValide){
                this.idMedecin.next(id);
            } else {
                this.idMedecin.next(-1);
            }
        });
    }
    

    private login(id:number, password:string): Observable<HttpResponse<boolean>> {
        return this.http.post<boolean>(`http://localhost:7002/Medecin/Login`, { 'id': id, 'password': password }, { observe: 'response' })
    }
}
