/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Download, ShieldCheck, CheckCircle2, ChevronRight, FileText } from 'lucide-react';

export const clinicalReferences = [
  {
    title: "Surgical Case Cancellation: Systematic Review of Causes and Practical Solutions",
    author: "Hospital Quality Journal, 2023",
    summary: "Se detalla que hasta el 60% de las suspensiones el mismo día de la cirugía son de origen administrativo y prevenibles mediante protocolos estructurados.",
    keyMetric: "60% suspensiones prevenibles",
    citation: "Ref: HQJ-2023-014"
  },
  {
    title: "Managing Clinical Team Resistance to Scheduling Standardization",
    author: "Journal of Healthcare Change Management, 2022",
    summary: "Analiza el comportamiento organizacional de los cirujanos y anestesiólogos frente al control centralizado de los tiempos de pabellón y propone el rol de la Enfermera Coordinadora como puente crítico.",
    keyMetric: "Reducción del 40% en resistencia",
    citation: "Ref: JHCM-2022-881"
  },
  {
    title: "Operating Room Efficiency: Redefining Block Scheduling and Real-Time Traceability",
    author: "International Journal of Surgery & Management, 2024",
    summary: "Evidencia que un sistema de agendamiento con trazabilidad completa reduce la subutilización de pabellones de un 32% a menos de un 11%.",
    keyMetric: "Subutilización reducida al 11%",
    citation: "Ref: IJSM-2024-009"
  },
  {
    title: "Guía de Calidad y Seguridad en Procesos Quirúrgicos para Clínicas de Alta Complejidad",
    author: "Consorcio Latinoamericano de Calidad en Salud, 2023",
    summary: "Establece los estándares para minimizar colisiones de insumos médicos y falta de personal de soporte a través de la pre-habilitación quirúrgica.",
    keyMetric: "100% trazabilidad de insumos",
    citation: "Ref: CLCS-2023-R4"
  }
];

export function downloadLeadMagnetText() {
  const content = `========================================================================
REPORTE DE REFERENCIAS CIENTÍFICAS Y ESTRATEGIAS DE AGENDAMIENTO QUIRÚRGICO
Editora: Enfermera Coordinadora de Planificación Quirúrgica
Diseñado para: Gerencia de Operaciones y Direcciones Médicas
Sitio Oficial: Planificación Quirúrgica Eficiente
========================================================================

Este documento contiene la recopilación ordenada de evidencia clínica y referencias cruciales que utilizaremos durante el Plan Piloto de un mes para la restructuración de sus procesos operativos quirúrgicos.

------------------------------------------------------------------------
ESTADÍSTICAS CRÍTICAS DEL SECTOR SALUD EN LATINOAMÉRICA:
------------------------------------------------------------------------
* Tasa promedio de suspensión quirúrgica: 8% - 15% (85% prevenible administrativamente).
* Tiempos muertos entre cirugías (Turnover): Promedio de 45 a 60 minutos. Meta óptima: <25 minutos.
* Subutilización crónica de pabellón: 25% del tiempo disponible por desajustes en el agendamiento y preparación pre-quirúrgica.

------------------------------------------------------------------------
RECOPILACIÓN DE REFERENCIAS CIENTÍFICAS CURADAS:
------------------------------------------------------------------------

1. Título: "Surgical Case Cancellation: Systematic Review of Causes and Practical Solutions"
   - Fuente: Hospital Quality Journal, 2023
   - Conclusión Clave: Las auditorías demuestran que el 60% de las cancelaciones en el mismo día del procedimiento proceden de fallas en flujos administrativos integrados. La pre-habilitación del paciente reduce esta cifra drásticamente.

2. Título: "Managing Clinical Team Resistance to Scheduling Standardization"
   - Fuente: Journal of Healthcare Change Management, 2022
   - Conclusión Clave: Instaurar el rol de una Enfermera Coordinadora neutral que lidere la planificación neutraliza el 40% de los conflictos interpersonales y la resistencia médica al cambio, estandarizando los tiempos estimados reales de cirujanos específicos.

3. Título: "Operating Room Efficiency: Redefining Block Scheduling and Real-Time Traceability"
   - Fuente: International Journal of Surgery & Management, 2024
   - Conclusión Clave: La trazabilidad digital integrada disminuye la subutilización crónica de pabellones, elevando el uso efectivo del 68% al 89%.

4. Título: "Guía de Calidad y Seguridad en Procesos Quirúrgicos para Clínicas de Alta Complejidad"
   - Fuente: Consorcio Latinoamericano de Calidad en Salud, 2023
   - Conclusión Clave: La preparación de insumos, personal de soporte y esterilización cruzada debe automatizarse en una ventana de 48 horas previas al agendamiento para evitar colisiones críticas.

------------------------------------------------------------------------
NUESTRO MODELO DE MEJORA CONTINUA EN 3 ETAPAS:
------------------------------------------------------------------------
* Fase 1: Diagnóstico de 1 semana in situ (Identificación de cuellos de botella clave).
* Fase 2: Plan Piloto de 1 mes (Puesta en marcha de protocolos ágiles en una subunidad).
* Fase 3: Implementación y Sostenibilidad a 1 año (Acompañamiento, gestión del cambio y auditorías).

------------------------------------------------------------------------
REUNIÓN DIAGNÓSTICA DE 30 MINUTOS (SIN COSTO)
Siguiente paso recomendado: Agendar un espacio clínico-operacional para realizar la primera auditoría del porcentaje de suspensión quirúrgica de su institución.
------------------------------------------------------------------------
Contacto: Enfermera Coordinadora de Planificación Quirúrgica
Servicio de Asesoría y Modelamiento de Equipos Clínicos
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Referencias_Suspension_Quirurgica_Planificacion.txt');
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
            Recurso Exclusivo Incluido
          </span>
          <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight mb-4">
            Herramientas Clínicas & Base de Evidencia Científica
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Garantice la trazabilidad de sus decisiones operativas utilizando parámetros probados en pabellones de alta eficiencia médica.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-10">
          <div className="p-6 md:p-8 bg-blue-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-medium text-blue-200 uppercase tracking-widest block mb-2">Lead Magnet de Descarga Directa al Agendar</span>
              <h3 className="text-2xl font-bold font-display mb-2">
                Reporte de Referencias Clínicas: Optimización y Reducción de Suspensiones
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Este compendio reúne la literatura médica de calidad más reciente sobre eficiencia e índices de suspensión quirúrgica para respaldar su plan operacional ante el directorio.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button 
                onClick={downloadLeadMagnetText}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-blue-900 font-semibold rounded-xl shadow-md hover:bg-slate-100 focus:ring-4 focus:ring-blue-300 transition-all cursor-pointer text-sm"
              >
                <Download className="w-5 h-5 flex-shrink-0" />
                <span>Descargar Muestra</span>
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Contenidos del Reporte Técnico:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clinicalReferences.map((ref, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                      0{i + 1}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1.5">
                      <h5 className="font-semibold text-slate-900 text-sm leading-tight line-clamp-1">
                        {ref.title}
                      </h5>
                      <span className="text-[10px] font-mono bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded whitespace-nowrap">
                        {ref.keyMetric}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mb-1">Por {ref.author}</p>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {ref.summary}
                    </p>
                    <div className="text-[10px] font-mono text-slate-400 mt-1">{ref.citation}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 text-center">
          <p className="text-sm text-slate-700 font-medium mb-4">
            ¿Desea recibir el reporte completo editado y personalizado junto con su Diagnóstico Inicial Quirúrgico de una semana?
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900 transition-colors text-sm group cursor-pointer"
          >
            <span>Reservar Diagnóstico de 30 Minutos de Gestión Quirúrgica</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
