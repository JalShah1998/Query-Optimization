import * as React from 'react';
import { Text, View, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {TextInput } from 'react-native-paper';
import axios from 'axios';
 

const Querybox = ({checked, setHeader, setrowData}) => {

  const [time, setTime] = React.useState('');
  const [res, setRes] = React.useState('');


  const onExecuteQuery = () => {
      console.log(query)
      axios.post('http://127.0.0.1:5000/executeQuery',{query, checked}).then(
        resp => {
          setTime(resp.data.time)
          setRes(resp.data.res)
          setrowData(resp.data.details)
          setHeader(resp.data.headers)
        }
      )
  }
  const [query, setQuery] = React.useState('');
  return (
    <View>
      <TextInput 
        multiline 
        placeholder="Enter SQL Query"
        value={query} 
        onChangeText={text => setQuery(text)}
      />
      <Button title="Execute Query" onPress={onExecuteQuery}/>
      <Text>Time ELapsed: {time}</Text>
      <Text>Number of rows affected: {res}</Text>
    </View>
  );
};

export default Querybox;