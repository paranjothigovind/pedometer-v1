import React from 'react'
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';
  import { connect } from 'react-redux';

  const Pedometer = () => {
     return(
        <>
        <View style={styles.headerContainer}>
           <Text style={styles.header}>
           Pedometer
           </Text>
       </View>

       <View style={styles.stepsContainer}>
           <Text style={styles.steps}>
           21.0
           </Text>
       </View>
     </>
     )
  }

  const mapStateToProps = (state) => {
    const { friends } = state
    return { friends }
  };
  
  export default connect(mapStateToProps)(Pedometer);


  const styles = StyleSheet.create({
    headerContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 22
    },
    header: {
      fontSize: 22
    },
    stepsContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 22
    },
    steps: {
      fontSize: 42
    }
  });