import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, View, FlatList, Text, TouchableHighlight, SafeAreaView, StatusBar, ScrollView, Alert  } from "react-native";
import Dialog from "react-native-dialog";
import { FontAwesome } from '@expo/vector-icons';


const CreateScreen = ({ route, navigation }) => {
  const exercice = useStoreState(state=>state.exercices);
  const Addexercices = useStoreActions((actions) => actions.Addexercices);
  const AddEntrainement = useStoreActions((actions) => actions.AddEntrainement);
  const Deletexercice = useStoreActions((actions) => actions.Deletexercice);
  const RemoveExercices = useStoreActions((actions) => actions.RemoveExercices);
  

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [entName, setentName] = useState('');
  const [exName, setexName] = useState('');
  const [exTime, setexTime] = useState(0);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const handleCancel1 = () => {
    setVisible1(false);
  };

  useEffect(() => {
    console.log(exercice)
  }, [exercice]);

  const addEntryClick = () => {
    Addexercices({id: exName,  name: exName, duree: parseInt(exTime)})
    setVisible(false);
  };
  const addEntryClick1 = () => {
    AddEntrainement({key: entName,  icon: "heartbeat", exercices: exercice});
    Deletexercice();
    alert("Entrainement créé");
    setVisible1(false);
  };
  const StarIcon = (props) => (
    <Icon {...props} name='star'/>
  );

  const renderItem = ({ item }) => (
    <Item all ={item} key={item.id} title={item.name} />
  );

  const Item = ({ title, all }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>Durée {all.duree}</Text>
      {/* <FontAwesome.Button name="trash" backgroundColor="#E9A900" onPress={() => RemoveExercices(all.id)}/> */}
      
      <Button style={styles.item} color="#E9A900" title="Supprimer exercice" onPress={() => RemoveExercices(all.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Button style={styles.itemend} title="Sauvegarder Entrainement" onPress={() => setVisible1(visible1 => !visible1)} />
      <FlatList
        data={exercice}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData = {exercice}
      />
      <Button style={styles.item} title="Ajouter un exercice" onPress={showDialog}/>
      <Dialog.Container visible={visible1}>
        <Dialog.Title>Créer l'entrainement ?</Dialog.Title>
        <Dialog.Description>
          Quel nom donner a l'entrainement ?
        </Dialog.Description>
        <Dialog.Input label="Entrainement" onChangeText={name => setentName(name)}/>
        <Dialog.Button label="Créer" onPress={addEntryClick1} />
        <Dialog.Button label="Annuler" onPress={handleCancel1} />
      </Dialog.Container>
       
      
      
      <Dialog.Container visible={visible}>
        <Dialog.Title>Ajouter un exercice</Dialog.Title>
        <Dialog.Description>
          Quel exercice ajouter ?
        </Dialog.Description>
        <Dialog.Input label="Exercice" onChangeText={name => setexName(name)}/>
        <Dialog.Input label="Durée" onChangeText={time => setexTime(time)}/>
        <Dialog.Button label="Ajouter" onPress={addEntryClick} />
        <Dialog.Button label="Annuler" onPress={handleCancel} />
      </Dialog.Container>
    </View>
  );
}

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    backgroundColor: "#dddddd",
    color: "#b22222",
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
    fontSize: 22,
  },
});