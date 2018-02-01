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
                        <Grid style={{ backgroundColor: '#fff',marginLeft:30,marginRight:30,marginTop:100,marginBottom:70,paddingBottom:20}} >
                            <Row size={1}
                                 style={[styles.CotainerStyle, {
                                     backgroundColor: '#fff',
                                     borderBottomColor: '#ccc',
                                     padding: 15
                                 }]}>
                                <Icon name="book-open" size={100} color="#238AC5"/>
                            </Row>
                            <Row size={2} style={[styles.CotainerStyle, {backgroundColor: '#fff'}]}>
                                <View style={styles.CotainerStyle}>
                                    <Text style={styles.labelStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ante facilisis diam tincidunt vulputate. Phasellus id tristique tellus. Phasellus tincidunt aliquet arcu quis rutrum. Nam fermentum est arcu, a pharetra nisi rutrum at. Mauris condimentum commodo lectus, at vehicula augue rutrum dictum. In mollis odio ut mi dapibus viverra. Suspendisse potenti. Vestibulum finibus nisi at risus eleifend sagittis.</Text>
                                </View>    
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
        fontSize: 20
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