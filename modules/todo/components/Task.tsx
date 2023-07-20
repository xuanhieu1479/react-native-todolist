import React from 'react';
import { View } from 'react-native';
import { Text } from 'tamagui';
import { Circle, Trash } from '@tamagui/lucide-icons';

import { TaskType } from 'constants/types';

import { GlobalStyles } from 'assets/styles';

interface TaskProps {
  task: TaskType;
  onDeleteTask: (id: String) => void;
}

const TaskStyle = {
  wrapper: {
    ...GlobalStyles.flex,
    marginVertical: 15,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  prefixIcon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  suffixIcon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 6,
  },
  contentText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 500,
  },
  contentDescription: {
    color: '#c7af5b',
    fontSize: 12,
  },
};

const Task = ({ task, onDeleteTask }: TaskProps): JSX.Element => {
  const deleteThisTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <View style={TaskStyle.wrapper}>
      <View style={TaskStyle.prefixIcon as any}>
        <Circle size={20} color="black" />
      </View>
      <View style={TaskStyle.contentWrapper}>
        <Text style={TaskStyle.contentText}>{task.value}</Text>
        <Text style={TaskStyle.contentDescription}>{task.description}</Text>
      </View>
      <View style={TaskStyle.suffixIcon as any}>
        <Trash size={20} color="black" onPress={deleteThisTask} />
      </View>
    </View>
  );
};

export default Task;
