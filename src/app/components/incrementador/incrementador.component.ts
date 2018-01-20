import { Component, OnInit, Input ,Output ,EventEmitter, ViewChild,ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda'; 
  @Input() progreso: number = 50;
  
  @Output() cambioValor: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onChanges(newValue:number){

    this.progreso=newValue;

    if ( this.progreso > 100 ) {

      this.progreso = 100;

    }
    else if ( this.progreso < 0 ) {

      this.progreso = 0;

    }

    this.txtProgress.nativeElement.value =  this.progreso;

    this.cambioValor.emit(newValue);
    
    this.txtProgress.nativeElement.focus();
    
  }

  cambiarValor(valor:number){

    if ((this.progreso < 100 && valor > 0 )|| (this.progreso > 0 && valor < 0)){
      this.progreso += valor;
      this.cambioValor.emit(this.progreso);
    }

  }

}
