
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {Button} from 'react-native'

import Listar from '../componentes/listar/listar'
import Cadastrar from '../componentes/cadastro/cadastrar'
import Dashboard from '../componentes/dashboard'
import DrawnerContent from '../componentes/drawner/drawnerContent'
import CrediDebit from  '../componentes/cadastro/listCredit'
const Drawner = createDrawerNavigator()
export default function DashboardRoutes() {
  return (
      <Drawner.Navigator drawerContent={props=> <DrawnerContent {...props} />}
      >
        <Drawner.Screen
          name="Dashboard"
          component={Dashboard}
         
               />
        <Drawner.Screen name="Listar"  component={Listar} />
        <Drawner.Screen name="Cadastrar"  component={Cadastrar} />
        <Drawner.Screen name="Credit"  component={CrediDebit} />
      </Drawner.Navigator>
  );
}

