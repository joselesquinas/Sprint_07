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
export interface presupuesto {
   idPpto: string;
   nomCli: string;
   totalPpto: number;
   fecha: string;
}










