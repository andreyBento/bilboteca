import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Buttons from './buttons';
import Alert from './alert';

class LivroDetalhe extends Component {

    constructor(props) {
        super(props);
        this.onChangeState = this.onChangeState.bind(this);
    }

    state = {
        alertOpen: false
    }

    onChangeState(value, livro) {
        this.setState((state) => state.alertOpen = true);
        this.props.onLivroDetalhe(value, livro.nome);
    }

    nomeUrl() {
        var href = window.location.href;
        var indexTeste = href.indexOf('#') + 1;
        href = href.slice(indexTeste);
        return href;
    };

    checkEstado = (state) => {
        if(state === 'lendo'){
            return (
                <p class="livro-tag">
                    Este livro se encontra na sua biblioteca pessoal de Leitura Atual.
                </p>
            );
        }
        if(state === 'lido'){
            return (
                <p class="livro-tag">
                    Este livro se encontra na sua biblioteca pessoal de Livros Lidos.
                </p>
            );
        }
        if(state === 'desejado'){
            return (
                <p class="livro-tag">
                    Este livro se encontra na sua biblioteca pessoal de Livros Desejados.
                </p>
            );
        }
        if(state === 'none'){
            return (
                <p class="livro-tag">
                    Este livro não se encontra na sua biblioteca pessoal.
                </p>
            );
        }
    }

    render() {
        return (
            <div className="livro-detalhe">
                <Alert isDisplayed={this.state.alertOpen} />
                {this.props.livro.filter(livro => livro.nome === this.nomeUrl()).map((livro, index) => (
                    <figure className="flexbox justify-center align-center" key={livro.nome}>
                        <img src={livro.imgUrl} alt={livro.title} />
                        <figcaption>
                            <h2 className="livro-title">{livro.title}</h2>
                            <p>
                                {livro.desc}
                            </p>
                            {this.checkEstado(livro.estado)}
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