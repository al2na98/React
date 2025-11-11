import React from "react";

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            search: '',
        };
    }

    handleSubmit = (event) => {
        if(event.key === 'Enter') {
            this.props.searchMovies(this.state.search)
        }
    }
    
    render () {
        return <div className="row">
            <form className="col s10">
                <div className="input-field col s10">
                    <input 
                    className="validate"
                    placeholder="Search" 
                    type="search" 
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={this.handleSubmit}
                    />
                    <i className="material-icons suffix small"
                    style={{
                        color: "white",
                        fontSize: "1.5rem",
                        top: "18px",
                        cursor: "pointer",
                    }}
                    onClick={() => this.props.searchMovies(this.state.search)}
                    >search</i>

                </div>
            </form>
        </div>
    }
}

export {Search}