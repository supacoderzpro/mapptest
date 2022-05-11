import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'

import React, { useRef,useState,useCallback,useEffect } from 'react'
const CarRepairScreen = () => {
  const [darkMode,setDarkMode] = useState('');
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('darktheme')
      if(value !== null) {
       console.log("Dark theme Triggered :" + value)
       setDarkMode(value)
      }
    } catch(e) {
      // error reading value
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: darkMode== true? 'black' : 'white',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text style={{
     fontSize:23,
     color: darkMode== true? 'white' : 'black',
    }}>Need more ? {"\n"}email me supacoderz@gmail.com or reyesandriang@gmail.com</Text>
    </SafeAreaView>
  )
}

export default CarRepairScreen

