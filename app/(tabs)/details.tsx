import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, StatusBar} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardStats from '@/components/DashboardStats';
import Appointments from '@/components/Appointments';
import PatientInsights from '@/components/PatientInsights';
import Tasks from '@/components/Tasks';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <DashboardHeader />
    <ScrollView style={styles.area}>
    
      
      {/* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      */}

      
      <StatusBar barStyle="dark-content" />
      
      <ScrollView style={styles.scrollContainer}>
      <Appointments />
        <DashboardStats />
        
        
      </ScrollView>
   



      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop:1
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingTop:30,
    marginTop:0

  },
  area: {
    flex: 1,
    

  },
  scrollContainer: {
    flex: 1,
    padding: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
