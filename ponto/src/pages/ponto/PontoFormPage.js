import React from 'react';
import { Button } from 'primereact/button';
import { PageHeader } from '../../components/page-header/PageHeader';
import { Card } from 'primereact/card';
import {PontoForm} from './PontoForm'

export default class PontoFormPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dia:[],
            title:"Meu Dia"
        }
    }

    newHandler = (event)=>{
        this.props.history.push('pages/dia');
    }

    render(){
        return (
            <div className="p-grid">
                <div className="p-col-12-toolbar">
                    <PageHeader title={this.state.title}>
                        <Button icon="pi pi-plus" className="p-button-rounded p-button-success" onClick={this.newHandler}/>
                        <Button icon="pi pi-plus" className="p-button-rounded p-button sucundary" /> 
                    </PageHeader>
                    </div>
                <div className="p-col-12">
                    <Card>
                        <PontoForm
                            records={this.state.pontos}
                            onChangeField={this.state.onChangeFieldHandler}
                        />
                    </Card>
                </div>
            </div>
        )
    }
}