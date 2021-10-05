import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';
import LogoIcon from '../assets/icone-zap.png';
import PresentationImage from '../assets/primeira-imagem.png';
import BlueRectangle from '../assets/retangulo-azul.png';
const Page = () => {
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image source={LogoIcon} />
      </View>
      <View style={styles.firstImageContainer}>
        <Image source={PresentationImage} />
      </View>
      <ImageBackground source={BlueRectangle} style={styles.blueRectangleStyles}>
        <View style={styles.containerMessageStyles}>
          <Text style={styles.messageStyles}>A Conta Zap tem
            tudo que você precisa
            sem sair do WhatsApp!
          </Text>
        </View>
        <View style={styles.containerTrace}>
          <View style={styles.subContainerTrace}>
            <View style={styles.coreContainerTrace}>
              <Text style={styles.coreContainerTrace}>_</Text>
            </View>
          </View>
        </View>
        <View style={{ width: '80%', backgroundColor: 'transparent', marginTop: 13 }}>
          <Text style={{ fontFamily: 'Ubuntu-Regular', fontSize: 16, color: 'white' }}>Aqui tem Pix, telemedicina, recarga de celular e apps, Tele Sena, Doação Premiada e muito mais!</Text>
        </View>
        <View style={{ marginTop: 20, width: 300, height: 50, backgroundColor: 'transparent' }}>
          <Text style={{ color: '#FEC400', paddingHorizontal: 62.9, position: 'relative', fontFamily: 'Ubuntu-Regular', fontSize: 16, textAlign: 'center' }}>
            Abra já a sua Conta
            pelo WhatsApp, é de graça!
          </Text>
        </View>
        <View>
          <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 142, height: 42, borderRadius: 18, backgroundColor: '#FEC400' }}>
            <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 16, color: '#181F75' }}>ABRIR CONTA</Text>
          </TouchableOpacity>
        </View>
        {/* <Image  style={styles.blueRectangleStyles} /> */}
      </ImageBackground>
      <View>
        <View style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <View style={{ width: '80%', height: 50, backgroundColor: 'transparent', justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 25, color: '#181F75' }}>O seu dia a dia mais prático</Text>
          </View>
        </View>
        <View style={{ width: '100%', backgroundColor: 'transparent', alignItems: 'center' }}>
          <View style={styles.containerTrace}>
            <View style={styles.subContainerTraceBlue}>
              <View style={styles.coreContainerTrace}>
                <Text style={styles.coreContainerTrace}>_</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 250, width: '100%', backgroundColor: 'red' }}>
          <View style={{ width: '80%', height: '70%', backgroundColor: 'blue' }}>
            <Text style={{ fontFamily: 'Ubuntu-Regular', fontSize: 16, color: '#444444' }}>Na Conta Zap você tem tudo em um só lugar:
              o WhatsApp.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Page;