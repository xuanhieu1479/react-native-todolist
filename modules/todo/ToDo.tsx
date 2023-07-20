import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { GlobalStyles } from 'assets/styles';
import { TaskType } from 'constants/types';

import { Title, Body, Footer } from './components';

const ToDo = (): JSX.Element => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const tasksDependecy = JSON.stringify(tasks);

  useFocusEffect(
    useCallback(() => {
      const getTasks = async () => {
        const _tasks = await AsyncStorage.getItem('tasks');
        console.log('_tasks', _tasks);
        if (_tasks) {
          setTasks(JSON.parse(_tasks));
        }
      };
      getTasks();
    }, []),
  );

  useEffect(() => {
    const syncTasks = async () => {
      await AsyncStorage.setItem('tasks', tasksDependecy);
    };
    syncTasks();
  }, [tasksDependecy]);

  const onCreateTask = (task: String) => {
    if (!task) {
      return;
    }
    setTasks([
      ...tasks,
      { id: new Date().valueOf().toString(), value: task, description: 'Task' },
    ]);
  };

  const onDeleteTask = (id: String) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={GlobalStyles.screenContainer}>
      <Title />
      <Body tasks={tasks} onDeleteTask={onDeleteTask} />
      <Footer onCreateTask={onCreateTask} />
    </View>
  );
};

export default ToDo;
