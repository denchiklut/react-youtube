import React, {Component} from 'react'

class SearchBar extends Component {
    state = {
        term: ''
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.term)
        this.setState({term: ''})
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="ui action input fluid left corner labeled">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})} />
                        <div className="ui left corner label">
                            <i className="asterisk icon" />
                        </div>
                        <button className="ui icon button">
                            <i className="search icon" />
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;