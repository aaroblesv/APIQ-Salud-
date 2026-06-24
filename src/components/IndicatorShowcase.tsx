/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, HeartPulse, Sparkles, Clock, Users, Award } from 'lucide-react';

interface MetricDetail {
  label: string;
  before: string;
  after: string;
  colorBefore: string;
  colorAfter: string;
  description: string;
}

export function IndicatorShowcase() {
  const metrics: MetricDetail[] = [
    {
      label: "Tasa de Suspensión Quirúrgica",
      before: "8% (realidad chilena)",
      after: "5% (cercano al gold standard)",
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
        
        {/* Title Section */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 uppercase tracking-wider mb-3">
            Impacto de la Trazabilidad Quirúrgica
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 tracking-tight mb-4">
            KPIs de Desempeño y Control de Calidad
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            La implementación de un modelamiento clínico de procesos quirúrgicos bajo estándares de calidad redefine todos los indicadores críticos de eficiencia de su institución.
          </p>
        </div>

        {/* Beautiful prominent metrics display */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {metrics.map((metric, i) => (
            <div key={i} className="p-6 md:p-8 rounded-2xl border border-slate-200/60 bg-white shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-sm font-extrabold text-slate-900 uppercase tracking-wide font-display">
                    {metric.label}
                  </span>
                  {i === 0 ? (
                    <span className="p-1 rounded-full bg-red-100 text-red-600">
                      <AlertTriangle className="w-4 h-4" />
                    </span>
                  ) : (
                    <span className="p-1 rounded-full bg-blue-100 text-blue-600">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {metric.description}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <div className="flex-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Antes del Modelo</span>
                  <div className={`text-xs sm:text-sm font-bold py-2 px-3 rounded-xl border text-center ${metric.colorBefore}`}>
                    {metric.before}
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center p-1.5 bg-slate-100 rounded-full">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono uppercase text-blue-600 block mb-1">Con Modelo APIQ</span>
                  <div className={`text-xs sm:text-sm font-black py-2 px-3 rounded-xl border text-center ${metric.colorAfter}`}>
                    {metric.after}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Segment - 100% focused on what PATIENTS gain */}
        <div className="mt-12">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 uppercase tracking-wider mb-3">
              ¿Qué Gana el Paciente?
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-900 tracking-tight mb-4">
              Calidad de Atención Centrada en la Persona
            </h3>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Optimizar el engranaje quirúrgico clínico no solo maximiza recursos financieros e institucionales; reduce directamente la incertidumbre y eleva la seguridad asistencial del paciente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            <div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4 border border-red-100">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <h4 className="font-bold text-slate-950 font-display text-sm mb-2">
                Disminución de Suspensiones
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tranquilidad emocional completa para el paciente y sus acompañantes directos. Garantizamos que su cirugía no se reprogramará a minutos de ingresar por fallas administrativas.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4 border border-blue-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-950 font-display text-sm mb-2">
                Trazabilidad y Pre-habilitación
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mayor seguridad en el acto médico. El paciente ingresa con todos sus exámenes y pre-habilitación clínica validados por enfermería 48 hrs anticipadamente.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center mb-4 border border-green-100">
                <HeartPulse className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="font-bold text-slate-950 font-display text-sm mb-2">
                Mejora en el Viaje del Paciente
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Disminución radical del estrés y la ansiedad asistencial. Al evitar cancelaciones de última hora, logramos un viaje clínico fluido, predecible, digno y de calidad.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
