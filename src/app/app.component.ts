import { Component } from '@angular/core';
import { ReservasService } from './services/reservas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReservasService],
})
export class AppComponent {
  title = 'HDG WebApp';
  data = '';
  constructor(private reservasSvc: ReservasService)
  {}
  
  ngOnInit() {
    this.reservasSvc.getAll().subscribe((res) => {
      console.log('Respuesta', res);
      this.data = JSON.stringify(res);
    });
    
  }
}
