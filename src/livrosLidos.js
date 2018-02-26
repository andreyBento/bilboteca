import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LivrosLidos extends Component {
    render() {
        return (
          <div className="lidos">
            <h2 className="lista-titulo">Lista de livros lidos</h2>
            <div className="flexbox flex-wrap align-center">
              {this.props.livros.filter(livro => livro.estado === 'lido').map((book, index) => {
                return (
                  <Link className="livro" to={{
                    pathname: '/interna',
                    hash: `#${book.nome}`
                  }} key={book.nome}>
                    <img src={book.imgUrl} alt={book.title} />
                    <p key={index}>{book.title}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        )
    }
}

export default LivrosLidos;