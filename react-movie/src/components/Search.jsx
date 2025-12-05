import React, { useState } from "react";

const Search = (props) => {
    const { searchMovies = Function.prototype } = props;

    const [search, setSearch] = useState("");
    const [type, setType] = useState("all");

    // handleSubmit = handleSubmit.bind(this);

    const handleSubmit = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();

            searchMovies(search, type);
        }
    };

    const handleFilter = (event) => {
        const newType = event.target.value;
        setType(newType);
        if (search.trim()) {
            searchMovies(search, newType);
        }
    };

    return (
        <div className="row">
            <form className="col s10">
                <div className="input-field col s10">
                    <input
                        className="validate"
                        placeholder="Search"
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleSubmit}
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
                        onClick={() => searchMovies(search, type)}
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
                                onChange={handleFilter}
                                checked={type === "all"}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                value="movie"
                                onChange={handleFilter}
                                checked={type === "movie"}
                            />
                            <span>Movies only</span>
                        </label>

                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                value="series"
                                onChange={handleFilter}
                                checked={type === "series"}
                            />
                            <span>Series only</span>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export { Search };
