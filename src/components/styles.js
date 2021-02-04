import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    height: 250,
  },
  image: {
    width: "100%",
    resizeMode: "contain",
    borderRadius: 20,
    marginTop: 0,
  },
  post: {
    margin: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    borderColor: 'lightgrey',
    borderRadius: 10
  },
  bedrooms: {
    marginVertical: 10,
    color: "#5b5b5b",
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
  },
  newPrice: {
    fontWeight: "bold",
  },
  totalPrice: {
    color: "#5b5b5b",
    textDecorationLine: "underline",
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  button: {
    borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    cursor: 'pointer'
  }
});

export default styles;
