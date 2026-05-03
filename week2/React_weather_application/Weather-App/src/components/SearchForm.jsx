import '../styles/SearchForm.css';
const SearchForm = ({ city, setCity, handleSubmit }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='ip-btn' type="text" value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='Enter city name' />
                <button className='ip-btn' type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchForm