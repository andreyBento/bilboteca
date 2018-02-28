import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LivroDetalhe from './livroDetalhe';
import Dashboard from './dashboard';
import Busca from './busca';

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
      },
      { 
        'title': 'Harry Potter e a Pedra Filosofal',
        'nome': 'harry-potter-pedra-filosofal',
        'imgUrl': 'img/harry-potter-pedra-filosofal.jpg',
        'desc': 'Alterar a descrição',
        'estado': 'none'
      },
      { 
        'title': 'Harry Potter e a Câmara Secreta',
        'nome': 'harry-potter-camara-secreta',
        'imgUrl': 'img/harry-potter-camara-secreta.jpg',
        'desc': 'Alterar a descrição',
        'estado': 'none'
      },
      { 
        'title': 'Harry Potter e o Prisioneiro de Azkaban',
        'nome': 'harry-potter-prisioneiro-de-azkaban',
        'imgUrl': 'img/harry-potter-prisioneiro-de-azkaban.jpg',
        'desc': 'Alterar a descrição',
        'estado': 'none'
      },
      { 
        'title': 'Harry Potter e o Calice de Fogo',
        'nome': 'harry-potter-calice-de-fogo',
        'imgUrl': 'img/harry-potter-calice-de-fogo.jpg',
        'desc': 'Alterar a descrição',
        'estado': 'none'
      },
      { 
        'title': 'Harry Potter e a Ordem da Fênix',
        'nome': 'harry-potter-ordem-da-fenix',
        'imgUrl': 'img/harry-potter-ordem-da-fenix.jpg',
        'desc': 'Alterar a descrição',
        'estado': 'none'
      },
      { 
        'title': 'Harry Potter e o Enigma do Principe',
        'nome': 'harry-potter-enigma-do-principe',
        'imgUrl': 'img/harry-potter-enigma-do-principe.jpg',
        'desc': 'Alterar a descrição',
        'estado': 'none'
      },
      { 
        'title': 'Harry Potter e as Reliquias da morte',
        'nome': 'harry-potter-reliquias-da-morte',
        'imgUrl': 'img/harry-potter-reliquias-da-morte.jpg',
        'desc': 'Alterar a descrição',
        'estado': 'none'
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
          <Link to="/busca" className="btn">Buscar livros</Link>
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

        <Route path="/busca" render={() => (
          <Busca livros={this.state.livros} />
        )} />

      </div>
    );
  }
}

export default App;
