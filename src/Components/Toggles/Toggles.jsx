import React from 'react';
import {useState} from 'react';
import styles from './Toggles.module.css'

export const Toggles = () => {
    const [activeTab, setActiveTab] = useState('Essentials');
    
    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
    };
  return (
        <div className={styles.area}>
            <div className={styles.switchContainer}>
            <div 
                className={`${styles.switchItem} ${activeTab === 'Essentials' ? styles.active : ''}`}
                onClick={() => handleTabSwitch('Essentials')}
            >
                Essentials
            </div>
            <div className={styles.textbox}>
                <div 
                className={`${styles.switchItem} ${activeTab === 'Alpha Hub' ? styles.active : ''}`}
                onClick={() => handleTabSwitch('Alpha Hub')}
                >
                Alpha Hub
                </div>
            </div>
            <div 
                className={`${styles.tabSwitch} ${activeTab === 'Alpha Hub' ? styles.tabSwitchAlpha : ''}`}
            ></div>
            </div>
      </div>
  );
};
