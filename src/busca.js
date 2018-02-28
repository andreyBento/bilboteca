import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import { Link } from 'react-router-dom';
import Resultado from './resultado'

class Busca extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.showingBooks = [];
        this.livros = this.props.livros;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (value) => {
        this.setState({ value: value });
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render() {
        if(this.state.value){
            const match = new RegExp(escapeRegExp(this.state.value), 'i');
            this.showingBooks = this.livros.filter((livro) => match.test(livro.title));
        } else {
            this.showingBooks = this.livros;
        }

        this.showingBooks.sort(sortBy('title'));

        return(
            <div className="container busca">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" placeholder="Digite aqui a sua busca" value={this.state.value} onChange={(event) => this.handleChange(event.target.value)} />
                </form>
                <div className="resultado flexbox flex-wrap align-center justify-center">
                    <Resultado showingBooks={this.showingBooks} inputValue={this.state.value} />
                </div>
                <Link to="/" className="link-voltar">Voltar</Link>
            </div>
        )
    };
}

export default Busca;