//import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Spinner from './components/Spinner';
import Candidates from './components/Candidates';

//export default class App extends Component {
export default function App() {
  const [candidates, setCandidates] = useState([]);
  // constructor() {
  //   super();
  //   this.state = {
  //     candidates: [],
  //   };
  //   this.interval = null;
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:8080/votes')
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setCandidates(json.candidates);
        });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [candidates]);

  // componentDidMount() {
  //   /**
  //    * a cada 1000 mili é feito um fetch (busca) na API trazendo os valores
  //    * atuais e atualizando o estado do React (variável candidates)
  //    */
  //   this.interval = setInterval(() => {
  //     fetch('http://localhost:8080/votes')
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((json) => {
  //         this.setState({
  //           candidates: json.candidates,
  //         });
  //       });
  //   }, 1000);
  // }

  //render() {
  //  const { candidates } = this.state;

  if (candidates.lenght === 0) {
    return <Spinner message="Carregando..." />;
  } else {
    return (
      <div className="container">
        <Header title="Votação" />
        <Candidates candidates={candidates} />
      </div>
    );
    //    }
  }
}
