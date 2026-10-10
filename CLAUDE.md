# CLAUDE.md

@AGENTS.md

## Específico de Claude Code

- Para cambios que toquen más de 2–3 archivos, arrancá en **plan mode** y mostrá el plan antes de editar.
- Si Juanma cambia de idea sobre algo que está en `docs/`, actualizá ese doc como parte de la tarea.
- Antes de cerrar cualquier tarea visual o de copy, corré el subagente **`revisor-de-marca`**
  (`.claude/agents/revisor-de-marca.md`) y resolvé lo que marque, o explicá por qué no.
- Si tenés un navegador o Playwright disponible, usalo para sacar las capturas de verificación; si no,
  decilo y listá qué tendría que mirar Juanma a mano.
- Respuestas cortas en el chat. El detalle va en el commit o en los docs, no en un ensayo.
- Juanma es ingeniero de datos con 8 años de oficio y maneja front y back: no le expliques lo básico,
  sí explicale los trade-offs.
