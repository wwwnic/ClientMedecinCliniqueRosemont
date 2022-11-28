import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { IinfoPatient } from "./info-patient.model";
import { infoPatient } from "./info-patient.model";

@Injectable({ providedIn: 'root'})
export class InfoPatientService {

    constructor(private http: HttpClient) { }


    _patient : IinfoPatient = new infoPatient();
    patient = new Subject<IinfoPatient>();

    getPatient(userID:number) {
        this.loadPatient(userID);
        return this.patient;
    }

    loadPatient(userID : number) {
        if (userID !== 0) {
            this.getById(userID)
            .subscribe((res: HttpResponse<IinfoPatient>) => {
                this._patient = res.body ?? new infoPatient();
                this.patient.next(this._patient);
            })
        }
    }

    getById(id:number): Observable<HttpResponse<IinfoPatient>> {
        return this.http.get<IinfoPatient>(`http://localhost:7002/Patient/GetById?id=${id}`, { observe: 'response' });
    }

}
