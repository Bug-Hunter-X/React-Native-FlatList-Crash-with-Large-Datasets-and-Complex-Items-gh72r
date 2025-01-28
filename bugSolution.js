```javascript
import React, { memo } from 'react';
import { FlatList, View, Text, Image } from 'react-native';

const Item = memo(({ item }) => (
  <View style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
    <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
    <View style={{ flex: 1, marginLeft: 10 }}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  </View>
));

const MyFlatList = ({ data }) => (
  <FlatList
    data={data}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => <Item item={item} />}
    initialNumToRender={10}
    windowSize={10}
  />
);

export default MyFlatList;

```
