import React from 'react';
import { FlatList, Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { action, useStoreActions, useStoreState } from 'easy-peasy';

// const data = [
//   { key: 'Cardio' , icon: "heartbeat"}, { key: 'Force', icon: "dumbbell"}, { key: 'Pédale' , icon: "bicycle"}, { key: 'D' , icon: "heartbeat"}, { key: 'E' , icon: "heartbeat"}, { key: 'F' , icon: "heartbeat"},
//   // { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' },
//   // { key: 'K' },
//   // { key: 'L' },
// ];

// const formatData = (data, numColumns, count) => {
//   const numberOfFullRows = Math.floor(count / numColumns);

//   let numberOfElementsLastRow = count - (numberOfFullRows * numColumns);
//   while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
//     data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
//     numberOfElementsLastRow++;
//   }

//   return data;
// };

const numColumns = 2;




const ActivityScreen = ({ route, navigation }) => {
  const data = useStoreState(state => state.data);
  const count = useStoreState(state => state.count);
  const SetId = useStoreActions((actions) => actions.SetId);
  const formatData = useStoreActions((actions) => actions.formatData);

  const RenderItem = ({ item, index}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableOpacity style={[styles.item, styles.boxWithShadow]} onPress={() => {
        SetId(index);
        navigation.navigate('Home', {
          Id: index,
        });}}
        >
      <View
      >
        <View style={styles.icons}>
        <FontAwesome5
                name={item.icon}
                size={40}
                color={'white'}
              ></FontAwesome5>
              </View>
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
      </TouchableOpacity>
    );
  };
    return (
      <FlatList
        data={data}
        style={styles.container}
        renderItem={RenderItem}
        numColumns={2}
      />
    );
}

export default ActivityScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 100,
      marginTop: 50,
      marginHorizontal: 15, 
    },
    icons:{
      margin: 'auto',
      justifyContent: 'center',
    },
    item: {
      backgroundColor: '#1e90ff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      flex: 1,
      marginVertical: 15,
      marginHorizontal: 15,
      maxWidth: 150,
      height: Dimensions.get('window').width / numColumns, // approximate a square
      maxHeight: 150,
    },
    boxWithShadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 3,  
      elevation: 10
  },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    itemText: {
      marginTop: 10,
      color: 'white',
      fontSize: 20,
      fontWeight: "bold",
      textAlign: 'center'
    },
  });