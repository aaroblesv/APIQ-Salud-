/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { jsPDF } from 'jspdf';

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
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  let y = 20;
  const margin = 20;
  const pageHeight = 297;
  const printableWidth = 210 - (margin * 2);

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 20) {
      doc.addPage();
      y = 20;
    }
  };

  // COVER / HEADER SECTION WITH GRADIENT ACCENTS
  // Deep Blue Header Banner
  doc.setFillColor(15, 32, 67); // Slate Blue (#0f2043)
  doc.rect(0, 0, 210, 42, 'F');
  
  // Teal accent line
  doc.setFillColor(13, 148, 136); // Teal-600
  doc.rect(0, 42, 210, 3, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(14);
  const headerTitle1 = "3 EVIDENCIAS CIENTÍFICAS QUE TODO HOSPITAL DEBE CONOCER";
  const title1Width = doc.getTextWidth(headerTitle1);
  doc.text(headerTitle1, (210 - title1Width) / 2, 18);
  
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  const headerSub1 = "Gestión Quirúrgica Basada en Evidencia";
  const sub1Width = doc.getTextWidth(headerSub1);
  doc.text(headerSub1, (210 - sub1Width) / 2, 27);
  
  y = 55;

  // Title
  doc.setTextColor(15, 32, 67);
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(15);
  const titleText = "3 Evidencias Científicas que Todo Hospital Debe Conocer para Mejorar la Gestión Quirúrgica";
  const titleLines = doc.splitTextToSize(titleText, printableWidth);
  doc.text(titleLines, margin, y);
  y += (titleLines.length * 6.5) + 3;

  // Subtitle
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(40, 40, 40);
  doc.text("Subtítulo:", margin, y);
  y += 5;
  doc.setFont("Helvetica", "oblique");
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  const subtitleText = "Resumen ejecutivo comentado sobre eficiencia quirúrgica, trazabilidad y reducción de suspensiones.";
  const subLines = doc.splitTextToSize(subtitleText, printableWidth);
  doc.text(subLines, margin, y);
  y += (subLines.length * 4.5) + 10;

  // Render Article helper
  const renderArticle = (
    num: string, 
    title: string, 
    objective: string, 
    whatTheyDid: string, 
    evaluatedLabel: string | null,
    evaluated: string[], 
    whatTheyFound: string[], 
    whatItMeans: string, 
    keyIdea: string, 
    citation: string
  ) => {
    checkPageBreak(35);
    doc.setTextColor(15, 32, 67);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(12);
    doc.text(`ARTÍCULO ${num}`, margin, y);
    y += 6;

    doc.setFontSize(11);
    const titleLines = doc.splitTextToSize(title, printableWidth);
    doc.text(titleLines, margin, y);
    y += (titleLines.length * 5) + 4;

    // Objective
    checkPageBreak(20);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(40, 40, 40);
    doc.text("Objetivo del estudio", margin, y);
    y += 4.5;
    doc.setFont("Helvetica", "normal");
    const objLines = doc.splitTextToSize(objective, printableWidth);
    doc.text(objLines, margin, y);
    y += (objLines.length * 4.5) + 4;

    // What they did
    checkPageBreak(20);
    doc.setFont("Helvetica", "bold");
    doc.text("¿Qué hicieron?", margin, y);
    y += 4.5;
    doc.setFont("Helvetica", "normal");
    const didLines = doc.splitTextToSize(whatTheyDid, printableWidth);
    doc.text(didLines, margin, y);
    y += (didLines.length * 4.5) + 4;

    // Evaluated / Analizaron if exists
    if (evaluated.length > 0 && evaluatedLabel) {
      checkPageBreak(12 + (evaluated.length * 4.5));
      doc.setFont("Helvetica", "bold");
      doc.text(evaluatedLabel, margin, y);
      y += 4.5;
      doc.setFont("Helvetica", "normal");
      evaluated.forEach(item => {
        doc.text(`• ${item}`, margin + 3, y);
        y += 4.5;
      });
      y += 2;
    }

    // What they found
    checkPageBreak(15 + (whatTheyFound.length * 4.5));
    doc.setFont("Helvetica", "bold");
    doc.text("¿Qué encontraron?", margin, y);
    y += 4.5;
    doc.setFont("Helvetica", "normal");
    whatTheyFound.forEach(item => {
      let text = item;
      let bulletSymbol = "✓ ";
      let indent = 3;
      if (item.startsWith("• ")) {
        text = item.substring(2);
        bulletSymbol = "• ";
        indent = 6;
      }
      const foundLines = doc.splitTextToSize(`${bulletSymbol}${text}`, printableWidth - indent);
      doc.text(foundLines, margin + indent, y);
      y += (foundLines.length * 4.5);
    });
    y += 4;

    // What it means
    checkPageBreak(25);
    doc.setFont("Helvetica", "bold");
    doc.text("¿Qué significa para su hospital?", margin, y);
    y += 4.5;
    doc.setFont("Helvetica", "normal");
    const meansLines = doc.splitTextToSize(whatItMeans, printableWidth);
    doc.text(meansLines, margin, y);
    y += (meansLines.length * 4.5) + 4;

    // Key Idea
    checkPageBreak(20);
    doc.setFont("Helvetica", "bold");
    doc.text("Idea clave", margin, y);
    y += 4.5;
    doc.setFont("Helvetica", "oblique");
    const keyLines = doc.splitTextToSize(`“${keyIdea}”`, printableWidth);
    doc.text(keyLines, margin, y);
    y += (keyLines.length * 4.5) + 4;

    // Citation
    checkPageBreak(20);
    doc.setFont("Helvetica", "bold");
    doc.text("Referencia bibliográfica (APA 7ª edición)", margin, y);
    y += 4.5;
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    const citeLines = doc.splitTextToSize(citation, printableWidth);
    doc.text(citeLines, margin, y);
    y += (citeLines.length * 4) + 10;
  };

  // ARTICLE 1
  renderArticle(
    "1",
    "Optimización de la Programación Quirúrgica mediante Algoritmos y Gestión Operacional",
    "Evaluar cómo distintas estrategias de programación quirúrgica impactan la utilización de pabellones, la coordinación de equipos y la productividad global de los servicios quirúrgicos.",
    "Los investigadores analizaron modelos de programación quirúrgica utilizados en hospitales de alta complejidad, comparando métodos tradicionales con sistemas apoyados por algoritmos de optimización.",
    "Evaluaron:",
    [
      "Utilización de pabellones",
      "Tiempos ociosos",
      "Cumplimiento de programación",
      "Uso eficiente de recursos"
    ],
    [
      "Mejor distribución de cirugías durante la jornada.",
      "Menor tiempo ocioso de pabellón.",
      "Mayor utilización de capacidad instalada.",
      "Mejor coordinación entre equipos clínicos y administrativos.",
      "Incremento de la productividad sin aumentar infraestructura."
    ],
    "Antes de invertir en más pabellones o más personal, es recomendable analizar la calidad del proceso de programación. Muchas pérdidas operacionales se originan en la forma en que se asignan los tiempos quirúrgicos y no en la falta de capacidad instalada.",
    "La productividad quirúrgica depende tanto de la calidad de la programación como de la disponibilidad de recursos.",
    "Md Saad, M. A., Rehman, A., Althobaiti, Y. S., Alghamdi, S. A., Alzahrani, M. A., & Alsharif, M. H. (2024). Enhancing operating room efficiency: The impact of computational algorithms on surgical scheduling and team dynamics. Healthcare, 12(19), 1906."
  );

  // ARTICLE 2
  renderArticle(
    "2",
    "Indicadores Clave para la Optimización del Desempeño Quirúrgico",
    "Identificar los indicadores más utilizados para medir y mejorar el desempeño de los pabellones quirúrgicos.",
    "Los autores revisaron literatura internacional relacionada con métricas operacionales utilizadas en hospitales y centros quirúrgicos.",
    null,
    [],
    [
      "La medición sistemática es fundamental para la mejora continua.",
      "Los indicadores más utilizados son:",
      "• Utilización de pabellón.",
      "• Tasa de suspensiones.",
      "• Tiempos de recambio.",
      "• Retrasos de inicio.",
      "• Productividad quirúrgica.",
      "Los hospitales con monitoreo permanente muestran mejores resultados."
    ],
    "Si no existen indicadores estandarizados, es difícil identificar dónde se están perdiendo oportunidades de mejora. La percepción nunca reemplaza la medición objetiva.",
    "No se puede mejorar aquello que no se mide.",
    "Macario, A., Dexter, F., & Epstein, R. H. (2023). Operating room performance optimization metrics: A systematic review. International Journal of Environmental Research and Public Health, 20(4), 2987."
  );

  // ARTICLE 3
  renderArticle(
    "3",
    "Prevalencia y Causas de Suspensiones de Cirugías Electivas: ¿Cuántas Son Realmente Evitables?",
    "Determinar la frecuencia de las suspensiones de cirugías electivas una vez que el paciente ya había sido trasladado al pabellón e identificar cuáles de estas cancelaciones podrían haberse evitado mediante mejoras en los procesos de evaluación y programación.",
    "Los investigadores realizaron un estudio prospectivo en pacientes programados para cirugía electiva.",
    "Analizaron:",
    [
      "Tasa de suspensión quirúrgica.",
      "Especialidades con mayor frecuencia de cancelaciones.",
      "Factores clínicos y administrativos asociados.",
      "Proporción de cancelaciones potencialmente evitables."
    ],
    [
      "La tasa de suspensión fue de 0,9%.",
      "Los pacientes de mayor edad presentaron mayor riesgo de cancelación.",
      "Los pacientes con mayor complejidad clínica mostraron más suspensiones.",
      "Cerca del 60% de las cancelaciones fueron consideradas potencialmente evitables.",
      "Las deficiencias en la evaluación preoperatoria y la programación explicaron una parte importante de los eventos."
    ],
    "La mayoría de las instituciones concentra sus esfuerzos en resolver problemas el día de la cirugía. Sin embargo, la evidencia demuestra que muchas suspensiones se originan días o semanas antes, durante la preparación preoperatoria, validación de antecedentes clínicos y coordinación de recursos. La suspensión quirúrgica debe entenderse como un indicador de desempeño institucional and no únicamente como un evento clínico aislado.",
    "Casi 6 de cada 10 suspensiones quirúrgicas podrían prevenirse mediante una mejor evaluación preoperatoria y una programación más robusta.",
    "Özcan, M. S., Özden, E. S., Solmaz, F. A., Kösem, A., Akyol, Y., & Kırdemir, P. (2024). Prevalence and causes of elective surgery cancellations after patients are taken to the operating room: A prospective, cross-sectional study. Turkish Journal of Anaesthesiology and Reanimation, 52(1), 14–20. https://doi.org/10.4274/TJAR.2024.231454"
  );

  // CONCLUSIONS SECTION
  checkPageBreak(35);
  doc.setTextColor(15, 32, 67);
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(13);
  doc.text("CONCLUSIONES EJECUTIVAS", margin, y);
  y += 6;

  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);
  doc.setFont("Helvetica", "bold");
  doc.text("¿Qué nos dice la evidencia?", margin, y);
  y += 5;

  doc.setFont("Helvetica", "normal");
  const concLines1 = doc.splitTextToSize("Aunque los estudios fueron desarrollados en distintos países y contextos sanitarios, todos convergen en un mismo mensaje: La eficiencia quirúrgica no depende exclusivamente de disponer de más pabellones, más personal o más tecnología. Los mejores resultados se observan cuando las instituciones logran integrar tres elementos fundamentales:", printableWidth);
  doc.text(concLines1, margin, y);
  y += (concLines1.length * 4.5) + 4;

  const renderBullet = (title: string, text: string) => {
    checkPageBreak(20);
    doc.setFont("Helvetica", "bold");
    doc.text(title, margin, y);
    y += 4.5;
    doc.setFont("Helvetica", "normal");
    const lines = doc.splitTextToSize(text, printableWidth);
    doc.text(lines, margin, y);
    y += (lines.length * 4.5) + 4;
  };

  renderBullet(
    "1. Programación basada en datos",
    "La asignación eficiente de tiempos quirúrgicos permite utilizar mejor la capacidad instalada y disminuir períodos de inactividad."
  );

  renderBullet(
    "2. Trazabilidad de los procesos",
    "La capacidad de seguir cada caso a lo largo de todo el proceso quirúrgico permite identificar oportunamente riesgos, retrasos y causas de suspensión."
  );

  renderBullet(
    "3. Gestión continua del desempeño",
    "Los hospitales que miden sistemáticamente sus indicadores son capaces de detectar oportunidades de mejora antes de que impacten la atención de los pacientes."
  );

  // TWO-PASS PAGE DECORATION & PAGE NUMBERS
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    
    // Draw running headers on subsequent pages
    if (i > 1) {
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text("APIQ Salud — Gestión Quirúrgica Basada en Evidencia", margin, 12);
      
      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.2);
      doc.line(margin, 14, 210 - margin, 14);
    }
    
    // Draw running footers on all pages
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    // Left footer
    doc.text("APIQ Salud — Líderes en Gestión e Inteligencia Operacional Quirúrgica", margin, pageHeight - 10);
    // Right footer
    doc.text(`Página ${i} de ${pageCount}`, 210 - margin - 15, pageHeight - 10);
    
    // Divider line above footer
    doc.setDrawColor(230, 230, 230);
    doc.setLineWidth(0.2);
    doc.line(margin, pageHeight - 13, 210 - margin, pageHeight - 13);
  }

  doc.save('3_Evidencias_Cientificas_Gestion_Quirurgica_APIQ.pdf');
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
                <span>Descargar Reporte PDF</span>
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
