import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import Empty from './Empty';
import { Task as TaskInterface } from '../../screens/Home';
import Task from '../Task';

interface TaskListProps {
  tasks: TaskInterface[];
  onUpdateStatus: (id:string) => void;
  onRemove: (id:string) => void;
}

// TaskList komponenti
const TaskList: React.FC<TaskListProps> = ({tasks, onUpdateStatus, onRemove}) => {
  // Görevlerin listelendiği komponentin render edilmesi
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(data) => data.id}
        renderItem={(data) => (
          <Task
            task={data.item}
            onUpdateStatus={onUpdateStatus}
            onRemove={onRemove}
          />
        )}
        showsHorizontalScrollIndicator={false}
        style={styles.tasksList}
        ListEmptyComponent={() => <Empty />}
      />
    </View>
  );
}

export default TaskList;
