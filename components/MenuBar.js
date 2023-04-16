import React from 'react'
import { AppBar, HStack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MenuBar() {
  return (
    <AppBar title="Alarm" color="#0F172A" leading={props => (
        <Icon name="cake" {...props} />
      )}
        trailing={props => (
          <HStack >
            <TouchableOpacity>
              <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} size={40} style={{ marginRight: 5 }} />
            </TouchableOpacity>
          </HStack>
        )}
      />
  )
}
