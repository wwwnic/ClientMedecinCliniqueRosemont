import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service'
import { Login } from "./login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(protected router: Router, protected loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.subUserId().subscribe(idMedecin => {
      if(idMedecin > 0){
        this.router.navigate(['/rechercherDossier'])
        this.estInvalide = false
      } else {
        this.estInvalide = true
      }
    });
  }

  estInvalide = false
  id = 0
  password = ""

  goToPrescription(): void {
    this.router.navigate(['/prescription'])
  }

  connexion() {
    this.loginService.loadUserId(this.id,this.password)
  }
}
