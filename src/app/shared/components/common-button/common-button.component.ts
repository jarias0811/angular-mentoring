import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss']
})
export class CommonButtonComponent {

  @Input() text: string = '';
  @Output() customClick: EventEmitter<string> = new EventEmitter<string>();

  onClick(event: any) {
    this.customClick.emit('Yo soy la respuesta');
  }
}
