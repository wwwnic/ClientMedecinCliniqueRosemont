import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { IPrescription } from "../prescription/prescription.model";


@Injectable({ providedIn: 'root' })
export class AjouterPrescriptionService {

    constructor(private http: HttpClient) { }

    AjouterInfoAuDossier(info: IPrescription): void {

        this.http.post<any>('http://localhost:7002/Prescription/Add', info)
    }
}