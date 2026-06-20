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
  UserCheck
} from 'lucide-react';
import { BookingModal } from './components/BookingModal';
import { IndicatorShowcase } from './components/IndicatorShowcase';
import { LeadMagnetView } from './components/LeadMagnetView';
import { FAQSection } from './components/FAQSection';

// Import high-definition images generated with Gemini
import medicalLogo from './assets/images/surgical_governance_logo_1781982201820.jpg';
import medinetMockup from './assets/images/medinet_platform_mockup_1781982212963.jpg';
import surgeonsCollaboration from './assets/images/surgeons_collaboration_1781982228113.jpg';
import hospitalTeamCollaboration from './assets/images/hospital_team_collaboration_1781982239391.jpg';

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
            <div className="w-16 h-16 rounded-full bg-blue-50 overflow-hidden flex items-center justify-center shadow-md border border-blue-900/10 flex-shrink-0">
              <img src={medicalLogo} alt="APIQ Salud Logo" className="w-full h-full object-cover scale-[1.02]" referrerPolicy="no-referrer" />
            </div>
            <div>
              <span className="text-xl font-extrabold font-display text-blue-950 tracking-tight block leading-tight">
                APIQ Salud
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono tracking-wide uppercase block mt-0.5">
                Enfermería de Enlace y Modelos Clínicos
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
        <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:py-24 border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(#cfd8dc_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
          
          <div className="relative max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Text & CTA Content */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* Target Client pill representation */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  Exclusivo para Directores Médicos y Gerentes de Operaciones
                </div>

                {/* Over-Optimized High-Converting Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-tight lg:leading-tight">
                  Trazabilidad y Calidad en su <span className="text-blue-900">Agendamiento Quirúrgico</span>
                </h1>

                {/* Subheading clarifying core conversion values */}
                <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
                  Incorpore un modelo de gestión perioperatorio liderado por enfermería. Reduzca suspensiones preventivas, optimize el tiempo muerto de pabellón y estandarice procesos sin alterar sustancialmente su infraestructura.
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
                      <Clock className="w-4 h-4 text-slate-400" /> Diagnóstico inicial de una semana sin compromisos
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
                      https://medinet.apiq.app/trazabilidad-pabellon
                    </div>
                    <div className="w-10" /> {/* Balancer */}
                  </div>
                  {/* Browser Content */}
                  <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden relative">
                    <img
                      src={medinetMockup}
                      alt="Captura de pantalla de la Plataforma de Trazabilidad Quirúrgica Medinet, reflejando cirugías, agendamiento y validación de enfermería"
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
        <IndicatorShowcase />

        {/* 3. Problema: Generated direct quotes/pain from client persona */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-red-100 text-red-700 uppercase tracking-wider mb-3">
                ¿Le resulta familiar este dolor?
              </span>
              <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight">
                El Desgaste Operativo de un Quirófano Descoordinado
              </h2>
            </div>

            <div className="p-6 md:p-8 bg-slate-50 rounded-2xl border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-4 bg-white rounded-xl border border-slate-100 space-y-3">
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                  <AlertCircle className="w-4.5 h-4.5" />
                </div>
                <h4 className="font-bold text-slate-900 font-display text-sm">Suspensiones Inesperadas</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  "El pabellón se detiene a las 8:00 AM porque faltaba verificar el examen preoperatorio o porque el insumo especial no llegó de central. Se reprograma todo el plan diario en minutos."
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-100 space-y-3">
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                  <TrendingUp className="w-4.5 h-4.5 rotate-180" />
                </div>
                <h4 className="font-bold text-slate-900 font-display text-sm">Resistencia Médica</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  "Los jefes de departamento de cirugía rechazan nuevas normativas de pabellón. Sienten que se les imponen reglas administrativas y defienden con recelo el manejo de sus horas asignadas."
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-100 space-y-3">
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                  <Layers className="w-4.5 h-4.5" />
                </div>
                <h4 className="font-bold text-slate-900 font-display text-sm">Software Desconectado</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  "Contamos con una plataforma de agendamiento, pero las esterilizaciones o la habilitación de cama clínica operan en silos aislados. No hay trazabilidad perioperatoria fluida de punta a punta."
                </p>
              </div>

            </div>

            <p className="text-center text-slate-500 text-xs italic mt-6 max-w-2xl mx-auto leading-relaxed">
              Tratar la ineficiencia logística de un pabellón únicamente adquiriendo nuevos módulos informáticos suele fallar. Se requiere un <strong className="text-slate-800">modelamiento clínico y un rol de enlace real</strong> que alinee el comportamiento asistencial.
            </p>

          </div>
        </section>

        {/* 4. Solución y servicio: 3 Steps function */}
        <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
          {/* Subtle logo watermark background */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 md:w-[500px] md:h-[500px] opacity-[0.06] pointer-events-none select-none z-0">
            <img src={medicalLogo} alt="" className="w-full h-full object-contain rounded-full mix-blend-overlay filter invert" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -left-16 -top-16 w-80 h-80 opacity-[0.04] pointer-events-none select-none z-0 hidden md:block">
            <img src={medicalLogo} alt="" className="w-full h-full object-contain rounded-full mix-blend-overlay filter invert" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 z-0" />
          
          <div className="relative max-w-5xl mx-auto px-4">
            
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-800/80 text-blue-200 uppercase tracking-widest mb-3">
                Metodología de Trabajo Estructurada
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight mb-4">
                Mejora Continua y Calidad en 3 Fases Claras
              </h2>
              <p className="text-blue-100 text-sm max-w-xl mx-auto">
                No alteramos su rutina diaria de golpe. Evaluamos, probamos a escala controlada y luego expandimos bajo estricta trazabilidad de procesos y gestión del cambio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              
              <div className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/15 relative overflow-hidden transition-all hover:bg-white/15">
                <div className="text-6xl font-black text-blue-200/20 absolute -top-4 -right-2 tracking-tighter">01</div>
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold font-display mb-6">
                  Fase 1
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-2">
                  Diagnóstico Pre-quirúrgico
                </h3>
                <span className="text-[10px] font-mono font-semibold uppercase bg-blue-200 text-blue-900 px-2 py-0.5 rounded tracking-wide inline-block mb-3">
                  Duración: 1 Semana
                </span>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Auditoría preliminar de los procesos perioperatorios y agendamiento actual. Mapeo de la ventana crítica de validación anticipada e identificación de causas de suspensión de cirugías. Concluye con la entrega de un Informe Consolidado de Oportunidades.
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-blue-200">
                  <FileCheck2 className="w-4 h-4" /> Entrega de Plan Quirúrgico de Acción
                </div>
              </div>

              <div className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/15 relative overflow-hidden transition-all hover:bg-white/15">
                <div className="text-6xl font-black text-blue-200/20 absolute -top-4 -right-2 tracking-tighter">02</div>
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold font-display mb-6">
                  Fase 2
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase bg-blue-200 text-blue-900 px-2 py-0.5 rounded tracking-wide inline-block mb-3">
                  Duración: 1 Mes
                </span>
                <h3 className="text-lg font-bold font-display text-white mb-2">
                  Puesta en Marcha de Piloto
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Modelamiento del proceso en una especialidad quirúrgica delimitada (subunidad). Introducción de protocolos de validación asistencial liderados por Enfermería Coordinadora de Enlace y medición estructurada diaria de KPIs (Tiempos muertos y Cancelaciones).
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-blue-200">
                  <TrendingUp className="w-4 h-4 mt-0.5" /> Resultados cuantificados en 30 días
                </div>
              </div>

              <div className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/15 relative overflow-hidden transition-all hover:bg-white/15">
                <div className="text-6xl font-black text-blue-200/20 absolute -top-4 -right-2 tracking-tighter">03</div>
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold font-display mb-6">
                  Fase 3
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase bg-blue-200 text-blue-900 px-2 py-0.5 rounded tracking-wide inline-block mb-3">
                  Duración: 1 Año
                </span>
                <h3 className="text-lg font-bold font-display text-white mb-2">
                  Implementación y Escalado
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Expansión del protocolo validado al 100% de la unidad quirúrgica. Plan de gestión de cambio para el proceso actual de la Institución. Tutorías mensuales sistemáticas y auditorías cruzadas para perpetuar la trazabilidad de la calidad.
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-blue-200">
                  <Award className="w-4 h-4" /> Estándar de acreditación internacional
                </div>
              </div>

            </div>

            {/* Middle CTA component integration */}
            <div className="mt-16 bg-white/5 border border-white/10 p-6 rounded-2xl text-center max-w-2xl mx-auto">
              <p className="text-sm text-blue-100 font-medium mb-4">
                Comencemos por la Fase 1: En una sola semana obtendrá el informe completo de fugas de eficiencia de su pabellón.
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
        <section className="py-20 bg-slate-100">
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

            {/* Visual Anchor: Surgeons in a sterile OR in high definition */}
            <div className="mb-14 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/60 bg-white max-w-3xl mx-auto group">
              <div className="aspect-[21/9] w-full overflow-hidden relative">
                <img 
                  src={surgeonsCollaboration} 
                  alt="Equipo cirujano y anestesiólogo trabajando de forma coordinada bajo parámetros estandarizados de la metodología APIQ" 
                  className="w-full h-full object-cover transform group-hover:scale-[1.01] transition-all duration-500" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider bg-blue-600/90 text-white px-2 py-0.5 rounded shadow-sm inline-block mb-1.5 font-semibold">
                    Entorno Perioperatorio Controlado
                  </span>
                  <p className="text-[11px] text-slate-100 leading-normal max-w-2xl font-medium">
                    Cirujanos y personal de anestesia enfocados al 100% en el acto clínico, gracias a una validación administrativa anticipada que reduce las sorpresas operacionales de último minuto.
                  </p>
                </div>
              </div>
            </div>

            {/* Core experience metrics mapping */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-900" />
                <h3 className="text-4xl font-extrabold font-display text-blue-950 mb-2">20 Años</h3>
                <h4 className="font-bold text-slate-800 text-sm mb-2">De Servicio en Áreas Quirúrgicas</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Experiencia clínica real en la gestión y desarrollo operacional de servicios de pabellón y unidades críticas, comprendiendo minuciosamente el idioma de cirujanos, anestesiólogos y personal institucional de enfermería.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-700" />
                <h3 className="text-4xl font-extrabold font-display text-blue-950 mb-2">10 Años</h3>
                <h4 className="font-bold text-slate-800 text-sm mb-2">De Agendamiento Eficiente</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicación exclusiva al diseño, modelamiento e implementación de sistemas de agendamiento inteligente. Identificación proactiva de mermas e ineficiencias pasivas en la reserva horaria.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-emerald-600" />
                <h3 className="text-4xl font-extrabold font-display text-emerald-600 mb-2">APIQ</h3>
                <h4 className="font-bold text-slate-800 text-sm mb-2">Metodología Basada en Mejora Continua</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consolidación de esta vasta trayectoria en un método estandarizado que reduce las suspensiones críticas del mismo día, fomenta la predictibilidad operacional y empodera a los equipos quirúrgicos.
                </p>
              </div>

            </div>

            {/* Gobernza e Identidad */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
              
              <div className="lg:col-span-4 min-h-[320px] lg:min-h-full p-8 text-white text-center flex flex-col justify-center items-center relative overflow-hidden h-full">
                {/* Background Image of Clinical Team Collaboration */}
                <img 
                  src={hospitalTeamCollaboration} 
                  alt="Coordinación clínica exitosa en hospital" 
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" 
                  referrerPolicy="no-referrer" 
                />
                {/* Dark Blue Overlay */}
                <div className="absolute inset-0 bg-blue-950/85 backdrop-blur-[1px] z-0" />
                
                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-4 border-white/20 bg-white/95 text-blue-950 flex items-center justify-center font-black text-2xl font-display mb-4 shadow-md">
                    APIQ
                  </div>
                  <h3 className="font-bold font-display text-base tracking-tight text-white leading-snug">Liderazgo de Gestión Quirúrgica</h3>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-blue-300 block mt-1">Estrategias Clínicas de Enlace</span>
                  
                  <div className="mt-4 inline-flex items-center gap-1 text-[9px] py-1 px-2.5 rounded bg-white/10 text-blue-100 border border-white/10 shadow-sm">
                    <Award className="w-3.5 h-3.5 animate-bounce" /> 20 Años de Trayectoria Quirúrgica
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 p-6 md:p-8 space-y-4">
                <h4 className="text-lg font-bold font-display text-blue-950 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-blue-600 animate-pulse" />
                  Gobernanza Quirúrgica Centrada en la Coordinación Neutral
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Para sanar las ineficiencias de un pabellón, la dirección médica requiere de un agente de enlace neutral. Mi rol actúa como puente unificador entre la alta gerencia de operaciones y los clínicos operadores claves del proceso en un seguimiento modelador y de desarrollo profesional, potenciando el capital humano:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="flex gap-2 p-2.5 rounded bg-slate-50 border border-slate-100">
                    <span className="text-green-600">✓</span>
                    <div>
                      <strong className="text-slate-800 font-bold block">Visión Asistencial Completa</strong>
                      <span className="text-[11px] text-slate-500">Modelado continuo desde la validación preparatoria hasta el alta perioperatoria.</span>
                    </div>
                  </div>
                  <div className="flex gap-2 p-2.5 rounded bg-slate-50 border border-slate-100">
                    <span className="text-green-600">✓</span>
                    <div>
                      <strong className="text-slate-800 font-bold block">Modelamiento de Líderes de Proceso</strong>
                      <span className="text-[11px] text-slate-500 font-medium">Seguimiento y reforzamiento del modelo APIQ en terreno y llevado por los profesionales de la misma Institución.</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  * Diseños validados basados en la mejora continua de la planificación quirúrgica operacional intrahospitalaria.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 7. Oferta y Lead magnet */}
        <LeadMagnetView onOpenBooking={handleOpenBooking} />

        {/* 8. FAQ Section */}
        <FAQSection />

        {/* 9. CTA Repetido */}
        <section className="py-16 bg-blue-950 text-white text-center relative border-b border-blue-900">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
          <div className="relative max-w-3xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight tracking-tight">
              Estandarice su Pabellón y Proteja el Bienestar de sus Pacientes
            </h2>
            <p className="text-blue-100 text-sm max-w-xl mx-auto leading-relaxed">
              Inicie hoy la Fase 1 diagnóstica sin costos adicionales para su institución. Obtenga el plan de acción, configure sus variables y comience el camino de eficiencia quirúrgica de calidad.
            </p>
            <div className="pt-2">
              <button
                onClick={handleOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-md md:text-lg shadow-xl cursor-pointer"
              >
                <Calendar className="w-5 h-5 flex-shrink-0" />
                <span>Agendar Reunión Diagnóstica de 30 minutos</span>
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
            "La excelencia en el quirófano no es el resultado de la pura casualidad o del esfuerzo asilado de un cirujano; es el producto directo de una planificación coordinada, trazable y humana de todo el equipo clínico."
          </blockquote>
          
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-[10px] text-slate-500 max-w-md mx-auto text-left space-y-1">
            <span className="font-bold text-slate-400 block mb-1">Aviso breve de tratamiento de datos personales:</span>
            <p className="leading-relaxed">
              De conformidad con las leyes vigentes de protección de datos personales, los datos que registre en este portal con fines de agendamiento académico-operativo son estrictamente confidenciales. Se manejarán bajo encriptación pasiva, con el único objetivo de proyectar estimaciones operacionales para su propia clínica u hospital, y jamás se transferirán o venderán a terceros bajo ninguna condición.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-800/80 gap-4 text-[10px]">
            <p>© 2026 Planificación Quirúrgica Eficiente. Todos los derechos reservados.</p>
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
