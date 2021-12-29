import React from "react";


export enum PiWiFiStates {
    STARTING = 1,
    PERMISSIONS,
    NO_PERMISSIONS,
    SCANNING,
    PAIRED,
    ERROR,
}
  
interface PiWiFiStore {
    state: PiWiFiStates,
}
  
export const PiWiFiInitialState: PiWiFiStore = {
    state: PiWiFiStates.STARTING,
}
  
enum PiWiFiActionTypes {
    SET_PIWIFI_STATE = 1
}
  
interface PiWiFiAction {
    type: PiWiFiActionTypes,
    payload: PiWiFiStates
}

export interface PiWiFiActions {
    SetState: (state: PiWiFiStates) => void
}
  
export const PiWiFiSetState: (state: PiWiFiStates) => PiWiFiAction = (state) => {
    return {
        type: PiWiFiActionTypes.SET_PIWIFI_STATE,
        payload: state
    }
}
  
export const PiWiFiReducer: React.Reducer<PiWiFiStore, PiWiFiAction> = (store, action) => {
    switch (action.type) {
        case PiWiFiActionTypes.SET_PIWIFI_STATE:
            return {
                ...store,
                state: action.payload
            }
    }
}
  
export const PiWiFiInitializer = (_: PiWiFiStore) => {
    return {
        state: PiWiFiStates.STARTING
    }
}

interface PiWiFiContextInterface extends Readonly<PiWiFiStore>, Readonly<PiWiFiActions>{}

export const MakePiWiFiContext: (store: PiWiFiStore, dispatch: React.Dispatch<PiWiFiAction>) => PiWiFiContextInterface = (
    store, dispatch
) => {
    return {
        ...store,
        SetState: (state: PiWiFiStates) => { dispatch(PiWiFiSetState(state))}
    }
}

export const PiWiFiContext = React.createContext<PiWiFiContextInterface | null>(null);
