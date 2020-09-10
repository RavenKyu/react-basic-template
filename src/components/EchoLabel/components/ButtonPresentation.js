import React from 'react';

class ButtonsPresentation extends React.Component {
    render() {
        const { onIncrement, onDecrement } = this.props;
        return (
            <div>
                <button type="button"
                        onClick={ onIncrement }>
                        +
                </button>
                <button type="button"
                        onClick={ onDecrement }>
                        -
                </button>
            </div>
        )
    }
}

export default ButtonsPresentation;