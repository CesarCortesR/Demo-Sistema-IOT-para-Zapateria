export class Registro{
    $key: string;
    CodigoCalzado: string;
    IDSensor: string;
    Calzado: string;
    Marca: string;
    TipoPersona: string;
    Existencia: string;
    TipoCalzado: string;
    PrecioCompra: string;
    PrecioVenta: string;
    Foto : string;
    Color: string;
    Talla: string;

    Colocacion?: string;
    InteraccionesMarca?: number;
    InteraccionesTipoCalzado?: number;
    IteraccionesTipoPersona?: number;
}

export class ZapatoMostrador{
    $key: string;
    CodigoCalzado: string;
    IDSensor: string;
    Calzado: string;
    Marca: string;
    TipoPersona: string;
    Existencia: string;
    TipoCalzado: string;
    PrecioCompra: string;
    PrecioVenta: string;
    Foto : string;
    Color: string;
    Talla: string;

    Colocacion?: string;
    InteraccionesMarca?: number;
    IteraccionesTipoPersona?: number;
    InteraccionesTipoCalzado?: number;
}

export class Sensores{
    $key: string;
    Tarjeta: string;
    Pin: string;
    IDSensor: string;
    Colocacion: string;
    TipoSensor: string;
    Tiempo: any;
    Estado: string;
    Presencia: string;
    Interacciones: string;
}

export class Clientes{
    $key: string;
    Foto: string;
    LugarProcedencia: string;
    Nombre: string;
    Sexo: string;
    Edad: string;
    NumeroCompras: string;
    NumeroVisitas: string;
    UltimaVisita: string;
    Hora: number;
}

export class Temporal{
    $key: string;
    Cantidad: string;
    Hora: string;
}

export class Ciudad{
    $key: string;
    Ciudad: string;
    Lat: string;
    Lng: string;
    Content?: string;
    Pulation?: string;
}

export class ContadorMarca{
    $key: string;
    Marca: string;
    Contador: string;
}

export class IntervalosInteraccionPasillos{
    $key: string;
    Hora: string;
    NumInteracciones1: string;
    NumInteracciones2: string;
}

export class AtencionCliente{
    $key: string;
    Oracion: string;
    Contador: number;
    Fecha?: string;
    Posicion: number;
}

export class GraficaAtencion{
    $key: string;
    Fecha: string;
    Satisfacciones: string;
}

export class Upload {

    $key: string;
    file: File;
    name: string;
    url: any;
    Color: string;
    progress: number;
    createdAt: Date = new Date();

    constructor(file: File) {
        this.file = file;
    }
}

export class usuarios{
    calle: string;
    colonia: string;
    edad: string;
    email: string;
    estado: string;
    foto: string;
    hora: string;
    municipio: string;
    nombre: string;
    numerocompras: string;
    numerovisitas: string;
    pass: string;
    postal: string;
    sexo: string;
    telefono: string;
    ultimavisita: string;
    usuario: string;
}