import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DetalleCompraComponent } from 'src/app/feature/detalle-compra/modal/detalle-compra/detalle-compra.component';
import { Compra } from 'src/app/shared/models/compra/compra';
import { VentasContants } from 'src/environments/constanst';
import { CompraService } from '../../service/compra.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {

  public listaCompras: Array<Compra> = new Array();

  constructor(
    protected compraService: CompraService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.consultarCompras();
  }

  public consultarCompras() {
    this.compraService.consultar().subscribe( (datos) => {
      this.listaCompras = datos as Compra[];
    });
  }

  public verDetalleCompra(compra: Compra) {
    const view = this.modalService.open(DetalleCompraComponent, VentasContants.MODAL_LARGE);
    view.componentInstance.compraId = compra.id;
    view.result
      .then(close => {
      })
      .catch(dismiss => {
      });
  }

  public actualizarEstadoCompra(compra: Compra) {
    let compraDevolucion = this.cambiarCompraEstadoDevolucion(compra);
    this.compraService.actualizar(compraDevolucion).subscribe(() => {
      this.toastr.success('Se actualizo el estado de su compra exitosamente', 'Compra Estado Devolucion');
      this.consultarCompras();
    }, (error) => {
      this.toastr.warning(`${error.message}`, 'Error estado compra');
      this.consultarCompras();
    });
  }

  public cambiarCompraEstadoDevolucion(compra: Compra) {
    compra.estadoCompra = VentasContants.ESTADO_COMPRA_DEVOLUCION;
    return compra;
  }

  public redirectCrearCompra() {
    this.router.navigate(['/compra/crear']);
  }

}
