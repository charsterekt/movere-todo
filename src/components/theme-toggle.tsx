import React from 'react'
import {
    Text,
    HStack,
    Switch,
    useColorMode,
    Icon
} from 'native-base'
import { FontAwesome } from '@expo/vector-icons'

export default function ThemeToggle() {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HStack space={2} alignItems="center">
            <Icon as={FontAwesome} name="moon-o" size="7"/>
            <Switch isChecked={colorMode==='light'} onToggle={toggleColorMode}>
            </Switch>
            <Icon as={FontAwesome} name="sun-o" size="7" />
        </HStack>
    )
}