import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 40;

  public get getCapitalizedName(): string {
    return this.name.toUpperCase();
  }

  public heroInformation(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeName(): void {
    this.name = 'spiderman';
  }

  public changeAge(): void {
    this.age = 22;
  }

  public resetHero(): void {
    this.name = 'ironman';
    this.age = 40;
  }

}
