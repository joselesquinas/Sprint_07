
// presupuesto economico, para importe total
export interface Budget {
   web: number;
   paginas: number;
   idiomas: number;
   complemento: number;
   seo: number;
   googleAds: number;
   total: number;
}

// presupuesto detallado para el cliente
export interface presupuesto {
   idPresupuesto: string;
   nombreCli: string;
   total: number;
   fecha: Date;
}

//
