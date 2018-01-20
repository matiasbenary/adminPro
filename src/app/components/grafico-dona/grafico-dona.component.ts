import { Component, OnInit ,Input ,Output} from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // Doughnut
  @Input() ChartLabels:string[] = [];
  @Input() ChartData:number[] = [];
  @Input() ChartType:string = '';
  @Input() leyenda = 'Leyenda';

  constructor() { }

  ngOnInit() {
  }

}
