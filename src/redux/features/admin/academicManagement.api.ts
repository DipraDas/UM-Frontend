import { TAcademicSemester } from "../../../types/academicManagement.type";
import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
            query: () => ({
                url: '/academic-semesters',
                method: 'GET'
            }),
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
    })
})

export const {
    useGetAllSemestersQuery,
    useAddAcademicSemesterMutation
} = academicManagementApi