//import logo from './img/logo.svg';
//import { ReactComponent as Logo } from './img/logo.svg';

import { Home } from './pages/Home';
import { ContactPage } from './pages/ContactPage';

import search from './assets/imgs/search-icon.svg';

import './assets/scss/global.scss';

function App() {
    //const imgUrl = 'logo.svg'
    let active = 'home'

    function onChangeToHome() {
        active = 'home'
    }

    function onChangeToContact() {
        active = 'contactPage'
    }

    function onChangeToAbout() {
        active = 'aboutPage'
    }


    return (
        <section className="main-app">

            {/*<header className="app-header">
                <section className="container">
                    <h1>Mister BITCoin</h1>
                </section>
            </header>*/}

            <header className="nav-container">
                <div className="wrapper">
                    <nav>
                        <div className="logo">
                            <h1>Mister-BITCoin</h1>
                        </div>

                        <ul className="nav-items">
                            <li>
                                <a onClick={onChangeToHome} href="#">Home</a>
                            </li>

                            <li>
                                <a onClick={onChangeToContact} href="#">Contacts</a>
                            </li>

                            <li>
                                <a onClick={onChangeToAbout} href="#">About</a>
                            </li>

                            <li>
                                <a className="nav-btn-container" href="#">
                                    <img className="search-btn" src={search} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="container">
                {active === 'home' ? (
                    <Home />
                ) : active === 'contactPage' ? (
                    <ContactPage />
                ) : null}
                    
            </main>

            <footer>
                <section className="container">
                    BITRights 2023 &copy;
                </section>
            </footer>

        </section>
    )
}

export default App;
