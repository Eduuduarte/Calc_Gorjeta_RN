import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Styled from 'styled-components/native';

const Page = Styled.SafeAreaView`
  flex:1;
  align-items: center;
`
const HeaderText = Styled.Text`
  margin-top: 20px;
  font-size: 25px;
`
const Input = Styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #EEE;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`

const CalcButton = Styled.Button`
  margin-top: 20px;
`;

const ResultArea = Styled.View`
  width: 100%;
  margin-top: 30px;
  background-color: #EEE;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ResultItemTitle = Styled.Text`
  font-size: 18px;
  font-weight: bold;
`

const ResultItem = Styled.Text`
  font-size: 15px;
  margin-bottom: 20px;
`

const PctArea = Styled.View`
  flex-direction: row;
  margin: 20px;
`;

const PctItem = Styled.Button`

`;



export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);

    if (nBill) {
      setTip(nBill * (pct/100));
    } else {
      alert('Digite o valor da conta')
    }
  }

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder='Quanto deu a conta?'
        keyboardType='numeric'
        value={bill}
        onChangeText={n => setBill(n)}
      />
      <PctArea>
        <PctItem title="5%" onPress={() => setPct(5)}/>
        <PctItem title="10%" onPress={() => setPct(10)}/>
        <PctItem title="15%" onPress={() => setPct(15)}/>
        <PctItem title="20%" onPress={() => setPct(20)}/>
      </PctArea>

      <CalcButton
        title={`Calcular ${pct}%`}
        onPress={calc}
      />
      {tip > 0 &&
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>R$ {tip.toFixed(2)} ({pct}%)</ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      }

    </Page>
  );
}

