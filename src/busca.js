import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import { Link } from 'react-router-dom';
import Resultado from './resultado'
import { search } from './BooksAPI';

class Busca extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            livros: [],
            emptyResult: false
        };
        this.showingBooks = [];
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = function(value){
        let valorSemEspaco = value.replace(/\s/g, '');
        this.setState({ value: value });
        if(valorSemEspaco.length > 0){
            search(value).then(result => {
                this.setState({ emptyResult: false });
                this.setState({ livros: result });

                const match = new RegExp(escapeRegExp(value), 'i');
                this.showingBooks = result.filter((livro) => match.test(livro.title));
                this.showingBooks.sort(sortBy('title'));
                
                return result;
            }).catch(error => {
                this.setState({ emptyResult: true });
            })
            
        } else{
            return this.setState({ livros: [] });
        }
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render() {

        return(
            <div className="container busca">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" placeholder="Digite aqui o nome do livro que busca" value={this.state.value} onChange={(event) => this.handleChange(event.target.value)} />
                </form>
                <div className="resultado flexbox flex-wrap align-center justify-center">
                    <Resultado addBook={this.props.addBook} livros={this.showingBooks} ownedBooks={this.props.livros} inputValue={this.state.value} resultEmpty={this.state.emptyResult} />
                </div>
                <Link to="/" className="link-voltar">Voltar</Link>
            </div>
        )
    };
}

export default Busca;