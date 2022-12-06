import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IPrescription } from "../prescription/prescription.model";

@Injectable({ providedIn: 'root' })
export class AjouterPrescriptionService {

    constructor(private http: HttpClient) { }

    AjouterInfoAuDossier(info: IPrescription): Observable<any> {
        return this.http.post<any>('http://localhost:7002/api/Prescription', info)
    }
}