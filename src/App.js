import React from 'react';
import EchoLabel from './components/EchoLabel'

class App extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'center'} }>
                 <EchoLabel />
            </div>
        );
    }

}



export default App;