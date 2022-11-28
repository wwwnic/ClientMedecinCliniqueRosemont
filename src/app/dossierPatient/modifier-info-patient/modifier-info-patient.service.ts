import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ipatient } from './modifier-info-patient.model';

@Injectable({ providedIn: 'root' })
export class ModifierInfoPatientService {

    constructor(private http: HttpClient) { }

    AjouterInfoAuDossier(info: Ipatient): Observable<any> {
        return this.http.patch<any>('http://localhost:7002/Patient/ModifyMedicalInfo', info)
    }
}