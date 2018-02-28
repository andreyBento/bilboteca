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
        console.log(this.alertOpen);
        return this.props.onLivroDetalhe(value, livro.nome)
    }

    nomeUrl() {
        var href = window.location.href;
        var indexTeste = href.indexOf('#') + 1;
        href = href.slice(indexTeste);
        return href;
    };

    render() {
        return (
            <div className="livro-detalhe">
                <Alert isDisplayed={this.state.alertOpen} />
                {this.props.livro.filter(livro => livro.nome === this.nomeUrl()).map((livro, index) => (
                    <figure className="flexbox justify-center align-center" key={livro.nome}>
                        <img src={livro.imgUrl} alt={livro.title} />
                        <figcaption>
                            <p>
                                {livro.desc}
                            </p>
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