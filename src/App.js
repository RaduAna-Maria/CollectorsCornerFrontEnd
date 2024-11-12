import React from 'react';
import './App.css'; // You can create a CSS file for styling
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <div className="header-left">
                    <div className="image-section">
                        <img src="/images/logo.jpg" alt="Landing Image"/>
                    </div>
                    <h2>CollectorsCorner</h2>
                </div>
                <div className="header-center">
                    <button className="nav-button">Categories</button>
                    <button className="nav-button">About</button>
                    <button className="nav-button">Contact us</button>
                </div>
                <div className="header-right">
                    <a href="/login" className="nav-link">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </a>
                    <a href="/cart" className="nav-link">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </a>

                </div>
            </header>
            <section className="main-image-section">
                <img src="/images/tren.jpg" alt="Main Large" className="main-image"/>

                {/* Widget 1: Logo */}
                <div className="widget lego-widget">
                    <h3>Our Lego</h3>
                    <p>Explore the best lego in our collection!</p>
                    <button className="explore-button">Explore Lego</button>
                </div>

                {/* Widget 2: Trains */}
                <div className="widget trains-widget">
                    <h3>Our Trains</h3>
                    <p>Explore the best trains in our collection!</p>
                    <button className="explore-button">Explore Trains</button>
                </div>
            </section>
        </div>
    );
};

export default App;