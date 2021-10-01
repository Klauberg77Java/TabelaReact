import React from 'react';
import { InputText } from 'primereact/inputtext';

export function PontoForm(props){
    return (
        <div className="p-grid">
            <div className="p-col-6">
                <div className="p-grid">
                    <div className="p-col-12">
                        <label html="data" className="p-d-block">Data</label>
                        <InputText data="data" value={props.record.data} readOnly />
                    </div>
                    <div className="p-col-12">
                        <label html="tempo" className="p-d-block">Tempo</label>
                        <InputText tempo="tempo" value={props.record.tempo} onChange={props.onChangeField} />
                    </div>
                    <div>
                    </div>

                </div>
            </div>
        </div>
    )
}





