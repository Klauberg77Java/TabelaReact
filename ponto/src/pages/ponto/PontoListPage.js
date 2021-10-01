import React from 'react';
import { PageHeader } from '../../components/page-header/PageHeader';
import { Button } from 'primereact/button';
import PontoList from './PontoList';
import { Link } from 'react-router-dom';
import { pontoService } from '../../services/ponto.service';
import { Card } from 'primereact/card';


export class PontoListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pontos: []
        }
    }

    async componentDidMount() {
        const pontos = await pontoService.getPontos()
        this.setState({ pontos })
    }

    changeDateHandler = (event) => {
        this.setState({ date: event.value });
    }

    newHandler = async (event) => {
        let marcacao = { data: new Date(), tempo: 0 }
        await pontoService.save(marcacao)
        let pontos = await pontoService.getPontos();
        this.setState({ pontos })
    }


    dateTemplate = (rowData) => {
        return <span>{rowData.data && `${rowData.data.getDate()}/${rowData.data.getMonth()}/${rowData.data.getFullYear()}`}</span>
    }
    idTemplate = (rowData) => {
        return <div style={{ width: "100%", textAlign: "center" }}><Link to={'/pages/dia/' + rowData.id}>{rowData.id}</Link></div>
    }


    render() {
        let templates = {
            "data": this.dateTemplate,
            "id": this.idTemplate
        }

        return (

            <div className="p-grid">
                <div className="p-col-12">
                    <PageHeader title="Meu Ponto">
                        <Button icon="pi pi-plus" className="p-button-rounded p-button-danger" onClick={this.newHandler} />
                    </PageHeader>
                </div>
                <div className="p-col-12">
                    <Card style={{ marginTop: "10px" }}>
                        <PontoList
                            records={this.state.pontos}
                            customTemplates={templates}
                            onChangeField={() => { }}
                        />
                    </Card>

                </div>
            </div>
        )
    }
}