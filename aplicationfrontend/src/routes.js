import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';

import Listagem from './pages/Listagem'
import Cadastro from './pages/Cadastro'
import Editar from './pages/Editar'

export default function Routes() {
    
   return(
    <BrowserRouter>
    <Switch>
        <Route path = "/" exact component = {Listagem}/>
        <Route path = "/cadastrar" component = {Cadastro}/>
        <Route path = "/editar" component = {Editar}/>
    </Switch>
    </BrowserRouter>
   );
}