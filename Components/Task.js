import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useStoreState } from 'easy-peasy';


const Task = (props) => {
  const data = useStoreState(state=>state.data);
  const id = useStoreState(state=>state.id);
  const [test, settest] = React.useState(0);

  useEffect(() => {
    console.log(props.key1);
  }, []);
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        {/* <View style={styles.square}></View> */}
        <Text style={styles.itemText}>{props.key1}</Text>
      </View>
      {/* <View style={styles.circular}></View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;