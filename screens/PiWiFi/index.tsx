import React from "react";

import { useIsFocused } from "@react-navigation/native";

import { 
     PiWiFiInitialState, PiWiFiInitializer, PiWiFiReducer,   
     PiWiFiContext, MakePiWiFiContext, 
     PiWiFiStates, PiWiFiSetState
} from "./state";

import { PiWiFiStartingScreen } from './starting-screen'

import { PiWiFiPermissionsScreen } from "./permissions-screen";


const GetDispaly = {
    [PiWiFiStates.STARTING]: PiWiFiStartingScreen,
    [PiWiFiStates.PERMISSIONS]: PiWiFiPermissionsScreen,
    [PiWiFiStates.NO_PERMISSIONS]: PiWiFiStartingScreen,
    [PiWiFiStates.SCANNING]: PiWiFiStartingScreen,
    [PiWiFiStates.PAIRED]: PiWiFiStartingScreen,
    [PiWiFiStates.ERROR]: PiWiFiStartingScreen
}


export const PiWiFiRootScreen = () => {
  
    const [store, dispatch] = React.useReducer(PiWiFiReducer, PiWiFiInitialState, PiWiFiInitializer)

    const isFocused = useIsFocused();
    
    React.useEffect(() => {
        if (isFocused) {
            dispatch(PiWiFiSetState(PiWiFiStates.STARTING))
        }
    }, [isFocused])

    const Display: () => JSX.Element = GetDispaly[store.state]

    return (
        <PiWiFiContext.Provider value={MakePiWiFiContext(store, dispatch)}>
            <Display />
        </PiWiFiContext.Provider>
    )
}
