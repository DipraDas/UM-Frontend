import { TAcademicSemester } from "../../../types/academicManagement.type";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                // params.append(args[0].name, args[0].value);
                if (args.length) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string)
                    })
                }
                return {
                    url: '/academic-semesters',
                    method: 'GET',
                    params: params
                }
            },
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),
        addAcademicSemester: builder.mutation({
            query: (data) => {
                console.log('hitttt')
                return {
                    url: '/academic-semesters/create-academic-semester',
                    method: 'POST',
                    body: data
                };
            },
        }),
        addAcademicFaculty: builder.mutation({
            query: (data) => {
                return {
                    url: '/academic-faculties/create-faculty',
                    method: 'POST',
                    body: data
                };
            },
        }),
        getAllFaculties: builder.query({
            query: () => {
                return {
                    url: '/academic-faculties',
                    method: 'GET',
                }
            },
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),
        addAcademicDepartment: builder.mutation({
            query: (data) => {
                return {
                    url: '/academic-departments/create-department',
                    method: 'POST',
                    body: data
                };
            },
        }),
        getAllAcademicDepartment: builder.query({
            query: () => {
                return {
                    url: '/academic-departments',
                    method: 'GET',
                }
            },
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),
    })
})

export const {
    useGetAllSemestersQuery,
    useAddAcademicSemesterMutation,
    useAddAcademicFacultyMutation,
    useGetAllFacultiesQuery,
    useAddAcademicDepartmentMutation,
    useGetAllAcademicDepartmentQuery
} = academicManagementApi