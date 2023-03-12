import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../../../components/users/Spinner';
import { useDeleteThemeMutation, useFetchAllThemesQuery } from '../../../store/services/themeService';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { display } from '@mui/system';

const AdminSubTheme = () => {

    const { success } = useSelector(state => state.globalReducer)
    let [rows, setRows] = useState([])
    const dispatch = useDispatch();

    const [deleteTheme, response] = useDeleteThemeMutation();

    const handleDelete = (e, id, deleteFilePath) => {
        console.log(deleteFilePath);
        deleteTheme({ id, deleteFilePath })
    }

    const { data, isFetching, isLoading, error } = useFetchAllThemesQuery({
        selectFromResult: ({ data, error }) => ({ data, error }),
        rejections: true,
    });

    const check = () => {
        if (data?.length >= 4) {
            console.log(data?.length);
            return true
        }
        return false
    }
    check()

    const columns = [
        { field: '_id', headerName: 'ID', width: 150 },
        {
            field: 'name',
            headerName: 'Theme name',
            width: 200,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 560,
            editable: true,
        },
        {
            field: 'image',
            headerName: 'Image',
            width: 150,
            renderCell: (params) => {
                return (
                    <img src={`http://localhost:7800/${params.formattedValue}`} alt="thumbnail" style={{ width: '10rem', height: "10rem", objectFit: "cover" }} />
                )
            }
        },
        {
            field: 'edit',
            headerName: 'Edit Theme',
            width: 150,
            renderCell: (params) => {
                return (
                    <Link to={`/dashboard/update/${params.id}`} style={{ padding: "1rem 3rem", color: "var(--bgDarkViolet)", fontWeight: "700", margin: "2rem", cursor: "pointer", backgroundColor: "var(--bgYellow)", border: "2px solid var(--bgBlack)", borderRadius: "1.2rem", }}>Edit</Link>
                )
            }
        },
        // {
        //     field: 'delete',
        //     headerName: 'Delete Theme',
        //     width: 150,
        //     renderCell: (params) => {
        //         console.log(params);
        //         return (
        //             <button onClick={(e) => handleDelete(e, params.id, params.row.image)} style={{ padding: "1rem 3rem", color: "white", fontWeight: "700", margin: "2rem", cursor: "pointer", backgroundColor: "red", border: "2px solid var(--bgBlack)", borderRadius: "1.2rem", }}>Delete</button>
        //         )
        //     }
        // },
    ];

    console.log(useFetchAllThemesQuery());

    console.log(isLoading, error);

    useEffect(() => {
        console.log(data);
        if (data) {
            setRows(data);
        }
        if (error?.data?.data) {
            console.log(error?.data?.data);
            localStorage.removeItem("admin-token")
        }
    }, [data]);
    rows = data || [];

    return (
        <>
            <Section>
                <div className="add" style={{ opacity: check() ? '.7' : "1", }}>
                    {/* <Link to="/dashboard/create-theme" style={{ opacity: check() ? '.7' : "1" }}><button disabled={check() ? true : false} style={{ opacity: check() ? '.7' : "1" }}>Add Theme</button></Link> */}
                </div>
                <div className="content">
                    {
                        isFetching ?
                            <Spinner /> : data && <Box sx={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    sx={{ fontSize: "1.5rem" }}
                                    rows={rows.map(row => ({ ...row, id: row._id }))}
                                    columns={columns}
                                    pageSize={7}
                                    autoHeight
                                    rowsPerPageOptions={[7]}
                                    checkboxSelection
                                    disableSelectionOnClick
                                    experimentalFeatures={{ newEditingApi: true }}
                                />
                            </Box>
                    }
                </div>
            </Section>
        </>
    );
}

export default AdminSubTheme;

const Section = styled.div`
    flex: 7;
    background-color: var(--bgWhite);
    color: white;
    .add{
        margin: var(--r2) var(--r2);
        height: var(--r7);
        width: 97%;
        background-color: var(--bgWhite);
        display: flex;
        border-radius: var(--r-75);
        align-items: center;
        button{
            background-color: var(--bgYellow);
            padding: var(--r1-25) var(--r3);
            font-size: var(--r1-75);
            font-weight: 700;
            color: var(--bgVioletAdmin);
            border: none;
            margin-left: var(--r2);
            border-radius: var(--r-75);
            cursor: pointer;
            &:hover{
                box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
                -webkit-box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
                -moz-box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
            }
        }
    }
    .content{
        padding: var(--r2) var(--r4);
        color: black;
        .MuiTablePagination-displayedRows{
            font-size: var(--r1-25);
        }
        .MuiSvgIcon-root{
            font-size: var(--r2);
        }
        .css-i4bv87-MuiSvgIcon-root{
            font-size: 2.3rem;
        }
    }
`

