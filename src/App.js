import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LivroDetalhe from './livroDetalhe';
import Dashboard from './dashboard';

class App extends Component {

  constructor(props) {
    super(props);
    this.changeLivroState = this.changeLivroState.bind(this);
  }

  state = {
    livros: [
      { 
        'title': 'Senhor dos Anéis: As duas torres',
        'nome': 'senhor-dos-aneis-as-duas-torres',
        'imgUrl': 'img/senhor-dos-aneis-as-duas-torres.jpg',
        'desc': 'Alterar a descrição',
        'estado': 'lendo'
      },
      { 
        'title': 'Hobbit',
        'nome': 'hobbit-o',
        'imgUrl': 'img/hobbit-o.jpg',
        'desc': 'Alterar a descrição',
        'estado': 'lendo'
      },
      { 
        'title': 'Senhor dos Anéis: A Sociedade do Anel',
        'nome': 'senhor-dos-aneis-sociedade-dos-aneis',
        'imgUrl': 'img/senhor-dos-aneis-sociedade-dos-aneis.jpg',
        'desc': 'Alterar a descrição',
        'estado': 'lido'
      },
      { 
        'title': 'Senhor dos Anéis: O Retorno do Rei',
        'nome': 'O-Senhor-dos-Aneis-o-Retorno-do-Rei-Volume-3',
        'imgUrl': 'img/O-Senhor-dos-Aneis-o-Retorno-do-Rei-Volume-3-J-R-R-Tolkien-52453.jpg',
        'desc': 'Alterar a descrição',
        'estado': 'desejado'
      }
    ]
  };

  changeLivroState = function(value, nome){
    this.setState(state => {
      state.livros.map((livro) => {
        if(livro.nome === nome){
          return livro.estado = value;
        } else {
          return false;
        }
      });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bilboteca</h1>
          <p>A biblioteca do Bilbo</p>
        </header>

        <Route exact path="/" render={() => (
          <Dashboard livros={this.state.livros} />
        )} />

        <Route path="/interna" render={() => (
          <LivroDetalhe 
          livro={this.state.livros}
          onLivroDetalhe={this.changeLivroState}
          />
        )} />

      </div>
    );
  }
}

export default App;
