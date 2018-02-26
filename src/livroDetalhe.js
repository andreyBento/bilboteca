import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LivroDetalhe extends Component {
    nomeUrl = function(){
        var href = window.location.href;
        var indexTeste = href.indexOf('#') + 1;
        href = href.slice(indexTeste);
        return href;
    };

    /*buttonsChangeState = function(livro, index){
        if(livro.estado === 'lendo'){
            return(
                <div className="btns">
                    <button className="btn" onClick={this.props.onLivroDetalhe('lido', livro.nome)}>Terminei de ler este livro</button>
                    <button className="btn" onClick={this.props.onLivroDetalhe('desejado', livro.nome)}>Parei a leitura, salve na lista de desejos</button>
                </div>
            );
        } else if(livro.estado === 'lido'){
            return(
                <div className="btns">
                    <button className="btn">Voltei a ler este livro</button>
                    <button className="btn">Salve-o na lista de desejos para eu le-lo novamente outra hora</button>
                </div>
            );
        } else if(livro.estado === 'desejado'){
            return(
                <div className="btns">
                    <button className="btn">Começei a ler este livro</button>
                    <button className="btn">Terminei de ler este livro</button>
                </div>
            );
        } else{
            return(
                <div className="btns">
                    <button className="btn">Começei a ler este livro</button>
                    <button className="btn">Desejo ler este livro</button>
                    <button className="btn">Já li este livro</button>
                </div>
            );
        }
    };*/

    render() {
        return (
            <div className="livro-detalhe">
                <Link className="link-voltar" to="/" >Voltar</Link>
                {this.props.livro.filter(livro => livro.nome === this.nomeUrl()).map((livro, index) => (
                    <figure className="flexbox justify-center align-center" key={livro.nome}>
                        <img src={livro.imgUrl} alt={livro.title} />
                        <figcaption>
                            <p>
                                {livro.desc}
                            </p>
                            <div className="btns">
                                <button className="btn" onClick={console.log('rola')}>Livro lido</button>
                                <button className="btn">Desejo ler</button>
                                <button className="btn">Lendo</button>
                                <button className="btn">Remover da biblioteca</button>
                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>
        )
    };
}

export default LivroDetalhe;