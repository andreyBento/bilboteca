import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DesejaLer extends Component {
    render() {
        return (
          <div className="deseja-ler">
            <h2 className="lista-titulo">Lista de desejos</h2>
            <div className="flexbox flex-wrap align-center">
              {this.props.livros.filter(livro => livro.shelf === 'wantToRead').map((book, index) => {
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

export default DesejaLer;