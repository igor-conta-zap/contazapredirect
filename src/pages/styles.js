import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: height / 12,
    // backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstImageContainer: {
    width: width,
    height: height / 2.73,
    backgroundColor: 'rgb(251, 194, 0)',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  blueRectangleContainer: {
    width: width,
    height: height / 2.73,
    paddingLeft: 1.5,
    // backgroundColor: 'rgb(251, 194, 0)',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  blueRectangleStyles: {
    width: width,
    height: height / 2.43,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerMessageStyles: {
    width: '80%',
    height: 100,
    backgroundColor: 'transparent',
    marginTop: 36
  },
  containerTrace: {
    width: '80%',
    backgroundColor: 'transparent'
  },
  subContainerTrace: {
    borderRadius: 18,
    height: 5,
    width: '13%',
    backgroundColor: 'white'
  },
  subContainerTraceBlue: {
    borderRadius: 18,
    height: 5,
    width: '13%',
    backgroundColor: '#181F75'
  },
  coreContainerTrace: {
    backgroundColor: 'transparent'
  },
  messageStyles: {
    fontFamily: 'Ubuntu-Bold',
    color: 'white',
    fontSize: 25
  },

});

export default styles;