import { Articulo } from "../articulo/articulo";

export class DetalleCompra {
    id: number;
    articulo: Articulo;
    cantidad: number;
    subtotal: number;
}