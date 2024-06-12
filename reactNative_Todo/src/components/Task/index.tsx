import React from 'react';
import { Task as TaskInterface } from '../../screens/Home';
import { TouchableOpacity, View ,Text} from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

import Checkbox from 'expo-checkbox';

interface TaskProps {
  task: TaskInterface;
  onUpdateStatus: (id: string) => void;
  onRemove: (id: string) => void;
}

// Task komponenti
const Task: React.FC<TaskProps> = ({ task, onUpdateStatus, onRemove }) => {
  // Tek bir görevi gösteren komponentin render edilmesi
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Checkbox
          style={{
            ...styles.taskCheckbox,
            borderColor: !task.done ? '#4EA8DE' : undefined,
            backgroundColor: task.done ? '#5E60CE' : undefined,
          }}
          value={task.done}
          onValueChange={() => onUpdateStatus(task.id)}
        />
        <Text
          style={{
            ...styles.textDescription,
            color: task.done ? '#808080' : '#F2F2F2',
            textDecorationLine: task.done ? 'line-through' : 'none',
          }}
        >
          {task.description}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onRemove(task.id);
        }}
      >
        <Text>
          <AntDesign name="delete" size={24} color="#808080" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
