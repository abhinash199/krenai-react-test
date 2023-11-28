import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  BarsArrowUpIcon,
  HeartIcon,
} from "react-native-heroicons/outline";
const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch(
        "https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=27&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100"
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!isLoading ? (
        <ScrollView>
        <View style={styles.viewStyle}>
          <View style={styles.topHeaderStyle}>
            <Text style={styles.totalItemStyle}>
              {data.object.length + ` / ` + data.totalItems} products
            </Text>

            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text style={styles.topheadericon}>
                <BarsArrowUpIcon size={18} />
                Sort
              </Text>
              <Text style={styles.topheadericon}>
                <AdjustmentsHorizontalIcon size={18} /> Filter
              </Text>
            </View>
          </View>
        
          <View style={styles.maincontainer}>
            {data
              ? data.object.map((item, index) => {
                  return (
                    <View style={styles.container} key={index}>
                      <View style={{ paddingRight: "6px", paddingLeft: "6px" }}>
                        <View style={styles.imageContainer}>
                          <Image
                            style={styles.image}
                            source={{
                              uri: `${item.mediaUrl}`,
                            }}
                          />
                          <HeartIcon style={styles.heartstyle} size={18} />
                          <Text style={styles.newCollection}>New</Text>
                        </View>
                        <View>
                          <Text style={styles.name}>{item.name}</Text>
                          <Text style={styles.description}>
                            {item.description}
                          </Text>
                          <Text style={styles.category}>
                            {item.category[0].name}
                          </Text>
                          <Text style={styles.price}>
                            &#x20B9; {item.variants[0].mrp}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })
              : ""}
          </View>
          
        </View>
        </ScrollView>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator color={"#000"} />
        </View>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#fff",
  },
  totalItemStyle: {
    color: "#bcbfc4",
    fontSize: 12,
    fontWeight: 400,
  },
  maincontainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },

  container: {
    width: "50%",
    marginBottom: 12,
  },
  image: {
    height: 200,
    borderRadius: 6,
  },
  description: {
    marginBottom: 6,
  },
  name: {
    fontWeight: "700",
    marginTop: 6,
    marginBottom: 6,
  },
  category: {
    marginBottom: 6,
  },
  topHeaderStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
  },
  topheadericon: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginRight: 16,
  },
  imageContainer: {
    position: "relative",
  },
  newCollection: {
    backgroundColor: "#000",
    bottom: 10,
    left: 10,
    position: "absolute",
    color: "#fff",
    fontSize: 12,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 4,
    paddingBottom: 4,
  },
  heartstyle: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
