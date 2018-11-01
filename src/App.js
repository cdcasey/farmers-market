import React, { Component } from 'react';

import Header from './components/Header';
import AddButton from './components/AddButton';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <AddButton />
            </React.Fragment>
        );
    }
}

export default App;
