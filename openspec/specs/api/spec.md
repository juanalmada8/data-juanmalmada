# api Specification

## Purpose
Backend en Python para el formulario de contacto y, más adelante, apps y demos. Hoy solo está la base.

## Requirements

### Requirement: Salud del servicio
La API SHALL responder `GET /health` con `{"estado": "ok"}`.

#### Scenario: Chequeo de salud
- **WHEN** se llama `GET /health`
- **THEN** responde 200 con `{"estado": "ok"}`

### Requirement: CORS cerrado
La API SHALL aceptar pedidos de navegador solo desde los orígenes configurados en `ORIGENES_PERMITIDOS`.

#### Scenario: Origen no permitido
- **WHEN** llega un pedido desde un origen que no está en la lista
- **THEN** la respuesta no incluye `access-control-allow-origin`

### Requirement: Secretos fuera del repo
La configuración SHALL leerse de variables de entorno; el repo solo tiene `.env.example` sin valores.

#### Scenario: Variable nueva
- **WHEN** se agrega una variable de configuración
- **THEN** se documenta en `api/.env.example` sin valor real
