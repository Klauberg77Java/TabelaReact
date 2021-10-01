import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default function Ponto(props) {
    const pontos = props.records || [];
    console.log(pontos)
    return (
        <DataTable value={pontos}>            
            <Column field="id" header="Código" body={props.customTemplates && props.customTemplates['id']}/> 
            <Column field="data" header="Data" body={props.customTemplates && props.customTemplates['data']}/> 
            <Column field="tempo" header="Tempo" body={props.customTemplates && props.customTemplates['tempo']}/>
        </DataTable>
    )
}
