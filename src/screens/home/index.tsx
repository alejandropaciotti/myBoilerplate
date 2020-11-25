import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
  StatusBar,
  Text,
  View
} from 'react-native';

import RBSheet from "react-native-raw-bottom-sheet";

import { IconWater, IconSmartPhone, IconQR, IconSend, IconWithDrawals, IconReload} from 'components/icons';
import Carousel from 'components/Carousel';
import ItemMenu from 'components/ItemMenu';
import ItemAction from 'components/ItemAction';
import HomeSection from 'components/HomeSection';
import Movements from 'components/Movements';
import BalanceInstructions from 'components/BalanceInstructions';

interface IOptions {
  mount: String;
  name: String;
  type: String;
  date: String;
}

const Home: React.FC = () => {
  const refRBSheet: React.MutableRefObject<undefined> = useRef();
  const movements: IOptions[] = [
    {
      mount: '350,000',
      name: 'Nombre de contacto',
      type: 'Enviaste dinero',
      date: '02 de Diciembre'
    },
    {
      mount: '350,000',
      name: 'Nombre de contacto',
      type: 'Enviaste dinero',
      date: '02 de Diciembre'
    },
    {
      mount: '350,000',
      name: 'Nombre de contacto',
      type: 'Enviaste dinero',
      date: '02 de Diciembre'
    },
  ];
  return (
    <ScrollView>
      <ImageBackground imageStyle={styles.imageTest} source={require('../../assets/images/Home-header-background.png')} style={styles.image} >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <View style={styles.header}>
          <View />
          <Text style={styles.textName}>Hola María Guadalupe</Text>
          <IconWater />
        </View>
        <View style={styles.mount}>
          <Text style={styles.textCurrency}>RD$</Text>
          <Text style={styles.textMount}>520,500.</Text>
          <Text style={styles.textCurrency}>00</Text>
        </View>
        <View style={styles.instructions}>
          <Text style={styles.textInstructions} onPress={() =>  refRBSheet && typeof(refRBSheet.current) !== 'undefined' ? refRBSheet.current.open() : undefined} >Balance disponible en tu cartera !</Text>
        </View>
        <View style={styles.actions}>
          <ItemAction isFirst icon={<IconReload />} text={'Recargar'} />
          <ItemAction isFirst icon={<IconSend />} text={'Enviar'} />
          <ItemAction isFirst icon={<IconWithDrawals />} text={'Retirar'} />
        </View>
      </ImageBackground>
      <View style={styles.carouselView}>
        <Carousel>
            <ItemMenu isFirst icon={<IconWater />} text={'Pagos de servicios'} />
            <ItemMenu icon={<IconSmartPhone />} text={'Recarga de Celular'} />
            <ItemMenu icon={<IconQR />} text={'Vender'} />
        </Carousel>
      </View>
      <View style={{ paddingLeft: 15 }}>
        <HomeSection title={'Promociones'} >
          <Text>Test</Text>
        </HomeSection>
      </View>
      <View style={{ paddingHorizontal: 15}}>
        <HomeSection title={'Movimientos'} >
          <Movements movements={movements} />
        </HomeSection>
      </View>
      <RBSheet
        ref={refRBSheet}
        animationType={'slide'}
        openDuration={500}
        closeOnDragDown={true}
        closeOnPressMask={true}
        style={{
          borderRadius: 15,
        }}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          container: {
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: '57%'
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <BalanceInstructions />
      </RBSheet>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6'
  },
  actions: {
    flexDirection: 'row',
    paddingTop: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  header: {
    paddingHorizontal: 15,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textName: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  textCurrency: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 35,
    color: '#023459'
  },
  textMount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#023459'
  },
  mount: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  instructions: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInstructions: {
    fontSize: 14,
    color: '#023459'
  },
  image: {
    height: 'auto',
  },
  imageTest: {
    marginBottom: 30,
  },
  carouselView: {
    paddingTop: 20
  }
});



export default Home;