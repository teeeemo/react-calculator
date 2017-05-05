import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'

class Button extends React.Component {
    handleClick = () => {
        this.props.clickHandler(this.props.name)
    }

    render() {
        let classNames = "";
        if (this.props.orange) {
            classNames += ' orange'
        }
        if (this.props.wide) {
            classNames += ' wide'
        }
        return (
            <button onClick={this.handleClick}
                    className={classNames}>
                {this.props.name}
            </button>
        )
    }
}

Button.propTypes = {
    clickHandler: PropTypes.func
};
export default Button;