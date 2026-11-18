// «Y otras cosas que armé»: una línea por proyecto, de rubros distintos (como la lista de proyectos de Etch).
// Solo lo que Juanma cuente: sin nombres de empresas, sin cifras que no sean reales. Mientras esté vacío, la grilla no se muestra.
// Se completa con lo que pase Juanma (docs/pendientes-juanma.md). `destacado` marca con negrita lo que se hizo.
export interface Proyecto {
  linea: string; // la frase completa, ej. «Armé un sistema de turnos para un consultorio.»
  destacado?: string; // fragmento de `linea` que va en negrita, ej. «sistema de turnos»
}

export const proyectos: Proyecto[] = [];
