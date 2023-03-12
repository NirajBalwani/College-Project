import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/users/Navbar';
import Spinner from '../../components/users/Spinner';
import { useFetchThemePackageQuery } from '../../store/services/packageService';
import { useFetchSingleThemeQuery } from '../../store/services/themeService';
import RegularTheme from './RegularTheme';

const SubTheme = () => {

    const { id } = useParams();

    const { data, isFetching } = useFetchSingleThemeQuery(id);

    const { data: data1, isFetching: isFetching1 } = useFetchThemePackageQuery(data?.theme && data?.theme?._id)
    console.log(data1);

    useEffect(() => {

    }, []);

    return (
        <div>
            <Navbar />
            {isFetching || isFetching1 ? <div style={{ marginTop: "3rem" }}>
                <Spinner />
            </div> : <RegularTheme data={data} packages={data1?.packages} />}
        </div>
    );
}

export default SubTheme;
