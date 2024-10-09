import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, ActivityIndicator, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import Feather from 'react-native-vector-icons/Feather'
import GroupModal from '../Components/GroupModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux'
import RootState from '../Redux/Store';
import { clearSelectedCategory, setSelectedCategory } from '../Redux/ProductDetails';
import SpinningLoader from '../ApiConfig/SpinningLoader';


const Home = (props) => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch()

  const handleGmember = () => {
    props.navigation.navigate('Cart');
    setModalVisible(false);
  };
  const handleDeleteChat = () => setModalVisible(false);
  const handleCloseModal = () => setModalVisible(false);
  // const saveAllProductData = useSelector((state: RootState) => state.saveAllProductData.AllProductData_);
  // console.log(saveAllProductData, 'allDataallDataallDataallData')

  const allProductData = useSelector((state: RootState) => state.saveAllProductData.AllProductData_);
  const selectedCategory = useSelector((state: RootState) => state.saveAllProductData.selectedCategory);

  // Determine the data to display: filter if a category is selected
  const filteredData = selectedCategory
    ? allProductData.filter(product => product.category === selectedCategory)
    : allProductData;

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    setLoader(true);
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      if (res.status === 200) {
        setProducts(res?.data);
        console.log(res.data, 'all Products');
        const AllProductData = res?.data;
        dispatch(saveAllProductData(AllProductData));
        showMessage({
          message: 'Products fetched successfully!',
          type: 'success',
          icon: 'success',
          duration: 3000,
        });
      } else {
        showMessage({
          message: 'Failed to fetch products!',
          type: 'warning',
          icon: 'warning',
          duration: 3000,
        });
      }
    } catch (err) {
      console.error(err);
      showMessage({
        message: 'Error fetching products!',
        type: 'danger',
        icon: 'danger',
        duration: 3000,
      });
    } finally {
      setLoader(false);
    }
  };





  const renderItem = ({ item }) => (


    <View style={styles.flatListItem}>
      <Image
        source={{ uri: item?.image }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item?.title}</Text>
        <Text style={styles.productPrice}>${item?.price}</Text>
        <Text style={styles.productCategory}>Count :{item?.rating?.count}    Rate:{item?.rating?.rate}</Text>
        <Text style={styles.productCategory}>{item?.category}</Text>
        <Text style={styles.productDescription} numberOfLines={2}>
          {item?.description}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>


      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.subhead}>
          <Text style={styles.exporetxt}>Home</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Feather name='menu' color={'black'} size={24} />
          </TouchableOpacity>

        </View>

        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No products available.</Text>
            </View>
          }
        />

        {/* <GroupModal
          visible={modalVisible}
          closeModal={() => setModalVisible(false)}
          onElectronicsPress={() => console.log('Jewelry pressed')}
          onJewelryPress={() => console.log('Jewelry pressed')}
          onMenPress={() => console.log('Men pressed')}
          onWomenPress={() => console.log('Women pressed')}
          onLogoutPress={() => props.navigation.navigate('Login')}
        /> */}


             <GroupModal
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}  // Close modal
        onElectronicsPress={() => {
          dispatch(setSelectedCategory('electronics')); // Set selected category
          setModalVisible(false); // Close the modal
        }}
        onJewelryPress={() => {
          dispatch(setSelectedCategory('jewelery')); // Set selected category
          setModalVisible(false); // Close the modal
        }}
        onMenPress={() => {
          dispatch(setSelectedCategory("men's clothing")); // Set selected category
          setModalVisible(false); // Close the modal
        }}
        onWomenPress={() => {
          dispatch(setSelectedCategory("women's clothing")); // Set selected category
          setModalVisible(false); // Close the modal
        }}
        onAllPress={() => {
          dispatch(clearSelectedCategory()); // Clear selected category to show all products
          setModalVisible(false); // Close the modal
        }}
        onLogoutPress={() => props.navigation.navigate('Login')} // Handle logout
      />



      </ScrollView>
      <SpinningLoader loader={loader} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginBottom: 3,
  },
  subhead: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingVertical: 10,
    marginTop: 8,
  },
  flatListContainer: {
    padding: 10,
  },
  flatListItem: {
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
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productTitle: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  productCategory: {
    fontSize: 12,
    color: '#555',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 12,
    color: '#333',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#555',
  },
  exporetxt: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000000',
  },
});

export default Home;
