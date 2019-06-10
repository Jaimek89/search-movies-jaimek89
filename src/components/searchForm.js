import React, { Component } from 'react'

const API_KEY = '4287ad07'

export class SearchForm extends Component {
    state={
        inputMovie: ''
    }

    _hanleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _hanleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state
        
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search = [], totalResults= '0' } = results
                console.log({ Search, totalResults })
                this.props.onResults(Search)
            })
    }

    render () {
        return (
            <form onSubmit={this._hanleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            onChange={this._hanleChange}
                            type="text" 
                            placeholder="Movie to search..." />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
