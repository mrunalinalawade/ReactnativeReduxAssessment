import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { RootState } from '../Redux/Store'; 
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from '../Redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state?.cart?.cartItems) || [];

  const renderItem = ({ item }) => (
 
    <View style={styles.cartItem}>
      <Image source={{ uri: item?.image }} style={styles.cartImage} resizeMode="contain" />
      <View style={styles.cartDetails}>
        <Text style={styles.cartTitle}>{item?.title}</Text>
        <Text style={styles.cartPrice}>${item?.price}</Text>
      
        <View style={styles.quantityContainer}>
        <Text style={styles.cartQuantity}>Quantity:</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => dispatch(decreaseQuantity(item?.id))}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text  style={styles.cartQuantity}>{item?.quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => dispatch(increaseQuantity(item?.id))}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => dispatch(removeFromCart(item?.id))}
         
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);


  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.flatListContainer}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => dispatch(clearCart())}
            >
              <Text style={styles.clearButtonText}>Clear Cart</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  flatListContainer: {
    paddingBottom: 100,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 10,
  },
  cartImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  cartDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cartPrice: {
    fontSize: 14,
    color: '#888',
  },
  cartQuantity: {
    fontSize: 14,
    color: '#555',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:'1%'
  },
  quantityButton: {
    backgroundColor: '#FFB74D',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#FF5252',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  totalContainer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  clearButton: {
    backgroundColor: '#FF5252',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#555',
  },
});

export default Cart;



