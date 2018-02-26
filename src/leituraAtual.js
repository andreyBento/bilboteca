import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LeituraAtual extends Component {
    render() {
        return (
          <div className="leitura-atual">
            <h2 className="lista-titulo">Lista de livros atualmente lendo</h2>
            <div className="flexbox flex-wrap align-center">
              {this.props.livros.filter(livro => livro.estado === 'lendo').map((book) => {
                return (
                  <Link className="livro" to={{
                    pathname: '/interna',
                    hash: `#${book.nome}`
                  }} key={book.nome}>
                    <img src={book.imgUrl} alt={book.title} />
                    <p>{book.title}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        )
    }
}

export default LeituraAtual;