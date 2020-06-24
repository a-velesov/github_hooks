import React from 'react';
import './App.css';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import FooterBlock from './components/FooterBlock/FooterBlock';
import ContentBlock from './components/ContentBlock/ContentBlock';

const App = () => {
  return (<>
      <HeaderBlock />
      <ContentBlock
        title='Учите слова онлайн'
        description='Воспользуйтесь карточками для запоминания и пополнения активных словарных
          запасов'
      />
      <FooterBlock />
    </>
  );
};

export default App;
