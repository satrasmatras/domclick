import React from "react";
import PlusIcon from './img/qty-plus-icon.svg'
import MinusIcon from './img/qty-minus-icon.svg'
import './NumberWidget.css';

export default class NumberWidget extends React.Component {
    constructor(props) {
        super(props);
        this.onValueChange = this.onValueChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onWheel = this.onWheel.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    isValid(val) {
        const {minValue, maxValue} = this.props;
        return minValue <= val && maxValue >= val;
    }

    onValueChange(e) {
        const newVal = parseInt(e.target.value);
        if (this.isValid(newVal)) {
            this.props.handleChange(newVal);
        }
    }

    onButtonClick(newVal) {
        if (this.isValid(newVal)) {
            this.props.handleChange(newVal);
        }
    }

    onWheel(e) {}

    render() {
        const {currentValue} = this.props;

        return (
            <div className="number">
                <button
                    className="number__button number__button--minus button"
                    type="button"
                    aria-label="Понизить на 1"
                    onClick={() => this.onButtonClick(currentValue - 1)}
                >
                    <img className="number__icon" src={MinusIcon} alt="plus-icon" width="20" height="10"/>
                </button>
                <input
                    className="number__input"
                    type="number"
                    name="companions-count"
                    id="companions-count-field"
                    value={this.props.currentValue}
                    onChange={this.onValueChange}
                    onWheel={this.onWheel}
                />
                <button
                    className="number__button number__button--plus button"
                    type="button"
                    aria-label="Увеличить на 1"
                    onClick={() => this.onButtonClick(currentValue + 1)}
                >
                    <img className="number__icon" src={PlusIcon} alt="plus-icon" width="20" height="20"/>
                </button>
            </div>
        );
    }
}
