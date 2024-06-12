import React, { useState } from 'react';
import { NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

interface FormProps {
  setDescription: (text: string) => void,
  onAdd: () => void;
  description: string
}

// Form komponenti
const Form: React.FC<FormProps> = ({ setDescription, onAdd, description }) => {
  const [active, setActive] = useState<boolean>(false);

  // TextInput ve ekleme butonunu içeren formun render edilmesi
  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance='dark'
        value={description}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        style={{ ...styles.input, borderColor: active ? '#5E60CE' : '#0D0D0D' }}
        placeholder={'Yeni bir görev ekle'}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
          setDescription(e.nativeEvent.text)
        }
        placeholderTextColor={'#808080'}
      />
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text>
          <AntDesign name="pluscircleo" size={24} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
