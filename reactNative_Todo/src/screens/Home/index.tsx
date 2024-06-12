import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { styles } from './styles';
import Header from '../../components/Header';
import Form from '../../components/Form';
import Status from '../../components/Status';
import TaskList from '../../components/TaskList';
import uuid from 'react-native-uuid';

export interface Task {
  id: string;
  done: boolean;
  description: string;
}

// Ana Home bileşeni başlangıcı
const Home: React.FC = () => {
  // Görevlerin ve yeni görev açıklamasının durumlarını tanımlama
  const [tasks, setTasks] = useState<Task[]>([]);
  const [description, setDescription] = useState<string>('');

  // Yeni görev ekleme işlevi
  const handleAdd = () => {
    if (!description) {
      Alert.alert('Error', 'Boş geçilemez');
      return;
    }
    const task: Task = {
      id: String(uuid.v4()),
      description,
      done: false,
    };
    setTasks((prevState) => [...prevState, task]);
    setDescription('')
  };

  // Bir görevi silme işlevi
  const handleRemove = (id: string) => {
    const task = tasks.find(t => t.id === id);
    Alert.alert('Görevi kaldırmak istediğinize emin misiniz?', `\n${task?.description}`, [
      {
        text: 'Evet',
        onPress: () => {
          setTasks(prevState =>
            prevState.filter((t) => t.id !== id)
          );
          Alert.alert('Görev başarıyla kaldırıldı');
        },
      },
      {
        text: 'Hayır',
        style: 'cancel',
      },
    ]);
  };

  // Görev durumunu güncelleme işlevi
  const handleUpdateStatus = (id: string) => {
    setTasks((prevState) => {
      const newTask = prevState.map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done };
        }
        return t;
      });
      return newTask;
    });
  };

  // Bileşenlerin render edilmesi
  return (
    <View style={styles.main}>
      <Header />
      <View style={styles.content}>
        <Form
          setDescription={setDescription}
          onAdd={handleAdd}
          description={description}
        />
        <Status tasks={tasks} />
        <TaskList
          tasks={tasks}
          onUpdateStatus={handleUpdateStatus}
          onRemove={handleRemove}
        />
      </View>
    </View>
  );
};

export default Home;
