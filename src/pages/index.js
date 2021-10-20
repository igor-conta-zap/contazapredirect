import React, { useRef, useEffect, useState } from 'react';
import { Linking, InteractionManager, UIManager, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity, LayoutAnimation, Platform, Dimensions } from 'react-native';
import styles from './styles';
import LogoIcon from '../assets/icone-zap.png';
import PresentationImage from '../assets/primeira-imagem.png';
import BlueRectangle from '../assets/retangulo-azul.png';
import CellphoneImage from '../assets/mockup-03.png';
import anonimo from '../assets/icone-anonimo.png';
import anonimo1 from '../assets/icone-anonimo-1.png';
import anonimo2 from '../assets/icone-anonimo-2.png';
import anonimo3 from '../assets/icone-anonimo-3.png';
import forma1 from '../assets/forma1.png';
import triangulo1 from '../assets/triangulo-1.png';
const Page = () => {
  const scrollViewRef = useRef();
  const windowHeight = Dimensions.get('window').height;
  useEffect(() => {
    // fetchMovies();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, [])
  const handlePress = async (url) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }
  const [url] = useState('https://web.whatsapp.com/send?phone=551145024494&text')
  return (
    <ScrollView ref={scrollViewRef}>
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
        <View style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => handlePress(url)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 142, height: 42, borderRadius: 18, backgroundColor: '#FEC400' }}>
            <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 16, color: '#181F75' }}>ABRIR CONTA</Text>
          </TouchableOpacity>
        </View>
        {/* <Image  style={styles.blueRectangleStyles} /> */}
      </ImageBackground>
      <View >
        <View style={{ width: '100%', display: 'flex', alignItems: 'center', marginTop: 40 }}>
          <View style={{ width: '80%', height: 100, backgroundColor: 'transparent', justifyContent: 'center' }}>
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
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 600, width: '100%', backgroundColor: 'transparent' }}>
          <View style={{ width: '80%', height: 550, backgroundColor: 'transparent' }}>
            <View style={{ height: 50, backgroundColor: 'transparent' }}>
              <Text style={{ fontFamily: 'Ubuntu-Regular', fontSize: 16, color: '#444444' }}>
                Na Conta Zap você tem tudo em um só lugar:
              </Text>
              <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 16 }}>
                O WhatsApp!
              </Text>
            </View>
            <View style={{ height: 80, backgroundColor: 'transparent' }}>
              <Text style={{ fontFamily: 'Ubuntu-Regular', fontSize: 16 }}>
                Esqueça os tempos de acumular vários apps no seu celular. Aqui tudo é muito mais fácil, rápido e seguro!
              </Text>
            </View>
            <View style={{ height: 400, display: 'flex', alignItems: 'center' }}>
              <Image source={CellphoneImage} style={{ marginBottom: 20 }} />
              <View style={{ marginTop: 20 }}>
                <TouchableOpacity onPress={() => handlePress(url)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 142, height: 42, borderRadius: 18, backgroundColor: '#FEC400' }}>
                  <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 16, color: '#181F75' }}>ABRIR CONTA</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground source={BlueRectangle} style={styles.blueRectangleStyles2}>
          <View style={styles.containerMessageStyles2}>
            <Text style={styles.messageStyles}>
              Na Conta Zap tem:
            </Text>
          </View>
          <View style={styles.containerTrace}>
            <View style={styles.subContainerTrace}>
              <View style={styles.coreContainerTrace}>
                <Text style={styles.coreContainerTrace}>_</Text>
              </View>
            </View>
          </View>
          <View style={{ width: '80%', height: 70, backgroundColor: 'transparent', marginTop: 13, display: 'flex', flexDirection: 'row' }}>
            <View style={{ width: 80, height: 70, backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={anonimo} />
            </View>
            <View style={{ width: 200, height: 70, backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <View>
                <Text style={{ fontFamily: 'Ubuntu-Bold', color: '#FEC400' }}>
                  Pix
                </Text>
              </View>
              <View>
                <Text style={{ fontFamily: 'Ubuntu-Bold', color: 'white' }}>
                  Pagamentos e transferências em até 10 segundos
                </Text>
              </View>
              {/* <Image source={anonimo} /> */}
            </View>
          </View>
          <View style={{ width: '80%', height: 70, backgroundColor: 'transparent', marginTop: 13, display: 'flex', flexDirection: 'row' }}>
            <View style={{ width: 80, height: 70, backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={anonimo1} />
            </View>
            <View style={{ width: 200, height: 70, backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <View>
                <Text style={{ fontFamily: 'Ubuntu-Bold', color: '#FEC400' }}>
                  Recargas
                </Text>
              </View>
              <View>
                <Text style={{ fontFamily: 'Ubuntu-Bold', color: '#FFFFFF' }}>
                  De celular e de vários apps, iFood, Uber Eats, Spotify e muito mais!
                </Text>
              </View>
              {/* <Image source={anonimo} /> */}
            </View>
          </View>
          <View style={{ width: '80%', height: 70, backgroundColor: 'transparent', marginTop: 13, display: 'flex', flexDirection: 'row' }}>
            <View style={{ width: 80, height: 70, backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={anonimo2} />
            </View>
            <View style={{ width: 200, height: 70, backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <View>
                <Text style={{ fontFamily: 'Ubuntu-Bold', color: '#FEC400' }}>
                  Doação Premiada
                </Text>
              </View>
              <View>
                <Text style={{ fontFamily: 'Ubuntu-Bold', color: '#FFFFFF' }}>
                  Com R$4,99 você ajuda quem mais precisa e concorre a prêmios.
                </Text>
              </View>
              {/* <Image source={anonimo} /> */}
            </View>
          </View>
          <View style={{ width: '80%', height: 70, backgroundColor: 'transparent', marginTop: 13, display: 'flex', flexDirection: 'row' }}>
            <View style={{ width: 80, height: 70, backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={anonimo3} />
            </View>
            <View style={{ width: 200, height: 70, backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <View>
                <Text style={{ fontFamily: 'Ubuntu-Bold', color: '#FEC400' }}>
                  Dr. Zap
                </Text>
              </View>
              <View>
                <Text style={{ fontFamily: 'Ubuntu-Bold', color: '#FFFFFF' }}>
                  Pagamentos e transferências em até 10 segundos
                </Text>
              </View>
              {/* <Image source={anonimo} /> */}
            </View>
          </View>
          <View style={{ marginTop: 20, width: 300, height: 20, backgroundColor: 'transparent' }}>

          </View>
          <View style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => handlePress(url)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 142, height: 42, borderRadius: 18, backgroundColor: '#FEC400' }}>
              <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 16, color: '#181F75' }}>ABRIR CONTA</Text>
            </TouchableOpacity>
          </View>
          {/* <Image  style={styles.blueRectangleStyles} /> */}
        </ImageBackground>
        <View style={{ width: '100%', display: 'flex', alignItems: 'center', marginTop: 40 }}>
          <View style={{ width: '80%', height: 50, backgroundColor: 'transparent', justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 25, color: '#181F75' }}>Conheça a Oi Conta Zap!</Text>
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
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 450, width: '100%', backgroundColor: 'transparent' }}>
          <View style={{ width: '80%', height: 400, backgroundColor: 'transparent' }}>
            <View style={{ height: 120, backgroundColor: 'transparent' }}>
              <Text style={{ fontFamily: 'Ubuntu-Regular', fontSize: 16, color: '#444444' }}>
                A Oi Conta Zap foi criada especialmente para quem é cliente de telefonia móvel da Oi!
              </Text>
              <Text style={{ fontFamily: 'Ubuntu-Regular', fontSize: 16, color: '#444444', marginTop: 20 }}>
                Com os mesmos benefícios que todo o cliente da Conta Zap já tem, os clientes da Oi têm ainda mais vantagens!
              </Text>
            </View>
            <View style={{ marginTop: 30, height: 400, display: 'flex', alignItems: 'center' }}>
              <Image source={forma1} style={{ marginBottom: 20, width: 204, height: 100 }} />
              <View style={{ marginTop: 20 }}>
                <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 142, height: 42, borderRadius: 18, backgroundColor: '#FEC400' }}>
                  <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 16, color: '#181F75' }}>ABRIR CONTA</Text>
                </TouchableOpacity>
              </View>
              <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 110, width: 200, backgroundColor: 'transparent' }}>
                <TouchableOpacity onPress={() => {
                  InteractionManager.runAfterInteractions(() => scrollViewRef.current.scrollTo({ y: windowHeight - windowHeight }));
                }}>
                  <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#00A6C4' }}>
                    <Image source={triangulo1} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Page;