import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"

import NotaEditor from "./src/componentes/NotaEditor"
import {Nota} from './src/componentes/Nota'
import { useEffect, useState } from "react"
import { criaTabela } from "./src/servicos/notas"

export default function App() {

  useEffect(() => {
    criaTabela()
  },[])

  const [notas,setNotas] = useState([])

  const mostraNotas = async () => {
    setNotas(todasNotas);
    console.log(todasNotas);
  }
  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota}/>}
        keyExtractor={nota => nota[0]}/>
      <NotaEditor mostraNotas={mostraNotas}/>
      <StatusBar/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
})
