/**
 * Created by apple on 17/7/20.
 */
import React, { Component,PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Text,
} from 'react-native';


class SearchBar extends Component {

    render(){
        let containerHeight = this.props.containerHeight;
        let viewWidth = this.props.bar_Width;
        let viewHeight = this.props.bar_Height;
        let searchIcon_width = viewHeight*0.4;
        return (
            <View style={[styles.container_bar,{height:containerHeight,width:viewWidth,        backgroundColor:this.props.containerColor}]}>
                <View style={[styles.searchRow,{height:viewHeight-5,borderRadius:this.props.borderRadius}]}>
                    <Image source={this.props.image}                                                                     style={[{height:searchIcon_width,width:searchIcon_width}]}
                    />
                    <TextInput
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="always"
                        placeholder={this.props.text}
                        returnKeyType='search'
                        autoFocus={true}
                        onSubmitEditing={this._changeText.bind(this)}
                        style={[styles.searchTextInput]}
                    />

                </View>
                <TouchableOpacity  onPress={this._clickCancel.bind(this)}>
                    <View style={styles.cancelView}>
                        <Text style={{fontSize:this.props.fontSize,color:this.props.fontColor}}>{this.props.rightText}</Text>
                    </View>

                </TouchableOpacity>

            </View>

        );
    }

    _changeText(event) {
        this.props.searchAction(event)
    }
    _clickCancel() {
        this.props.onPressCancel()
    }

}

const styles = StyleSheet.create({
    container_bar: {
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    searchRow: {
        paddingLeft: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: '#cccccc',
        alignItems: 'center',
        borderWidth: 1,
        justifyContent:'center',
        flex:1,
        marginRight:5,
        marginLeft:10,
    },
    searchTextInput: {
        textAlignVertical:'center',
        fontSize:14,
        paddingLeft: 10,
        paddingTop:0,
        paddingBottom:0,
        flex:1,
        marginRight:5,
    },
    cancelView: {
        width:50,
        height:30,
        justifyContent:'center',
        alignItems:'center',
    }
});

SearchBar.propTypes = {
    containerColor:PropTypes.string,
    containerHeight:PropTypes.number,
    bar_Width:PropTypes.number,
    bar_Height:PropTypes.number,
    searchAction:PropTypes.func,
    onPressCancel:PropTypes.func,
    text:PropTypes.string,
    borderRadius:PropTypes.number,
    image:PropTypes.number,
    fontSize:PropTypes.number,
    fontColor:PropTypes.string,
    rightText:PropTypes.string,
};
SearchBar.defaultProps = {
    containerColor:'gray',
    bar_Width:Dimensions.get('window').width,
    searchAction:null,
    onPressCancel:null,
    bar_Height:35,
    containerHeight:44,
    text:'搜索',
    borderRadius:25,
    image:require('../scr/searchBar.png'),
    fontSize:14,
    fontColor:'white',
    rightText:'取消',
}
export default SearchBar;