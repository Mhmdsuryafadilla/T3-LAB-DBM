import { ScrollView, StyleSheet, View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import ProfileNavBar from '../../components/navBarProfile';
import ProfileHeader from '../../components/headerProfile';
import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';

const mockChats = [
  {
    id: '1',
    name: 'Hafizh Kanaeru',
    message: 'Hey, apa kabar? Hayuk main.',
    time: '2m',
    avatar: 'https://yt3.googleusercontent.com/qh7NFEYVnVvQ6E-5Z4b6VX8g0rGMLxt7Gj2bqC-6wnOYPzzYyJWQ5GWeb0frPD9hSqqo87kTZ10=s900-c-k-c0x00ffffff-no-rj',
    unread: true,
  },
  {
    id: '2',
    name: 'Ridho Baperan',
    message: 'Lihat reels ini deh, lucu banget bikin ***!',
    time: '10m',
    avatar: 'https://i.pinimg.com/originals/07/cd/32/07cd32c45ccfa19b85cd338b1f1d0017.jpg',
    unread: true,
  },
  {
    id: '3',
    name: 'Fadly Mualany',
    message: 'Jadi kapan ketemu buat bahas proyek?',
    time: '1h',
    avatar: 'https://www.jokesforfunny.com/wp-content/uploads/2021/06/0596bdb89b60fe771acd2f5972a9d3e3-1158x1536.jpg',
    unread: false,
  },
];

const ProfileScreen = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setChats(mockChats);
    }, 1000);
  }, []);

  const renderItem = ({ item, index }) => (
    <View style={[styles.chatContainer, index === 0 && styles.firstItem]}>
      {index === 0 && (
        <TouchableOpacity style={styles.archiveButton}>
          <Feather name="archive" size={24} color="white" />
          <Text style={styles.archiveText}>Arsip Obrolan</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.chatItem}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.chatContent}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatMessage} numberOfLines={1}>{item.message}</Text>
        </View>
        <View style={styles.chatExtras}>
          <Text style={styles.chatTime}>{item.time}</Text>
          {item.unread && <View style={styles.unreadBadge} />}
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ProfileHeader />
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      </ScrollView>
      <TouchableOpacity style={styles.newChatButton}>
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
      <ProfileNavBar />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1f25',
  },
  scrollView: {
    flex: 1,
  },
  listContainer: {
    padding: 10,
  },
  chatContainer: {
    marginBottom: 12,
  },
  firstItem: {
    marginTop: 10,
  },
  archiveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3e4b9e',
    padding: 10,
    borderRadius: 12,
    marginBottom: 8,
  },
  archiveText: {
    color: 'white',
    marginLeft: 8,
    fontWeight: '500',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b2e33',
    padding: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#4e5d94',
  },
  chatContent: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  chatMessage: {
    color: '#b0b3b8',
    marginTop: 4,
  },
  chatExtras: {
    alignItems: 'flex-end',
  },
  chatTime: {
    color: '#8c8e92',
    fontSize: 12,
    marginBottom: 5,
  },
  unreadBadge: {
    width: 14,
    height: 14,
    backgroundColor: '#4e5d94',
    borderRadius: 7,
  },
  newChatButton: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: '#4e5d94',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});
