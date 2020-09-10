import React from 'react';
import Buttons from './components/ButtonContainer'

class EchoLabel extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'center'} }>
                 <Buttons />
            </div>
        );
    }

}

export default EchoLabel;