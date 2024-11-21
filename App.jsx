import React from 'react';
import Header from './components/Header';
import PersonInfo from './components/PersonInfo';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <main style={{ padding: '20px' }}>
                <PersonInfo />
            </main>
            <Footer />
        </div>
    );
};

export default App;
