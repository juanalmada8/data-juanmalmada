## ADDED Requirements

### Requirement: Solo se publica el sitio
El dominio SHALL servir únicamente el contenido de `web/dist`; los documentos del repo (`docs/`, `AGENTS.md`, `openspec/`, `api/`) MUST NOT ser accesibles desde el sitio.

#### Scenario: Ruta de un documento interno
- **WHEN** alguien abre `juanmalmada.com/docs/pendientes-juanma.md` o `/AGENTS.md`
- **THEN** recibe la página 404 del sitio

### Requirement: Corte sin caída
El cambio al sitio nuevo SHALL hacerse sin que el dominio deje de responder con una página válida en ningún momento.

#### Scenario: Verificación previa
- **WHEN** se prepara el corte
- **THEN** la web nueva se probó antes en una URL de vista previa del mismo proyecto, con el mismo build

#### Scenario: Rollback
- **WHEN** el sitio nuevo falla tras el corte
- **THEN** se puede volver al despliegue anterior desde el panel en minutos, sin tocar el código

### Requirement: Vista previa por pull request
Cada pull request SHALL generar una URL de vista previa del sitio, accesible desde el propio PR.

#### Scenario: PR con cambios en la web
- **WHEN** se abre un PR que toca `web/`
- **THEN** el PR muestra una URL de vista previa con el build de esa rama

### Requirement: Condiciones para publicar
El sitio MUST NOT publicarse con marcadores `[[FALTA: …]]` visibles ni con observaciones de `revisor-de-marca` abiertas.

#### Scenario: Marcador visible
- **WHEN** el build contiene el texto `[[FALTA`
- **THEN** la verificación previa al corte falla

### Requirement: HTTPS y dominio principal
El sitio SHALL servirse solo por HTTPS, redirigir `www.juanmalmada.com` a `juanmalmada.com` y declarar cabeceras de seguridad básicas.

#### Scenario: Pedido por HTTP
- **WHEN** alguien abre `http://juanmalmada.com`
- **THEN** es redirigido a `https://juanmalmada.com`

#### Scenario: Cabeceras
- **WHEN** se consulta la home
- **THEN** la respuesta incluye `X-Content-Type-Options: nosniff`, `Referrer-Policy` y una política de frames que impide embeber el sitio

### Requirement: Conservar el contenido del sitio viejo
El contenido del sitio anterior SHALL conservarse en `legacy/` hasta que Juanma confirme su borrado, y su contacto (mail, WhatsApp, LinkedIn) MUST estar migrado antes del corte.

#### Scenario: Antes de borrar `legacy/`
- **WHEN** se propone borrar `legacy/`
- **THEN** se hace en un PR aparte, después de que Juanma lo confirme
