import React, { Component } from 'react';
import './App.css';
import EditButton from './components/EditButton';
import ViewState from './components/ViewState';





class App extends Component {



    render() {
        return (
            <main>
                <div className="content-container">

                    <ViewState></ViewState>

                    <EditButton></EditButton>

                </div>
            </main>

        );
    }
}



export default App;
