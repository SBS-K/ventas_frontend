import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TRMService } from 'src/app/core/service/trm/trm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public diaActualTMR: any = {
    value : 'No esta disponible el TMR',
    unit: '.'
  };

  constructor(
    private trmService: TRMService
  ) { }

  ngAfterViewInit(): void {
    this.consultarTRM();
  }

  ngOnInit(): void {
  }

  private consultarTRM() {
    let fechaActual = moment().format('YYYY-MM-DD').toString();
    this.trmService.consultar(fechaActual).subscribe( (datos) => {
      datos && datos.data && datos.data.success ? this.diaActualTMR = datos.data as any : null ;
    })
  }

}
