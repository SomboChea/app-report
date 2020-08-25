import React from 'react';
import Faker from "faker";
import moment from "moment";
import {Table} from "antd";
import {useTranslation} from "react-i18next";
import {Container} from "components/utils/Container";
import MainLayout from "components/layout/Mainlayout";

const data: any[] | undefined = [];

for (let i = 0; i < 25; i++) {
    data.push({
        key: Faker.random.number(),
        no: Faker.random.number(),
        date: moment(Faker.date.future()).format('L'),
        time: moment(Faker.date.future()).format('LTS'),
        productType: "Tab",
        productName: Faker.commerce.productName(),
        amount: Faker.commerce.price(),
        importType: "Import",
        staff: Faker.name.firstName()
    });
}

const ReportImportDetails = () => {
    let {t} = useTranslation();
    const columns = [
        {
            title: t('No'),
            dataIndex: 'no',
            width: 100,
        },
        {
            title: t('Date'),
            dataIndex: 'date',
            width: 100,
        },
        {
            title: t('Time'),
            dataIndex: 'time',
            width: 100,
        },
        {
            title: t('Product Type'),
            dataIndex: 'productType',
            width: 100,
        },
        {
            title: t('Product Name'),
            dataIndex: 'productName',
            width: 100,
        },
        {
            title: t('Amount'),
            dataIndex: 'amount',
            width: 100,
        },
        {
            title: t('Import Type'),
            dataIndex: 'importType',
            width: 100,
        },
        {
            title: t('Staff'),
            dataIndex: 'staff',
            width: 100,
        },
    ];
    return (
        <MainLayout>
            <Container>
                <Table columns={columns} dataSource={data} pagination={{pageSize: 10}} scroll={{x: 720}}/>
            </Container>
        </MainLayout>
    );
}

export default ReportImportDetails;