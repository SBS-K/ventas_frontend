import { DetalleCompra } from "../detalle-compra/detalle-compra";

export class Compra {
    id: Number;
    numeroFactura: Number;
    costoTotal: Number;
    estadoCompra: String;
    listaDetalleCompra: Array<DetalleCompra>;
    fechaCompra: Date;
    fechaEnvio: Date;
}