import React from 'react';
import styles from "./Academy.module.css";
import {getImageUrl} from "../../utils";

export const Academy = () => {
  return (
    <section id="academy">
      <div className={styles.container}>  
        <img className={styles.backgroudimage} src={getImageUrl("head/backgroud.png")} alt="Background Imgage" />
        <div className={styles.content}>
          <div className={styles.heading}>
            <img className={styles.companylogo} src={getImageUrl("head/academy-animated-logo.gif")} alt="company logo" />
          </div>
          <div className={styles.description}>
          <p><span>Intract users</span>" have together made more than "<span>$100 million</span>" in web3."
          <br />
          <span>Join them and learn how to earn crypto!</span></p>
          </div>
          <div className={styles.button} >
            <div className={styles.buttonContent}>
              <span >Get Started</span>
              <img src={getImageUrl("head/right-arrow.png")} alt="arrow icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


