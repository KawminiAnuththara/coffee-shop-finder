import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports:[NzLayoutModule]
})
export class AppComponent {
  title = 'coffee';
}
