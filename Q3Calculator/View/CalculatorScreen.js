import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';

const CustomInputNumberButton = ({
  text,
  onPress,
  backgroundColor,
  textColor,
}) => {
  return (
    <TouchableOpacity
      style={[style.inputNumberButton, backgroundColor]}
      onPress={onPress}>
      <Text style={[style.buttonTextBlack, textColor]}>{text}</Text>
    </TouchableOpacity>
  );
};

const CustomInputOperatorButton = ({
  text,
  onPress,
  backgroundColor,
  textColor,
}) => {
  return (
    <TouchableOpacity
      style={[style.inputOperatorButton, backgroundColor]}
      onPress={onPress}>
      <Text style={[style.buttonTextYellow, textColor]}>{text}</Text>
    </TouchableOpacity>
  );
};

const CustomResetButton = ({text, onPress, backgroundColor, textColor}) => {
  return (
    <TouchableOpacity
      style={[style.resetButton, backgroundColor]}
      onPress={onPress}>
      <Text style={[style.buttonTextBlack, textColor]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default function CalculatorScreen() {
  // State variables
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  // Function to handle number inputs
  const handleNumberInput = num => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  // Function to handle operator inputs
  const handleOperatorInput = operator => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  // Function to handle equal button press
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue('');
  };

  // Function to handle clear button press
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };
  return (
    <View style={style.container}>
      <View style={style.bottomView}>
        <Text style={style.resultText}>{displayValue}</Text>
        <View style={style.buttonRow}>
          <CustomInputNumberButton
            text="7"
            onPress={() => handleNumberInput(7)}
          />
          <CustomInputNumberButton
            text="8"
            onPress={() => handleNumberInput(8)}
          />
          <CustomInputNumberButton
            text="9"
            onPress={() => handleNumberInput(9)}
          />
          <CustomInputOperatorButton
            text="/"
            onPress={() => handleOperatorInput('/')}
          />
        </View>
        <View style={style.buttonRow}>
          <CustomInputNumberButton
            text="4"
            onPress={() => handleNumberInput(4)}
          />
          <CustomInputNumberButton
            text="5"
            onPress={() => handleNumberInput(5)}
          />
          <CustomInputNumberButton
            text="6"
            onPress={() => handleNumberInput(6)}
          />
          <CustomInputOperatorButton
            text="*"
            onPress={() => handleOperatorInput('*')}
          />
        </View>
        <View style={style.buttonRow}>
          <CustomInputNumberButton
            text="1"
            onPress={() => handleNumberInput(1)}
          />
          <CustomInputNumberButton
            text="2"
            onPress={() => handleNumberInput(2)}
          />
          <CustomInputNumberButton
            text="3"
            onPress={() => handleNumberInput(3)}
          />
          <CustomInputOperatorButton
            text="-"
            onPress={() => handleOperatorInput('-')}
          />
        </View>
        <View style={style.buttonRow}>
          <CustomInputNumberButton
            width="45%"
            text="0"
            onPress={() => handleNumberInput(0)}
          />
          <CustomInputNumberButton
            text="+"
            onPress={() => handleOperatorInput('+')}
          />
          <CustomInputOperatorButton text="=" onPress={() => handleEqual()} />
        </View>
        <View style={style.buttonRow}>
          <CustomResetButton text="C" onPress={() => handleClear()} />
        </View>
      </View>
    </View>
  );
}
