/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle } from 'lucide-react';
import { FAQItem } from '../types';

export function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const faqItems: FAQItem[] = [
    {
      question: "Ya hemos implementado sistemas de agendamiento y software de pabellones costosos, ¿por qué este modelo sería diferente?",
      answer: "Un sistema o software informático es una herramienta pasiva de registro de datos; no es un modelo activo de gestión humana ni de coordinación clínica. Nuestra metodología no viene a competir ni a reemplazar su ERP u plataforma actual. Al contrario, optimiza y audita la ventana crítica de las 48 horas previas al agendamiento real, integrando el flujo logístico de insumos, la pre-habilitación clínica de enfermería y la confirmación activa de personal en un solo protocolo de acción.",
      objectionSolved: "Objeción: 'Creencia de que todo el software de agendamiento falla.'"
    },
    {
      question: "Nuestros cirujanos y equipos médicos tienen una alta resistencia al cambio y defienden con firmeza el manejo de sus tiempos. ¿Cómo abordar esto?",
      answer: "La resistencia médica no proviene del capricho, sino de la desconfianza en la trazabilidad logística estructural (insumos médicos retrasados, turnos con fallas, anulaciones a último momento). Cuando los cirujanos comprueban durante nuestro Plan Piloto de 30 días que la validación quirúrgica neutral anticipada garantiza que su cirugía iniciará y terminará exactamente en sus tiempos predecibles, la resistencia al cambio se disuelve y se integran activamente al modelo.",
      objectionSolved: "Objeción: 'Los equipos clínicos no querrán someterse a nuevas reglas.'"
    }
  ];

  const toggleIndex = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 uppercase tracking-wider mb-3">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight mb-4">
            Derribando el 'Aquí Ya Está Todo Hecho y Nada Funciona'
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Abordamos con total transparencia clínica las realidades, miedos y objeciones que enfrentan las gerencias de salud antes de transformar su pabellón quirúrgico.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div 
                key={index} 
                className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 bg-white shadow-sm hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 bg-slate-50/50 hover:bg-slate-50 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-base md:text-md leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isOpen && (
                  <div className="p-5 border-t border-slate-100 bg-white space-y-3">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.answer}
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-blue-800 text-[10px] uppercase tracking-widest font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item.objectionSolved}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-slate-900 text-sm">¿Tiene alguna duda institucional o técnica que no figure aquí?</h4>
            <p className="text-xs text-slate-600 mt-1">Con gusto podemos resolverla en directo durante su diagnóstico inicial sin costo.</p>
          </div>
          <div className="text-center md:text-right flex-shrink-0">
            <span className="text-xs text-blue-900 font-bold block mb-1">Enfermera Coordinadora Quirúrgica</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest block">Modelando el Cambio Operativo</span>
          </div>
        </div>

      </div>
    </section>
  );
}
