import { Button, Table, TableColumnsType } from "antd";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/admin/academicManagement.api";

export type TTableDataAcademicDepartment = {
    name: string
}

const AcademicDepartment = () => {
    const columns: TableColumnsType<TTableDataAcademicDepartment> = [
        {
            title: '#',
            dataIndex: 'index',
            render: (_, __, index) => index + 1,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },
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
    const { data: DepartmentData, isFetching } = useGetAllAcademicDepartmentQuery(undefined);
    const tableData = DepartmentData?.data?.map(({ _id, name }) => ({
        key: _id,
        name
    }))
    return (
        <div>
            <h1 style={{ marginBottom: 10 }}>Academic Faculty</h1>
            <Table
                columns={columns}
                // onChange={onChange}
                dataSource={tableData}
                showSorterTooltip={{ target: 'sorter-icon' }}
                loading={isFetching}
            />
        </div>
    );
};

export default AcademicDepartment;