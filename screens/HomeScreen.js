import React,{useState} from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([
    { id: '1', title: 'Desarrollo de aplicaciones móviles multiplataforma' },
    { id: '2', title: 'Desarrollo de aplicaciones móviles avanzado' },
    { id: '3', title: 'Desarrollo de aplicaciones web avanzado' },
    { id: '4', title: 'Desarrollo de soluciones en la nube' },
    { id: '5', title: 'Diseño de proyectos de innovación' },
    { id: '6', title: 'Integración de Sistema Empresariales' },
    { id: '7', title: 'Marketing y Comercialización de Nuevos Productos' },
  ]);

  const navigateToDetails = (item) => {
    navigation.navigate('Details', { item });
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetails(item)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Lista de cursos</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Ver detalles"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f8f8f8',
  },
  itemText: {
    fontSize: 18,
  },
});
export default HomeScreen;
