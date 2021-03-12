import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import FormList from '../Components/Form/FormList';
import FormDescription from '../Components/Form/FormDescription';
import Form from '../Components/Form/Form';
import Location from '../Components/Location/Location'
import { BorderlessButton } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native'

const TabNavigator = createMaterialTopTabNavigator(
    {
        Forms: {
            screen: FormList
        },
        Location: {
            screen: Location
        }
    },
    {
        navigationOptions:{
            headerShown: false,
        },
        tabBarOptions: {
            style: {backgroundColor: '#ffffff', paddingTop: 50, borderBottomLeftRadius: 80},
            labelStyle: { color: '#000000'},
            indicatorStyle: { backgroundColor: '#ababab'}
        }
        
    }
);

const FormStackNavigator = createStackNavigator(
    {
        Forms: {
            screen: TabNavigator,
        },
        Description: {
            screen: FormDescription
        },
        Form: {
            screen: Form
        }
    }
);


export default createAppContainer(FormStackNavigator);