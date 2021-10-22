import './Seasondisplay.css';
import React from 'react';

//Aqui foi criado o componente para a tela de LOADING com icone extraido da Semantic-ui.com

const Spinner =  (props) => {
    return (
        <div>   
            <div className="ui active dimmer">
               <div className="ui text loader">
                   {props.message}
                </div>
            </div>
        </div>  
        
    );
};

Spinner.defaultProps = {
    message:'Loading...'
};

export default Spinner;