# Propuesta individual

**Nombre:** Luis Alberto Zapata Arango

**Usuario de GitHub:** luizapata190

---

## El problema

> El problema en una sola frase, sin mencionar blockchain.

Al entregar y recibir un inmueble en arriendo, las fotos y el inventario que registran su estado se pueden cuestionar o alterar fácilmente, y eso genera disputas por daños que nadie puede probar.

## ¿Quién lo sufre?

> Quién tiene el problema y en qué situación lo vive.

Lo sufren principalmente las **inmobiliarias y administradores de propiedades**, que hacen el inventario de entrada y de salida y tienen que resolver las discusiones cuando termina el contrato. También lo sufren:

- **Los propietarios**, que reciben su inmueble con daños que nadie asume.
- **Los arrendatarios**, a quienes les cobran daños que ya existían y no tienen cómo demostrarlo.
- **Las aseguradoras de arrendamiento**, que reciben reclamos con evidencia débil y difícil de validar.

La situación típica ocurre al finalizar el arriendo: aparece una mancha en la pared, un piso rayado o un electrodoméstico dañado, y cada parte dice una cosa distinta ("eso ya estaba" / "eso no estaba"). En Colombia el problema pesa más porque la Ley 820 de 2003 (artículo 16) prohíbe exigir depósitos en dinero en los arriendos de vivienda urbana: no hay un depósito del cual descontar los daños, así que se deben cobrar al arrendatario, al codeudor o a través de la póliza, y en todos los casos gana quien tenga mejor evidencia.

## ¿Cómo se resuelve hoy y qué cuesta?

> Cómo lo resuelven hoy las personas afectadas y qué les cuesta en dinero, tiempo o esfuerzo.

Hoy un agente recorre el inmueble, toma fotos con su celular y llena un formato en papel o en Word. Las fotos quedan en el celular del agente, en un correo o en una carpeta compartida. Al terminar el contrato se repite el proceso y se compara de memoria o con fotos sueltas.

Esto cuesta:

- **Tiempo:** horas de discusión entre inmobiliaria, propietario y arrendatario, llamadas, visitas repetidas y revisión de fotos dispersas.
- **Dinero:** reparaciones que la inmobiliaria o el propietario terminan pagando porque no pueden probar quién causó el daño; en casos graves, abogados y procesos de cobro o reclamos a la póliza que se demoran o se rechazan.
- **Confianza:** relaciones dañadas con propietarios y arrendatarios, y reputación de la inmobiliaria.

El problema de fondo es que una foto de celular no prueba por sí sola cuándo ni dónde se tomó, y sus metadatos (fecha, ubicación) se pueden editar. Cualquiera de las partes puede decir que la foto es de otro momento, de otro inmueble o que fue modificada.

## ¿Por qué creo que blockchain podría aportar?

> Hipótesis personal, no certeza, apoyada en al menos un criterio de la Sesión 1: partes que no confían entre sí comparten un registro, histórico inalterable, o eliminar un intermediario que concentra la confianza.

Mi hipótesis es que blockchain podría aportar porque el caso cumple los tres criterios:

1. **Partes que no confían entre sí comparten un registro.** Inmobiliaria, arrendatario, propietario y aseguradora tienen intereses opuestos cuando aparece un daño. Si la huella digital (hash) de cada foto del inventario se registra en un lugar que ninguno controla, todos pueden consultar la misma evidencia sin depender de la palabra del otro.
2. **Histórico inalterable.** Al registrar la huella de cada foto con su fecha en blockchain, nadie (ni siquiera la inmobiliaria o la plataforma) podría cambiar después la foto ni la fecha sin que se note. El inventario de entrada quedaría fijo para compararlo con el de salida.
3. **Eliminar un intermediario que concentra la confianza.** Hoy la evidencia depende de quien guarda las fotos, normalmente la inmobiliaria, que es parte interesada en la disputa. Con un registro público, la verificación no depende de confiar en ella: cualquiera podría comprobarla escaneando un código QR.

**Lo que no sé todavía y quiero validar:**

- Blockchain probaría que una foto no fue alterada y cuándo se registró, pero no que la escena fuera real (alguien podría fotografiar otra cosa). Por eso creo que tendría que combinarse con captura directa desde la cámara de la app, ubicación GPS y firma del dispositivo.
- No sé qué valor le darían un juez o una aseguradora a este tipo de evidencia en Colombia; tendría que consultarlo con un abogado.
- Necesito confirmar con inmobiliarias reales cuántas disputas tienen y si pagarían por resolverlas.
