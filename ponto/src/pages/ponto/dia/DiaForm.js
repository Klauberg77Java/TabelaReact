import React from 'react';

export function DiaForm(props){
    return (
        <div className="p-grid">
            <div className="p-col-6">
                <div className="p-grid">
                    <div className="p-col-12">
                        <label html="data" className="p-d-block">Data</label>
                        {/* <InputText data="data" value={props.records.data} readOnly /> */}
                    </div>
                    <div className="p-col-12">
                        <label html="tempo" className="p-d-block">Tempo</label>
                        
                    </div>
                    </div>
                </div>
            </div>
    )
}

