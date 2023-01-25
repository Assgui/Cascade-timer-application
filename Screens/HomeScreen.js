import React, {useEffect} from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, Alert, View, Button } from 'react-native';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Task from '../Components/Task';



const HomeScreen = ({ route, navigation }) => {
  const id = useStoreState(state=>state.id);

  const data = useStoreState(state=>state.data);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [initialRemainingTime, setInitialRemainingTime] = React.useState(15);
  const [key, setKey] = React.useState(0);
  let index = 0;
    return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={styles.title}>{data[id].key}</Text>
      <CountdownCircleTimer
        key={key}
        isPlaying = {isPlaying}
        duration = {60}
        initialRemainingTime = {data[id].exercices[index]?.duree}
        colors = {['#004777', '#F7B801', '#A30000', '#A30000']}
        isSmoothColorTransition = {true}
        colorsTime = {[20, 10, 5, 0]}
        
        onComplete = {() => { index += 1; return {shouldRepeat: data[id].exercices[index] ? true : false, delay: 0, newInitialRemainingTime: data[id]?.exercices[index]?.duree }
      }}
        >
      {({ remainingTime, animatedColor }) => (
    <>
    <Animated.Text style={{ color: animatedColor, fontSize: 40 }}>
          {remainingTime}
        </Animated.Text>
        <Animated.Text style={{ color: animatedColor, fontSize: 15 }}>
        {data[id].exercices[index].name}
      </Animated.Text>
      </>
      )}
    </CountdownCircleTimer>
    <View style={{ alignItems: 'center', marginTop: 100 }}>
      <Button onPress={() => setIsPlaying(!isPlaying)} title={isPlaying ? "Stop" : "Start"}/>
      <Button title="Restart Timer" onPress={() => {setKey(prevKey => prevKey + 1); index = 0}}/>
      </View>
  </View>
  
    );
  }

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  item: {
    alignItems: 'center',
    padding: 20,
    margin: 8,
  },
  itemend: {
    marginTop: 20,
    alignItems: 'center',
    padding: 20,
    margin: 8,
  },
  title: {
    paddingTop: 40,
    marginBottom: 100,
    fontSize: 40,
  },
});