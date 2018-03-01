import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Buttons from './buttons';

class LivroDetalhe extends Component {

    constructor(props) {
        super(props);
        this.onChangeState = this.onChangeState.bind(this);
    }

    onChangeState(value, livro) {
        this.props.onLivroDetalhe(value, livro.id);
    }

    nomeUrl() {
        var href = window.location.href;
        var indexTeste = href.indexOf('#') + 1;
        href = href.slice(indexTeste);
        return href;
    };

    checkEstado = (state) => {
        if(state === 'currentlyReading'){
            return (
                <p className="livro-tag">
                    Este livro se encontra na sua biblioteca pessoal de Leitura Atual.
                </p>
            );
        }
        if(state === 'read'){
            return (
                <p className="livro-tag">
                    Este livro se encontra na sua biblioteca pessoal de Livros Lidos.
                </p>
            );
        }
        if(state === 'wantToRead'){
            return (
                <p className="livro-tag">
                    Este livro se encontra na sua biblioteca pessoal de Livros Desejados.
                </p>
            );
        }
        if(state === 'none'){
            return (
                <p className="livro-tag">
                    Este livro não se encontra na sua biblioteca pessoal.
                </p>
            );
        }
    }

    render() {
        return (
            <div className="livro-detalhe">
                {this.props.livro.filter(livro => livro.id === this.nomeUrl()).map((livro, index) => (
                    <figure className="flexbox justify-center align-center" key={livro.id}>
                        <img src={livro.imageLinks.thumbnail} alt={livro.title} />
                        <figcaption>
                            <h2 className="livro-title">{livro.title}</h2>
                            <p>
                                {livro.description}
                            </p>
                            {this.checkEstado(livro.shelf)}
                            <Buttons livroAtual={livro} onAction={this.onChangeState} />
                        </figcaption>
                    </figure>
                ))}
                <Link className="link-voltar" to="/" >Voltar</Link>
            </div>
        )
    };
}

export default LivroDetalhe;