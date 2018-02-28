import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LeituraAtual extends Component {
    render() {
        return (
          <div className="leitura-atual">
            <h2 className="lista-titulo">Lista de livros atualmente lendo</h2>
            <div className="flexbox flex-wrap align-center">
              {this.props.livros.filter(livro => livro.shelf === 'currentlyReading').map((book) => {
                return (
                  <Link className="livro" to={{
                    pathname: '/interna',
                    hash: `#${book.id}`
                  }} key={book.id}>
                    <img src={book.imageLinks.smallThumbnail} alt={book.title} />
                    <p>{book.title} <br/> {book.subtitle}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        )
    }
}

export default LeituraAtual;