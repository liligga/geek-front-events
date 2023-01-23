import './App.css'
import Clicker from './components/Clicker/Clicker'
import Form from './components/Form/Form'
import SearchForm from './components/SearchForm/SearchForm'



function App() {

  const handleSearch = (e) => {
    e.preventDefault()
    alert(e.target)
  }

  const handleInput = (val) => {
    console.log(val);
  }
  

  return (
    <div className="App">
      {/* <Clicker />
      <Form />  */}
      
      {/* Тут так много пропсов только для примера */}
      <SearchForm onSearch={handleSearch} handleInput={handleInput} />
    </div>
  )
}

export default App
