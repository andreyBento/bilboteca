import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DesejaLer extends Component {
    render() {
        return (
          <div className="deseja-ler">
            <h2 className="lista-titulo">Lista de desejos</h2>
            <div className="flexbox flex-wrap align-center">
              {this.props.livros.filter(livro => livro.estado === 'desejado').map((book, index) => {
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

export default DesejaLer;