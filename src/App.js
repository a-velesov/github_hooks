import React from 'react';
import './App.css';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import FooterBlock from './components/FooterBlock/FooterBlock';
import ContentBlock from './components/ContentBlock/ContentBlock';

const App = () => {
  return (<>
      <HeaderBlock />
      <ContentBlock
        title='Учим React'
        description='Онлайн-марафон по React.Js'
      />
      <FooterBlock />
    </>
  );
};

export default App;
