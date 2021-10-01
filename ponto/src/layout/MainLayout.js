import React from 'react';
import {Switch,Route,Router,} from 'react-router-dom';
import history from '../history';
import { PontoListPage } from '../pages/ponto/PontoListPage';
import DiaFormPage from '../pages/ponto/dia/DiaFormPage';

class Formulario extends React.Component {
    render (){
        return (
            <h1>Meu Dia</h1>
        )
    }
}
class MainLayout extends React.Component{
    render(){
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/ponto" component={PontoListPage} />
                    <Route path="/pages/dia/:id" exact={true} component={DiaFormPage} />
                </Switch>

            </Router>
        )
    }
}

export default  MainLayout;