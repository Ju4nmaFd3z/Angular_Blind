import { Component, computed, input, output } from '@angular/core';
import { BlindComponent } from './blind/blind.component';

@Component({
  selector: 'app-room',
  imports: [BlindComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {

  //Inputs y outputs
  powerOutage = input.required<boolean>();
  roomOutage = input.required<boolean>();
  blindStateOutput = output<string>();

  //Propiedades
  roomId = 1;
  blindId = 1;
  power = computed(() => this.powerOutage() && this.roomOutage());

  //Eventos
  onBlindStateChange(state: string) {
    this.blindStateOutput.emit(state);
  }
}
