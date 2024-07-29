import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/app.component.counter";

@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterModule {

}
