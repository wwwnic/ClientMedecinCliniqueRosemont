import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { IinfoPatient } from "./info-patient.model";


@Injectable({ providedIn: 'root'})
export class InfoPatientService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<HttpResponse<IinfoPatient[]>> {
        return this.http.get<IinfoPatient[]>('http://localhost:7002/Patient/GetAll', { observe: 'response' });
    }

    getById(id:number): Observable<HttpResponse<IinfoPatient>> {
        return this.http.get<IinfoPatient>('http://localhost:7002/Patient/GetById?id='+id.toString(), { observe: 'response' });
    }
}
