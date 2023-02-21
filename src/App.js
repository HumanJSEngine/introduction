import './scss/style.scss';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Visual from './pages/Visual';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Vision from './pages/Vision';
import Portfolio from './pages/Portfolio';
import Life from './pages/Life';

function App() {
    return (
        <div className='wrap'>
            <Header />
            <div className='container'>
                <Visual />
                <Profile />
                <Skills />
                <Portfolio />
                <Life />
                <Vision />
            </div>
            <Footer />
        </div>
    );
}

export default App;
