import React from 'react';
import styles from './HeaderBlock.module.scss';
import Nav from './Nav/Nav';
import Search from './Seacrh/Search';

const HeaderBlock = () => {
  return (<section className={ styles.header }>
    <Nav />
    <Search />
  </section>);
};

export default HeaderBlock;