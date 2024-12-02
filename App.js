import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProfileScreen from './src/pages/profile';
import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" backgroundColor="#2c2f33" />
      <ProfileScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#36393f',
    paddingTop: Constants.statusBarHeight,
  },
});
