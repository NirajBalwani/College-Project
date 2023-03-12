import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AdminSidebar = () => {
    return (
        <Section>
            <ul>
                <Link to="/dashboard/users" href="#"><li>Users</li></Link>
                <Link to="/dashboard/theme" href="#"><li>Theme</li></Link>
                <Link to="/dashboard/packages" href="#"><li>Packages</li></Link>
                <Link to="/dashboard/reviews" href="#"><li>Reviews</li></Link>
            </ul>
        </Section>
    );
}

export default AdminSidebar;

const Section = styled.section`
    flex: 1;
    height: 90vh;
    width: 100%;
    background-color: var(--bgDarkAdmin);
    ul{
        display: flex;
        flex-direction: column;
        gap: var(--r2);
        margin-top: var(--r2);
        a{
            color: var(--bgWhite);
            font-size: var(--r2);
            li{
                padding: var(--r1) var(--r3);
                cursor: pointer;
                border-radius: var(--r-25);
                &:hover{
                    background-color: var(--bgYellow);
                }
            }
        }
    }
`





// import React, { useEffect, useState } from 'react';
// import { DeleteOutline } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';
// import Spinner from './Spinner';
// import s1 from './1.jpg'
// import { useFetchAllThemesQuery } from '../store/services/themeService';

// const AdminSubTheme = () => {

//     const { data, isFetching } = useFetchAllThemesQuery();
//     console.log(data);

//     // let base64String = "";

//     // let arr = [];

//     // useEffect(() => {
//     //     data?.allThemes?.map((theme) => {
//     //         base64String = btoa(new Uint8Array(theme.img.data.data).reduce(function (data, byte) {
//     //             return data + String.fromCharCode(byte);
//     //         }, ''));
//     //         arr = [...arr, base64String];
//     //     })
//     // }, [data])

//     return (
//         <>
//             {
//                 isFetching ? <Spinner /> : <Section>
//                     <div className="add">
//                         <Link to="/dashboard/create-theme"><button>Add Theme</button></Link>
//                     </div>
//                     <div className="content">
//                         {!isFetching && <table>
//                             <thead>
//                                 <tr>
//                                     <th>Theme Id</th>
//                                     <th>Theme Name</th>
//                                     <th>Theme Photo</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {data?.allThemes.map((theme, index) => {
//                                     let base64String = btoa(new Uint8Array(theme.img.data.data).reduce(function (data, byte) {
//                                         return data + String.fromCharCode(byte);
//                                     }, ''));
//                                     return (
//                                         <tr key={index}>
//                                             <td>{theme._id}</td>
//                                             <td>{theme.name}</td>
//                                             <td><img src={`data:image/jpg;base64,${base64String}`} /></td>
//                                         </tr>
//                                     )
//                                 })}
//                             </tbody>
//                         </table>}
//                     </div>
//                 </Section>
//             }
//         </>
//     );
// }

// export default AdminSubTheme;

// const Section = styled.div`
//     flex: 7;
//     background-color: var(--bgWhite);
//     color: white;
//     .add{
//         margin: var(--r2) var(--r2);
//         height: var(--r7);
//         width: 97%;
//         background-color: var(--bgWhite);
//         display: flex;
//         border-radius: var(--r-75);
//         align-items: center;
//         button{
//             background-color: var(--bgYellow);
//             padding: var(--r1-25) var(--r3);
//             font-size: var(--r1-75);
//             font-weight: 700;
//             color: var(--bgVioletAdmin);
//             border: none;
//             margin-left: var(--r2);
//             border-radius: var(--r-75);
//             cursor: pointer;
//             &:hover{
//                 box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
//                 -webkit-box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
//                 -moz-box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
//             }
//         }
//     }
//     .content{
//         padding: var(--r2) var(--r4);
//         font-size: 2rem;
//         color: black;
//     }
// `