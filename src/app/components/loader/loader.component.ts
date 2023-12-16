import { Component } from '@angular/core';

@Component({
  selector: 'loader',
  template: `<span id="loader" class="loader-ring">
    <span class="loader-ring">
      <img class="loader-inner-sandclock"
      src="assets/resources/time-turner.png">
    </span>
  </span>
  <h2>Cargando...</h2>`,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

}
