import React, { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


const Tasks = () => {
    const [isChecked, setChecked] = useState(false);

  return (
    
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Tasks</ThemedText>
      <ThemedView style={styles.taskItem}>
        {/* <CheckBox value={true} /> */}
        <ThemedText style={[styles.taskText, styles.completedTask]}>Review lab results for Priya Patel</ThemedText>
      </ThemedView>
      <ThemedView style={styles.taskItem}>
        {/* <CheckBox value={false} /> */}
        <ThemedText style={styles.taskText}>Prepare presentation for medical conference</ThemedText>
      </ThemedView>
      <ThemedView style={styles.taskItem}>
        {/* <CheckBox value={false} /> */}
        <ThemedText style={styles.taskText}>Follow up with Amit Singh about medication</ThemedText>
      </ThemedView>
      <ThemedView style={styles.taskItem}>
      {/* <CheckBox
        value={isChecked}
        onValueChange={setChecked}
        tintColors={{ true: '#00B8A9', false: '#5A6268' }} // Optional: Custom colors
      /> */}
        <ThemedText style={styles.taskText}>Schedule team meeting for next week</ThemedText>
      </ThemedView>
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
    borderWidth: 0.1, // Border width
    borderColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    // color: '#5A6268',
    marginBottom: 16,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  taskText: {
    fontSize: 16,
    // color: '#6B7280',
    marginLeft: 12,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },
});

export default Tasks;
