import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//<div id="root"></div>;

const Book = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Book name="Js" year="2020" price="900" />
      <Book name="React" year="2021" price="1000" />
      <Book name="Vue" year="2023" price="1200" />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
