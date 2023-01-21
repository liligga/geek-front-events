function SearchForm({onSearch}) {
    return (
        <div>
            <form onSubmit={onSearch}>
                <input type="text" />
                <button>Поиск</button>
            </form>
        </div>
    )
}

export default SearchForm