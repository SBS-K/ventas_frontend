import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticuloService } from 'src/app/feature/articulo/service/articulo.service';
import { Articulo } from 'src/app/shared/models/articulo/articulo';
import { Compra } from 'src/app/shared/models/compra/compra';
import { DetalleCompra } from 'src/app/shared/models/detalle-compra/detalle-compra';
import { VentasContants } from 'src/environments/constanst';
import { CompraService } from '../../service/compra.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-compra-crear',
  templateUrl: './compra-crear.component.html',
  styleUrls: ['./compra-crear.component.scss']
})
export class CompraCrearComponent implements OnInit {

  public compraForm: FormGroup;
  public detalleCompraForm: FormGroup;
  public listaArticulos: Array<Articulo>;
  public listaDetalleCompra: Array<DetalleCompra> = new Array();

  constructor(
    protected articuloService: ArticuloService,
    protected compraService: CompraService,
    private toastr: ToastrService,
    private router: Router,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initFormCompra();
    this.initFormDetalleCompra();
    this.consultarArticulos();
  }

  private initFormCompra() {
    this.compraForm = this.formBuilder.group({
      id: [null],
      numeroFactura: [null],
      costoTotal: [null],
      estadoCompra: [null],
      listaDetalles: [null],
      fechaCompra: [null],
      fechaEnvio: [null],
    });
  }

  private initFormDetalleCompra() {
    this.detalleCompraForm = this.formBuilder.group({
      id: [null],
      articulo: [null],
      cantidad: [null, [Validators.required]],
      subtotal: [null]
    });
  }

  private consultarArticulos() {
    this.articuloService.consultar().subscribe((datos) => {
      this.listaArticulos = datos as Articulo[];
    })
  }

  public numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  public agregarListaDetalle() {
    this.calculaSubtotal();
    let detalleCompra = this.detalleCompraForm.value;
    this.listaDetalleCompra.push(detalleCompra);
    this.limpiarFormDetalleCompra();
  }

  public calculaSubtotal() {
    let articulo = this.detalleCompraForm.get('articulo').value;
    let cantidad = this.detalleCompraForm.get('cantidad').value;
    this.detalleCompraForm.get('subtotal').setValue(articulo.precio * cantidad);
  }

  public eliminarListaDetalle(indexDetalleCompra: number) {
    this.listaDetalleCompra.splice(indexDetalleCompra, 1);
  }

  public setParametrosCompra() {
    this.compraForm.get('costoTotal').setValue(this.calcularCostoTotal());
    this.compraForm.get('estadoCompra').setValue(VentasContants.ESTADO_COMPRA_FINALIZADA);
    this.compraForm.get('fechaCompra').setValue(moment().format('YYYY-MM-DD HH:mm:ss'));
    this.compraForm.get('listaDetalles').setValue(this.listaDetalleCompra);
  }

  public calcularCostoTotal() {
    let costoTotal = 0;
    this.listaDetalleCompra.forEach( (detalleCompra) => {
      costoTotal += detalleCompra.subtotal;
    });
    return costoTotal;
  }

  public guardarCompra() {
    this.setParametrosCompra();
    this.compraService.guardar(this.compraForm.value).subscribe((dato) => {
      this.toastr.success('Su compra se ha realizado exitosamente', 'Compra Exitosa');
      dato ? this.router.navigate(['compra']) : null;
    }, (error) => {
      this.toastr.warning(`${error.message}`, 'Error al realizar compra');
    });
  }

  public limpiarFormDetalleCompra() {
    this.compraForm.reset();
  }


}
