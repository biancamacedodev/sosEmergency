import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '50%',
    backgroundColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    color: 'black',
    fontSize: 20,
    height: 40,
    borderWidth: 1,
    textAlign: 'center',
    marginBottom: 10
  },

  text: {
      fontSize: 16,
        lineHeight: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
  },

  button: {
    alignItems: 'center',
    width: '50%',
    justifyContent:'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: 'red',
    borderWidth: 1,
    marginTop: 10,
  },
});