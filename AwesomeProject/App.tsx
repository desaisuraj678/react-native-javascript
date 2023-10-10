/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import SpotifyMyPlaylist from './src/features/animations/spotify_my_playlist/ui/SpotifyMyPlaylist';
import EcomList from './src/features/system_design/multi_timer_flatlist/EComList';
import ProgressBar from './src/progress_bar/components/ProgressBar';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const [isAnimationStarted,setIsAnimationStarted] = useState(false)

  const startAnimationHandler = ()=>{
    setIsAnimationStarted(true)
  }

  return (
    <View style={{flex:1}}>
    <GestureHandlerRootView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <SpotifyMyPlaylist /> */}

      <View style={{marginTop:100}}>
        <TouchableHighlight onPress={startAnimationHandler} style={{width:100,height:20}}>
          <Text>Start animation</Text>
        </TouchableHighlight>
        <ProgressBar width={100} height={10} backGroundColor={'red'} durationInMs={2000} shouldStartAnimation={isAnimationStarted}/>
      </View>
    </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
