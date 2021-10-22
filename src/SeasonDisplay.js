import './Seasondisplay.css'
import React from 'react';

const seasonConfig = { //constante para definir o novo caminho de printar na tela se é frio ou calor
    summer:{
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter:{
        text: "Burr, it is cold!",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => { //fórumula para pegar o valor quando for inverno ou verão
    if (month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

//constante que traz a estação do ano definida em props
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, props.lon, new Date().getMonth());
    //const text = season === 'winter' ? 'Burr, it is chilly! ' : 'Lets hit the beach!'; //e na div(jsx) escrever {text}

    //colocando icones (css)

   const {text, iconName } = seasonConfig[season]; //caminho para escrever dentro do jsx

    
    
    console.log(props.lat, props.lon);
    return ( 
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
           <h1>{text}</h1>
           <i className={`icon-right massive ${iconName} icon`} />
            </div>
     );
}

    
 
export default SeasonDisplay;