import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LivroDetalhe from './livroDetalhe';

class App extends Component {

  state = {
    livros: [
      { 
        'nome': 'Senhor dos Anéis: As duas torres',
        'imgUrl': 'img/senhor-dos-aneis-as-duas-torres.jpg',
        'estado': 'lendo'
      },
      { 
        'nome': 'Hobbit',
        'imgUrl': 'img/hobbit-o.jpg',
        'estado': 'lendo'
      },
      { 
        'nome': 'Senhor dos Anéis: A Sociedade do Anel',
        'imgUrl': 'img/senhor-dos-aneis-sociedade-dos-aneis.jpg',
        'estado': 'lido'
      },
      { 
        'nome': 'Senhor dos Anéis: O Retorno do Rei',
        'imgUrl': 'img/O-Senhor-dos-Aneis-o-Retorno-do-Rei-Volume-3-J-R-R-Tolkien-52453.jpg',
        'estado': 'desejado'
      }
    ],
    screen: 'inicio' // inicio, interna, busca
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bilboteca</h1>
          <p>A biblioteca do Bilbo</p>
        </header>

        {this.state.screen === 'inicio' && (
          <div>
            <div className="leitura-atual">
              <h2 className="lista-titulo">Lista de livros atualmente lendo</h2>
              <div className="flexbox flex-wrap align-center">
                {this.state.livros.filter(livro => livro.estado === 'lendo').map((book, index) => {
                  return (
                    <div className="livro" onClick={() => {
                      this.setState({ screen: 'interna' });
                    }}>
                      <img src={book.imgUrl} alt={book.nome} />
                      <p key={index}>{book.nome}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="lidos">
              <h2 className="lista-titulo">Lista de livros lidos</h2>
              <div className="flexbox flex-wrap align-center">
                {this.state.livros.filter(livro => livro.estado === 'lido').map((book, index) => {
                  return (
                    <div className="livro">
                      <img src={book.imgUrl} alt={book.nome} />
                      <p key={index}>{book.nome}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="deseja-ler">
              <h2 className="lista-titulo">Lista de desejos</h2>
              <div className="flexbox flex-wrap align-center">
                {this.state.livros.filter(livro => livro.estado === 'desejado').map((book, index) => {
                  return (
                    <div className="livro">
                      <img src={book.imgUrl} alt={book.nome} />
                      <p key={index}>{book.nome}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {this.state.screen === 'interna' && (
          <LivroDetalhe/>
        )}

      </div>
    );
  }
}

export default App;
