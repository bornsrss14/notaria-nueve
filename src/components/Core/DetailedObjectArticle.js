import { article } from "motion/react-client";
import React from "react";

export const DetailedObjectArticle = ({ objectItem }) => {
  return (
    <article style={{ margin: "2rem 2rem" }}>
      <h3>{objectItem.titleArticle}</h3>
      <p>
        <em>{objectItem.content}</em>
      </p>
      {objectItem.paragrapsArticle.map((section, index) => {
        return (
          <section key={index} style={{ margin: "1rem 0" }}>
            {section.subtitleParagraph && (
              <h3 style={{ marginBottom: "0.5rem" }}>
                {section.subtitleParagraph}
              </h3>
            )}
            {section.paragraph && <p>{section.paragraph}</p>}
            {section.list && section.list.length > 0 && (
              <ul>
                {section.list.map((item, idx) => {
                  return <li key={idx}>{item}</li>;
                })}
              </ul>
            )}
          </section>
        );
      })}
    </article>
  );
};

export default DetailedObjectArticle;
