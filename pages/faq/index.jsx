import React, { useState } from "react";
import styles from "./faq.module.css";
import Header from "../landing/layout/header/header";
import Footer from "../landing/layout/footer/footer";
import Layout from "../landing/layout/layout";
import { CustomCursor } from "@/sharedComponents/customCursor";

const faqData = [
  {
    question: "Does this product have what I need?",
    answer: "Totally. Totally does.",
  },
  {
    question: "Can I use it all the time?",
    answer: "Of course you can, we won't stop you.",
  },
  {
    question: "Are there any restrictions?",
    answer: "Only your imagination, my friend. Go forth!",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Layout>
      <div className={styles.container} style={{ overflow: "hidden" }}>
        <h2
          style={{
            position: "relative",
            background:
              "url('https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640528a303087c65a9603d30_underline-green.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "60%",
            backgroundPositionY: "130%",
            backgroundSize: "350px",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div
          id="container"
          style={{
            visibility: "hidden",
            position: "absolute",
            width: "0px",
            height: "0px",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol viewBox="0 0 24 24" id="expand-more">
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
              <path
                d="M0,50 A50,50 0 0 0 50,50"
                fill="linear-gradient(to bottom, blue, green, red)"
              />
            </symbol>
          </svg>
        </div>

        {faqData.map((item, index) => (
          <details key={index} open={index === activeIndex}>
            <summary>
              {item.question}
              <svg
                className={styles.control_icon_open}
                onClick={() => handleToggle(index)}
                width="24"
                height="24"
                role="presentation"
              >
                <use xlinkHref="#expand-more" />
              </svg>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </Layout>
  );
};

export default Faq;
