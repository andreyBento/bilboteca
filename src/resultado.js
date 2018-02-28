import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Resultado extends Component {

    render() {
        let valorSemEspaco = this.props.inputValue.replace(/\s/g, '');
        if(valorSemEspaco.length > 0){
            return this.props.showingBooks.map((book) => {
                return (
                    <Link className="livro" to={{
                      pathname: '/interna',
                      hash: `#${book.nome}`
                    }} key={book.nome}>
                      <img src={book.imgUrl} alt={book.title} />
                      <p>{book.title}</p>
                    </Link>
                )
            });
        } else{
            return <h2>Pesquise algum livro no imput acima ;)</h2>
        }
    };
}

export default Resultado;