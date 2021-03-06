import React, {useState} from "react";
import MainLayout from "components/layout/Mainlayout";
import {FETCH_DATA_API} from "./service";
import MasterTable from "components/Table/MasterTable";
import {generatorForTable} from "components/Table/TableFunction";

const PageComponent = () => {
    const [state, setState] = useState<any>({
        columns: [],
        data: []
    });

    React.useEffect(() => {
        FETCH_DATA_API('/users/all')
            .then((response) => {
                if (response) {
                    const {columns, data} = generatorForTable(response);
                    setState({data, columns});
                }
            })
    }, []);

    return (
        <MainLayout>
            <MasterTable columns={state.columns} dataSource={state.data} rowKey={'id'}/>
        </MainLayout>
    )
}

export default PageComponent;