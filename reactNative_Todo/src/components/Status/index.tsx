import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Task } from '../../screens/Home';

interface StatusProps {
  tasks: Task[];
}

// Status komponenti
const Status: React.FC<StatusProps> = ({tasks}) => {
  const taskDone = tasks.filter((t)=>t.done === true).length;

  // Tamamlanan ve toplam görev sayısının gösterilmesi
  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <View style={styles.count}>
          <Text style={styles.countText}>{tasks.length}</Text>
        </View>
      </View>
      <View style={styles.status}>
        <Text style={styles.title}>Tamamlandı</Text>
        <View style={styles.count}>
          <Text style={styles.countText}>{taskDone}</Text>
        </View>
      </View>
    </View>
  );
}

export default Status;
