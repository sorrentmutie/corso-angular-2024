import { Component } from '@angular/core';
import { ReqresService } from '../../services/reqres.service';
import { ReqResCreatedUser, ReqResCreateUser } from '../../models/reqres';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-req-res-form',
  template: `
    <h3>Form di creazione di un utente</h3>
    <form (ngSubmit)="onSubmit()" #myForm="ngForm">
      <div class="form-group">
        <label for="name">Nome</label>
        <input #myName="ngModel" required [(ngModel)]="newUser.name" id="name" name="name" type="text" class="form-control">
       
        @if(myName && myName.invalid && (myName.dirty || myName.touched )) {
          <div class="alert alert-danger" >
            Il nome è obbligatorio
          </div> 
        }
      
      </div>
      <div class="form-group">
        <label for="job">Lavoro</label>
        <input required #myJob="ngModel" [(ngModel)]="newUser.job" id="job" name="job" type="text" class="form-control">
        @if(myJob && myJob.invalid && (myJob.dirty || myJob.touched )) {
          <div class="alert alert-danger" >
            Il lavoro è obbligatorio
          </div> 
        }

      </div>
      <button [disabled]="!myForm.valid" type="submit" class="btn btn-success mt-5 mb-10">Invia</button>    
    </form>
    @if(createdUser | async; as newUser) {
      <div class="alert alert-success">
        <div>Utente creato con successo</div>
        <div>Nome: {{newUser.name}}</div>
        <div>Lavoro: {{newUser.job}}</div>
        <div>Id: {{newUser.id}}</div>
        <div>Creazione: {{newUser.createdAt}}</div>
      </div>
    }
  `,
  styles: ``
})
export class ReqResFormComponent {
   newUser = new ReqResCreateUser("Mario", "Plumber");
   createdUser: Observable<ReqResCreatedUser> | undefined = undefined;


   constructor(private service: ReqresService) {   }

   onSubmit(){
    this.createdUser = this.service.createUser(this.newUser)
    this.newUser = new ReqResCreateUser("","");
   }
}
