import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useDeleteThemeMutation, useFetchAllThemesQuery } from '../../../store/services/themeService';
import Spinner from '../../../components/users/Spinner';
import { useDeleteUserMutation, useGetAllUsersQuery } from '../../../store/services/adminUserService';

const AdminSubUsers = () => {

    let [rows, setRows] = useState([])

    const [deleteUser, response] = useDeleteUserMutation();

    const handleDelete = (e, id) => {
        console.log(id);
        deleteUser({ id })
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 100 },
        {
            field: 'firstName',
            headerName: 'First Name',
            width: 230,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last Name',
            width: 230,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email ID',
            width: 280,
            editable: true,
        },
        {
            field: 'admin',
            headerName: 'Admin',
            width: 70,
            editable: true,
        },
        {
            field: 'edit',
            headerName: 'Edit User',
            width: 150,
            renderCell: (params) => {
                return (
                    <Link to={`/dashboard/updateuser/${params.id}`} style={{ padding: "1rem 3rem", color: "var(--bgDarkViolet)", fontWeight: "700", margin: "2rem", cursor: "pointer", backgroundColor: "var(--bgYellow)", border: "2px solid var(--bgBlack)", borderRadius: "1.2rem", }}>Edit</Link>
                )
            }
        },
        {
            field: 'delete',
            headerName: 'Delete User',
            width: 150,
            renderCell: (params) => {
                return (
                    <button onClick={(e) => handleDelete(e, params.id)} style={{ padding: "1rem 3rem", color: "white", fontWeight: "700", margin: "2rem", cursor: "pointer", backgroundColor: "red", border: "2px solid var(--bgBlack)", borderRadius: "1.2rem", }}>Delete</button>
                )
            }
        },
    ];

    const { data, isFetching } = useGetAllUsersQuery();

    useEffect(() => {
        if (data?.users) {
            setRows(data.users);
        }
    }, [data]);

    rows = data?.users || [];

    return (
        <>
            <Section>
                <div className="add">
                    <Link to="/dashboard/add-users"><button>Add Users</button></Link>
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

export default AdminSubUsers;

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

