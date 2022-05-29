import React from 'react';

export default class Search extends React.Component {
    state = {
        search: '',
    };

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value,
        });
    }

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        placeholder="Search"
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className="btn search-btn"
                        onClick={() => this.props.searchMovies(this.state.search)}
                    >
                        Search
                    </button>
                </div>
            </div>
        );
    }
}
