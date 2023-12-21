import React from 'react'
import { TextInput } from 'react-native'
import TodoListContext from '../../TodoListContext'
import StyleChamp from './StyleChamp'

const Champ = () => {
  const todoListContext = React.useContext(TodoListContext)
  return (

    <TextInput
    style={StyleChamp.input}
    onChangeText={(text)=>{
      todoListContext.setSaisie(text)
    }}
    value={todoListContext.saisie}
    placeholder='Nouvel Item'></TextInput>
  )
}

export default Champ