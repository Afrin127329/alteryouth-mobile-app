import Header from "@/components/Header";
import SidebarMenu from "@/components/ui/Sidebar";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


const Home = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <SafeAreaProvider>
      <ExpoStatusBar style="dark" />
      <SafeAreaView >
        <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        {menuIsOpen && <SidebarMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text onPress={() => setMenuIsOpen(!menuIsOpen)}>nesciunt culpa temporibus aliquam odit consequuntur aspernremque, corrupti qui fugit possimus doloribus dolores aspernatur nam eaque iure, perferendis pariatur tempore isce Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eum magnam corrupti voluptatum fuga ratione odio totam esse eos tempora maxime eveniet assumenda earum, nostrum dolorum ex vel molestiae dicta nemo. Quis, soluta. Eaque numquam illum ipsa cupiditate tenetur minima minus laudantium deleniti porro delectus est culpa, facere reprehenderit eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam suscipit delectus, modi vero cumque, eligendi minima magnam inventore sit non dolores numquam commodi ea quaerat, quas natus quidem eius voluptatum. Libero inventore unde maiores, sint enim dignissimos commodi dolorum, perspiciatis, exercitationem minima repellat tenetur eaque veritatis. Sint, quas possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi aliquam dolores corporis, fugiat est corrupti odit, minus doloribus fuga maiores distinctio. Quisquam delectus dolore qui, porro tempora est suscipit id corrupti eos doloremque laborum similique. Minima, asperiores obcaecati ab nesciunt, fuga quas, quibusdam facilis modi tempore ducimus labore numquam. minus, porro aut nam nostrum doloremque quod, quaerat non dolores at. Hic cum natus dicta maiores. Ipsam eligendi assumenda iste ad perferendis totam repellat cumque non commodi, dolorum ea ex distinctio aperiam?</Text>
          </View>
        </ScrollView>


      </SafeAreaView>
    </SafeAreaProvider>

  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    gap: 16, // Use React Native's implementation of gap if supported or alternative spacing
  },
  button: {
    marginTop: 4,
  },
});
export default Home;