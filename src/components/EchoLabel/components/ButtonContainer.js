import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import  ButtonsPresentation from './ButtonPresentation'

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <ButtonsPresentation onDecrement={this.props.onDecrement }
                                    onIncrement={this.props.onIncrement }>
                </ButtonsPresentation>
            </div>
        )
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement())
    }
}

Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;