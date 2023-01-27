import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice-1';
  title2 = 'practice-2';
  title3 = 'Hola Mundo';

  finalClick(response: string) {
    alert('This is an Output ' + response)
  }

  finalClick2(response: string) {
    alert('Amo el futbol' + response)
  }

  finalClick3(response: string) {
    alert('Hoy gana argentina ' + response)
  }
}
