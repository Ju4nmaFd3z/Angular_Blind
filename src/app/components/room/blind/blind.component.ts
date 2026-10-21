import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-blind',
  imports: [],
  templateUrl: './blind.component.html',
  styleUrl: './blind.component.css'
})
export class BlindComponent {

  //Inputs y outputs
  blindId = input.required<number>();
  power = input.required<boolean>();
  blindStateOutput = output<string>();

  //Propiedades
  state = 'CERRADA';

  //Eventos
  onClickUpDown() {
    this.state = this.state === 'CERRADA' ? 'ABIERTA' : 'CERRADA';
    this.blindStateOutput.emit(this.state);
  }
}
