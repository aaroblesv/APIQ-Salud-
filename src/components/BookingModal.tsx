/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Calendar, Clock, Download, ClipboardCheck, ArrowRight, User, Mail, ShieldAlert, Sparkles, Building, Briefcase, PhoneCall } from 'lucide-react';
import { DaySelection, BookingFormData, TimeSlot } from '../types';
import { downloadLeadMagnetText } from './LeadMagnetView';

// Generate 5 mock working days starting from Monday, June 22, 2026
const DAYS_DATA: DaySelection[] = [
  {
    dateString: "2026-06-22",
    label: "Lunes 22 de Junio",
    slots: [
      { time: "09:00", available: true },
      { time: "10:30", available: false },
      { time: "14:00", available: true },
      { time: "15:30", available: true }
    ]
  },
  {
    dateString: "2026-06-23",
    label: "Martes 23 de Junio",
    slots: [
      { time: "09:00", available: true },
      { time: "10:30", available: true },
      { time: "14:00", available: false },
      { time: "16:00", available: true }
    ]
  },
  {
    dateString: "2026-06-24",
    label: "Miércoles 24 de Junio",
    slots: [
      { time: "09:30", available: true },
      { time: "11:00", available: true },
      { time: "15:00", available: true },
      { time: "16:30", available: false }
    ]
  },
  {
    dateString: "2026-06-25",
    label: "Jueves 25 de Junes",
    slots: [
      { time: "09:00", available: true },
      { time: "10:30", available: true },
      { time: "14:00", available: true },
      { time: "15:30", available: true }
    ]
  },
  {
    dateString: "2026-06-26",
    label: "Viernes 26 de Junio",
    slots: [
      { time: "09:00", available: false },
      { time: "11:00", available: true },
      { time: "14:30", available: true },
      { time: "15:30", available: false }
    ]
  }
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDay, setSelectedDay] = useState<DaySelection>(DAYS_DATA[0]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Day/Time, 2: Form, 3: Success
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    role: "Director Médico",
    institution: "",
    phone: "",
    notes: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Formato de correo inválido.";
    }
    if (!formData.institution.trim()) newErrors.institution = "La institución (Clínica/Hospital) es obligatoria.";
    if (!formData.phone.trim()) newErrors.phone = "El número telefónico de contacto es obligatorio.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1 && !selectedTime) {
      alert("Por favor, seleccione un horario disponible.");
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    // Simulate API registration / persistence in memory
    setStep(3);
    // Instant lead magnet trigger
    try {
      downloadLeadMagnetText();
    } catch (e) {
      console.error("Lead magnet automation error: ", e);
    }
  };

  const roles = [
    "Gerente de Operaciones",
    "Director Médico",
    "Subdirector de Salud",
    "Jefe de Pabellón Quirúrgico",
    "Enfermero/a Coordinador/a",
    "Otro Rol Directivo"
  ];

  return (
    <div 
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-slate-100 overflow-hidden relative fade-in"
        id="booking-modal-content"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 md:p-8 pr-16 relative">
          <button 
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-white focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs bg-blue-500/30 text-blue-200 font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
              Diagnóstico Quirúrgico de 1 Semana
            </span>
          </div>
          <h3 id="modal-title" className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white">
            Agendar Reunión Diagnóstica
          </h3>
          <p className="text-blue-100 text-sm mt-2 max-w-lg leading-relaxed">
            Sesión clínica-operativa de 30 minutos sin costo para cuantificar debilidades de trazabilidad y oportunidades en su área médica.
          </p>
          
          {/* Step indicator bubbles */}
          <div className="flex gap-2 mt-6">
            <span className={`h-1.5 rounded-full transition-all duration-300 ${step >= 1 ? 'w-8 bg-white' : 'w-4 bg-white/40'}`} />
            <span className={`h-1.5 rounded-full transition-all duration-300 ${step >= 2 ? 'w-8 bg-white' : 'w-4 bg-white/40'}`} />
            <span className={`h-1.5 rounded-full transition-all duration-300 ${step === 3 ? 'w-8 bg-green-400' : 'w-4 bg-white/40'}`} />
          </div>
        </div>

        {/* Dynamic step rendering */}
        {step === 1 && (
          <div className="p-6 md:p-8">
            <h4 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              1. Seleccione día y horario para la sesión
            </h4>

            {/* Days list selector (Swiper-style scroll on mobile, structured grid on desktop) */}
            <div className="flex overflow-x-auto gap-2 mb-6 pb-2 snap-x snap-mandatory sm:grid sm:grid-cols-5 scrollbar-thin scrollbar-thumb-blue-900/10">
              {DAYS_DATA.map((day) => {
                const isSelected = selectedDay.dateString === day.dateString;
                return (
                  <button
                    key={day.dateString}
                    type="button"
                    onClick={() => {
                      setSelectedDay(day);
                      setSelectedTime(null);
                    }}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col justify-center items-center flex-shrink-0 w-[42%] sm:w-auto snap-center min-h-[85px] select-none ${
                      isSelected 
                        ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold ring-2 ring-blue-600/20' 
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-[10px] uppercase text-slate-400 font-bold block mb-1">
                      {day.label.split(' ')[0]}
                    </span>
                    <span className="text-lg font-bold font-display block leading-none">
                      {day.label.split(' ')[1]}
                    </span>
                    <span className="text-[10px] text-slate-500 mt-1 whitespace-nowrap">
                      {day.label.split(' ').slice(2).join(' ')}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Hours selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  Horarios disponibles para {selectedDay.label}:
                </span>
                <span className="text-[10px] text-slate-400">Zona horaria: Local de su dispositivo</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {selectedDay.slots.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    disabled={!slot.available}
                    onClick={() => setSelectedTime(slot.time)}
                    className={`p-3 rounded-lg border text-center cursor-pointer text-sm font-semibold transition-all ${
                      !slot.available 
                        ? 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed' 
                        : selectedTime === slot.time
                          ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {slot.time}
                    {!slot.available && <span className="block text-[8px] font-normal text-slate-400 italic">Ocupado</span>}
                    {slot.available && selectedTime === slot.time && <span className="block text-[8px] font-normal text-blue-100">Seleccionado</span>}
                    {slot.available && selectedTime !== slot.time && <span className="block text-[8px] font-normal text-green-500">Libre</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom button controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500 max-w-[50%]">
                * Confirmará sus datos en el siguiente paso para descargar sus guías.
              </p>
              <button
                type="button"
                onClick={handleNextStep}
                disabled={!selectedTime}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-md cursor-pointer ${
                  selectedTime 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg' 
                    : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                }`}
              >
                <span>Continuar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <h4 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4 flex items-center gap-2">
              <ClipboardCheck className="w-4 h-4 text-blue-600" />
              2. Complete sus credenciales profesionales
            </h4>
            
            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 mb-5 flex gap-3 text-xs text-slate-700">
              <span className="font-mono bg-blue-600 text-white rounded px-2 py-0.5 h-fit font-bold">RESERVADO:</span>
              <div>
                <p className="font-semibold text-blue-900">Sesión preliminar:</p>
                <p className="text-[#3b82f6] font-bold">{selectedDay.label} a las {selectedTime} hrs.</p>
              </div>
            </div>

            {/* Form grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5" htmlFor="field-name">
                  <User className="w-3.5 h-3.5 text-slate-400" /> Nombre y Apellido:
                </label>
                <input
                  id="field-name"
                  type="text"
                  placeholder="Ej. Dr. Marcelo Pino"
                  className={`w-full p-2.5 rounded-lg border text-sm text-slate-800 ${errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-200'}`}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <span className="text-[10px] text-red-500 font-semibold block mt-0.5">{errors.name}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5" htmlFor="field-email">
                  <Mail className="w-3.5 h-3.5 text-slate-400" /> Correo Institucional:
                </label>
                <input
                  id="field-email"
                  type="email"
                  placeholder="ejemplo@clinica.cl"
                  className={`w-full p-2.5 rounded-lg border text-sm text-slate-800 ${errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-200'}`}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <span className="text-[10px] text-red-500 font-semibold block mt-0.5">{errors.email}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5" htmlFor="field-role">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400" /> Cargo Médico / Operaciones:
                </label>
                <select
                  id="field-role"
                  className="w-full p-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                >
                  {roles.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5" htmlFor="field-institution">
                  <Building className="w-3.5 h-3.5 text-slate-400" /> Clínica u Hospital:
                </label>
                <input
                  id="field-institution"
                  type="text"
                  placeholder="Ej. Hospital Regional o Clínica Las Flores"
                  className={`w-full p-2.5 rounded-lg border text-sm text-slate-800 ${errors.institution ? 'border-red-500 bg-red-50/20' : 'border-slate-200'}`}
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                />
                {errors.institution && <span className="text-[10px] text-red-500 font-semibold block mt-0.5">{errors.institution}</span>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5" htmlFor="field-phone">
                  <PhoneCall className="w-3.5 h-3.5 text-slate-400" /> Teléfono de contacto directo:
                </label>
                <input
                  id="field-phone"
                  type="tel"
                  placeholder="+56 9 XXXXXXXX"
                  className={`w-full p-2.5 rounded-lg border text-sm text-slate-800 ${errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-200'}`}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                {errors.phone && <span className="text-[10px] text-red-500 font-semibold block mt-0.5">{errors.phone}</span>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="field-notes">
                  Observaciones específicas o dolores detectados (Opcional):
                </label>
                <textarea
                  id="field-notes"
                  rows={2}
                  placeholder="Ej. Resistencia en equipo de anestesia / Colisión frecuente de insumos quirúrgicos especiales."
                  className="w-full p-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 focus:outline-none"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>
            </div>

            {/* Consent label and submit actions */}
            <div className="flex flex-col gap-4 pt-4 border-t border-slate-100">
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Su privacidad es de carácter estricto. La información clínica y administrativa del pabellón es confidencial y solo se utilizará para los cálculos y estimaciones de la fase diagnóstica.
              </p>
              
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-sm font-semibold hover:bg-slate-50 cursor-pointer"
                >
                  Atrás
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all cursor-pointer text-sm"
                >
                  <span>Confirmar & Descargar Reporte</span>
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="p-8 text-center bg-white">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h4 className="text-2xl font-bold font-display text-slate-900 tracking-tight mb-2">
              ¡Agendamiento Clínico Exitoso!
            </h4>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
              Estimado/a <span className="font-bold text-slate-900">{formData.name}</span>, hemos bloqueado el bloque del día <strong className="text-blue-900">{selectedDay.label} a las {selectedTime} hrs</strong>.
            </p>

            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 max-w-lg mx-auto text-left mb-6 text-xs text-slate-700 space-y-2">
              <h5 className="font-bold text-blue-900 uppercase tracking-widest text-[10px] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" /> Siguientes pasos garantizados:
              </h5>
              <div className="flex gap-2">
                <span className="font-mono bg-blue-100 text-blue-800 rounded-full w-4 h-4 flex items-center justify-center font-bold flex-shrink-0">1</span>
                <p>Enviaremos la invitación por <strong>MS Teams / Zoom</strong> con las credenciales directamente a su correo <span className="underline">{formData.email}</span>.</p>
              </div>
              <div className="flex gap-2">
                <span className="font-mono bg-blue-100 text-blue-800 rounded-full w-4 h-4 flex items-center justify-center font-bold flex-shrink-0">2</span>
                <p>Su descarga del compendio de <strong>Referencias sobre Suspensiones Quirúrgicas (Documento de Calidad)</strong> debió haber comenzado.</p>
              </div>
              <div className="flex gap-2">
                <span className="font-mono bg-blue-100 text-blue-800 rounded-full w-4 h-4 flex items-center justify-center font-bold flex-shrink-0">3</span>
                <p>La Enfermera Coordinadora revisará preliminarmente el caso de su institución: <strong>{formData.institution}</strong>.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                type="button"
                onClick={downloadLeadMagnetText}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-950 hover:bg-black text-white font-bold rounded-xl shadow transition-all cursor-pointer text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Forzar Descarga de Lead Magnet</span>
              </button>
              
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setSelectedTime(null);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-3 border border-slate-200 text-slate-600 rounded-xl font-semibold hover:bg-slate-50 transition-all text-sm cursor-pointer"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
