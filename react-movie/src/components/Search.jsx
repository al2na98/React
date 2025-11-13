import React from "react";

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            search: "",
            type: "all",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();

            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (event) => {
        this.setState(
            () => ({
                type: event.target.value,
            }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className="row">
                <form className="col s10">
                    <div className="input-field col s10">
                        <input
                            className="validate"
                            placeholder="Search"
                            type="search"
                            value={this.state.search}
                            onChange={(e) =>
                                this.setState({ search: e.target.value })
                            }
                            onKeyDown={this.handleSubmit}
                        />
                        <i
                            className="material-icons suffix small"
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "-20px",
                                color: "white",
                                fontSize: "1.5rem",
                                cursor: "pointer",
                            }}
                            onClick={() =>
                                this.props.searchMovies(
                                    this.state.search,
                                    this.state.type
                                )
                            }
                        >
                            search
                        </i>
                        <div>
                            <label>
                                <input
                                    className="with-gap"
                                    name="type"
                                    type="radio"
                                    value="all"
                                    onChange={this.handleFilter}
                                    checked={this.state.type === "all"}
                                />
                                <span>All</span>
                            </label>
                            <label>
                                <input
                                    className="with-gap"
                                    name="type"
                                    type="radio"
                                    value="movie"
                                    onChange={this.handleFilter}
                                    checked={this.state.type === "movie"}
                                />
                                <span>Movies only</span>
                            </label>

                            <label>
                                <input
                                    className="with-gap"
                                    name="type"
                                    type="radio"
                                    value="series"
                                    onChange={this.handleFilter}
                                    checked={this.state.type === "series"}
                                />
                                <span>Series only</span>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export { Search };
