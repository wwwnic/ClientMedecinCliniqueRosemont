import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { IinfoPatient } from "./rechercher-dossier.model";


@Injectable({ providedIn: 'root'})
export class RechercherDossierService {

    constructor(private http: HttpClient) { }

    getByPatientId(id:string): Observable<HttpResponse<IinfoPatient[]>> {
        return this.http.get<IinfoPatient[]>('http://localhost:7002/Patient/GetByPatientId?id='+id, { observe: 'response' });
    }
}