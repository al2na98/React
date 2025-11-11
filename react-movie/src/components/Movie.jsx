import React from 'react';

function Movie(props) {
    const {
        Title, 
        Year, 
        imdbID, 
        Type, 
        Poster 
    } = props;

        return <div id={imdbID} class="card movie">
            <div class="card-image waves-effect waves-block waves-light">
            {
                Poster === 'N/A' ? (
                <img className="activator" src={`https://placehold.co/300x450/EFEFEF/000000?text=${Title}`} />
                ): <img className="activator" src={Poster} />
            }
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{Title}</span>
                <p>{Year}<span className='right'>{Type}</span></p>
            </div>
        </div>
}

export { Movie };
