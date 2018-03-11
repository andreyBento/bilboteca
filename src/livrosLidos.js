import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LivrosLidos extends Component {

  checkImage(book){
    if(book.imageLinks !== undefined){
      return <img src={book.imageLinks.smallThumbnail} alt={book.title} />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="lidos">
        <h2 className="lista-titulo">Lista de livros lidos</h2>
        <div className="flexbox flex-wrap align-center">
          {this.props.livros.filter(livro => livro.shelf === 'read').map((book) => {
            return (
              <Link className="livro" to={{
                pathname: '/interna',
                hash: `#${book.id}`
              }} key={book.id}>
                {this.checkImage(book)}
                <p>{book.title} <br/> {book.subtitle}</p>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}

export default LivrosLidos;