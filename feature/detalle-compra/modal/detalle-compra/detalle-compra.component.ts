import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalleCompra } from 'src/app/shared/models/detalle-compra/detalle-compra';
import { DetalleCompraService } from '../../service/detalle-compra.service';

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.scss']
})
export class DetalleCompraComponent implements OnInit {

  @Input() public compraId: String;
  public listaDetalleCompra: Array<DetalleCompra>;

  constructor(
    public modal: NgbActiveModal,
    protected detalleCompraService: DetalleCompraService
  ) { }

  ngOnInit(): void {
    this.consultarDetalleCompra(this.compraId);
  }

  public consultarDetalleCompra(compraId: String) {
    this.detalleCompraService.consultarByCompraId(compraId).subscribe( (datos) => {
      this.listaDetalleCompra = datos as DetalleCompra[];
    });
  }

  public modalclose() {
    this.modal.close({});
  }

}
