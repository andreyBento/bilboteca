import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import { Link } from 'react-router-dom';

class Busca extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.livros = this.props.livros;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (value) => {
        this.setState({ value: value.trim() });
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render() {
        let showingBooks;
        if(this.state.value){
            const match = new RegExp(escapeRegExp(this.state.value), 'i');
            showingBooks = this.livros.filter((livro) => match.test(livro.title));
        } else {
            showingBooks = this.livros;
        }

        showingBooks.sort(sortBy('title'));

        return(
            <div className="busca">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Busca:
                        <input type="text" value={this.state.value} onChange={(event) => this.handleChange(event.target.value)} />
                    </label>
                </form>
                <div className="resultado">
                    {showingBooks.map((book) => {
                        return (
                            <Link className="livro" to={{
                              pathname: '/interna',
                              hash: `#${book.nome}`
                            }} key={book.nome}>
                              <img src={book.imgUrl} alt={book.title} />
                              <p>{book.title}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    };
}

export default Busca;