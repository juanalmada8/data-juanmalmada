# Tasks

## 1. API: endpoint de contacto

- [ ] 1.1 Modelo de datos (nombre, contacto, qué necesita, mensaje, campo trampa) con largos máximos; verificar con tests de caso feliz y de 422 (`uv run pytest`).
- [ ] 1.2 Servicio de mail con Resend y variables en `.env.example`; verificar con un test que mockea el cliente y comprueba destino, asunto y cuerpo.
- [ ] 1.3 Servicio antispam: campo trampa, límite por IP y verificación Turnstile; verificar con tests de 429, trampa completa y desafío inválido.
- [ ] 1.4 Aceptar JSON y formulario HTML (redirección a `/gracias`); verificar con un test por formato.
- [ ] 1.5 Confirmar que no se loguea contenido personal; verificar revisando la salida de logs en un test.
- [ ] 1.6 `ruff`, `mypy` y `pytest` en verde, y CORS limitado al dominio; verificar en CI.

## 2. Web: formulario

- [ ] 2.1 Componente de formulario con etiquetas, `autocomplete` y errores asociados (`aria-describedby`); verificar con teclado y un lector de pantalla.
- [ ] 2.2 Envío sin JavaScript hacia la API y página `/gracias`; verificar con JavaScript desactivado.
- [ ] 2.3 Mejora con JavaScript (envío sin recargar, estados «enviando», «listo» y error en la voz de marca); verificar el flujo en 360, 768 y 1440 px.
- [ ] 2.4 Mantener WhatsApp, mail y LinkedIn junto al formulario; verificar que siguen funcionando si la API está caída.
- [ ] 2.5 Pasar `revisor-de-marca` sobre el copy y el estilo; verificar que no deja observaciones abiertas.

## 3. Entorno y prueba real

- [ ] 3.1 Con las cuentas de Juanma, verificar el dominio en Resend y desplegar la API de preview en Cloud Run; verificar `GET /health` desde la URL pública.
- [ ] 3.2 Enviar un mensaje real desde el preview de la web; verificar que llega a la casilla y no cae en spam.

## 4. Cierre

- [ ] 4.1 Actualizar `03-arquitectura.md`, el ROADMAP (Fase 3), `.env.example` y pendientes; verificar que no hay secretos en el repo (`git grep` de la casilla y las claves).
