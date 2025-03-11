import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  header: {
    backgroundColor: '#FF69B4', 
    color: '#fff', 
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Oswald', 
    textAlign: 'center',
    padding: 10,
    marginBottom: 10,
    marginTop: 35,
  },
  insideView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc', 
    padding: 8,
    marginRight: 10,
    borderRadius: 5,
    fontFamily: 'Oswald', 
  },
  button: {
    backgroundColor: '#FF69B4',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Oswald',
  },
  taskList: {
    marginHorizontal: 10,
  },
  task: {
    backgroundColor: '#FF69B4', 
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  taskText: {
    color: '#fff', 
    fontSize: 16,
    fontFamily: 'Oswald', 
  },
});

export default styles;
