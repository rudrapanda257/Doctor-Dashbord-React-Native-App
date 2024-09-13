import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, SafeAreaView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import DashboardHeader from '@/components/DashboardHeader';
import Tasks from '@/components/Tasks';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <DashboardHeader />
    <ParallaxScrollView
    
    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    
    headerImage={
      
      <Image
        source={{uri:'https://r2.erweima.ai/imgcompressed/img/compressed_7d50451d01b47b50753b6ac25d29a672.webp'}}
        style={styles.reactLogo}    
      />    
    }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore Tasks</ThemedText>
        
      </ThemedView>
      <Tasks />
      
      
    </ParallaxScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  reactLogo: {
    height: 258,
    width: 250,
    bottom: 0,
    left: 0,
    position: 'absolute',
    marginRight:3
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingTop:30

  },
});
