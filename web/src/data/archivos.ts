// El «sistema de archivos» del sitio. El orden es el de lectura (anterior / siguiente).

export interface Archivo {
  id: string; // ancla en la URL (#id)
  ruta: string; // lo que se ve en el explorador y en la pestaña
  carpeta?: string;
  ext: "md" | "ts" | "tsx" | "sql" | "yml" | "sh";
  titulo: string; // para el <title> y lectores de pantalla
  borrador?: boolean;
}

export const archivos: Archivo[] = [
  { id: "hola", ruta: "hola.md", ext: "md", titulo: "Hola" },
  { id: "webs", ruta: "servicios/webs-y-apps.tsx", carpeta: "servicios", ext: "tsx", titulo: "Webs y apps a medida" },
  { id: "turnos", ruta: "servicios/turnos.ts", carpeta: "servicios", ext: "ts", titulo: "Turnos y sistemas de gestión" },
  { id: "tableros", ruta: "servicios/tableros.sql", carpeta: "servicios", ext: "sql", titulo: "Dashboards y análisis de datos" },
  { id: "nube", ruta: "servicios/nube.yml", carpeta: "servicios", ext: "yml", titulo: "Nube, infraestructura y arquitectura" },
  { id: "sistema", ruta: "todo-conectado.md", ext: "md", titulo: "Cómo se arma el sistema" },
  { id: "para-quien", ruta: "para-quien.md", ext: "md", titulo: "Para quién" },
  { id: "como-trabajo", ruta: "como-trabajo.md", ext: "md", titulo: "Cómo trabajo" },
  { id: "caso-consultorio", ruta: "casos/turnos-consultorio.md", carpeta: "casos", ext: "md", titulo: "Caso: turnos para un consultorio", borrador: true },
  { id: "sobre-mi", ruta: "sobre-mi.md", ext: "md", titulo: "Sobre mí" },
  { id: "contacto", ruta: "contacto.sh", ext: "sh", titulo: "Contacto" },
];

export const nombre = (a: Archivo) => a.ruta.split("/").pop() ?? a.ruta;
