import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-com-Matheus-Battisti';

  nomeComponentePai = 'João';

  userData = {
    email: 'joao@gmail.com',
    password: 'admin123'
  }
}
