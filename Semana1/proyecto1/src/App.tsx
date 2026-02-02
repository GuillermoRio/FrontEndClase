
import './App.css'
import Saludo from './components/hello'

const MiFuncion = () => {
  return (
    <div className="mainContainer">
      <h1>Pedazo de título increíble</h1>
      <Saludo name='Paqui'/>
    </div>
  )
}

export default MiFuncion