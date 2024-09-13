import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

const PatientInsights = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Patient Insights</ThemedText>
      <ThemedView style={styles.insightContainer}>
        <ThemedView style={styles.progressBar}>
          <ThemedView style={[styles.progressFill, { width: '70%', backgroundColor: '#00B8A9' }]} />
        </ThemedView>
        <ThemedText style={styles.progressLabel}>70% Male</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.insightContainer}>
        <ThemedView style={styles.progressBar}>
          <ThemedView style={[styles.progressFill, { width: '30%', backgroundColor: '#FF8C69' }]} />
        </ThemedView>
        <ThemedText style={styles.progressLabel}>30% Female</ThemedText>
      </ThemedView>
      
      <ThemedText style={styles.additionalInfo}>Most common age group: 30-45 years</ThemedText>
      <ThemedText style={styles.additionalInfo}>Top concern: Cardiovascular health</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FFFFFF',
    padding: 16,
    margin:7,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 0.2, // Border width
    borderColor: 'white',
    marginBottom:15,
    marginTop:6
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    // color: '#5A6268',
    marginBottom: 16,
  },
  insightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 8,
  },
  progressLabel: {
    marginLeft: 12,
    fontSize: 14,
    // color: '#6B7280',
  },
  additionalInfo: {
    fontSize: 14,
    // color: '#6B7280',
    marginTop: 8,
  },
});

export default PatientInsights;
