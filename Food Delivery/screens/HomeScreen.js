//Basics
import React,{ useState } from 'react'
import {
  View,
  Text,
  Image,
  Button,
  FlatList,
  Pressable,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
//Constants
import {
  icons,
  images,
  COLORS,
  SIZES
} from '../utils'

//Components
import TrendingSection from '../components/TrendingSection'

//Lists
const foodCategories = [
  {
    id: 1,
    categoryName: 'Pasta',
    source: icons.spaguetti
  },
  {
    id: 2,
    categoryName: 'Fried Food',
    source: icons.fried_chicken
  },
  {
    id: 3,
    categoryName: 'Burgers',
    source: icons.burger
  },
  {
    id: 4,
    categoryName: 'Pizza',
    source: icons.pizza
  },
  {
    id: 5,
    categoryName: 'Tacos',
    source: icons.taco
  },
  {
    id: 6,
    categoryName: 'Skewer',
    source: icons.skewer 
  },
  {
    id: 7,
    categoryName: 'Kebab',
    source: icons.kebab
  }
]

const deliciousItems = [
  {
    id: 1,
    source: images.eggsSunday,
    title: 'Breakfast Eggs',
    shortDescription: 'Special benedict eggs with toasts',
    price: '6.88€'
  },
  {
    id: 2,
    source: images.pancakesSunday,
    title : 'Sunday Pancakes',
    shortDescription: 'Made without gluten',
    price: '8.00€'
  }
]



const HomeScreen = () => {
  const  [selectedCategory, setSelectedCategory] = useState(1)

  const renderCategoryHeader = ({ item }) => {
    let borderState = selectedCategory == item.id ? COLORS.tertiary : 'transparent'

    return (
      <Pressable 
        style={{
          padding: 5,
          borderRadius: 10,
          borderWidth: 1.5,
          borderColor: borderState,
          marginLeft: 20,
          width: 90,
          height: 90,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.secondary
        }}
        onPress={() => setSelectedCategory(item.id)}
      >
        <Image 
          source={item.source}
          style={{width: 40, height: 40}}
        />
        <Text style={{marginTop: 10, color: COLORS.text}}>{item.categoryName}</Text>
      </Pressable>
    )
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary, paddingTop: 45}}>
      {/* ===================== FOOD CATEGORY SECTION ===================== */}
      <View>
        <Text style={{color: COLORS.text, fontSize: SIZES.h2, marginLeft: 10}}>Delicious categories</Text>
      </View>

      <View style={{padding: 15}}>
        <FlatList 
          horizontal
          data={foodCategories}
          renderItem={renderCategoryHeader}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          extraData={selectedCategory}
        />
      </View>

      {/* ===================== TRENDING SECTION ===================== */}
      <TrendingSection />

      {/* ===================== DELICIOUS ITEMS SECTION ===================== */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20}}>
        <Text style={{color: COLORS.text, fontSize: SIZES.h2, marginLeft: 10}}>Delicious Categories</Text>

        <TouchableOpacity>
          <Text style={{color: COLORS.lightGray, fontSize: SIZES.body2, marginRight: 10}}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        
        
        {deliciousItems.map((item) => (
          <View 
            style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              borderRadius: 10,
              overflow: 'hidden',
              width: SIZES.width * 0.46,
              height: 250,
              padding: 12,
              backgroundColor: COLORS.secondary
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{color: COLORS.text}}>
                <AntDesign name="clockcircleo" size={18} color={COLORS.text} />
                1hr15mins
              </Text>

              <Text style={{color: COLORS.orange}}>Star</Text>
            </View>

            <Image source={item.source} style={{width: 150, height: 80, alignSelf: 'center', marginBottom: 10}}/>

            <View>
              <Text style={{color: COLORS.text}}>{item.title}</Text>
              <Text style={{color: COLORS.lightGray}}>{item.shortDescription}</Text>
              <Text style={{color: COLORS.text, fontSize: SIZES.body1}}>{item.price}</Text>
            </View>

            <Pressable 
              style={{
                backgroundColor: COLORS.tertiary,
                borderRadius: 150,
                width: 70,
                height: 70,
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBottom: -35,
                marginLeft: SIZES.width * 0.30
                }}>
              <MaterialIcons name="keyboard-arrow-right" size={35} color={COLORS.primary} style={{marginTop: 8, marginLeft: -15}} />
            </Pressable>
          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen