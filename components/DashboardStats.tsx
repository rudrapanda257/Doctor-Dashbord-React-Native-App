import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

const DashboardStats = () => {
  const stats = [
    { label: "Today's Appointments", value: '12', icon: 'calendar', description: '4 video consultations' },
    { label: 'New Patients', value: '51', icon: 'user-plus', description: 'This week' },
    { label: 'Pending Reports', value: '7', icon: 'file-medical-alt', description: 'Require review' },
    { label: 'Average Rating', value: '4.8', icon: 'star', description: 'From 150 reviews' },
  ];

  return (
    <ThemedView style={styles.grid}>
      {stats.map((stat, index) => (
        <ThemedView key={index} style={styles.statCard}>
          <ThemedText style={styles.label}>{stat.label}</ThemedText>
          <ThemedText style={styles.value}>{stat.value}</ThemedText>
          <ThemedText style={styles.description}>{stat.description}</ThemedText>
        </ThemedView>
      ))}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statCard: {
    // backgroundColor: '#FFF',
    padding: 19,
    margin:12,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
    borderWidth: 0.3, // Border width
    borderColor: 'white',
  },
  label: {
    fontSize: 19,
    fontWeight:'600',
    // color: '#5A6268',
    marginBottom: 8,
  },
  value: {
    paddingTop:12,
    fontSize: 32,
    color: '#00B8A9',
    fontWeight: 'bold',
  },
  description: {
    // color: '#5A6264',
    fontSize: 14,
    fontWeight:'500',
  },
});

export default DashboardStats;
