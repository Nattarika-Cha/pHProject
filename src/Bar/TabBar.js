import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions
} from 'react-native'
 import posed from 'react-native-pose' // react-native animation library
 
 const Scaler = posed.View({ // define click zoom
  active: { scale: 1 },
  inactive: { scale: 0.9 }
})
 
const TabBar = props => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation
  } = props
 
  const { routes, index: activeRouteIndex } = navigation.state
  return (
    <Scaler style={Styles.container}>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor
        //console.log(tintColor)
        return (
          <TouchableNativeFeedback
            key={routeIndex}
            style={Styles.tabButton}
            onPress={() => {
              onTabPress({ route })
            }}
            onLongPress={() => {
              onTabLongPress({ route })
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
                         {route.key == 'Scan' ? ( // Special handling of special icons
              <Scaler
                style={Styles.scalerOnline}
                pose={isRouteActive ? 'active' : 'inactive'}
              >
                {renderIcon({ route, focused: isRouteActive, tintColor })}
                <Text style={Styles.iconText}>{getLabelText({ route })}</Text>
              </Scaler>
                         ) : ( // normal icon normal processing
              <Scaler
                style={Styles.scaler}
                pose={isRouteActive ? 'active' : 'inactive'}
              >
                {renderIcon({ route, focused: isRouteActive, tintColor })}
                <Text style={Styles.iconText}>{getLabelText({ route })}</Text>
              </Scaler>
            )}
          </TouchableNativeFeedback>
        )
      })}
    </Scaler>
  )
}
 
const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 53,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#EEEEEE',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.75,
    elevation: 1
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  spotLight: {
    //width: tabWidth,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spotLightInner: {
    width: 48,
    height: 48,
    backgroundColor: '#ee0000',
    borderRadius: 24
  },
  scaler: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scalerOnline: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconText: {
    fontSize: 12,
    lineHeight: 20
  }
})
 
export default TabBar