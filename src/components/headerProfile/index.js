import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jomokgram</Text>
      <TouchableOpacity>
        <Feather name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#2c2f33', 
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
