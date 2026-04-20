# Version Control Best Practices (Git Workflow)

Para mantener la robustez y trazabilidad de SolidBit, sigue este flujo de trabajo:

## 1. Estrategia de Ramificación (Git Flow Adaptado)
- **`main`**: Siempre contiene código estable listo para producción. NUNCA commits directos.
- **`develop`**: Rama principal de desarrollo donde se integran las funcionalidades.
- **`feature/nombre-de-funcionalidad`**: Ramas para desarrollo de nuevas tareas.
- **`fix/nombre-del-problema`**: Ramas para correcciones inmediatas.

## 2. Convenciones de Commits (Conventional Commits)
Usa un formato estructurado para los mensajes:
`tipo(alcance): descripción breve`

- **feat**: Nueva funcionalidad.
- **fix**: Corrección de error.
- **docs**: Cambios en documentación.
- **style**: Cambios de estilo (CSS, formato).
- **refactor**: Cambios que no añaden funcional ni corrigen errores.
- **chore**: Tareas de configuración, scripts de build, etc.

Ejemplo: `feat(contact): añadir email lawlieeet@outlook.es`

## 3. Pull Requests (PR)
- Toda integración a `develop` o `main` debe hacerse mediante **Pull Request**.
- El PR debe ser revisado al menos por un integrante y pasar todas las pruebas (lint, build).

---
*Para mantener la "Psicología de Seriedad Industrial", la limpieza y claridad del historial de commits es tan importante como el código mismo.*
