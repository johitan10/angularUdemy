export class Marcador {

    public latitud: number;
    public longitud: number;
    public titulo: string = "Sin titulo";
    public descripcion = "Sin descripcion";


    constructor(latitud: number, longitud: number) {
        this.latitud = latitud;
        this.longitud = longitud;
    }

}