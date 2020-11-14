import React,{useState} from 'react'
import { View, Text,Button ,TextInput,StyleSheet,FlatList,Image} from 'react-native'
import { connect, useSelector,useDispatch  } from "react-redux";
import {searchGif} from '../container/action' ;

const Gif = () => {
    const [term, updateTerm] = useState('cheeseburgers');
   
    const loading = useSelector(state => state.gif.error);
    const gifs = useSelector(state => state.gif.gifs) ;

    const dispatch = useDispatch()

    function onEdit(newTerm) {
        updateTerm(newTerm);
        dispatch(searchGif(newTerm))
      }
    return (
        <View>
              <View style={styles.row}>

                    <TextInput
                    placeholder="Search Gifs"
                    placeholderTextColor='black'
                    style={styles.textInput}
                    onChangeText={(text) => onEdit(text)}/>

                    <Button 
                    onPress={()=> dispatch(searchGif(term))}
                    title="Search"/>

              </View>
      
              <Text style={styles.Loading}>{loading}</Text>

            <FlatList
                style={styles.flatList}
                data={gifs}
                renderItem={({item}) => (
                    <Image
                        resizeMode='contain'
                        style={styles.image}
                        source={{uri: item.images.original.url}} />
                    )}
            />

        </View>
    )
}
export default connect(
    null,
    {searchGif},
  )(Gif);


  const styles = StyleSheet.create({
      textInput:{
          borderColor:'black',
          borderWidth:1,
          width:'70%',
          marginHorizontal:10
      },
      image: {
        width: 300,
        height: 150,
        borderWidth: 3,
        marginBottom: 5,
        marginVertical:10
      },
      row:{
          flexDirection:'row',
          marginVertical:10,
          height:40
        },
        flatList:{
            alignSelf:'center',
            marginBottom:100
        },
        Loading:{
            alignSelf:'center',
            marginVertical:10,
            fontSize:20,
            color:'blue',
            fontWeight:'bold'
        }
  })
