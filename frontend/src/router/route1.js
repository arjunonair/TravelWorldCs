import { BrowserRouter as Router, Route } from 'react-router-dom'
import FormHeader from './components/form/FormHeader/FormHeader'
import Home from './pages/Home'
function App() {

  return (
    <div className="App">
      <Router>
       
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<FormHeader />} />
      
      </Router>
    </div>
  )
}

export default App