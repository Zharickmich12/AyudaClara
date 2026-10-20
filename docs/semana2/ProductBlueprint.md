# Product Blueprint

**Nombre del proyecto:** AyudaClara

**Repositorio (enlace obligatorio):** [AyudaClara](https://github.com/Zharickmich12/AyudaClara)

> Los campos marcados como *enlace obligatorio* deben ir como enlace en Markdown, con este formato: `[texto del enlace](https://...)`. Reemplacen el texto y la dirección de ejemplo.

---

## Contenido

1. Priorización de historias
2. Propuesta de valor
3. Flujo de usuario
4. Alcance del MVP
5. Lean Canvas
6. Backlog priorizado (Kanban)
7. Arquitectura inicial
8. Uso de Stellar y justificación

---

## 1. Priorización de historias

> Historias elegidas entre las que propuso el equipo y criterio con que se priorizaron. Son las que pasan al backlog. Extensión: breve.

**Criterio de priorización:** Imprescindible / debería / podría / queda fuera. Pasan al backlog las imprescindibles: las que atacan la pérdida de dinero entre la contratación y la entrega y le permiten a la persona afectada verificar su ayuda.
 
| Prioridad | Historia | Propuesta por | Por qué entra al backlog |
| :---: | --- | :---: | --- |
| 1 | Como persona afectada, quiero consultar la ayuda de mi municipio con un código público y sin entregar mi cédula, para poder verificarla desde un albergue o un celular prestado. | Juan Pablo Sanabria Hoyos | Es el usuario principal del Problem Brief y esta historia resuelve su dolor central: no poder comprobar la ayuda ni distinguirla de una estafa. |
| 2 | Como entidad gestora de la emergencia, quiero que un desembolso solo avance de etapa si la etapa anterior ya quedó registrada, para impedir que se reporte una entrega sin una asignación previa. | Juan Pablo Sanabria Hoyos | Es la regla que evita que el dinero se pierda entre la asignación y la entrega. |
| 3 | Como ONG ejecutora, quiero dejar por separado el momento en que recibo los recursos y el momento en que los entrego, para que se vea qué tramo del recorrido estuvo bajo mi custodia. | Juan Pablo Sanabria Hoyos | Ataca el paso 3 del flujo, donde hoy el ejecutor es juez y parte de su reporte. |
| 4 | Como ONG ejecutora, quiero que la entrega final quede confirmada con la validación del propio beneficiario, para que mi reporte esté respaldado por evidencia verificable y no solo por mi palabra. | Zharick Fetecua | Cierra el hueco de la entrega con una confirmación independiente. |
| 5 | Como donante, quiero ver en qué etapa se encuentra mi donación después de entregarla, para confirmar que fue destinada a la emergencia y no se perdió en el camino. | Zharick Fetecua | Sostiene la confianza del donante y se construye sobre el mismo registro. |
 
---

## 2. Propuesta de valor

> Qué resultado obtiene el usuario y por qué elegiría esta solución. En qué se diferencia de cómo resuelve hoy. Conecta con el usuario del Problem Brief. Extensión: 150–300 palabras en total.

**Usuario (del Problem Brief):** La población afectada por un desastre natural, que necesita recibir ayuda económica de forma rápida y completa.
 
**Resultado que obtiene:** Consulta en cualquier momento, con un código público y sin dar su cédula, en qué etapa está la ayuda destinada a su comunidad y si un subsidio que le ofrecen es real.
 
**Por qué elegiría esta solución:** Obtiene una respuesta inmediata y verificable por sí misma, sin llamadas a oficinas ni comunicados, y la ayuda solo queda como entregada cuando la confirma.
 
**En qué se diferencia de cómo lo resuelve hoy:** Hoy la información está en manos de la entidad que ejecuta, se publica meses después y el control es reactivo. AyudaClara registra cada etapa cuando ocurre, en un registro compartido e inalterable, y no permite avanzar una etapa sin la anterior.
 
---

## 3. Flujo de usuario

> Recorrido de la persona por la solución de principio a fin, roles y puntos de interacción. Diagrama o secuencia numerada. Extensión: 150–300 palabras.

| Paso | Rol | Qué hace | Punto de interacción |
| :---: | :---: | --- | --- |
| 1 | Entidad gestora | Registra el desembolso a un municipio y queda en "Asignado". | Panel web + billetera |
| 2 | ONG ejecutora | Registra que recibió los recursos ("En custodia"). | Panel web + billetera |
| 3 | ONG ejecutora | Deja la ayuda disponible para el beneficiario. | Panel web + billetera |
| 4 | Persona afectada | Consulta la ayuda con el código público, sin cédula. | Página web pública |
| 5 | Persona afectada | Acepta la ayuda y queda "Entregada". | Página web + billetera |
| 6 | Donante | Consulta el recorrido de su aporte con el código. | Página web pública |
 
---

## 4. Alcance del MVP

> Funcionalidad central separada de la deseable que queda fuera. Justificación de por qué el recorte sigue entregando valor. Extensión: 150–300 palabras en total.

| Dentro del MVP (funcionalidad central) | Fuera del MVP (deseable, para después) |
| --- | --- |
| Registro de desembolsos por etapas sin saltar ninguna. | Comparar monto donado vs. monto recibido. |
| Consulta pública por código, sin datos personales. | Panel y alertas para organismos de control. |
| Aceptación de la ayuda por el beneficiario. | Reportes descargables y notificaciones al donante. |
 
**Por qué el recorte sigue entregando valor:** El MVP cubre el recorrido completo de un desembolso, de la asignación a la aceptación, que es donde se pierde el dinero. Con eso la persona afectada ya puede verificar su ayuda y el donante ver el avance; lo demás son vistas que se suman sobre el mismo registro.
 
---

## 5. Lean Canvas

> Lienzo de una página con el modelo del producto. Extensión: enlace (obligatorio).

**Enlace al Lean Canvas (obligatorio):** [Lean Canvas del proyecto](https://canva.link/hvmbwzu1ewd4oeb)

El lienzo debe cubrir: problema, segmento de usuarios, propuesta de valor única, solución, canales, métricas clave, ventaja diferencial y estructura de costos e ingresos.

---

## 6. Backlog priorizado (Kanban)

> Enlace al tablero en GitHub Projects, construido con las historias priorizadas, en columnas y con criterios de aceptación por tarjeta. Extensión: enlace al tablero (obligatorio).

**Enlace al tablero (obligatorio):** [Tablero Kanban en GitHub Projects](https://github.com/users/Zharickmich12/projects/3)

---

## 7. Arquitectura inicial

> Cómo se conectan las partes (interfaz, lógica, Stellar) y en qué punto entra la red. Diagrama simple en imagen. Extensión: 150–300 palabras en total.

**Diagrama (imagen o enlace):** [Arquitectura de AyudaClara](arquitectura.png)

| Capa | Componente | Qué hace |
| :---: | --- | --- |
| Interfaz | Aplicación web (React) | Registro de etapas, consulta por código y aceptación de la ayuda. |
| Lógica | Backend (Node.js) | Genera códigos públicos y lee la red sin exponer datos personales. |
| Stellar | Contrato Soroban + cuentas en Testnet | Guarda el estado de cada desembolso y exige el orden de las etapas. |
 
**En qué punto entra la red:** Cada cambio de etapa se firma con la billetera de quien lo hace y se registra en Stellar, que es la única fuente del estado; el backend solo lo lee y lo muestra.
 
---

## 8. Uso de Stellar y justificación

> Qué componentes de Stellar usaría y por qué cada uno. Apoyado en el criterio de pertinencia del Problem Brief. Extensión: 150–300 palabras en total.

**Criterio de pertinencia (del Problem Brief):** Se elimina un intermediario que concentra la confianza, y varias partes que no confían entre sí necesitan compartir un mismo registro inalterable.
 
| Componente de Stellar | Para qué lo usamos | Por qué ese y no otra alternativa |
| --- | --- | --- |
| Contratos inteligentes (Soroban) | Exigir que una etapa solo avance si la anterior existe y guardar el estado del desembolso. | Una base de datos tradicional dejaría la regla bajo el control de un solo actor. |
| Cuentas y firmas de billetera | Identificar quién registra cada etapa. | Da responsabilidad verificable por actor sin un administrador central. |
| Balances reclamables | Dejar la ayuda disponible para que el beneficiario la acepte. | Representa de forma nativa la entrega que depende de la aceptación del beneficiario. |
