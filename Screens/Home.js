import { StatusBar } from 'expo-status-bar';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid, Image } from 'react-native';
import { useEffect } from 'react';
import Img from '../components/Img';


const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;


const Home = ()=> {



  useEffect(()=>{
    permission()

  },[])

  const permission = async()=>{    
    PermissionsAndroid.requestMultiple(
      [PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE]
      ).then((result) => {
        if (result['android.permission.READ_EXTERNAL_STORAGE'] && result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted') {
          this.setState({
            permissionsGranted: true
          });
        }else if (result['android.permission.READ_EXTERNAL_STORAGE'] || result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'never_ask_again') {
          this.refs.toast.show('Please Go into Settings -> Applications -> APP_NAME -> Permissions and Allow permissions to continue');
        }
      });
  }  








const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth()) //January is 0!
let yyyy = today.getFullYear();
let day = String(today.getDay())


  return (
    <View style={styles.Screen}>
      <StatusBar style="light" />

      <Text style={styles.homeText}>Home</Text>
      <Text style={styles.timeText}>{dd} {monthNames[mm]} {yyyy}, {days[day]} </Text>
 
      <View style={styles.whiteBackground}>
      
      <View style={{top: 20,marginBottom: 250}}>
        <Text style={[styles.navText,{left: screenWidth / 8, color: '#27A0DF'}]} >All Photos</Text>
        <TouchableOpacity><Text style={[styles.navText, {left: screenWidth / 4 + 72, color: '#A4A4A4'}]} >Albums</Text></TouchableOpacity>
        <TouchableOpacity><Text style={[styles.navText, {left: screenWidth / 2 + 85, color: '#A4A4A4'}]} >Favourite</Text></TouchableOpacity>
      
        <ScrollView style={{left: 12,top: 40}} showsVerticalScrollIndicator={true} >
        
        
        <View style={{ marginBottom: 30}}>
            {/* <Text style={styles.dateText} >Jun 16 </Text> */}
            <View style={{top: 9, display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>


            <Img/>


            </View>
            
        </View>
    
        </ScrollView>
      
      </View>

      

      </View>
    </View>
  );
}
export default (Home);



const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#27A0DF',
    position: 'relative',
  },
  whiteBackground: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    height: screenHeight,
    width: screenWidth,
    top: screenHeight/ 4,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  homeText:{
    position : 'absolute',
    left: screenWidth / 8,
    top: screenHeight / 8,
    fontStyle: 'normal',
    fontSize: 36,
    lineHeight: 49,
    color: '#FFFFFF'
  },
  timeText:{
    position: 'absolute',
    left: screenWidth / 8,
    top: screenHeight / 6,
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 27,
    color: '#EEEEEE'
  },
  navText: {
    position: 'absolute',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 27
  },
  dateText:{
    left: 30,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 22,
    color: '#000000'
  }
 




});


