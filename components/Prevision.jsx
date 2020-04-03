import React,{useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Previsions() {

  const [prevTemp1, setPrevTemp1] = useState('');
  const [desc1, setDesc1] = useState('');
  const [date1, setDate1] = useState('');
  const [icon1, setIcon1] = useState('');

  const [prevTemp2, setPrevTemp2] = useState('');
  const [desc2, setDesc2] = useState('');
  const [date2, setDate2] = useState('');
  const [icon2, setIcon2] = useState('');

  const [prevTemp3, setPrevTemp3] = useState('');
  const [desc3, setDesc3] = useState('');
  const [date3, setDate3] = useState('');
  const [icon3, setIcon3] = useState('');

  const [prevTemp4, setPrevTemp4] = useState('');
  const [desc4, setDesc4] = useState('');
  const [date4, setDate4] = useState('');
  const [icon4, setIcon4] = useState('');

  fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=48.853&lon=2.35&units=metric&lang=fr&appid=fcaa070d1babb38b0d7838801ad55e67`
      )
          .then((response) => response.json())
          .then(data =>{console.log(data.list);
            
          setPrevTemp1(data.list[7].main.temp);
          setDesc1(data.list[7].weather[0].description); 
          setDate1(data.list[7].dt_txt);
          setIcon1(data.list[7].weather[0].icon); 

          setPrevTemp2(data.list[15].main.temp);
          setDesc2(data.list[15].weather[0].description); 
          setDate2(data.list[15].dt_txt);
          setIcon2(data.list[15].weather[0].icon); 

          setPrevTemp3(data.list[23].main.temp);
          setDesc3(data.list[23].weather[0].description); 
          setDate3(data.list[23].dt_txt);
          setIcon3(data.list[23].weather[0].icon);
          
          setPrevTemp4(data.list[31].main.temp);
          setDesc4(data.list[31].weather[0].description); 
          setDate4(data.list[31].dt_txt);
          setIcon4(data.list[31].weather[0].icon);
          });

          let dateCourt1 = date1.split(" ")[0];
          let jour1 = dateCourt1.split("-")[2];
          let mois1 = dateCourt1.split("-")[1];

          let dateCourt2 = date2.split(" ")[0];
          let jour2 = dateCourt2.split("-")[2];
          let mois2 = dateCourt2.split("-")[1];

          let dateCourt3 = date3.split(" ")[0];
          let jour3 = dateCourt3.split("-")[2];
          let mois3 = dateCourt3.split("-")[1];

       
  
    return (
       
        <View style={styles.container}>

          <View style={styles.boite}>
          <Text style={styles.date}>{jour1}/{mois1}</Text>
          <Text style={styles.temperature}>{prevTemp1}°</Text>
          {icon1 !== '' && <Image style={styles.temps} source={require(`../assets/${icon1}.gif`)}/>}
          <Text style={styles.description}>{desc1}</Text>
          </View>

          <View style={styles.boite}>
          <Text style={styles.date}>{jour2}/{mois2}</Text>
          <Text style={styles.temperature}>{prevTemp2}°</Text>
          {icon2 !== '' && <Image style={styles.temps} source={require(`../assets/${icon2}.gif`)}/>}
          <Text style={styles.description}>{desc2}</Text>
          </View>

          <View style={styles.boite}>
          <Text style={styles.date}>{jour3}/{mois3}</Text>
          <Text style={styles.temperature}>{prevTemp3}°</Text>
          {icon3 !== '' && <Image style={styles.temps} source={require(`../assets/${icon3}.gif`)}/>}
          <Text style={styles.description}>{desc3}</Text>
          </View>

      
        </View>
      );
   }


   const styles = StyleSheet.create({
    container: {
        flex: 5,
        width: '100%',
        height: '100%'
        
    },
    boite:{
      flex: 2,
      
      
    },
    temps: {
      width:'100%',
      height:'100%',
      position:'absolute', 
      zIndex: -4,
      
    },
    date: {
      color: '#969696', 
      fontSize: 25, 
      position:'relative',
      marginBottom: 25,
      textAlign:'left',
      top:'100px', 
      left: '20px'
    },
    temperature: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#000000',
        position:'relative',
        top :'30px',
        right: '20px',
        marginRight: 6,
        marginLeft: 12,
        textAlign:'right',
    },
    description: {
    
      fontSize: 20,
      color: '#000000',
      position:'relative',
      top :'30px',
      right: '20px',
      textAlign:'right',
  },
  });