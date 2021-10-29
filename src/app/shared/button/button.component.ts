import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() iconConfirm: string;
  @Input() iconCancel: string;
  @Input() textConfirm?: string = 'Salvar';
  @Input() textCancel?: string = 'Cancelar';
  @Input() colorConfirm?: string = 'primary';
  @Input() colorCancel?: string = 'warn';

  @Output() btnConfirm = new EventEmitter<any>();
  @Output() btnCancel = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickBtnConfirm(): void {
    this.btnConfirm.emit();
  }

  clickBtnCancel(): void {
    this.btnCancel.emit()
  }
}
