import React from 'react';
import styles from './ContentBlock.module.scss';
import { ReactComponent as ReactLogoSvg } from '../../logo.svg';

const ContentBlock = ({ title, hideBackground = false, description }) => {
  const styleCover = hideBackground ? { backgroundImage: 'none' } : {};
  return (
    <section className={ styles.content } style={ styleCover }>
      <div className={ styles.wrap }>
        {/*{title ? <h1 className={ styles.header }>{ title }</h1> : null}*/ }
        <ReactLogoSvg />
        { title && <h1 className={ styles.header }>{ title }</h1> }
        { description && <p className={ styles.descr }>{ description }</p> }
      </div>
    </section>
  );
};

export default ContentBlock;