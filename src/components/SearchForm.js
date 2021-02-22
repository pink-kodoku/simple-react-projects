import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
    
    React.useEffect(() => {
        searchValue.current.focus();
    }, [])
    
    const {setSearchTerm} = useGlobalContext();
    const searchValue = React.useRef("")
    
    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    
    return (
        <div className="section search">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">search your favorite cocktail</label>
                    <input type="text" id="name" ref={searchValue} onChange={searchCocktail} />
                </div>
            </form>
        </div>
    )
}

export default SearchForm