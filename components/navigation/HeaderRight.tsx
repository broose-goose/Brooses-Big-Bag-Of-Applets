import React from "react";

import { 
    IconButton,
    Link
} from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Linking } from "react-native";


const docsUrl = "https://github.com/broose-goose/Brooses-Big-Bag-Of-Applets"

export const HeaderRightComponent = () => {
    return (
        <IconButton 
            icon={
                <FontAwesomeIcon
                    icon={['fab', 'github']}
                    size={24}
                    color={'black'}
                />
            }
            size="lg"
            marginRight="8px"
            onPress={() => { Linking.openURL(docsUrl) }}
        />
    )
}