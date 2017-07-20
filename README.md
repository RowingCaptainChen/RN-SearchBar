# ReactNative-SearchBar

The highly customized search bar for React Native

![image](https://github.com/RowingCaptainChen/RN-SearchBar/blob/master/demoPic.png)

### Usage
```javaScript
<SearchBar searchAction={()=>{
                    Alert.alert('searchAction')
                }}
                   onPressCancel={()=>{
                    Alert.alert('onPressCancel')
                }}
                    borderRadius={6}
                    text={'Search'}
                    rightText={'Cancel'}
                    containerColor={'blue'}
/>
```
