# contacto Specification

## Purpose
Que escribirle a Juanma esté a un toque desde cualquier parte del sitio, por el canal que prefiera el visitante.

## Requirements

### Requirement: Canales en orden de preferencia
El sitio SHALL ofrecer WhatsApp como canal principal, después mail y LinkedIn (Instagram cuando exista la cuenta).

#### Scenario: Botón principal
- **WHEN** alguien toca «Escribime»
- **THEN** se abre WhatsApp con un mensaje precargado

### Requirement: Promesas confirmadas
La sección de contacto SHALL decir que la respuesta llega en menos de 24 h hábiles y que cada proyecto se presupuesta, y MUST NOT prometer nada que Juanma no haya confirmado.

#### Scenario: Texto de contacto
- **WHEN** se muestra la sección de contacto
- **THEN** no aparecen precios, plazos de entrega ni «sin compromiso»

### Requirement: Links externos seguros
Los links externos SHALL abrir con `rel="noopener noreferrer"`.

#### Scenario: Link a LinkedIn
- **WHEN** alguien toca LinkedIn
- **THEN** se abre en otra pestaña sin dar acceso a `window.opener`
