import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  textInput: {
    fontSize: 30,
    borderWidth: 0,
    marginLeft: 10,
    marginRight: 10,
    width: '70%',
    flex: 1
  },
  searchrows: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingVertical: 15,
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: "#e7e7e7",
    padding: 8,
    borderRadius: 10,
    marginRight: 15,
  },
  locationText: {},
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingVertical: 10,
    backgroundColor: '#a8eb34'
  },
  backIcon: {
    marginLeft: 5
  },
  closeIcon: {
    marginRight: 5
  },
});

export default styles;
