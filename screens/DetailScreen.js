import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailScreen = () => {
  const article = {
    title: 'Diseño y Desarrollo de Software',
    description: 'Es una disciplina que se centra en la planificación, diseño, creación y mantenimiento de aplicaciones de software y sistemas informáticos.',
    imageUrl: 'https://grupoalch.com/wp-content/uploads/512x299_disenoydesarrollosoftware.png',
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: article.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.description}>{article.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DetailScreen;
