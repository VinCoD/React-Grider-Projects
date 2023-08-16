import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

class App extends React.Component{

    constructor(props) {
        super(props);

        // This is the only time we do direct assignment - During Initialization
        // we have to use this.state to do the initialization
        this.state = {lat: null, errorMessage: ""};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // we called setState function to update our state
                this.setState({lat: position.coords.latitude})
            },
            (err) => {
                this.setState({errorMessage: err.message})
            }
        );
    }
    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <div>Lat: {this.state.lat}</div>
        }
        return <div>Loading...</div>

    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

