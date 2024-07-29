import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  public deletedHero?: string;

  public deleteLastHero(): void {
    this.deletedHero = this.heroes.pop();
  }


}
