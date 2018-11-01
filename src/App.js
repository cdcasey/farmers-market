import React, { Component } from 'react';

import Header from './components/Header';
import ItemTable from './components/ItemTable';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <ItemTable />
            </React.Fragment>
        );
    }
}

export default App;
