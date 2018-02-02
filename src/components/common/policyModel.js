import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native'
import Modal from "react-native-modal";
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Button, Thumbnail, Container, Content} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';


export default class PolicyModel extends React.Component {



    render() {
        return (
            <View>
                <Modal isVisible={this.props.visib} >
                        <Grid style={{ backgroundColor: '#fff',marginLeft:10,marginRight:10,marginTop:50,marginBottom:40,padding:20}} >
                            <Row size={1}
                                 style={[styles.CotainerStyle, {
                                     backgroundColor: '#fff',
                                     borderBottomColor: '#ccc',
                                     padding: 15
                                 }]}>
                                <Icon name="lock" size={40} color="#238AC5"/>
                            </Row>
                            <Row size={3}>
                            <ScrollView containerStyle={styles.CotainerStyle}>
                                    <Text style={styles.labelStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ante facilisis diam tincidunt vulputate. Phasellus id tristique tellus. Phasellus tincidunt aliquet arcu quis rutrum. Nam fermentum est arcu, a pharetra nisi rutrum at. Mauris condimentum commodo lectus, at vehicula augue rutrum dictum. In mollis odio ut mi dapibus viverra. Suspendisse potenti. Vestibulum finibus nisi at risus eleifend sagittis.</Text>
                            </ScrollView>
                            </Row>   
                            <Row size={1} style={[styles.CotainerStyle, {backgroundColor: '#fff'}]}> 
                                <View style={{margin: 20, borderColor: '#ccc', borderWidth: 1, alignSelf: 'stretch'}}/>
                                <Button block style={styles.buttonStyle} onPress={this.props.onQuit}>
                                    <Grid>
                                        <Col size={1}>
                                            <Icon name="log-out" size={20} color="#238AC5"/>
                                        </Col>
                                        <Col size={3} style={styles.labelContainer}>
                                            <Text style={styles.labelStyle}>خروج</Text>
                                        </Col>
                                    </Grid>
                                </Button>
                            </Row>
                        </Grid>
                </Modal>
            </View>

        )
    }
}


const styles = {
    CotainerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    labelContainer: {
        justifyContent: 'flex-end'
    },
    labelStyle: {
        color: '#999',
        fontSize: 15
    },
    buttonStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'

    }
}