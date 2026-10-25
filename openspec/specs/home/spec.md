# home Specification

## Purpose
La home tiene que dejar claro en 10 segundos qué hace Juanma, mostrar que es real y llevar a escribirle.
Página editorial simple que se scrollea, con el ritmo de color del manual.

## Requirements

### Requirement: Hero que se entiende sin scrollear
La home SHALL mostrar arriba de todo el lema «Un solo proveedor, todo el sistema.», una bajada y el botón para escribir por WhatsApp.

#### Scenario: Celular de 360 px
- **WHEN** alguien abre la home en un celular de 360 px de ancho
- **THEN** ve el título, la bajada y el botón de WhatsApp sin scrollear

### Requirement: Secciones en orden fijo
La home SHALL tener, en este orden: hero, qué hago, todo conectado, para quién, cómo trabajo, proyectos, sobre mí y contacto, cada una con su ancla.

#### Scenario: Navegación por anclas
- **WHEN** alguien toca un link del header (Qué hago, Cómo trabajo, Sobre mí)
- **THEN** la página baja hasta esa sección sin que el header tape el título

### Requirement: Servicios explicados por lo que ahorran
Cada servicio SHALL mostrar el problema en palabras del cliente, qué arma Juanma y qué le ahorra, sin cifras inventadas.

#### Scenario: Servicio sin datos reales de ahorro
- **WHEN** no hay un caso confirmado con números
- **THEN** el ahorro se describe con un ejemplo concreto, nunca con porcentajes o montos

### Requirement: Experiencia real marcada con cuidado
La sección «Para quién» SHALL marcar «ya trabajé en esto» solo en los perfiles con experiencia real confirmada (clínicas y empresas de RRHH).

#### Scenario: Perfil sin experiencia confirmada
- **WHEN** un perfil no tiene experiencia confirmada por Juanma
- **THEN** se muestra solo como ejemplo, sin la marca

### Requirement: Funciona sin JavaScript
Todo el contenido de la home SHALL leerse completo sin JavaScript; el JS solo agrega la aparición al entrar en pantalla.

#### Scenario: Movimiento reducido
- **WHEN** el sistema pide `prefers-reduced-motion: reduce`
- **THEN** no hay animaciones y todo el contenido es visible
