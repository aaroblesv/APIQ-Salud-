/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface DaySelection {
  dateString: string; // YYYY-MM-DD
  label: string;      // e.g. "Lunes 22"
  slots: TimeSlot[];
}

export interface BookingFormData {
  name: string;
  email: string;
  role: string;       // Cargo (Gerente de operaciones, Subdirector médico, etc)
  institution: string; // Nombre clínica/hospital
  phone: string;
  notes?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  institution: string;
  imageAlt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  objectionSolved: string;
}
