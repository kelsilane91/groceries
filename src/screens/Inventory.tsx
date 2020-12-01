// components/Hello.tsx
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FAB, Modal, Portal, TextInput} from 'react-native-paper';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

interface State {
  enthusiasmLevel: number;
}

export const Inventory = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <View style={styles.root}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <TextInput
            label="Item Name"
            value={text}
            onChangeText={(inputText) => setText(inputText)}
          />
        </Modal>
      </Portal>
      <FAB style={styles.fab} small icon="plus" onPress={showModal} />
      <Text>Item: {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  modal: {
    // height: ' %',
    // width: '50%',
    flexDirection: 'column',
    flex: 1,
  },
});
