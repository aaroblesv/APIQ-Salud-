/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Calendar, 
  Download, 
  HelpCircle, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  AlertCircle, 
  Clock, 
  MapPin, 
  Award, 
  Stethoscope, 
  FileCheck2, 
  Layers, 
  ChevronRight, 
  PhoneCall, 
  FileText,
  UserCheck,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BookingModal } from './components/BookingModal';
import { IndicatorShowcase } from './components/IndicatorShowcase';
import { LeadMagnetView } from './components/LeadMagnetView';

// Import high-definition images generated with Gemini
import medicalLogo from './assets/images/apiq_logo_new_1782272728120.jpg';
import tablaConGraficos from './assets/images/tabla_con_graficos_1782272761893.jpg';
import dashboardLaptop from './assets/images/dashboard_laptop_new_1782274036982.jpg';
import surgeonsCollaboration from './assets/images/surgeons_collaboration_1781982228113.jpg';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  // Metodología de gobernanza y experiencia clínica consolidada para la mejora continua

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white antialiased">
      
      {/* Dynamic Navigation Indicator Banner (NO distracting menu) */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3.5 py-1">
            <div className="w-16 h-16 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-md border border-blue-900/10 flex-shrink-0 p-1.5">
              <img src={medicalLogo} alt="APIQ Salud Logo" className="w-full h-full object-contain rounded-full" referrerPolicy="no-referrer" />
            </div>
            <div>
              <span className="text-xl font-extrabold font-display text-blue-950 tracking-tight block leading-tight">
                APIQ Salud
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-mono tracking-normal block mt-0.5 max-w-[260px] sm:max-w-md leading-tight">
                Asesorías e Inteligencia Operacional en Intervenciones Quirúrgicas
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Diagnóstico Disponible
            </span>
            <button
              onClick={handleOpenBooking}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-900 text-xs font-bold rounded-lg transition-all focus:ring-2 focus:ring-blue-600 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar Reunión</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        
        {/* 1. Above the fold: Value proposition and CTA */}
        <section id="inicio" className="relative overflow-hidden bg-white pt-12 pb-20 lg:py-24 border-b border-slate-100 scroll-mt-24">
          <div className="absolute inset-0 bg-[radial-gradient(#cfd8dc_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
          
          <div className="relative max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Text & CTA Content */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* Target Client pill representation */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  Exclusivo para Directores, Gerentes de Operaciones y Gestores de Áreas Quirúrgicas
                </div>

                {/* Over-Optimized High-Converting Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-tight lg:leading-tight">
                  Trazabilidad y Calidad en su <span className="text-blue-900">Agendamiento Quirúrgico</span>
                </h1>

                {/* Subheading clarifying core conversion values */}
                <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  Transformamos datos quirúrgicos en decisiones que aumentan la eficiencia, mejoran la experiencia del paciente y generan resultados medibles para la dirección hospitalaria.
                </p>

                {/* Microcopy + Immediate Above the fold Primary CTA */}
                <div className="pt-4 flex flex-col items-center lg:items-start gap-4">
                  <button
                    onClick={handleOpenBooking}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-900 text-white font-bold rounded-xl text-base md:text-md shadow-xl hover:bg-black hover:scale-[1.02] active:scale-100 transition-all focus:ring-4 focus:ring-blue-300 cursor-pointer text-center"
                  >
                    <Calendar className="w-5 h-5 flex-shrink-0 text-blue-300 animate-pulse" />
                    <span>Agendar Reunión Diagnóstica de 30 minutos</span>
                  </button>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-500 mt-2">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-green-500" /> Incluye Reporte Clave de Suspensiones Quirúrgicas
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-slate-400" /> Diagnóstico inicial de tres semanas
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Platform screenshot as a gorgeous browser mockup */}
              <div className="lg:col-span-5 relative w-full">
                <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl shadow-2xl border border-slate-200/80 bg-slate-50 overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
                  {/* Browser Chrome Bar */}
                  <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-5 justify-between select-none">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                    </div>
                    {/* Fake URL Address line */}
                    <div className="bg-white rounded-md border border-slate-200/80 text-[10px] text-slate-400 px-3 py-1 w-full max-w-xs text-center font-mono truncate">
                      medinet.apiq.app/eficiencia-quirurgica
                    </div>
                    <div className="w-10" /> {/* Balancer */}
                  </div>
                  {/* Browser Content */}
                  <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden relative">
                    <img
                      src={tablaConGraficos}
                      alt="Reporte impreso con gráficos de rendimiento y eficiencia quirúrgica en un portapapeles con el logo de APIQ Salud"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Hero Shot & KPI Visualizations Component */}
        <section id="indicadores" className="scroll-mt-24">
          <IndicatorShowcase />
        </section>

        {/* 4. Solución y servicio: 3 Steps function */}
        <section id="metodologia" className="py-20 bg-blue-900 text-white relative overflow-hidden scroll-mt-24">
          {/* Centered watermark background behind methodology - representing APIQ methodology */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] md:w-[700px] md:h-[700px] opacity-[0.08] pointer-events-none select-none z-0">
            <img src={medicalLogo} alt="Metodología APIQ" className="w-full h-full object-contain rounded-full mix-blend-overlay filter invert animate-pulse" style={{ animationDuration: '8s' }} referrerPolicy="no-referrer" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 z-0" />
          
          <div className="relative max-w-5xl mx-auto px-4">
            
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-800/80 text-blue-200 uppercase tracking-widest mb-3">
                Metodología de Trabajo Estructurada
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight mb-4">
                Metodología APIQ: Calidad en 3 Fases Claras
              </h2>
              <p className="text-blue-100 text-sm max-w-xl mx-auto mb-8">
                No alteramos su rutina diaria de golpe. Evaluamos, probamos a escala controlada y luego expandimos bajo estricta trazabilidad de procesos y gestión del cambio.
              </p>

              {/* Acrónimo de Metodología APIQ® */}
              <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-left border border-white/10 rounded-2xl bg-slate-950/35 p-6 backdrop-blur-sm shadow-xl mb-6">
                <div className="space-y-1">
                  <span className="text-xl md:text-2xl font-black text-blue-400 font-display block border-b border-white/10 pb-1">A — Auditoría</span>
                  <p className="text-[11px] text-blue-100/90 leading-snug">Diagnóstico integral de productividad quirúrgica.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xl md:text-2xl font-black text-blue-400 font-display block border-b border-white/10 pb-1">P — Productividad</span>
                  <p className="text-[11px] text-blue-100/90 leading-snug">Identificación de brechas, pérdidas y capacidad instalada.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xl md:text-2xl font-black text-blue-400 font-display block border-b border-white/10 pb-1">I — Inteligencia Operacional</span>
                  <p className="text-[11px] text-blue-100/90 leading-snug">Diseño de indicadores y análisis de desempeño.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xl md:text-2xl font-black text-blue-400 font-display block border-b border-white/10 pb-1">Q — Calidad y Gestión</span>
                  <p className="text-[11px] text-blue-100/90 leading-snug">Implementación, seguimiento y mejora continua.</p>
                </div>
              </div>
            </div>

            {/* Structured Formal Timeline Row (Visible in one clean line on desktop) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              
              {/* Phase 1 */}
              <div className="bg-slate-950/40 p-6 md:p-8 rounded-2xl border border-white/20 relative overflow-hidden transition-all hover:border-blue-400/50 hover:bg-slate-950/50 shadow-lg flex flex-col justify-between h-full">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue-600" />
                <div className="text-6xl font-black text-blue-200/10 absolute -top-2 -right-1 tracking-tighter select-none">01</div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-600 text-white font-bold text-xs uppercase mb-4 tracking-wider">
                    Fase 1
                  </div>
                  <h3 className="text-lg font-bold font-display text-white mb-2 leading-snug">
                    Diagnóstico
                  </h3>
                  <span className="text-[10px] font-mono font-semibold uppercase bg-blue-200/20 text-blue-100 px-2 py-0.5 rounded tracking-wide inline-block mb-4 border border-white/10">
                    Duración: 3 Semanas
                  </span>
                  <p className="text-xs text-blue-100/90 leading-relaxed">
                    Auditoría preliminar de los procesos prequirúrgicos y agendamiento actual. Mapeo de la ventana crítica de validación anticipada e identificación de causas de suspensión de cirugías. Concluye con la entrega de un Informe Consolidado de Oportunidades.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-blue-300">
                  <FileCheck2 className="w-4 h-4 flex-shrink-0 text-blue-400" /> 
                  <span>Entrega de Plan Quirúrgico de Acción</span>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-slate-950/40 p-6 md:p-8 rounded-2xl border border-white/20 relative overflow-hidden transition-all hover:border-blue-400/50 hover:bg-slate-950/50 shadow-lg flex flex-col justify-between h-full">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue-500" />
                <div className="text-6xl font-black text-blue-200/10 absolute -top-2 -right-1 tracking-tighter select-none">02</div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-500 text-white font-bold text-xs uppercase mb-4 tracking-wider">
                    Fase 2
                  </div>
                  <h3 className="text-lg font-bold font-display text-white mb-2 leading-snug">
                    Puesta en Marcha de Piloto
                  </h3>
                  <span className="text-[10px] font-mono font-semibold uppercase bg-blue-200/20 text-blue-100 px-2 py-0.5 rounded tracking-wide inline-block mb-4 border border-white/10">
                    Duración: 3 Meses
                  </span>
                  <p className="text-xs text-blue-100/90 leading-relaxed">
                    Modelamiento del proceso en una especialidad quirúrgica delimitada (subunidad). Introducción de protocolos de validación asistencial liderados por Enfermería Coordinadora de Enlace y medición estructurada diaria de KPIs (Tiempos muertos y Cancelaciones).
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-blue-300">
                  <TrendingUp className="w-4 h-4 flex-shrink-0 text-blue-400" /> 
                  <span>Resultados cuantificados</span>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-slate-950/40 p-6 md:p-8 rounded-2xl border border-white/20 relative overflow-hidden transition-all hover:border-blue-400/50 hover:bg-slate-950/50 shadow-lg flex flex-col justify-between h-full">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-emerald-500" />
                <div className="text-6xl font-black text-blue-200/10 absolute -top-2 -right-1 tracking-tighter select-none">03</div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-xs uppercase mb-4 tracking-wider">
                    Fase 3
                  </div>
                  <h3 className="text-lg font-bold font-display text-white mb-2 leading-snug">
                    Fase de Seguimiento
                  </h3>
                  <span className="text-[10px] font-mono font-semibold uppercase bg-blue-200/20 text-blue-100 px-2 py-0.5 rounded tracking-wide inline-block mb-4 border border-white/10">
                    Duración: 1 Año
                  </span>
                  <p className="text-xs text-blue-100/90 leading-relaxed">
                    Plan de gestión de cambio para el proceso actual de la Institución. Tutorías mensuales sistemáticas y auditorías cruzadas para perpetuar la trazabilidad de la calidad quirúrgica.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-emerald-300">
                  <Award className="w-4 h-4 flex-shrink-0 text-emerald-400" /> 
                  <span>Indicadores operacionales de nivel internacional</span>
                </div>
              </div>

            </div>

            {/* Middle CTA component integration */}
            <div className="mt-16 bg-white/5 border border-white/10 p-6 rounded-2xl text-center max-w-2xl mx-auto">
              <p className="text-sm text-blue-100 font-medium mb-4">
                Comencemos por la Fase 1: En tres semanas obtendrá el informe completo de fugas de eficiencia de su pabellón.
              </p>
              <button
                onClick={handleOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-blue-900 font-bold rounded-xl shadow-md hover:bg-slate-100 hover:scale-105 active:scale-100 transition-all text-xs cursor-pointer"
              >
                <span>Agendar Primera Fase de Diagnóstico</span>
                <ChevronRight className="w-4 h-4 text-blue-900" />
              </button>
            </div>

          </div>
        </section>

        {/* 6. Experiencia Clínica y Origen de la Metodología APIQ */}
        <section id="experiencia" className="py-20 bg-slate-100 scroll-mt-24">
          <div className="max-w-5xl mx-auto px-4">
            
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 uppercase tracking-wider mb-3">
                Origen & Experiencia Real
              </span>
              <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight">
                Respaldado por el Conocimiento Operacional y Clínico
              </h2>
              <p className="text-slate-600 text-sm max-w-2xl mx-auto mt-2">
                La metodología APIQ no nace de la especulación teórica o de soluciones de software genéricas, sino del trabajo directo en pabellón y el rediseño estructural de procesos de salud.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Clinical and Operational Visuals */}
              <div className="lg:col-span-4 flex flex-col gap-4 justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-white aspect-[4/3]">
                  <img 
                    src={surgeonsCollaboration} 
                    alt="Equipo quirúrgico trabajando en pabellón" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute bottom-2 left-2 bg-slate-900/85 backdrop-blur-sm text-white px-2 py-0.5 text-[9px] rounded font-medium">
                    Experiencia Clínica en Pabellón
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-white aspect-[4/3]">
                  <img 
                    src={dashboardLaptop} 
                    alt="Dashboard de gestión operacional de pabellones quirúrgicos" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute bottom-2 left-2 bg-blue-900/85 backdrop-blur-sm text-white px-2 py-0.5 text-[9px] rounded font-medium">
                    Inteligencia Operacional
                  </div>
                </div>
              </div>

              {/* Right Column: Experience and APIQ Methodology details */}
              <div className="lg:col-span-8 flex flex-col justify-between gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                  <h3 className="text-lg font-bold text-blue-950 mb-3 font-display">
                    Trayectoria Clínica y del Proceso Operacional Quirúrgico
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nuestra propuesta consolida décadas de práctica perioperatoria directa y modelos de optimización aplicados. Entendemos el idioma de los clínicos y las necesidades de la administración para lograr un pabellón seguro, predecible y de alto rendimiento.
                  </p>
                </div>

                {/* Subgrid of 3 key experience aspects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-900" />
                    <div>
                      <h4 className="text-xl font-black text-blue-950 font-display">20 Años</h4>
                      <h5 className="font-bold text-slate-800 text-[11px] mt-1 mb-1.5">En Áreas Quirúrgicas</h5>
                      <p className="text-[10px] text-slate-600 leading-normal">
                        Gestión y desarrollo operacional en terreno, abarcando pabellón, unidades críticas y coordinación clínica de enlace.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-700" />
                    <div>
                      <h4 className="text-xl font-black text-blue-950 font-display">10 Años</h4>
                      <h5 className="font-bold text-slate-800 text-[11px] mt-1 mb-1.5">Agendamiento Eficiente</h5>
                      <p className="text-[10px] text-slate-600 leading-normal">
                        Diseño y modelamiento de agendamientos inteligentes para mitigar mermas pasivas en pabellones quirúrgicos.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-600" />
                    <div>
                      <h4 className="text-xl font-black text-emerald-600 font-display">APIQ</h4>
                      <h5 className="font-bold text-slate-800 text-[11px] mt-1 mb-1.5">Mejora Continua</h5>
                      <p className="text-[10px] text-slate-600 leading-normal">
                        Método estandarizado de enlace y gestión que erradica cancelaciones críticas del mismo día de forma sostenible.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 7. Oferta y Lead magnet */}
        <section id="descargas" className="scroll-mt-24">
          <LeadMagnetView onOpenBooking={handleOpenBooking} />
        </section>

        {/* 9. CTA Repetido */}
        <section className="py-16 bg-blue-950 text-white text-center relative border-b border-blue-900">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
          <div className="relative max-w-3xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight tracking-tight">
              Mejore su proceso quirúrgico con el acompañamiento de APIQ Salud
            </h2>
            <p className="text-blue-100 text-sm max-w-xl mx-auto leading-relaxed">
              Le invitamos a iniciar la Fase 1 de Diagnóstico para identificar las oportunidades de mejora y optimizar la programación de su pabellón de manera estructurada.
            </p>
            <div className="pt-2">
              <button
                onClick={handleOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-md md:text-lg shadow-xl cursor-pointer"
              >
                <Calendar className="w-5 h-5 flex-shrink-0" />
                <span>Reserva una reunión inicial de 30 minutos con APIQ Salud</span>
              </button>
            </div>
            <p className="text-[10px] text-blue-300">
              * Recurso exclusivo: Incluye la descarga inmediata del Compendio Científico sobre Suspensiones Quirúrgicas al confirmar.
            </p>
          </div>
        </section>

      </main>

      {/* 10. Cierre y Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-xs border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <blockquote className="text-slate-200 italic max-w-2xl mx-auto text-sm">
            "La excelencia en el quirófano no es el resultado de la pura casualidad o del esfuerzo aislado de un cirujano; es el producto directo de una planificación coordinada, trazable y humana de todo el equipo clínico."
          </blockquote>
          
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-[10px] text-slate-500 max-w-md mx-auto text-left space-y-1">
            <span className="font-bold text-slate-400 block mb-1">Aviso breve de tratamiento de datos personales:</span>
            <p className="leading-relaxed">
              De conformidad con las leyes vigentes de protección de datos personales, los datos que registre en este portal con fines de agendamiento académico-operativo son estrictamente confidenciales. Se manejarán bajo encriptación pasiva, con el único objetivo de proyectar estimaciones operacionales para su propia clínica u hospital, y jamás se transferirán o venderán a terceros bajo ninguna condición.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-800/80 gap-4 text-[10px]">
            <p>© 2026 APIQ Salud. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <span className="text-slate-600">Modelado en Chile & LatinoAmérica</span>
              <span>•</span>
              <span className="text-slate-600">Coordinación de Calidad Perioperatoria</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Functional Interactive App Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

    </div>
  );
}
