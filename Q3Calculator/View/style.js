import {StyleSheet} from 'react-native';

export default style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },

  resultText: {
    fontSize: 39,
    color: '#1ed2aa',
  },

  buttonTextBlack: {
    color: '#000000',
    fontSize: 29,
  },

  buttonTextYellow: {
    fontWeight: 'bold',
    color: '#fe9504',
    fontSize: 16,
  },

  buttonTextWhite: {
    color: '#ffffff',
    fontSize: 16,
  },

  functionButton: {
    backgroundColor: 'gray',
  },

  bottomView: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  buttonRow: {
    flexDirection: 'row',
  },

  inputNumberButton: {
    width: 70,
    height: 55,
    margin: 3,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },

  inputOperatorButton: {
    width: 70,
    height: 55,
    margin: 3,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },

  resetButton: {
    width: '90%',
    height: 55,
    margin: 3,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
});
