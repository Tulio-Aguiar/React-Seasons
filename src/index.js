import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';



class App extends React.Component {
    //primeira forma = class constructor
    //constructor(props) {
        //super(props);
        //this.state = {lat: null, lon: null, errorMessage:'' };

        //forma reduzida:
        state = {lat: null, lon: null, errorMessage:''};
    

    componentDidMount() {
        console.log('My component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            (position) => { 
                // Aqui chamamos o setState
                this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
            //comando para pegar localização do usuário já com duas variáveis para caso de falha da primeira!
        );
    }

    componentDidUpdate(){
        console.log('My component was just updatde - it rendered!');
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
               <SeasonDisplay lat={this.state.lat} lon={this.state.lon}/>
            </div>
            );
        }

        return (
                  <div> <Spinner message="Please accept location  request" /></div>
         )
    }


    //React dis que temos que definir o render
    render() {
        //criando método para erro e acerto com três possbilidades de exibição na tela
        return (
            <div>
                <div className="border-red">
                    {this.renderContent()}
                </div>
            </div>
        );
       
    }
      
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

export default App;
