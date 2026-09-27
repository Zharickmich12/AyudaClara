# Propuesta individual

**Nombre:** Ever Augusto Torres Silva

**Usuario de GitHub:** evertorres

---

## El problema

Los investigadores biomédicos y la industria farmacéutica tardan meses o años en acceder a datos clínicos de la vida real para validar tratamientos y diseñar estudios, debido a que la información de los pacientes está fragmentada en silos hospitalarios aislados bajo estrictas barreras legales, de privacidad y de desconfianza institucional.


## ¿Quién lo sufre?

El problema es sufrido directamente por dos actores principales en una relación de mutua dependencia:

1. Investigadores clínicos, empresas biotecnológicas y CROs (farmacéuticas): Lo viven en las fases tempranas de diseño de protocolos y generación de evidencia del mundo real (Real-World Evidence), cuando necesitan dimensionar cohortes de pacientes y validar criterios de inclusión/exclusión, pero se enfrentan a un proceso ciego donde no   saben qué hospital cuenta con los datos o la población adecuada.

2. Hospitales y centros de salud (IPS / HCOs): Lo viven al custodiar millones de registros clínicos de alto valor científico que permanecen pasivos o subutilizados, porque carecen de mecanismos técnicos y de confianza para colaborar en investigaciones multicéntricas sin exponerse a sanciones regulatorias (como RGPD o normativas locales de habeas data) o a perder la custodia y control de la información de sus pacientes.

## ¿Cómo se resuelve hoy y qué cuesta?
• Cómo se resuelve hoy: Se recurre a negociaciones bilaterales centro por centro para acordar convenios de investigación aislados, o a la venta/extracción de microdatos hacia grandes intermediarios y agregadores tradicionales de datos de salud que centralizan la información.
• Qué cuesta en tiempo: Entre 6 y 18 meses de negociaciones legales, revisiones repetitivas de comités de ética (IRB) y procesos manuales de extracción simplemente para saber si un estudio es factible.
• Qué cuesta en dinero: Cientos de miles de dólares por estudio destinados a asesoría legal ad-hoc, desarrollo de scripts de extracción no estandarizados y elevadas comisiones retenidas por intermediarios de datos, mientras los hospitales que generan la información reciben una retribución marginal o nula.
• Qué cuesta en esfuerzo y riesgo: Una alta sobrecarga operativa para el personal hospitalario (procesando datos desestructurados en formatos incompatibles) y un riesgo legal latente por fuga de información sensible al transferir o centralizar bases de datos de pacientes.


## ¿Por qué creo que blockchain podría aportar?

Mi hipótesis es que blockchain podría aportar una capa de coordinación y gobernanza confiable para un modelo federado (Compute-to-Data), donde el dato clínico no sale del hospital y solo viaja el código de consulta:

1. Partes que no confían entre sí comparten un registro común: Hospitales independientes (a menudo competidores entre sí), patrocinadores farmacéuticos y comités regulatorios no necesitan confiar ciegamente en una entidad central para colaborar; pueden compartir un registro descentralizado donde se publican las convocatorias de investigación y las métricas de calidad de datos estandarizados (ej. OMOP CDM).
2. Histórico inalterable para auditoría científica y regulatoria: Se puede dejar constancia a prueba de manipulaciones del identificador (hash) del algoritmo ejecutado en cada centro, las autorizaciones éticas y los resultados agregados obtenidos, garantizando la trazabilidad e integridad de la evidencia que exigen agencias como la FDA o la EMA.
3. Eliminar al intermediario que concentra la confianza y el margen: En lugar de depender de un data broker centralizado y opaco, contratos inteligentes tipo depósito en garantía (escrow) podrían automatizar la liquidación de incentivos económicos directamente hacia los hospitales, distribuyendo los fondos de manera justa según la contribución clínica verificada de cada centro.