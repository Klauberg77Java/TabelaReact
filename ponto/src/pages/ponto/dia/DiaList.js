import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

    
export default function Dia(props) {
    const dia = props.records || [];
    

    return (
        <DataTable value={dia}>
            <Column field="id" header="Código" body={props.customTemplates && props.customTemplates['id']}/>
            <Column field="Tempo" header="Tempo" body={props.customTemplates && props.customTemplates['tempo']}/>
        </DataTable>
    )
}
