import './App.css'
// import Clicker from './components/Clicker/Clicker'
// import Form from './components/Form/Form'
import SearchForm from './components/SearchForm/SearchForm'



function App() {

  const handleSearch = function(e) {
    e.preventDefalt()
    alert(e)
  }
  
  const handleSearch2 = (e) => {
    e.preventDefalt()
    alert(e)
  }

  return (
    <div className="App">
      <SearchForm onSearch={handleSearch2}/>
    </div>
  )
}

export default App
