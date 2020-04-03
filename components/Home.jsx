import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, ImageBackground} from 'react-native';


export default function Home(props) {
   let date = new Date();
    const [hours, setHours] = useState(date.getHours());
    const [minutes, setMinutes] = useState(date.getMinutes());
    const [month, setMonth] = useState(date.getMonth());
    const [jour, setDate] = useState(date.getDate());
    const [fullYear, setFullYear] = useState(date.getFullYear());

    setInterval(() => {
        date = new Date();
        if(date.getMonth() < 10){
         setMonth('0' + (date.getMonth() + 1))
     } else {
      setMonth('0' + (date.getMonth() + 1))
     }
     if(date.getDate() < 10){
      setDate('0' + date.getDate());
  } else {
      setDate(date.getDate());
  }
        if(date.getHours() < 10){
            setHours('0' + date.getHours());
        } else {
            setHours(date.getHours());
        }
        if(date.getMinutes() < 10){
            setMinutes('0' + date.getMinutes())
        } else {
            setMinutes(date.getMinutes());
        }
    }, 100);

    const [Temp, setTemp] = useState('');
    const [description, setDescription] = useState('');
    const [ville, setVille] = useState('');
    const [icon, setIcon] = useState('');
   
    fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=48.853&lon=2.35&units=metric&lang=fr&appid=76df089514d3a7c19f777445eec48401`
        )
        
        
            .then((response) => response.json())
            .then(data => {console.log(data); 
                setTemp(data.main.temp);
                setDescription(data.weather[0].description);
                setVille(data.name);
                setIcon(data.weather[0].icon);
            });

            return (
                icon !== '' && <ImageBackground style={styles.bg}
                          resizeMode='cover'
                          source={require(`../assets/${icon}.gif`)}>

     <View style={styles.view}>
     <Text style={{color: '#b38b63', fontSize: 25, letterSpacing: 25, textTransform: "uppercase", fontWeight:"bold", marginBottom: 10 }}> 
            {ville}
            </Text>
        <Text style={{color: '#969696', fontSize: 18, marginBottom: 25}}>
        {jour}/{month}/{fullYear} | {hours}:{minutes}
      </Text>

      <Text style={{color: '#b38b63', fontSize: 45}}> 
     {Temp}°C 
     </Text>
     <Text style={{color: '#b38b63', fontSize: 28}}> 
        {description}
        </Text>
        
      
      </View>
      </ImageBackground>
   );
}

const styles = StyleSheet.create({
   icon: {
      width: 240,
      height: 200,
      
   },
   view: {
      flex: 2,
      justifyContent: "flex-end",
      marginBottom:'17%',
      alignItems: 'center'
   },
   bg:{
   width: '100%', 
   height: '100%',
   flex: 1
}
});