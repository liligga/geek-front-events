function SearchForm({onSearch, handleInput}) {

    const handleName = (e) => {
        // какие-нибудь проверки и тд
        handleInput(e.target.value)
    }
    
    return (
        <div>
            <form onSubmit={onSearch}>
                <input type="text" onChange={handleName} name="username" placeholder="Ваш ник..." />
                <button>Поиск</button>
            </form>
        </div>
    )
}

export default SearchForm