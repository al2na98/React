import React from 'react';
import { Movies } from '../components/Movies';


export default class Main extends React.Component {
    state = {
        movies: [], 
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=1e9f7d47&s=matrix')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} =this.state;

        return <main className="container content">
            {
                movies.length ? (
                    <Movies movies={movies} />
                 ) : <h4>Loading...</h4> 
            }
            
        </main>;
    }
}


export {Main}