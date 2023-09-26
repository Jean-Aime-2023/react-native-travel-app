import { View, Text,Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import SortCategories from '../components/SortCategories';
import Destinations from '../components/Destinations';


const ios = Platform.OS == 'ios';
const topMargin = ios ? { marginTop: 3 } : { marginTop: 14 };


export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} style={{...topMargin, padding: 3}}>
          {/* avatar  */}
          <View className="mx-5 flex-row justify-between items-center mb-10">
            <Text style={{fontSize:wp(7)}} className="font-bold text-neutral-700">Let's Discover</Text>
            <TouchableOpacity>
              <Image source={require('../../assets/images/avatar.png')} style={{height:wp(12),width:wp(12)}}/>
            </TouchableOpacity>
          </View>

          {/* search bar */}
          <View className="mx-5 mb-4">
            <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
              <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray"/> 
              <TextInput 
                placeholder='Search destination'
                placeholderTextColor={'gray'}
                className="flex-1 text-base mb-1 pl-1 tracking-wider"
              />
            </View>
          </View>

          {/* categories */}
          <View className="mb-4">
            <Categories/>
          </View>

          {/* sort categories */}
          <View className="mb-4">
            <SortCategories/>
          </View>

          {/* Destinations */}
          <View className="mb-4">
            <Destinations/>
          </View>

      </ScrollView> 
    </SafeAreaView>
  )
}