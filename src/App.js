import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// 8c48ffaa
const API_URL  = 'http://omdbapi.com?apikey=8c48ffaa';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [inputValue, setInputValue] = useState('')
    const [home, setHome] = useState('')

    const searchMoives = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMoives('Hanuman');
    }, [])
    return (
        <div className='app'>
            <h1 onClick={()=>{setInputValue('');searchMoives('Hanuman');}}>IBomma</h1>
            <div className='search'>
                <input 
                    placeholder='Search for movies'
                    value={inputValue}
                    onChange={(e)=>{setInputValue(e.target.value)}}
                />
                <img 
                    src={SearchIcon}
                    alt='search'
                    onClick={()=>searchMoives(inputValue)}
                />
            </div>
            {
                movies?.length>0?
                (
                    <div className='container'>
                        {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ):(
                    <div className="empty">
                        <h2>No Movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App