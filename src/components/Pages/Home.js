import React from 'react';
import Search from '../Search';
import Card from '../Card';

const Home = () => {
  const cards = new Array(15)
    .fill('')
    .map((_, i) => i);
  console.log(cards);
  return (
    <>
      <Search />
      <div className="row">
        { cards.map(card => {
          return (
            <div className="col-sm-4 mb-4" key={ card }>
              <Card />
            </div>
          );
        }) }

      </div>
    </>
  );
};

export default Home;