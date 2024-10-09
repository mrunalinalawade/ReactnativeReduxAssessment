import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Alert } from 'react-native';

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
  
    fetch('https://fakestoreapi.com/carts')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((json) => {
        setCarts(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }


  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart List</Text>
      <FlatList
        data={carts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartText}>Cart ID: {item?.id}</Text>
            <Text style={styles.cartText}>User ID: {item?.userId}</Text>
            <Text style={styles.cartText}>Date: {new Date(item?.date).toLocaleDateString()}</Text>
            <Text style={styles.cartText}>Products:</Text>
            {item?.products.map((product) => (
              <View key={product.productId} style={styles.productItem}>
                <Text style={{color:'red'}}>• Product ID: {product?.productId}</Text>
                <Text style={{color:'red'}}>  Quantity: {product?.quantity}</Text>
              </View>
            ))}
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color:'black'
  },
  cartItem: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
  },
  cartText: {
    fontSize: 16,
    marginBottom: 4,
    color:'black'
  },
  productItem: {
    marginLeft: 16,
    marginBottom: 4,
  },
  separator: {
    height: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
});
