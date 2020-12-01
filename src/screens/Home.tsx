// components/Hello.tsx
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

interface State {
  enthusiasmLevel: number;
}

export const Home = ({navigation}) => {
  const clickInventoryDetailCard = () => {
    console.log('click');
    navigation.navigate('Inventory');
  };

  return (
    <View style={styles.root}>
      <Card style={styles.card} onPress={clickInventoryDetailCard}>
        <Card.Content>
          <Title>View Inventory</Title>
          <Paragraph>See what your house has in stock</Paragraph>
        </Card.Content>
      </Card>
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
  card: {
    width: '70%',
  },
});
