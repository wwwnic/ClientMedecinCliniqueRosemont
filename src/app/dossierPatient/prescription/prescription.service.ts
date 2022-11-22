import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { IPrescription } from "./prescription.model";


@Injectable({ providedIn: 'root'})
export class PrescriptionService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<HttpResponse<IPrescription[]>> {
        return this.http.get<IPrescription[]>('http://localhost:7002/Prescription/GetAll', { observe: 'response' });
    }

    getByPatientId(id:number): Observable<HttpResponse<IPrescription[]>> {
        return this.http.get<IPrescription[]>('http://localhost:7002/Prescription/GetByPatientId?id='+id.toString(), { observe: 'response' });
    }
}