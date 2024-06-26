import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Foods from './pages/Foods'
import SignupPage from './pages/pages/Signup';
import LoginPage from './pages/pages/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="foods" element={<Foods />} />
                </Route>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </Router>
    )
}

export default App
