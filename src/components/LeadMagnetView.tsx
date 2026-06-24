/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Download, ChevronRight, FileText } from 'lucide-react';

export const clinicalReferences = [
  {
    title: "Optimización de la Programación Quirúrgica mediante Algoritmos y Gestión Operacional",
    author: "Md Saad, M. A., Rehman, A. et al. (2024)",
    summary: "Evaluar cómo distintas estrategias de programación quirúrgica impactan la utilización de pabellones, la coordinación de equipos y la productividad global de los servicios quirúrgicos.",
    keyMetric: "Alta Productividad",
    citation: "Ref: Healthcare, 12(19), 1906"
  },
  {
    title: "Indicadores Clave para la Optimización del Desempeño Quirúrgico",
    author: "Macario, A., Dexter, F., & Epstein, R. H. (2023)",
    summary: "Identificar los indicadores más utilizados para medir y mejorar el desempeño de los pabellones quirúrgicos, tales como utilización, suspensiones y recambios.",
    keyMetric: "Métricas de Control",
    citation: "Ref: Int. Journal of Env. Research, 20(4)"
  },
  {
    title: "Prevalencia y Causas de Suspensiones de Cirugías Electivas: ¿Cuántas Son Realmente Evitables?",
    author: "Özcan, M. S., Özden, E. S. et al. (2024)",
    summary: "Determinar la frecuencia de las suspensiones e identificar cuáles cancelaciones podrían haberse evitado mediante la evaluación preoperatoria anticipada y la programación.",
    keyMetric: "60% Evitables",
    citation: "Ref: Turkish Journal of Anaesthesiology"
  }
];

export function downloadLeadMagnetText() {
  const content = `========================================================================
3 EVIDENCIAS CIENTÍFICAS QUE TODO HOSPITAL DEBE CONOCER PARA MEJORAR LA GESTIÓN QUIRÚRGICA
Resumen ejecutivo comentado sobre eficiencia quirúrgica, trazabilidad y reducción de suspensiones.
Sitio Oficial: APIQ Salud - Asesorías en Productividad e Inteligencia Operacional
========================================================================

ARTÍCULO 1: Optimización de la Programación Quirúrgica mediante Algoritmos y Gestión Operacional
------------------------------------------------------------------------
* Objetivo del estudio: Evaluar cómo distintas estrategias de programación quirúrgica impactan la utilización de pabellones, la coordinación de equipos y la productividad global de los servicios quirúrgicos.
* ¿Qué hicieron? Los investigadores analizaron modelos de programación quirúrgica utilizados en hospitales de alta complejidad, comparando métodos tradicionales con sistemas apoyados por algoritmos de optimización.
* Evaluaron: Utilización de pabellones, Tiempos ociosos, Cumplimiento de programación, Uso eficiente de recursos.
* ¿Qué encontraron?
  - Mejor distribución de cirugías durante la jornada.
  - Menor tiempo ocioso de pabellón.
  - Mayor utilización de capacidad instalada.
  - Mejor coordinación entre equipos clínicos y administrativos.
  - Incremento de la productividad sin aumentar infraestructura.
* ¿Qué significa para su hospital? Antes de invertir en más pabellones o más personal, es recomendable analizar la calidad del proceso de programación.
* Idea clave: "La productividad quirúrgica depende tanto de la calidad de la programación como de la disponibilidad de recursos."
* Referencia bibliográfica: Md Saad, M. A., Rehman, A., Althobaiti, Y. S., Alghamdi, S. A., Alzahrani, M. A., & Alsharif, M. H. (2024). Enhancing operating room efficiency: The impact of computational algorithms on surgical scheduling and team dynamics. Healthcare, 12(19), 1906.


ARTÍCULO 2: Indicadores Clave para la Optimización del Desempeño Quirúrgico
------------------------------------------------------------------------
* Objetivo del estudio: Identificar los indicadores más utilizados para medir y mejorar el desempeño de los pabellones quirúrgicos.
* ¿Qué hicieron? Los autores revisaron literatura internacional relacionada con métricas operacionales utilizadas en hospitales y centros quirúrgicos.
* ¿Qué encontraron?
  - La medición sistemática es fundamental para la mejora continua.
  - Los indicadores más utilizados son: Utilización de pabellón, Tasa de suspensiones, Tiempos de recambio, Retrasos de inicio, Productividad quirúrgica.
  - Los hospitales con monitoreo permanente muestran mejores resultados.
* ¿Qué significa para su hospital? Si no existen indicadores estandarizados, es difícil identificar dónde se están perdiendo oportunidades de mejora. La percepción nunca reemplaza la medición objetiva.
* Idea clave: "No se puede mejorar aquello que no se mide."
* Referencia bibliográfica: Macario, A., Dexter, F., & Epstein, R. H. (2023). Operating room performance optimization metrics: A systematic review. International Journal of Environmental Research and Public Health, 20(4), 2987.


ARTÍCULO 3: Prevalencia y Causas de Suspensiones de Cirugías Electivas: ¿Cuántas Son Realmente Evitables?
------------------------------------------------------------------------
* Objetivo del estudio: Determinar la frecuencia de las suspensiones de cirugías electivas una vez que el paciente ya había sido trasladado al pabellón e identificar cuáles de estas cancelaciones podrían haberse evitado mediante mejoras en los procesos de evaluación y programación.
* ¿Qué hicieron? Los investigadores realizaron un estudio prospectivo en pacientes programados para cirugía electiva.
* Analizaron: Tasa de suspensión quirúrgica, Especialidades con mayor frecuencia de cancelaciones, Factores clínicos y administrativos asociados, Proporción de cancelaciones potencialmente evitables.
* ¿Qué encontraron?
  - La tasa de suspensión fue de 0,9%.
  - Los pacientes de mayor edad presentaron mayor riesgo de cancelación.
  - Los pacientes con mayor complejidad clínica mostraron más suspensiones.
  - Cerca del 60% de las cancelaciones fueron consideradas potencialmente evitables.
  - Las deficiencias en la evaluación preoperatoria y la programación explicaron una parte importante de los eventos.
* ¿Qué significa para su hospital? La mayoría de las instituciones concentra sus esfuerzos en resolver problemas el día de la cirugía. Sin embargo, la evidencia demuestra que muchas suspensiones se originan días o semanas antes, durante la preparación preoperatoria, validación de antecedentes clínicos y coordinación de recursos. La suspensión quirúrgica debe entenderse como un indicador de desempeño institucional y no únicamente como un evento clínico aislado.
* Idea clave: "Casi 6 de cada 10 suspensiones quirúrgicas podrían prevenirse mediante una mejor evaluación preoperatoria y una programación más robusta."
* Referencia bibliográfica: Özcan, M. S., Özden, E. S., Solmaz, F. A., Kösem, A., Akyol, Y., & Kırdemir, P. (2024). Prevalence and causes of elective surgery cancellations after patients are taken to the operating room: A prospective, cross-sectional study. Turkish Journal of Anaesthesiology and Reanimation, 52(1), 14–20. https://doi.org/10.4274/TJAR.2024.231454


CONCLUSIONES EJECUTIVAS: ¿Qué nos dice la evidencia?
------------------------------------------------------------------------
Aunque los estudios fueron desarrollados en distintos países y contextos sanitarios, todos convergen en un mismo mensaje: La eficiencia quirúrgica no depende exclusivamente de disponer de más pabellones, más personal o más tecnología. Los mejores resultados se observan cuando las instituciones logran integrar tres elementos fundamentales:

1. Programación basada en datos: La asignación eficiente de tiempos quirúrgicos permite utilizar mejor la capacidad instalada y disminuir períodos de inactividad.
2. Trazabilidad de los procesos prequirúrgicos: La capacidad de seguir cada caso a lo largo de todo el proceso quirúrgico permite identificar oportunamente riesgos, retrasos y causas de suspensión.
3. Gestión continua del desempeño: Los hospitales que miden sistemáticamente sus indicadores son capaces de detectar oportunidades de mejora antes de que impacten la atención de los pacientes.


NUESTRO MODELO DE MEJORA CONTINUA DE APIQ SALUD:
------------------------------------------------------------------------
* Fase 1: Diagnóstico Pre-quirúrgico de 3 semanas (Identificación de cuellos de botella clave en procesos prequirúrgicos).
* Fase 2: Plan Piloto de 3 meses (Puesta en marcha de protocolos ágiles en una subunidad).
* Fase 3: Fase de Seguimiento a 1 año (Acompañamiento, gestión del cambio y auditorías para perpetuar la calidad).
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', '3_Evidencias_Cientificas_Gestion_Quirurgica_APIQ.txt');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

interface LeadMagnetViewProps {
  onOpenBooking: () => void;
}

export function LeadMagnetView({ onOpenBooking }: LeadMagnetViewProps) {
  return (
    <section id="recursos" className="py-20 bg-slate-50 border-t border-b border-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 uppercase tracking-wider mb-3">
            Evidencia & Descarga de Reporte
          </span>
          <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight mb-4">
            Herramientas Clínicas & Base de Evidencia Científica
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Garantice la trazabilidad de sus decisiones operativas utilizando parámetros probados en pabellones de alta eficiencia médica descritos en la literatura internacional.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-10">
          <div className="p-6 md:p-8 bg-blue-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-medium text-blue-200 uppercase tracking-widest block mb-2">Compendio Científico de Descarga Directa</span>
              <h3 className="text-2xl font-bold font-display mb-2">
                Reporte: 3 Evidencias Científicas para Mejorar la Gestión Quirúrgica
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Reúna de forma ejecutiva y comentada la literatura médica internacional más reciente sobre optimización, KPIs y reducción de suspensiones quirúrgicas para respaldar su plan operativo.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button 
                onClick={downloadLeadMagnetText}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-blue-900 font-semibold rounded-xl shadow-md hover:bg-slate-100 focus:ring-4 focus:ring-blue-300 transition-all cursor-pointer text-sm"
              >
                <Download className="w-5 h-5 flex-shrink-0" />
                <span>Descargar Reporte PDF / TXT</span>
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Artículos de Evidencia Científica Incluidos:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {clinicalReferences.map((ref, i) => (
                <div key={i} className="flex flex-col gap-3 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs mb-3">
                      0{i + 1}
                    </div>
                    <h5 className="font-semibold text-slate-900 text-xs sm:text-sm leading-snug mb-1.5 line-clamp-2">
                      {ref.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 mb-1">Por {ref.author}</p>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {ref.summary}
                    </p>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-2 pt-2 border-t border-slate-100">
                    {ref.citation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 text-center">
          <p className="text-sm text-slate-700 font-medium mb-4">
            ¿Desea recibir el reporte técnico completo y personalizado para su clínica u hospital junto con su diagnóstico de 3 semanas?
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900 transition-colors text-sm group cursor-pointer"
          >
            <span>Reserva una reunión inicial de 30 minutos con APIQ Salud</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
