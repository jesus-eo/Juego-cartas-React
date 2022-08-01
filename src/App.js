import { Panel } from './components/PanelCartas';
import './App.css';
import { store } from './components/app/store'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio'

function App() {
  return (

    <div>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Inicio/>}>
          </Route>
          <Route path='/juego-cartas' element={<Panel />}></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
