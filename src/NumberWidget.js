import React from "react";
import PlusIcon from './img/qty-plus-icon.svg'
import MinusIcon from './img/qty-minus-icon.svg'
import './NumberWidget.css';

export default function NumberWidget(props)
{
  const {currentValue, handleChange, minValue, maxValue} = props;

  function isValid(val) {
    return minValue <= val && maxValue >= val;
  }

  function onValueChange(e) {
    const newVal = parseInt(e.target.value);
    if (isValid(newVal)) {
      handleChange(newVal);
    }
  }

  function onButtonClick(newVal) {
    if (isValid(newVal)) {
      handleChange(newVal);
    }
  }

  function onWheel() {}

  return (
    <div className="number">
      <button
        className="number__button number__button--minus button"
        type="button"
        aria-label="Понизить на 1"
        onClick={() => onButtonClick(currentValue - 1)}
      >
        <img className="number__icon" src={MinusIcon} alt="plus-icon" width="20" height="10"/>
      </button>
      <input
        className="number__input"
        type="number"
        name="companions-count"
        id="companions-count-field"
        value={currentValue}
        onChange={onValueChange}
        onWheel={onWheel}
      />
      <button
        className="number__button number__button--plus button"
        type="button"
        aria-label="Увеличить на 1"
        onClick={() => onButtonClick(currentValue + 1)}
      >
        <img className="number__icon" src={PlusIcon} alt="plus-icon" width="20" height="20"/>
      </button>
    </div>
  );
}
