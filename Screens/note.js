import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Platform, SafeAreaProvider} from "react-native";

const MarvelList = [
  {id: 1, name: 'Echauffement'},
  {id: 2, name: 'Tours de chauffe'},
  {id: 3, name: 'Starts'},
  {id: 4, name: 'Cardio'},
  {id: 5, name: 'Etirements'}
  ];

const myKeyExtractor = (item) => {
  return item.id
}

const renderItem = ({item}) => {
  return <View><Text>{item.name}</Text></View>
}

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Liste des exercices
      </Text>
    </View>
  )
}

const Footer = () => {
  return (
    <View style={styles.footer}>
      
    </View>
  )
}

export function CreateScreen() {
    const [refreshing, setRefreshing] = React.useState(false)

    const handleRefresh = () => {
      setRefreshing(prevState => !prevState)
    }

      return (
        <SafeAreaView style={styles.separateHero}>
          <Header />
          <FlatList
            data={MarvelList}
            renderItem={renderItem}
            ItemSeparatorComponent={
              Platform.OS !== 'android' &&
               (({ highlighted }) => (
                 <View
                    style={
                       styles.separator
             }
                />
              ))
            }
            keyExtractor={myKeyExtractor}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </SafeAreaView>
        )
    }

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: '#ff0000',
  },
  separateHero: {
    height: '100vh' 
},
    header: {
      backgroundColor: 'red',
      width: '100vw',
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20
    },
    headerText: {
      color: '#fff',
      fontSize: 18
    },
    footer: {
      backgroundColor: 'white',
      width: '100vw',
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0
    },
    footerText: {
      color: '#000',
      fontSize: 18
    }
});
