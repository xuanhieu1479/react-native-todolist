import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from 'tamagui';

import { GlobalStyles } from 'assets/styles';

const FooterStyle = {
  item: {
    backgroundColor: 'white',
    color: 'black',
  },
  input: {
    flex: 1,
    marginRight: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 200,
  },
};

interface FooterProps {
  onCreateTask: (task: String) => void;
}

const Footer = ({ onCreateTask }: FooterProps): JSX.Element => {
  const [task, setTask] = useState('');

  const onClickAdd = () => {
    onCreateTask(task);
    setTask('');
  };

  return (
    <View style={GlobalStyles.flex}>
      <Input
        style={{ ...FooterStyle.item, ...FooterStyle.input }}
        placeholder="Add task..."
        value={task}
        onChangeText={setTask}
      />
      <Button circular style={FooterStyle.item} onPress={onClickAdd}>
        <Text style={FooterStyle.buttonText}>+</Text>
      </Button>
    </View>
  );
};

export default Footer;
