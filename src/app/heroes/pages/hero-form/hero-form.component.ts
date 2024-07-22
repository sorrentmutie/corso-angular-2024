import { Component } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-form',
  template: `
    <h3>Il form dell'eroe</h3>
    <form #myForm="ngForm" *ngIf="hero" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input [(ngModel)]="hero.name" required minlength="5"  id="nome" 
             #myName="ngModel"
             name="nome" type="text" class="form-control">

        @if(myName.invalid && (myName.dirty || myName.touched )) {
          <div class="alert alert-danger">
            @if(myName.errors && myName.errors['required']) {
              <div> Il nome è obbligatorio </div>   
            }
            @if(myName.errors && myName.errors['minlength']) {
              <div>La lunghezza minima è di 5 caratteri</div> 
            }           
          </div> 
        }


       
      </div>
      <div class="form-group">
        <label for="alterEgo">Alter Ego</label>
        <input [(ngModel)]="hero.alterEgo" id="alterEgo" 
             name="alterEgo" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="superPotere">Super Potere</label>
        <select id="superPotere" name="superPotere" class="form-control"
         [(ngModel)]="hero.power">
          <option *ngFor="let power of powers" [value]="power">
            {{power}}
          </option>
        </select>
      </div>
      <button [disabled]="!myForm.valid" type="submit" class="btn btn-success mt-3 mb-3">OK</button>
      <button type="button" (click)="reset();myForm.reset()" class="btn btn-warning">Reset</button>


    </form>
  `,
  styles: ``
})
export class HeroFormComponent {
   hero: Hero | null = null;
   powers: string[] = ['Genius', 'Fly', 'Invisible', 'Magician'];

   constructor() {
     this.hero = new Hero(1, 'Superman', 'Fly', 'Clark Kent');
   }

   reset() {
     this.hero = new Hero(1, '', 'Fly', 'Clark Kent');
   }

   onSubmit() {
    console.log(this.hero);
  } 

}
