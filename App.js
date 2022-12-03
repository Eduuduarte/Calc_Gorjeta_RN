import React, { useEffect, useState } from 'react';
import Styled from 'styled-components/native';
import { Text } from 'react-native';

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

const CalcButton = Styled.TouchableOpacity`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #00FA9A;
  border-radius: 10px;
`;

const ResultArea = Styled.View`
  width: 90%;
  margin-top: 20px;
  border-radius: 20px;
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

const PctItem = Styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 5px;
`;

const TextButton = Styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.color};
`



export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);

    if (nBill) {
      setTip(nBill * (pct/100));
    }
  }

  useEffect(() => {
    calc();
  }, [pct])

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
        <PctItem onPress={() => setPct(5)}>
          <TextButton color={pct === 5 ? '#4B0082' : '#00FA9A'}>5%</TextButton>
        </PctItem>
        <PctItem onPress={() => setPct(10)}>
          <TextButton color={pct === 10 ? '#4B0082' : '#00FA9A'}>10%</TextButton>
        </PctItem>
        <PctItem onPress={() => setPct(15)}>
          <TextButton color={pct === 15 ? '#4B0082' : '#00FA9A'}>15%</TextButton>
        </PctItem>
        <PctItem onPress={() => setPct(20)}>
          <TextButton color={pct === 20 ? '#4B0082' : '#00FA9A'}>20%</TextButton>
        </PctItem>
      </PctArea>

      <CalcButton onPress={calc}>
        <TextButton color="#00FA9A">Calcular {pct}%</TextButton>
      </CalcButton>
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

