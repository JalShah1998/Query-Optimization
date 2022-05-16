import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Querybox from './components/Querybox';
import TableComponent from './components/TableComponent';

export default function App() {
  const [checked, setChecked] = React.useState('MySQL');
  const [headers, setHeader] = React.useState([]);
  const [rowData, setrowData] = React.useState([[]]);

  return (
    <View>
      <Header checked = {checked} setChecked={setChecked}/>
      <Querybox checked={checked} setHeader={setHeader} setrowData={setrowData}/>
      <TableComponent headers={headers} rowData = {rowData}/>
    </View>
  );
};
