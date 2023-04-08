

import {useEffect, useState} from "react";
import {getDentisById} from "../helpers/getDentist";

export const useDentistByIdFetch = (id) => {
    const [data, setData] = useState({});

    const dentisById = async (id) => {
        const dentis = await getDentisById(id);
        setData(dentis);
    }

    useEffect(() => {
        dentisById(id);
    }, [])


    return ({
        data
    });
}