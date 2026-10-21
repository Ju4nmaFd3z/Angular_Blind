import { Component } from '@angular/core';
import { RoomComponent } from './components/room/room.component';

@Component({
  selector: 'app-root',
  imports: [RoomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //Propiedades
  title = 'persiana';
  titulo = 'CONTROL DE VIVIENDA';
  powerOutage = false;
  roomOutage = false;
  blindState = 'CERRADA';

  //Eventos
  onConnectDisconnect() {
    this.powerOutage = !this.powerOutage;
  }

  onRoomConnectDisconnect() {
    this.roomOutage = !this.roomOutage;
  }

  onBlindStateChange(state: string) {
    this.blindState = state;
  }
}
