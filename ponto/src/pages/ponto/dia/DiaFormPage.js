import React from 'react';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { Card } from 'primereact/card';
import { DiaForm } from './DiaForm';
import {Calendar } from 'primereact/calendar';


export default class DiaFormPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentRecord:{},
            title: "Meu Dia"
        }
    }

    changeDateHandler = (event)=>{
        this.setState({currentRecord:event.value});
    }
    
    render(){
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <PageHeader title={this.state.title}>
                    </PageHeader>
                    </div>
                <div className="p-col-12">
                    <Card>
                        <DiaForm
                            records={this.state.pontos}
                        />
                    </Card>
                </div>
                <div className="p-grid">
                    <div className="p-col-6">
                    <Calendar showTime hourFormat="12" value={this.state.currentRecord} onChange={this.changeDateHandler} showIcon/>
                    </div>
                    </div>
                </div>
        )
    }
}