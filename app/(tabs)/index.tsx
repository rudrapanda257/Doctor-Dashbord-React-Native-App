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
    <ParallaxScrollView
    
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      
      headerImage={
        
        <Image
          source={{uri:'https://pngimg.com/d/doctor_PNG16021.png'}}
          style={styles.reactLogo}    
        />    
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
     

      
      <StatusBar barStyle="dark-content" />
      
      <ScrollView style={styles.scrollContainer}>
        <DashboardStats />
        <Appointments />
        <ThemedView style={styles.row}>
          <PatientInsights />
          
        </ThemedView>
        <Tasks />
      </ScrollView>
   



    </ParallaxScrollView>
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
    height: 238,
    width: 310,
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
  scrollContainer: {
    flex: 1,
    padding: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
