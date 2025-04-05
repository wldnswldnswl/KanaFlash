import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FlashCardPage from './pages/FlashCardPage';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/main" element={<MainPage />} />
                <Route path="/flash" element={<FlashCardPage />} />
            </Routes>
        </Router>
    );
}

export default App;