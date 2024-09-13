import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

const DashboardHeader = () => {
  return (
    <ThemedView style={styles.header}>
      <ThemedText style={styles.title}>Dashboard</ThemedText>
      <TouchableOpacity style={styles.button}>
        <ThemedText style={styles.buttonText}>
          Start Consultation
        </ThemedText>
      </TouchableOpacity>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://media.istockphoto.com/id/1330046035/photo/headshot-portrait-of-smiling-female-doctor-in-hospital.jpg?s=612x612&w=0&k=20&c=fsNQPbmFIxoKA-PXl3G745zj7Cvr_cFIGsYknSbz_Tg=' }}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  header: {
    // backgroundColor: '#FFFFFF',
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 7,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    // color: '#5A6268',
  },
  button: {
    backgroundColor: '#00B8A9',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default DashboardHeader;
