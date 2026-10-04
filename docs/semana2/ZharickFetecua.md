# Historias de usuario individuales

**Nombre:** Zharick Fetecua

**Usuario de GitHub:** Zharickmich12

---

## Mis historias de usuario

> Entre 5 y 7 historias en formato "como [rol] quiero [acción] para [beneficio]", pensadas desde distintos roles o necesidades del producto que el equipo está diseñando. Si escribes menos de 7, borra las líneas que no uses (mínimo 5).

1. Como persona afectada por el desastre, quiero verificar si un mensaje de subsidio que recibo es legítimo antes de dar mis datos, para no caer en una estafa.
2. Como persona afectada por el desastre, quiero consultar en qué estado está la ayuda económica que me corresponde, para no depender de llamadas o visitas repetidas a una oficina.
3. Como donante, quiero ver en qué etapa se encuentra mi donación después de entregarla, para confirmar que fue destinada a la emergencia y no se perdió en el camino.
4. Como donante, quiero recibir una confirmación cuando mi aporte llegue a la etapa de entrega final, para tener certeza del impacto real de mi donación.
5. Como entidad gestora de la emergencia, quiero registrar cada desembolso en un libro compartido e inalterable, para demostrar transparencia ante donantes y organismos de control sin depender solo de informes internos.
6. Como ONG ejecutora, quiero que la entrega final quede confirmada con la validación del propio beneficiario, para que mi reporte de entrega esté respaldado por evidencia verificable y no solo por mi palabra.
7. Como organismo de control, quiero consultar el historial completo de un desembolso en cualquier momento, para detectar irregularidades sin esperar a que se abra una investigación.

## La más importante y por qué

> Organiza las historias de mayor a menor importancia: en la primera fila va la más importante. En cada fila indica el número de la historia y por qué la ubicaste en esa posición. Si usaste menos de 7 historias, borra las filas que sobren.

| Orden de importancia | Historia # | Por qué |
| :---: | :---: | --- |
| 1 (la más importante) | 2 | Es el núcleo del problema: hoy la población afectada no tiene ningún canal propio para saber si la ayuda prometida es real o en qué va. Sin esto, las demás historias pierden sentido porque no habría interfaz donde el usuario final vea el resultado de la trazabilidad. |
| 2 | 1 | Es la funcionalidad con mayor impacto inmediato en proteger a la población más vulnerable. |
| 3 | 5 | Es la base técnica que permite que exista el registro consultable: sin que la entidad gestora registre cada desembolso, no hay datos que mostrarle a la población ni a los donantes. |
| 4 | 3 | Depende de que ya exista el registro (historia 5), pero es clave para sostener la confianza de quien dona y motivar futuras donaciones. |
| 5 | 4 | Complementa la historia 3 dándole al donante una señal clara de cierre, pero no es indispensable para el MVP inicial. |
| 6 | 6 | Mejora la calidad de la evidencia de entrega, pero el flujo puede funcionar en una primera versión sin la validación cruzada del beneficiario. |
| 7 (la menos importante) | 7 | Es una funcionalidad de auditoría útil, pero los organismos de control pueden seguir revisando por fuera de la plataforma mientras se construye el MVP. |