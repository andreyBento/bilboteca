import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DesejaLer extends Component {

  checkImage(book){
    if(book.imageLinks !== undefined){
      return <img src={book.imageLinks.smallThumbnail} alt={book.title} />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="deseja-ler">
        <h2 className="lista-titulo">Lista de desejos</h2>
        <div className="flexbox flex-wrap align-center">
          {this.props.livros.filter(livro => livro.shelf === 'wantToRead').map((book) => {
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

export default DesejaLer;