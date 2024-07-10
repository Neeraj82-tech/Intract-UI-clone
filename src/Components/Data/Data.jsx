import React from 'react';
import styles from './Data.module.css';
import {getImageUrl} from "../../utils";

export const Data = () => {
  return (
    <section className={styles.section}>
        <div className={styles.fullarea}>
            <div className={styles.container}>
                <div className={styles.dataAreafull}>
                    <div className={styles.dataArea}>
                        <div className={styles.dash}>
                            <svg width="121" height="19" viewBox="0 0 121 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M120 7.80708C94.898 1.43658 35.7551 -5.51932 0 17.6211" stroke="#A286F2" stroke-width="2" stroke-linecap="round" stroke-dasharray="8 8"></path></svg>
                            </div>
                            <div className={styles.contentArea}>
                                <div className={styles.content}>
                                <div>
                                <img className={styles.headerimg} src={getImageUrl("data/headerimg.png")} alt="headerimage" />
                                </div>
                                <div className={styles.containerText}> 
                                <h3>Basic of Cypto</h3>
                                <p>The safest and easiest place to start <br /> your crypto journey!</p>
                                <span> <img src={getImageUrl("data/coin.svg")} alt="coin icon" />1490 XPs</span>
                                </div>
                                <img className={styles.drop} src={getImageUrl("data/down (1).png")} alt="dropicon" />
                                </div>
                        </div>
                    </div>
                        <div>
                            <div className={styles.secondContent}>
                            <div className={styles.tickArea}>
                            <img className={styles.tickimg} src={getImageUrl("data/tick.png")} alt="check imgae" />
                            </div>
                                <div>
                                    <img className={styles.catimg} src={getImageUrl("data/catimg.png")} alt="catimage" />
                                </div>
                                <div className={styles.text}>
                                    <div className={styles.lockArea}>
                                    <img className={styles.lockimg} src={getImageUrl("data/padlock.png")} alt="lock imgae" />
                                    </div>
                                    <h3>Intract Certified: Learner NFT</h3>
                                    <p>Your crypto black-belt <br />
                                    certificate</p>
                                    <span>Claim</span>
                                </div>
                            </div>
                        </div> 
                    
                </div>
            </div>
        </div>


    </section>
  );
};
