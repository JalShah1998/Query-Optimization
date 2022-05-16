import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


const TableComponent = ({headers, rowData}) => {
  return (
    <ScrollView>
      <ScrollView horizontal = {true}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={headers} style={styles.head} textStyle={styles.text}/>
          <Rows data={rowData} style={styles.row} textStyle={styles.text}/>
        </Table>
      </ScrollView>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
});

export default TableComponent;