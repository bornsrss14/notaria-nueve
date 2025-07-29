import React from "react";
import { useState } from "react";
export const FAQComp = ({ nQuestions, paramColor = "white" }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqsGenerales = [
    {
      question: "¿Qué trámites puedo realizar en una notaría",
      answer:
        "Compraventas, testamentos, poderes, constitución de sociedades, cancelación de hipotecas y otros actos con validez legal.",
    },
    {
      question: "¿Cuál es la diferencia entre un notario y un abogado?",
      answer:
        "Es un profesional del derecho autorizado por el Estado para certificar actos legales. A diferencia del abogado, actúa de forma imparcial entre las partes.",
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
        "Es un documento que permite a una persona autorizar a otra para actuar legalmente en su nombre, por ejemplo, para vender, firmar o hacer trámites.",
    },
    {
      question: "¿Cuánto cuesta un trámite notarial?",
      answer:
        "El costo varía según el trámite, el valor del inmueble y la normativa vigente. Solicite su cotización sin compromiso.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        background: paramColor,
        color: paramColor === "white" ? "black" : "white",
      }}
      className="faq-wrapper-main"
    >
      <div className="titulo-preguntas-frecuentes" id="title-faq">
        <h2 className="heading-style-h3 ">Preguntas frecuentes</h2>
        <p className="sub-title-faq">Explora los temas más consultados </p>
      </div>
      <div
        style={{
          background: "white",
        }}
        className="faq-container"
      >
        <div className="faq-list">
          {faqsGenerales.slice(0, nQuestions).map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                {`${index + 1}.- ${faq.question}`}
                <span className="faq-icon">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === index && (
                <div style={{ color: "black" }} className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQComp;
