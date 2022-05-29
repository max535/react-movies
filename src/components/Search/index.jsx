import { render } from '@testing-library/react';
import React from 'react';

export default class Search extends React.Component {
    state = {
        search: '',
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
                    />
                </div>
            </div>
        );
    }
}
