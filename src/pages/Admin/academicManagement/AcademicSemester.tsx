import { Table, TableColumnsType } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

const AcademicSemester = () => {
    const columns: TableColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Jim',
                    value: 'Jim',
                },
                {
                    text: 'Submenu',
                    value: 'Submenu',
                    children: [
                        {
                            text: 'Green',
                            value: 'Green',
                        },
                        {
                            text: 'Black',
                            value: 'Black',
                        },
                    ],
                },
            ],
        },
        {
            title: 'Year',
            dataIndex: 'year'
        },
        {
            title: 'Start Month',
            dataIndex: 'startMonth'
        },
        {
            title: 'End Month',
            dataIndex: 'endMonth'
        },
    ];
    const { data: SemesterData } = useGetAllSemestersQuery(undefined);
    const tableData = SemesterData?.data.map(({ _id, name, startMonth, endMonth, year }) => ({
        _id,
        name,
        startMonth,
        endMonth,
        year
    }))
    console.log(SemesterData);
    return (
        <div>
            <h1>Academic Semester</h1>
            <Table
                columns={columns}
                dataSource={tableData}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
        </div>
    );
};

export default AcademicSemester;