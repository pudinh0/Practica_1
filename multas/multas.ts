type EstadoPrestamo = 'activo' | 'devuelto' | 'vencido';


interface Prestamo {
    folio: string;
    multa: number;
    ejemplar: number;
    estado: EstadoPrestamo;
    socio?: string; // el ? lo vuelve opcional : puede no venir en el objeto prestamo
}

function calcularMulta(prestamo: Prestamo): number {
    const cargoFijo = 50; // Cargo fijo por multa
    return prestamo.multa + cargoFijo;
}

function reciboDe(prestamo: Prestamo): string {

    if (prestamo.socio === undefined) {
        return "recibo de socio no disponible";

    }

    return 'recibo de socio:' + prestamo.socio.toUpperCase();

}

const prestamo: Prestamo = { folio: 'P001', multa: 350, ejemplar: 14, estado: 'vencido', socio: 'Adel Mendez' };

console.log(reciboDe(prestamo), '->', calcularMulta(prestamo));

prestamo.multa="quinientos"; // Error: Type 'string' is not assignable to type 'number'.
reciboDe(); // error: Expected 1 arguments, but got 0.
const nuevoPrestamo: Prestamo = {folio:"p002", multa: 0} // Error: Property 'multa' is missing in type '{ folio: string; }' but required in type 'Prestamo'.
