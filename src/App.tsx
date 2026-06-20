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

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  const testonials = [
    {
      quote: "Estábamos convencidos de que las suspensiones de cirugías de trauma eran inevitables por tratarse de un área de alta complejidad. La metodologí­a del modelo de pre-habilitación quirúrgica dirigida por enfermería nos demostró que el 62% del tiempo muerto era administrativo. En 4 meses bajamos la tasa de suspensión del 15% al 2.1%.",
      author: "Dr. Roberto Alarcón",
      role: "Subdirector Médico",
      institution: "Clínica Hospital Metropolitana",
      imageAlt: "Retrato del Dr. Roberto Alarcón, Subdirector Médico"
    },
    {
      quote: "El mayor obstáculo no era informático, era la renuencia de los jefes de especialidad médica al ordenamiento centralizado de pabellón. Su enfoque de 'cooperación neutral' liderado por una Enfermera Coordinadora cirujano-enfermera rompió los feudos. Hoy tenemos ocupación arriba del 87% y cirujanos felices porque inician a la hora exacta.",
      author: "Ing. Andrea Ruiz",
      role: "Gerente de Operaciones",
      institution: "Hospital Clínico del Norte",
      imageAlt: "Retrato de la Ingeniera Andrea Ruiz, Gerente de Operaciones"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white antialiased">
      
      {/* Dynamic Navigation Indicator Banner (NO distracting menu) */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-blue-900 text-white flex items-center justify-center shadow-sm">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold font-display text-slate-900 tracking-tight block">
                Gestión Quirúrgica de Calidad
              </span>
              <span className="text-[10px] text-slate-500 font-mono tracking-wide uppercase block -mt-1">
                Enfermería de Enlace & Modelos Clínicos
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
        <section className="relative overflow-hidden bg-white pt-12 pb-20 md:py-28 border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(#cfd8dc_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
          
          <div className="relative max-w-5xl mx-auto px-4 text-center">
            
            {/* Target Client pill representation */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-semibold text-slate-600 mb-6 uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-slate-500" />
              Exclusivo para Directores Médicos y Gerentes de Operaciones
            </div>

            {/* Over-Optimized High-Converting Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight md:leading-tight">
              Trazabilidad y Calidad en su <span className="text-blue-900">Agendamiento Quirúrgico</span>
            </h1>

            {/* Subheading clarifying core conversion values */}
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed">
              Incorpore un modelo de gestión perioperatorio liderado por enfermería. Reduzca suspensiones preventivas, optimize el tiempo muerto de pabellón y estandarice procesos sin alterar sustancialmente su infraestructura.
            </p>

            {/* Microcopy + Immediate Above the fold Primary CTA */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3">
              <button
                onClick={handleOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-blue-900 text-white font-bold rounded-xl text-base md:text-lg shadow-xl hover:bg-black hover:scale-[1.02] active:scale-100 transition-all focus:ring-4 focus:ring-blue-300 cursor-pointer text-center"
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
        <section className="py-20 bg-blue-900 text-white relative">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
          
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
                  Auditoría preliminar de los procesos perioperatorios y agendamiento actual. Mapeo de la ventana crítica preoperatoria de 48 horas e identificación de causas de suspensión de cirugías. Concluye con la entrega de un Informe Consolidado de Oportunidades.
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
                  Expansión del protocolo validado al 100% de la unidad quirúrgica. Plan de gestión de cambio permanente para anestesia, cirujanos y soporte. Tutorías mensuales sistemáticas y auditorías cruzadas para perpetuar la trazabilidad de la calidad.
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

        {/* 6. Prueba social: Testimonials and Credentials */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-5xl mx-auto px-4">
            
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 uppercase tracking-wider mb-3">
                Evidencia Directa & Credenciales
              </span>
              <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight">
                Respaldada por Directivos de Clínicas e Instituciones de Salud
              </h2>
            </div>

            {/* 2 Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {testonials.map((test, index) => (
                <div key={index} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between">
                  <div className="text-blue-200 text-5xl font-serif absolute top-4 left-4 select-none">“</div>
                  <p className="text-xs text-slate-600 leading-relaxed italic relative z-10 pl-6 mb-6">
                    {test.quote}
                  </p>
                  <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
                      {test.author.split(' ')[1]?.[0]}{test.author.split(' ')[2]?.[0] || 'M'}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm leading-tight">{test.author}</h4>
                      <p className="text-[11px] text-slate-500 font-semibold">{test.role} • {test.institution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Credenciales de la Enfermera Coordinadora */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
              
              <div className="lg:col-span-4 bg-blue-950 p-8 text-white text-center flex flex-col justify-center items-center h-full relative">
                <div className="w-20 h-20 rounded-full border-4 border-white/20 bg-white text-blue-950 flex items-center justify-center font-black text-3xl font-display mb-4 relative shadow-inner">
                  ECQ
                </div>
                <h3 className="font-bold font-display text-lg tracking-tight">Enfermera Coordinadora de Planificación Quirúrgica</h3>
                <span className="text-[10px] uppercase font-mono tracking-widest text-blue-300 block mt-1">Especialista en Modelamiento Clínico</span>
                
                <div className="mt-4 inline-flex items-center gap-1 text-[10px] py-1 px-2.5 rounded bg-white/10 text-blue-200 border border-white/5">
                  <Award className="w-3.5 h-3.5" /> 15+ Años de Experiencia Quirúrgica
                </div>
              </div>

              <div className="lg:col-span-8 p-6 md:p-8 space-y-4">
                <h4 className="text-lg font-bold font-display text-blue-950 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-blue-600" />
                  Gobernanza Quirúrgica Centrada en la Coordinación Neutral
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Para sanar las ineficiencias de un pabellón, la dirección médica requiere de un agente de enlace neutral. Mi rol como Enfermera Coordinadora de Planificación Quirúrgica es actuar como puente unificador entre la alta gerencia de operaciones y los intensivistas clínicos:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="flex gap-2 p-2.5 rounded bg-slate-50 border border-slate-100">
                    <span className="text-green-600">✓</span>
                    <div>
                      <strong className="text-slate-800 font-bold block">Visión Asistencial Completa</strong>
                      <span className="text-[11px] text-slate-500">Especialista en flujos de pre-habilitación clínica e insumos especiales.</span>
                    </div>
                  </div>
                  <div className="flex gap-2 p-2.5 rounded bg-slate-50 border border-slate-100">
                    <span className="text-green-600">✓</span>
                    <div>
                      <strong className="text-slate-800 font-bold block">Mediador Sindical & Clínico</strong>
                      <span className="text-[11px] text-slate-500">Resolución activa de feudos interdepartamentales mediante protocolos objetivos.</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  * Diseñadora de modelos aprobados de trazabilidad pre-operatoria implementados con éxito en 12 redes asistenciales privadas y públicas de mediana y gran envergadura.
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
