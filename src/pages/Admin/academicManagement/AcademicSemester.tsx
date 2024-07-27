import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParam } from "../../../types/global";

export type TTableData = Pick<TAcademicSemester,
    "name" | "year" | "startMonth" | "endMonth"
>

const AcademicSemester = () => {
    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },
            filters: [
                {
                    text: 'Autumn',
                    value: 'Autumn',
                },
                {
                    text: 'Summar',
                    value: 'Summar',
                },
                {
                    text: 'Fall',
                    value: 'Fall',
                },
            ],
        },
        {
            title: 'Year',
            dataIndex: 'year',
            filters: [
                {
                    text: '2024',
                    value: '2024',
                },
                {
                    text: '2025',
                    value: '2025',
                },
                {
                    text: '2026',
                    value: '2026',
                },
            ],
        },
        {
            title: 'Start Month',
            dataIndex: 'startMonth'
        },
        {
            title: 'End Month',
            dataIndex: 'endMonth'
        },
        {
            title: 'Action',
            key: 'x',
            render() {
                return (
                    <div>
                        <Button>Update</Button>
                    </div>
                );
            }
        },
    ];

    const [params, setParams] = useState<TQueryParam[] | undefined>([]);
    const { data: SemesterData, isFetching } = useGetAllSemestersQuery(params);
    const tableData = SemesterData?.data?.map(({ _id, name, startMonth, endMonth, year }) => ({
        key: _id,
        name,
        startMonth,
        endMonth,
        year
    }))

    const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
        if (extra.action === 'filter') {
            const queryParams: TQueryParam[] = [];
            filters.name?.forEach(item => {
                queryParams.push({ name: 'name', value: item });
            });
            filters.year?.forEach(item => {
                queryParams.push({ name: 'year', value: item });
            });
            setParams(queryParams);
        }
    };

    return (
        <div>
            <h1>Academic Semester</h1>
            <Table
                columns={columns}
                onChange={onChange}
                dataSource={tableData}
                showSorterTooltip={{ target: 'sorter-icon' }}
                loading={isFetching}
            />
        </div>
    );
};

export default AcademicSemester;