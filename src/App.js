import './App.css';
import Home from './pages/Home';
import Quizes from './pages/Quizes';
import Register from './pages/Register';
import AddQuiz from './pages/AddQuiz';
import Protected from './components/Protected';
import Quiz from './components/Quiz';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/quizes" element={<Protected Cmp={Quizes}/>}/>
                <Route exact path="/add" element={<Protected Cmp={AddQuiz}/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route path="/quizes/:id" element={<Protected Cmp={Quiz}/>}/>

                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
            <div>

            </div>
        </div>
    );
}

export default App;