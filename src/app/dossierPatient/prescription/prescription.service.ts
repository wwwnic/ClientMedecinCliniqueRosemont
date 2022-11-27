import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { IPrescription } from "./prescription.model";


@Injectable({ providedIn: 'root'})
export class PrescriptionService {

    _prescriptions : IPrescription[] = [];
    prescriptions = new Subject<IPrescription[]>();

    constructor(private http: HttpClient) { }

    getAll(): Observable<HttpResponse<IPrescription[]>> {
        return this.http.get<IPrescription[]>('http://localhost:7002/Prescription/GetAll', { observe: 'response' });
    }

    getPrescriptions(userID:number) {
        this.loadPrescription(userID);
        return this.prescriptions;
    }

    loadPrescription(userID:number) {
        if (userID !== 0) {
        this.getByPatientId(userID)
            .subscribe((res: HttpResponse<IPrescription[]>) => {
                this._prescriptions = res.body ?? [];
                this.prescriptions.next(this._prescriptions);
            });
        }
    }

    getByPatientId(id:number): Observable<HttpResponse<IPrescription[]>> {
        return this.http.get<IPrescription[]>(`http://localhost:7002/Prescription/GetByPatientId?id=${id}`, { observe: 'response' });
    }
}