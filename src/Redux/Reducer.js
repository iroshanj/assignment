const initialState = {
  storedids: [0],
  category: 'RICE',
  Ammount: 0,
  cart: [],
  items: 0,
  products: [
    {
      id: 1,
      name: 'Masala rice',
      type: 'RICE',
      url: 'https://www.indianveggiedelight.com/wp-content/uploads/2020/03/masala_rice.jpg',
      price: 80,
      quantity: 0
    },
    {
      id: 2,
      name: 'Shejawan Rice',
      type: 'RICE',
      url: 'https://img-global.cpcdn.com/recipes/d2c64b6ff57241af/1200x630cq70/photo.jpg',
      price: 100,
      quantity: 0

    },
    {
      id: 3,
      name: 'Jeera Rice',
      type: 'RICE',
      url: 'https://img-global.cpcdn.com/recipes/5e5a9e497bb98aea/1200x630cq70/photo.jpg',
      price: 200,
      quantity: 0

    },
    {
      id: 4,
      name: 'Green Rice',
      type: 'RICE',
      url: 'https://i1.wp.com/fountainavenuekitchen.com/wp-content/uploads/2012/05/fullsizeoutput_a89a.jpeg?fit=2048%2C1364&ssl=1',
      price: 250,
      quantity: 0

    },
    {
      id: 5,
      name: 'Dal Khichadi',
      type: 'RICE',
      url: 'https://i.ytimg.com/vi/3QGtLL_BM94/maxresdefault.jpg',
      price: 90,
      quantity: 0

    },
    {
      id: 6,
      name: 'Steam Rice',
      type: 'RICE',
      url: 'https://tipbuzz.com/wp-content/uploads/How-to-Cook-Rice-in-Microwave-.jpg',
      price: 70,
      quantity: 0

    },
    {
      id: 7,
      name: 'Tandoori roti',
      type: 'ROTI',
      url: 'https://tipbuzz.com/wp-content/uploads/How-to-Cook-Rice-in-Microwave-.jpg',
      price: 40,
      quantity: 0

    },
    {
      id: 8,
      name: 'Ghee Roti',
      type: 'ROTI',
      url: 'https://www.tuktukfoodsindia.com/wp-content/uploads/2018/11/desi_ghee_roti-e1542006374654.jpg',
      price: 50,
      quantity: 0

    },
    {
      id: 9,
      name: 'Plain Chapati',
      type: 'ROTI',
      url: 'https://5.imimg.com/data5/PX/EF/MY-34988579/phulka-chapati-500x500.jpg',
      price: 20,
      quantity: 0

    },
    {
      id: 10,
      name: 'Masala Papad',
      type: 'STARTER',
      url: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/09/Masala-Papad-03-1024x569.jpg?resize=1024%2C569',
      price: 40,
      quantity: 0

    },
    {
      id: 11,
      name: 'Veg Crispy',
      type: 'STARTER',
      url: 'https://images.loksatta.com/2017/01/veg-crispy.jpg',
      price: 80,
      quantity: 0

    },
    {
      id: 12,
      name: 'Hara bhara kabab',
      type: 'STARTER',
      url: 'https://cdn2.foodviva.com/static-content/food-images/snacks-recipes/hara-bhara-kabab/hara-bhara-kabab.jpg',
      price: 150,
      quantity: 0

    },
    {
      id: 13,
      name: 'Sprite',
      type: 'COLD',
      url: 'https://5.imimg.com/data5/VH/MQ/DF/SELLER-13176868/2-liter-sprite-soft-drink-500x500.jpg',
      price: 60,
      quantity: 0

    },
    {
      id: 14,
      name: 'Coca cola',
      type: 'COLD',
      url: 'https://www.coca-colacompany.com/content/dam/journey/us/en/brands/coca-cola/coca-cola-original-282x130.png',
      price: 50,
      quantity: 0

    },
    {
      id: 15,
      name: 'Pepsi',
      type: 'COLD',
      url: 'https://www.pepsi.com/en-us/uploads/images/nfl2020_cans.png',
      price: 40,
      quantity: 0

    },

  ]
}

const Reducer = function (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return {
        ...state,
        category: action.id
      };

    case "CLEAR_CART":
      let tempLength = state.cart.length = 0;
      return {
        ...state,
        cart: tempLength,
        items: 0,
      };

    case "ADD_TO_CART":
      let newCount;
      const filtered = state.products.filter((product) => product.id == action.id)
      filtered[0].quantity = 1;
      filtered[0].billing = filtered[0].price;
      state.cart.push(filtered[0]);

      newCount = state.items + 1;

      return {
        ...state,
        Ammount: state.Ammount + filtered[0].price,
        cart: state.cart,
        items: newCount
      }

    case "ADD_QUANTITY":
      let temp = [];
      let newCounts;
      let productPrice;
      temp = [...state.cart];
      newCounts = state.items + 1;
      let billi;

      for (let i = 0; i < temp.length; i++) {
        if (temp[i].id == action.id) {
          temp[i].quantity = temp[i].quantity + 1;
          billi = temp[i].quantity * temp[i].price;
          temp[i].billing = billi;
          productPrice = temp[i].price;
        }
      }

      return {
        ...state,
        Ammount: state.Ammount + productPrice,
        items: newCounts,
        cart: temp
      }

    case "REMOVE_QUANTITY":
      let tempArr = [];
      let productPrice5;
      tempArr = [...state.cart];
      let newcccc;
      newcccc = state.items - 1;
      let billis;

      for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i].id == action.id) {
          tempArr[i].quantity = tempArr[i].quantity - 1;
          billis = tempArr[i].quantity * tempArr[i].price;
          tempArr[i].billing = billis;
          productPrice5 = tempArr[i].price;
          if (tempArr[i].quantity == 0) {
            let index = tempArr.indexOf(tempArr[i]);
            tempArr.splice(index, 1);
          }
        }
      }

      return {
        ...state,
        Ammount: state.Ammount - productPrice5,
        cart: tempArr,
        items: newcccc,
      }
    default:
      return state;
  }
};


export default Reducer;