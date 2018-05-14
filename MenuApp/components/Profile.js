import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView, Picker, CheckBox, TouchableOpacity } from 'react-native';
import { DrawerNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-ionicons';


export default class Profile extends React.Component {
    static navigationOptions = {
        header: null,
        drawerLabel: 'Profile',
        drawerIcon: () => (
            <Icon name="person" />
        ),
    };

    constructor() {
        super()
        this.state = {
            poolType: 'pool',
            poolCategoryID: '4bf58dd8d48988d105941735',
            gymType: 'gym',
            gymCategoryID: '4bf58dd8d48988d176941735',
            runningCheck: false,
            swimmingCheck: false,
            fitnessCheck: false,
        };
    }

    RunningChange() {
        this.setState({
            runningCheck: !this.state.runningCheck
        })
    }

    swimmingChange() {
        this.setState({
            swimmingCheck: !this.state.swimmingCheck
        })
    }

    fitnessChange() {
        this.setState({
            fitnessCheck: !this.state.fitnessCheck
        })
    }

    chooseVenue(VenueType, VenueCategory) {
        alert("go to venues screen");
    }

    saveChanges() {
        alert("Profile Changes pushed to database");
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#db0000"
                    barStyle="light-content"
                    hidden={false}
                />
                <View style={styles.toolBar}>
                    <Icon name="arrow-back" style={styles.menuIcon} onPress={() => this.props.navigation.navigate('Dashboard')} /><Text style={styles.toolbarText}>Profile</Text>
                </View>
                <ScrollView>
                    <View style={styles.UserImageContainer}>
                        {/*<Image source={require('../images/kenzo.png')} style= {styles.UserImage}/>*/}
                    </View>
                    <View style={styles.UserDataContainer}>
                        <Text style={styles.UserDataTitle}>Personal Info </Text>

                        <Text style={styles.DataFieldText}>Naam </Text>
                        <TextInput style={{ borderColor: 'gray', borderBottomWidth: 0 }} />

                        <Text style={styles.DataFieldText}>Email </Text>
                        <TextInput style={{ borderColor: 'gray', borderBottomWidth: 0 }} />

                        <Text style={styles.DataFieldText}>Phone </Text>
                        <TextInput style={{ borderColor: 'gray', borderBottomWidth: 0 }} />

                        <Text style={styles.DataFieldText}>Sex </Text>
                        <TextInput style={{ borderColor: 'gray', borderBottomWidth: 0 }} />

                        <Text style={styles.Label}>Date of Birth </Text>
                        <TextInput style={{ borderColor: 'gray', borderBottomWidth: 0 }} />

                        <Text style={styles.UserDataTitle}>Workout Info </Text>

                        <View style={{ paddingBottom: 20, borderColor: 'gray', borderBottomWidth: 1 }}>
                            <Text style={styles.UserDataSubTitle}>Sports</Text>

                            <View style={styles.Checkbox}>
                                <CheckBox style={styles.Checkbox} value={this.state.runningCheck} onChange={() => this.RunningChange()} />
                                <Text style={styles.CheckBoxLabel} > Running </Text>
                            </View>

                            <View style={styles.Checkbox}>
                                <CheckBox style={styles.Checkbox} value={this.state.swimmingCheck} onChange={() => this.swimmingChange()} />
                                <Text style={styles.CheckBoxLabel}> Swimming </Text>
                            </View>

                            <TouchableOpacity style={styles.ChooseVenueButton} onPress={() => { this.props.navigation.navigate('VenuesPools', { Type: 'Pools', CategoryID: '4bf58dd8d48988d105941735' }); }}>
                                <Text style={styles.ChooseVenue}>Choose pool ></Text>
                            </TouchableOpacity>

                            <View style={styles.Checkbox}>
                                <CheckBox style={styles.Checkbox} value={this.state.fitnessCheck} onChange={() => this.fitnessChange()} />
                                <Text style={styles.CheckBoxLabel}> Fitness </Text>
                            </View>

                            <TouchableOpacity style={styles.ChooseVenueButton} onPress={() => { this.props.navigation.navigate('VenuesGyms', { Type: 'Gym', CategoryID: '4bf58dd8d48988d176941735' }) }}>
                                <Text style={styles.ChooseVenue}>Choose gym ></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.SaveButtonView}>
                            <TouchableOpacity style={styles.SaveButton} onPress={() => this.saveChanges()} >
                                <Text style={styles.SaveButtonText}>SAVE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    toolBar: {
        height: 60,
        backgroundColor: 'red',
        flexDirection: 'row',
    },
    menuIcon: {
        position: 'absolute',
        left: 10,
        top: 10,
        color: 'white',
        fontSize: 35,
    },
    toolbarText: {
        position: 'absolute',
        left: 55,
        top: 5,
        color: 'white',
        fontSize: 30,
    },
    UserImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    UserImage: {
        marginTop: 20,
        height: 175,
        width: 175,
    },
    UserDataContainer: {
        padding: 15,
    },
    UserDataTitle: {
        fontSize: 25,
        marginBottom: 10,
        marginTop: 10,
    },
    DataFieldText: {
        marginTop: 10,
        fontSize: 15,
    },
    UserDataSubTitle: {
        marginTop: 10,
        fontSize: 15,
    },
    CheckBoxLabel: {
        marginTop: 12,
        flexDirection: 'row',
        padding: 3,
        fontSize: 15,
    },
    Checkbox: {
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 5,
    },
    ChooseVenue: {
        fontSize: 15,
        color: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ChooseVenueButton: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        height: 25,
        width: 125,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 6,
    },
    SaveButtonView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    SaveButton: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 100,
        backgroundColor: 'red',
    },
    SaveButtonText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
});
