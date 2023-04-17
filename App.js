import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  BackHandler,
  Platform,
} from "react-native";
import WebView from "react-native-webview";

class App extends React.Component {

  webView = {
    canGoBack: false,
    ref: null,
  };
  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  };

  componentWillMount() {
    if (Platform.OS === "android") {
      BackHandler.addEventListener(
        "hardwareBackPress",
        this.onAndroidBackPress
      );
    }
  }

  componentWillUnmount() {
    if (Platform.OS === "android") {
      BackHandler.removeEventListener("hardwareBackPress");
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: "100%", height: "100%" }}>
          <StatusBar translucent={true} />
          <WebView
            source={{ uri: "http://kavinprasadpractice.000webhostapp.com/" }}
            ref={(webView) => {
              this.webView.ref = webView;
            }}
            onNavigationStateChange={(navState) => {
              this.webView.canGoBack = navState.canGoBack;
            }}
          />
        </View>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
