import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ title, subtitle, callToAction, children }) => {
  const renderTextWithLineBreaks = text => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="padding-vert--lg">
      <h1 className={styles.title}>{renderTextWithLineBreaks(title)}</h1>
      <p className={styles.subtitle}>{renderTextWithLineBreaks(subtitle)}</p>
      <p className={styles.callToAction}>{callToAction}</p>
      {children}
    </div>
  );
};

export default Hero;
