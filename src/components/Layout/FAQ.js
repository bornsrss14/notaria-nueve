import React from "react";
import { useState } from "react";
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqsGenerales = [
    {
      question: "¿Qué trámites puedo realizar en una notaría",
      answer:
        "En una notaría puede realizar actos como compraventa de inmuebles, testamentos, constitución de sociedades, otorgamiento de poderes, cancelación de hipotecas, donaciones, entre otros. Todos estos actos se formalizan con plena validez legal",
    },
    {
      question: "¿Cuál es la diferencia entre un notario y un abogado?",
      answer:
        "El notario es un profesional del derecho autorizado por el Estado para dar fe pública, es decir, para certificar actos y hechos con valor legal. A diferencia del abogado, el notario actúa como figura imparcial entre las partes.",
    },
    {
      question: " ¿Necesito agendar cita para ser atendido?",
      answer:
        "Se recomienda agendar una cita para poder brindarle una atención más ágil y personalizada, aunque también puede acudir directamente en horario de oficina.",
    },

    {
      question: " ¿Qué documentos necesito para escriturar una propiedad?",
      answer:
        "Los documentos básicos son: identificación oficial de las partes, título de propiedad, comprobantes de pago de predial y agua, y certificado de libertad de gravamen. Según el caso, pueden requerirse otros documentos adicionale",
    },
    {
      question:
        "¿El notario verifica que todo esté en regla al comprar un inmueble?",
      answer:
        "Sí. El notario revisa la legalidad de la operación, verifica que no existan adeudos, y confirma que el inmueble se encuentre libre de gravamen antes de proceder con la escrituración.",
    },
    {
      question: "¿Realizan escrituraciones con crédito Infonavit/IMSS?",
      answer:
        "Sí. En nuestra notaría contamos con experiencia en formalizar compraventas financiadas mediante créditos Infonavit. Le ayudamos a integrar su expediente y coordinamos el trámite conforme a los lineamientos del instituto.",
    },
    {
      question: " ¿Qué necesito para hacer un testamento?",
      answer:
        "Solo necesita su identificación oficial, tener plena capacidad legal, y acudir a la notaría. El notario redactará el testamento conforme a su voluntad y lo registrará de forma segura.",
    },
    {
      question: "¿Qué es un poder notarial y para qué sirve?",
      answer:
        "Es un documento en el que una persona autoriza a otra para actuar en su nombre en ciertos actos legales o administrativos, como vender propiedades, abrir cuentas o firmar contratos.",
    },
    {
      question: "¿Cuánto cuesta un trámite notarial?",
      answer:
        "Los costos varían según el tipo de trámite, el valor del inmueble (presentar escritura), y los derechos que establece la Ley del Notariado. Puede solicitar una cotización sin compromiso.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="faq-container">
        <h1 className="faq-title">Preguntas Frecuentes (FAQ)</h1>
        <div className="faq-list">
          <h3>🧾 Servicios generales</h3>
          {faqsGenerales.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                {`${index + 1}.- ${faq.question}`}
                <span className="faq-icon">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
