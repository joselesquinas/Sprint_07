// presupuesto calculo economico, para importe total
export interface Budget {
   web: number;
   paginas: number;
   idiomas: number;
   complemento: number;
   seo: number;
   googleAds: number;
   total: number;
}

// presupuesto detallado para albaran
export interface Presupuesto {
   idPpto: string;
   nomCli: string;
   totalPpto: string;
   fecha: string;
}










