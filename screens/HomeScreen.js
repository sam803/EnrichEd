import React, { Component } from 'react';
import { StyleSheet, Image, Button, View, Text, Dimensions } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },

  item: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
    margin: 10
  },

  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    aspectRatio: 1
  }
})

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'EnrichEd',
  };
  state = {
    selected: '',
    selcolor: ''
  };
  config = [
    { name: 'run', main_img: require('../assets/images/run.gif'), img1: require('../assets/images/robot-prod.png'), img2: require('../assets/images/robot-prod.png'), img3: require('../assets/images/robot-prod.png') },
    { name: 'strike', main_img: require('../assets/images/Strike/Strike.gif'), img1: require('../assets/images/Strike/strike1.gif'), img2: require('../assets/images/Strike/Strike2.gif'), img3: require('../assets/images/Strike/Strike3.gif') },
    { name: 'gallop', main_img: require('../assets/images/gallop.gif'), img1: require('../assets/images/Strike/strike1.gif'), img2: require('../assets/images/Strike/Strike2.gif'), img3: require('../assets/images/Strike/Strike2.gif') },
    { name: 'dribble', main_img: require('../assets/images/dribble.gif'), img1: require('../assets/images/Strike/strike1.gif'), img2: require('../assets/images/Strike/Strike2.gif'), img3: require('../assets/images/Strike/Strike2.gif') },
    { name: 'hop', main_img: require('../assets/images/hop.gif'), img1: require('../assets/images/Strike/strike1.gif'), img2: require('../assets/images/Strike/Strike2.gif'), img3: require('../assets/images/Strike/Strike2.gif') },
    { name: 'throw', main_img: require('../assets/images/throw.gif'), img1: require('../assets/images/Strike/strike1.gif'), img2: require('../assets/images/Strike/Strike2.gif'), img3: require('../assets/images/Strike/Strike2.gif') },
    { name: 'leap', main_img: require('../assets/images/jump.gif'), img1: require('../assets/images/Strike/strike1.gif'), img2: require('../assets/images/Strike/Strike2.gif'), img3: require('../assets/images/Strike/Strike2.gif') },
    { name: 'catch', main_img: require('../assets/images/jump.gif'), img1: require('../assets/images/Strike/strike1.gif'), img2: require('../assets/images/Strike/Strike2.gif'), img3: require('../assets/images/Strike/Strike2.gif') },
    { name: 'jump', main_img: require('../assets/images/Jump/Jump.gif'), img1: require('../assets/images/Jump/Jump1.gif'), img2: require('../assets/images/Jump/Jump2.gif'), img3: require('../assets/images/Jump/Jump3.gif') },
    { name: 'kick', main_img: require('../assets/images/jump.gif'), img1: require('../assets/images/Strike/strike1.gif'), img2: require('../assets/images/Strike/Strike2.gif'), img3: require('../assets/images/Strike/Strike2.gif') },
    { name: 'slide', main_img: require('../assets/images/jump.gif'), img1: require('../assets/images/Strike/strike1.gif'), img2: require('../assets/images/Strike/Strike2.gif'), img3: require('../assets/images/Strike/Strike2.gif') },
    { name: 'roll', main_img: require('../assets/images/jump.gif'), img1: require('../assets/images/Strike/strike1.gif'), img2: require('../assets/images/Strike/Strike2.gif'), img3: require('../assets/images/Strike/Strike2.gif') },
  ];

  renderRow(first, second, idx) {
    return (
      <View key={idx} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', justifyContent:'space-between', padding:5 }}>
        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent:'space-between', padding:10 }}>
          <Button title={first.name.toUpperCase()} onPress={() => this.setState({selcolor: 'blue', selected: first})} color="blue" />
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent:'space-between', padding:10 }} >
          <Button title={second.name.toUpperCase()} onPress={() => this.setState({selcolor: 'green', selected: second})} color="green" />
        </View>
      </View>
    );
  }

  render() {
      var deviceWidth = Dimensions.get("window").width;
    if (this.state.selected) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         {/** <Text style={{ color: this.state.selcolor, fontSize: 30, fontWeight: 'bold' }}>{this.state.selected.name.toUpperCase()}</Text> **/}
          <Image style={{ width: "99%", resizeMode: "contain" }} source={this.state.selected.main_img} />

         <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', justifyContent:'space-between', padding:5 }}>
            <Image style={styles.image} source={this.state.selected.img1} />
            <Image style={styles.image} source={this.state.selected.img2} />
            <Image style={styles.image} source={this.state.selected.img3} />
         </View>

         <Button title="Back"  onPress={() => this.setState({selected: ''})} color="red" />
        </View>

      )
    }
    var rows = [];
    for (var i = 0; i < this.config.length; i+=2) {
      rows.push(this.renderRow(this.config[i], this.config[i+1], i));
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       { rows }
      </View>
    )
  }
}

export default HomeScreen;
