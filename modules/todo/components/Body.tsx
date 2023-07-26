import React from 'react';
import { View, ScrollView } from 'react-native';

import { TaskType } from 'constants/types';

import Task from './Task';

const BodyStyle = {
  flex: 1,
  flexDirection: 'column',
  paddingVertical: 20,
};

interface BodyProps {
  tasks: TaskType[];
  onDeleteTask: (id: String) => void;
}

const Body = ({ tasks, onDeleteTask }: BodyProps): JSX.Element => {
  return (
    <View style={BodyStyle as any}>
      <ScrollView>
        {tasks.map(task => (
          <Task
            key={task.id.toString()}
            task={task}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Body;
