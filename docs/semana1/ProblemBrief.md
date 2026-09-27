# Problem Brief

## Decisión del problema

### Problema elegido

> El problema ganador en una frase, sin mencionar blockchain, y quién lo propuso.

Cuando alguien dona o recibe dinero destinado a una emergencia por desastre natural, no hay forma de verificar si ese dinero llegó a las personas afectadas o se quedó en algún punto de la cadena de intermediarios. Propuesto por Zharick Fetecua.

### Por qué elegimos este

> Qué inclinó al equipo por este problema frente a los demás, según los criterios de la Sesión 1.

El equipo lo eligió porque es un problema vigente y verificable en este momento en Colombia: tras el terremoto de magnitud 7,4 del 10 de agosto de 2026, el Gobierno declaró emergencia económica y anunció subsidios y ayudas económicas para las familias damnificadas, pero apenas dos semanas después ya se reportaban estafas con mensajes falsos de subsidios dirigidos a los afectados, lo que muestra que ni los mismos damnificados tenían claridad sobre qué ayuda era real, cuál era su origen ni cómo verificarla. Frente a las otras propuestas, esta involucra a varias partes que no confían entre sí (donantes, entidades públicas, ONG, población afectada), depende hoy de un intermediario que concentra toda la información sin rendir cuentas en tiempo real, y tiene evidencia pública, medible y de alcance nacional, ocurriendo.

### Propuestas descartadas

> Cada propuesta considerada, quién la propuso y el motivo del descarte.

- **Luis Alberto Zapata Arango**: verificación confiable del estado de un inmueble en arriendo (fotos e inventario) para evitar disputas por daños entre arrendador y arrendatario — descartada porque su alcance es más acotado (una disputa entre pocas partes) y depende de validar primero con inmobiliarias reales cuánto pesa el problema.
- **Juan Pablo Sanabria Hoyos**: trazabilidad de la cadena de frío de medicamentos sensibles a la temperatura entre los distintos actores de transporte y almacenamiento — descartada porque requiere complejidad técnica y el equipo no tiene contacto directo con actores de la cadena farmacéutica para validar la hipótesis.

### Cómo tomamos la decisión

> Cómo llegó el equipo al acuerdo: votación, consenso tras debate u otro.

El equipo debatió las tres propuestas, valorando en cada una qué tan grave y frecuente es el problema, qué tan fácil es conseguir evidencia real, y qué tan viable es de acotar a un MVP dentro del tiempo del programa. Se llegó a consenso por la propuesta de Zharick al ser la más urgente y verificable en el momento, dado que el terremoto de agosto de 2026 seguía en fase de reconstrucción.

---

## Problem Brief

### Encabezado

> Nombre del proyecto y una frase que describa el problema. Extensión: breve.

**AyudaClara** — Trazabilidad en tiempo real del dinero donado en emergencias, para que donantes y afectados sepan que sí llegó.

### Equipo y roles

> Integrantes con su usuario de GitHub, rol asumido por cada persona, responsable de las entregas y canal de coordinación interna. Extensión: breve.

- **Zharick Fetecua** — Usuario de GitHub: Zharickmich12 — Rol: Responsable de las entregas del equipo, encargada de consolidar el trabajo de cada integrante y subirlo al repositorio / Desarrolladora.
- **Luis Alberto Zapata Arango** — Usuario de GitHub: luizapata190 — Rol: Desarrollador.
- **Juan Pablo Sanabria Hoyos** — Usuario de GitHub: Jsanabrh0401 — Rol: Desarrollador.

Canal de coordinación interna: grupo de WhatsApp.

### Problema y evidencia

> Enunciado del problema en una frase, sin mencionar blockchain. Contexto, frecuencia y alcance. Evidencia mínima de que el problema existe: observación directa, experiencia propia, conversaciones o fuentes consultadas, con enlace o cita cuando aplique. Extensión: 150–300 palabras.

Cuando ocurre un desastre natural, gobiernos, empresas y ciudadanos donan o destinan dinero para atender la emergencia, pero ni ellos ni la población afectada pueden verificar de forma independiente si ese dinero llegó completo a su destino. El caso más reciente y directo es el terremoto de magnitud 7,4 que sacudió a Colombia el 10 de agosto de 2026, dejando cientos de muertos, miles de heridos y más de 11.000 viviendas destruidas en 472 municipios. El Gobierno declaró emergencia económica y anunció subsidios de arrendamiento y ayudas económicas para las familias más vulnerables, pero apenas dos semanas después ya circulaban mensajes de texto falsos ofreciendo subsidios inexistentes a los damnificados, aprovechando que las víctimas no tenían un canal claro para verificar qué ayuda era real y cómo reclamarla. A esto se suma un antecedente estructural: el escándalo de la UNGRD, donde se malversaron 46.800 millones de pesos destinados a comprar carrotanques de agua potable para La Guajira en una emergencia previa, mostrando que el problema no es solo de estafadores externos sino también de opacidad dentro del propio sistema de gestión de desastres. La frecuencia es alta y el alcance abarca a cientos de miles de personas en situación de máxima vulnerabilidad.

### Usuario y actores

> Quién sufre el problema y qué necesita resolver. Cómo lo resuelve hoy y qué le cuesta en dinero, tiempo o esfuerzo. Demás actores que intervienen en el flujo, con el papel que cumple cada uno. Extensión: 150–300 palabras.

El usuario principal es la población afectada por un desastre natural, que necesita recibir ayuda económica de forma rápida y completa. Hoy no tiene ninguna herramienta para saber si el dinero destinado a su emergencia fue desembolsado, en qué etapa está, o si se perdió en el camino; solo lo descubre cuando la ayuda no llega, llega tarde, o cuando cae en una estafa que se hace pasar por esa ayuda. El segundo actor clave es el donante (ciudadano, empresa o gobierno extranjero), que aporta dinero en momentos de urgencia sin ninguna forma de confirmar el impacto real de su aporte más allá de comunicados oficiales. Entre estos dos actores intervienen varios intermediarios: la entidad nacional de gestión de riesgo (como la UNGRD), gobiernos departamentales o municipales, y en algunos casos ONG locales o internacionales encargadas de la ejecución. Cada uno maneja su propio sistema de registro, sin que exista un canal único y auditable por las otras partes. Los organismos de control (Procuraduría, Contraloría) actúan como actores adicionales, pero solo intervienen después del hecho, mediante investigaciones que toman meses o años, cuando la emergencia original ya pasó y el daño no se puede revertir.

### Flujo actual de valor

> Recorrido paso a paso de cómo se mueve hoy el dinero, la información o el activo, desde el origen hasta el destino. Diagrama o secuencia numerada, con los intermediarios explícitos. Señalar si algún paso responde a una obligación normativa. Extensión: 150–300 palabras.

1. El gobierno nacional declara la situación de desastre (obligación normativa) y asigna recursos del presupuesto o de fondos de emergencia a la entidad responsable (ej. UNGRD).
2. La entidad recibe el dinero y contrata proveedores o firma convenios con ONG/gobiernos locales para ejecutar la ayuda (subsidios, insumos, vivienda temporal).
3. Los contratistas o ejecutores reciben el desembolso y, en teoría, entregan los bienes o el dinero a la población afectada.
4. La entidad nacional publica informes de ejecución, generalmente varios meses después, como parte de su rendición de cuentas (obligación normativa).
5. Los organismos de control (Procuraduría, Contraloría) revisan contratos y ejecución solo si hay denuncias o alertas, casi siempre después de que la emergencia terminó.

En ningún punto de este flujo la población beneficiaria o los donantes individuales pueden confirmar en tiempo real que el dinero pasó de un paso al siguiente sin desviarse.

### Fricciones identificadas

> Puntos concretos donde el flujo falla, se encarece o se demora. Cada fricción indica en qué paso ocurre, qué la causa y a quién afecta. Extensión: 150–300 palabras.

- **Paso 2 (contratación/convenios)**: es el punto más vulnerable — contratos que no cumplen requisitos técnicos o legales pueden aprobarse sin que nadie externo lo note a tiempo, como ocurrió con los carrotanques de La Guajira. La causa es la falta de un registro público y verificable de cada contrato en el momento en que se firma. Afecta directamente a la población que espera la ayuda.
- **Paso 3 (ejecución/entrega)**: no existe confirmación independiente de que la entrega realmente ocurrió; el ejecutor es juez y parte de su propio reporte. Además, la falta de un canal oficial claro abre espacio a estafas, como los mensajes falsos de subsidios tras el terremoto de agosto de 2026. Afecta tanto a la población (recibe menos, nada, o cae en un fraude) como al donante.
- **Paso 4 (rendición de cuentas)**: llega demasiado tarde — meses después del hecho — cuando ya no sirve para corregir la emergencia en curso. Afecta la confianza de futuros donantes.
- **Paso 5 (control)**: reactivo, no preventivo; solo actúa ante denuncias, lo que permite que el dinero ya esté perdido para cuando se investiga. Afecta a todo el sistema.

### Oportunidad e hipótesis

> Oportunidad priorizada entre las fricciones identificadas, con el motivo de la elección. Hipótesis inicial de por qué blockchain podría mejorar ese punto, expresada en términos de qué cambiaría para el usuario. Extensión: 150–300 palabras.

La oportunidad priorizada es la falta de visibilidad en tiempo real entre los pasos 2 y 3 del flujo (contratación y entrega), que es donde ocurrió la pérdida en el caso de los carrotanques y donde hoy prosperan las estafas con subsidios falsos. Se prioriza este punto porque es donde se concentra el mayor monto de dinero y donde hoy no existe ningún mecanismo de verificación intermedia entre la asignación de recursos y la entrega final. Nuestra hipótesis inicial es que, si cada desembolso hacia un beneficiario o ejecutor quedara registrado en una red compartida e inalterable, y la liberación de cada tramo del dinero dependiera de una confirmación verificable de la etapa anterior, sería mucho más difícil que el dinero se "perdiera" sin que nadie lo note hasta meses después, y más fácil para un damnificado distinguir una ayuda real de un fraude. Para el usuario final, esto cambiaría la espera pasiva de un informe oficial por la posibilidad de consultar, en cualquier momento, en qué etapa está el dinero destinado a su comunidad, sin depender de que un solo intermediario decida cuándo y qué reportar.

### Criterio de pertinencia

> Justificación de por qué el caso requiere un registro distribuido y no una base de datos tradicional o una integración entre sistemas existentes. Debe apoyarse en al menos uno de los criterios de la Sesión 1: varias partes que no confían entre sí necesitan compartir un mismo registro, el histórico no puede alterarse, o se elimina un intermediario que hoy concentra la confianza. Extensión: 150–300 palabras.

Este caso requiere un registro distribuido y no una base de datos tradicional porque el problema de fondo no es técnico sino de confianza entre partes que no dependen unas de otras: el gobierno, los contratistas, las ONG y la población beneficiaria no tienen ningún incentivo compartido para auditarse mutuamente, y una base de datos tradicional seguiría estando bajo el control de un solo actor (la entidad de gobierno), que es precisamente quien hoy concentra la confianza sin rendir cuentas en tiempo real — el mismo patrón que permitió el escándalo de la UNGRD. El caso también aplica el criterio de eliminar un intermediario que concentra la confianza: hoy, una sola entidad decide qué información sobre el uso del dinero se hace pública y cuándo. Un registro distribuido, donde cada paso del desembolso quede escrito de forma inalterable y visible para todas las partes desde el momento en que ocurre, elimina la dependencia de que ese único actor sea honesto y oportuno en su reporte.

### Supuestos y riesgos

> Dos o tres supuestos que tendrían que ser ciertos para que la hipótesis funcione, y qué podría invalidarla. Extensión: 150–300 palabras.

1. **Supuesto**: los ejecutores y contratistas estarían dispuestos (u obligados por norma) a registrar cada desembolso en la red. Riesgo: si no hay obligación legal o incentivo real, los actores con interés en ocultar información simplemente no usarían el sistema.
2. **Supuesto**: la población beneficiaria tiene o puede tener acceso básico a un dispositivo/canal para confirmar que recibió la ayuda. Riesgo: en zonas rurales o recién golpeadas por un desastre, la conectividad puede ser limitada justo cuando más se necesita el sistema.
3. **Supuesto**: hacer pública y trazable la información de desembolsos no genera riesgos de seguridad para la población beneficiaria. Riesgo: si esto no se maneja con cuidado (anonimización, agregación de datos), la transparencia podría convertirse en un riesgo físico para los beneficiarios.