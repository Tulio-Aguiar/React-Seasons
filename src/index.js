import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import TimerDisplay from './TimerDisplay';

if (module.hot) {
    module.hot.accept();
  }


class App extends React.Component {
    //primeira forma = class constructor
    //constructor(props) {
        //super(props);
        //this.state = {lat: null, lon: null, errorMessage:'' };

        //forma reduzida:
        state = {lat: null, lon: null, errorMessage:''};
    

    componentDidMount() {
        
        window.navigator.geolocation.getCurrentPosition( 
            // Aqui chamamos o setState
            (position) => this.setState({lat: position.coords.latitude, lon: position.coords.longitude}),
            (err) => this.setState({errorMessage: err.message})
            //comando para pegar localização do usuário já com duas variáveis para caso de falha da primeira!
        );
    }

    renderContent () {
        if (this.state.errorMessage && !this.state.lat) {
            return ( 
            <div>
                Error:{this.state.errorMessage} 
             </div>
             );
        }
 
        if (!this.state.errorMessage && this.state.lat && this.state.lon) {
            return (
            <div>
                <TimerDisplay />
               <SeasonDisplay lat={this.state.lat} lon={this.state.lon}/>
               
            </div>
            );
        }

        return (
                  <div> 
                      <h2>
                      <Spinner message="Please accept location  request" />
                      </h2>
                      </div>
         );
    }


    //React dis que temos que definir o render
    render() {
        //criando método para erro e acerto com três possbilidades de exibição na tela
        return (
                <div className="border-red">
                    {this.renderContent()}
                </div>
        );
       
    };
      
}



ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

export default App;
