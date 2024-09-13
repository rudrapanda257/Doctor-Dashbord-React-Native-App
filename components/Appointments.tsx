import React from 'react';
import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

const Appointments = () => {
  const appointments = [
    { patient: 'Rahul Sharma', time: '10:00 AM', type: 'Video Call', status: 'Upcoming', avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { patient: 'Pratik Panda', time: '12:00 AM', type: 'Video Call', status: 'Upcoming', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31KeZH3DieYFc0JZZutGskN6sEUeav1_8oA&s' },
    { patient: 'Anurag Sharma', time: '01:00 PM', type: 'Video Call', status: 'Upcoming', avatar: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg' },
    { patient: 'Sahil Kapoor', time: '03:00 PM', type: 'Video Call', status: 'Upcoming', avatar: 'https://cdn.pixabay.com/photo/2021/08/30/11/43/old-man-6585645_640.jpg' },

];

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.heading}>Upcoming Appointments</ThemedText>
      <ScrollView horizontal={true}>

      <ThemedView style={styles.scroll}>
      {appointments.map((appointment, index) => (
        <ThemedView key={index} style={styles.appointmentCard}>
          <Image source={{ uri: appointment.avatar }} style={styles.avatar} />
          <ThemedView style={styles.info}>
            <ThemedText style={styles.patientName}>{appointment.patient}</ThemedText>
            <ThemedText style={styles.details}>{appointment.time} | {appointment.type}</ThemedText>
            <TouchableOpacity>
            <ThemedText style={styles.action}>View Details</ThemedText>
          </TouchableOpacity>
          </ThemedView>
          
        </ThemedView>
        
      ))}
      </ThemedView>
      </ScrollView>
      <ThemedText >➡️</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  scroll:{
    flexDirection:'row'
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    // color: '#5A6268',
    marginBottom: 19,
    marginTop:14,
  },
  appointmentCard: {
    // backgroundColor: '#FFF',
    padding: 3,
    margin:7,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight:15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
    borderWidth: 0.1, // Border width
    borderColor: 'white',
  },
  avatar: {
    width: 90,
    height: '100%',
    borderRadius: 5,
    marginRight: 15,
    
  },
  info: {
    flex: 1,
    paddingVertical:23,
    padding:4
  },
  patientName: {
    fontSize: 18,
    // color: '#5A6268',
    fontWeight: '600',
  },
  details: {
    color: '#5A6268',
    marginTop:5
  },
  action: {
    color: '#00B8A9',
    fontWeight: '600',
    marginTop:12
  },
});

export default Appointments;
