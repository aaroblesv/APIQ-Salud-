/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LayoutGrid, CheckCircle2, AlertTriangle, RefreshCw, Eye, ArrowRight, ShieldCheck, HeartPulse, Sparkles, Clock, Users, Timer } from 'lucide-react';

interface MetricDetail {
  label: string;
  before: string;
  after: string;
  colorBefore: string;
  colorAfter: string;
  description: string;
}

export function IndicatorShowcase() {
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');

  const beforeBlocks = [
    { name: "Pab. 1 - Cirugía General (Dr. Silva)", time: "08:00 - 11:30", status: "suspendido", reason: "Falta de insumos específicos en bodega", duration: "Susp. 08:15" },
    { name: "Pab. 1 - Bloque Libre (Sin agendar)", time: "14:00 - 17:00", status: "vacio", reason: "Inactividad / Desconexión administrativa", duration: "Tiempo Muerto" },
  ];

  const afterBlocks = [
    { name: "Pab. 1 - Cirugía General (Pre-habilitado)", time: "08:00 - 11:00", status: "exitoso", reason: "Insumos y pre-habilitación validados", duration: "Finalizado a tiempo" },
    { name: "Pab. 1 - Cirugía Urológica (Asignado)", time: "11:30 - 14:30", status: "exitoso", reason: "Agendamiento con modelo predictivo", duration: "Finalizado a tiempo" },
    { name: "Pab. 1 - Limpieza y Cierre Programado", time: "14:30 - 17:00", status: "exitoso", reason: "Cierre ordenado clínico", duration: "Planificado" },
  ];

  const metrics: MetricDetail[] = [
    {
      label: "Tasa de Suspensión Quirúrgica",
      before: "14.2% promedio mensual",
      after: "1.8% tasa controlada",
      colorBefore: "text-red-600 bg-red-50 border-red-200",
      colorAfter: "text-green-700 bg-green-50 border-green-200",
      description: "Cancelaciones o reprogramaciones decididas el mismo día de la cirugía."
    },
    {
      label: "Pacientes con Trazabilidad Completa",
      before: "0% (Sistemas aislados)",
      after: "100% (Verificación digital)",
      colorBefore: "text-slate-500 bg-slate-50 border-slate-200",
      colorAfter: "text-green-700 bg-green-50 border-green-200",
      description: "Pacientes con pre-habilitación e insumos asegurados anticipadamente al acto quirúrgico."
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-slate-50 border-t border-b border-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 uppercase tracking-wider mb-3">
            Hero Shot & Simulador Operacional
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 tracking-tight mb-4">
            Visualice el Impacto del Control de Trazabilidad
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Haga clic en las opciones inferiores para contrastar la realidad operacional común frente a un flujo de agendamiento quirúrgico maduro y predecible.
          </p>
        </div>

        {/* Before / After Toggle Controls */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl bg-slate-200 p-1 shadow-inner max-w-md w-full">
            <button
              onClick={() => setActiveTab('before')}
              className={`flex-1 py-3 text-center text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'before'
                  ? 'bg-red-500 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Escenario Común (Sin Coordinación)
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`flex-1 py-3 text-center text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'after'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Nuevo Escenario (Modelo de Calidad)
            </button>
          </div>
        </div>

        {/* Showcase comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Calendar Representation Panel (Hero Shot Visual representation of scheduling timeline) */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${activeTab === 'after' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  Timeline de Bloqueo Quirúrgico (Pabellón 1)
                </span>
              </div>
              <span className="text-xs font-semibold text-blue-800 bg-blue-50 px-2.5 py-1 rounded">
                Capacidad: 8:00 a 17:00
              </span>
            </div>

            <div className="p-6 space-y-4">
              {activeTab === 'before' ? (
                <>
                  {/* Before blocks with alert items */}
                  {beforeBlocks.map((block, i) => (
                    <div key={i} className="p-4 rounded-xl border border-red-100 bg-red-50/40 relative overflow-hidden transition-all duration-300">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500" />
                      <div className="flex justify-between items-start mb-2 pl-2">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-semibold text-slate-800 text-sm leading-tight text-red-950 font-display">
                              {block.name}
                            </h4>
                            <AlertTriangle className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                          </div>
                          <span className="text-xs text-slate-500 block mt-0.5">{block.time}</span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-red-100 text-red-700">
                          {block.duration}
                        </span>
                      </div>
                      <p className="text-xs text-red-700/80 italic pl-2">
                        * {block.reason}
                      </p>
                    </div>
                  ))}
                  <div className="p-4 bg-slate-50 border border-dashed border-slate-200 rounded-xl flex items-center justify-center py-6">
                    <p className="text-xs text-slate-400 text-center italic">
                      La falta de un agendamiento coordinado genera cuellos de botella masivos de pre-habilitación, pérdida de horas cirujano y retrasos operacionales en cascada.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* After blocks showing seamless execution */}
                  {afterBlocks.map((block, i) => (
                    <div key={i} className="p-4 rounded-xl border border-green-100 bg-green-50/40 relative overflow-hidden transition-all duration-300">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-green-500" />
                      <div className="flex justify-between items-start mb-1 pl-2">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-slate-900 text-sm leading-tight font-display">
                            {block.name}
                          </h4>
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-green-100 text-green-700">
                          {block.duration}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pl-2 text-xs text-slate-500">
                        <span>{block.time}</span>
                        <span className="text-green-700 font-medium">✨ {block.reason}</span>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            
            {/* Alt representation tag as asked in prompt */}
            <div className="p-3 bg-slate-100 border-t border-slate-100 text-center text-[10px] text-slate-500 leading-relaxed uppercase tracking-wider font-mono">
              Texto Alternativo: Diagrama visual interactivo comparativo de una grilla de agendamiento quirúrgico común ineficiente con suspensiones y tiempos muertos verses el modelo de planificación coordinada optimizado con alta trazabilidad y 100% de uso útil.
            </div>
          </div>

          {/* Metrics Panel */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold font-display text-slate-900 mb-2">
              KPIs Operacionales Clínicos
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              La implementación de un modelamiento clínico de procesos quirúrgicos bajo estándares de calidad redefine todos los indicadores críticos de eficiencia:
            </p>

            <div className="space-y-4">
              {metrics.map((metric, i) => (
                <div key={i} className="p-4 rounded-xl border bg-white shadow-sm hover:shadow transition-all">
                  <span className="text-xs font-bold text-slate-800 block mb-2">{metric.label}</span>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">Antes</span>
                      <div className="text-xs font-semibold py-1 px-2.5 rounded border border-red-100 text-red-700 bg-red-50/50">
                        {metric.before}
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-center p-1 bg-slate-100 rounded-full">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-mono uppercase text-blue-600 block mb-0.5">Después</span>
                      <div className="text-xs font-bold py-1 px-2.5 rounded border border-green-100 text-green-700 bg-green-50/50">
                        {metric.after}
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Segment - 100% focused on what PATIENTS gain */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 uppercase tracking-wider mb-3">
              ¿Qué Gana el Paciente?
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-900 tracking-tight mb-4">
              El Beneficio Colateral Más Valioso: Calidad de Atención Centrada en la Persona
            </h3>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Optimizar el engranaje quirúrgico clínico no solo maximiza recursos financieros e institucionales; reduce directamente el dolor humano y eleva la seguridad asistencial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            
            <div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
              </div>
              <h4 className="font-bold text-slate-950 font-display text-sm mb-2">
                Disminución de Suspensiones el Mismo Día
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tranquilidad emocional completa para el paciente y sus acompañantes directos. Gestionamos que su cirugía no se reprogramará a minutos de ingresar por fallas administrativas.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-950 font-display text-sm mb-2">
                Trazabilidad y Pre-habilitación
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mayor seguridad en el acto médico. El paciente ingresa con todos sus exámenes y pre-habilitación clínica validados por enfermería 48 hrs anticipadamente.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
