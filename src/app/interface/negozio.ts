import { Ordine } from './ordine';
import { Prodotto } from './prodotto';
export interface Negozio {
  id?: string;
  nome: string;
  p_iva: number;
  id_esercente: string;
  id_indirizzo?: any;
  ordini?: Ordine[];
  prodotti?: string[];
}
