import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ProfileNavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="home" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="message-circle" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="user" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileNavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#2c2f33',
    borderTopWidth: 1,
    borderColor: 'gray',
  },
});
