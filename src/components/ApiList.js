import { useState, useEffect } from "react";
import axios from "axios";
import ApiCard from "./ApiCard";

const ProjectsList = () => {
    const [apis, setApis] = useState([]);

    const getApis = async () => {
        try {
            const response = await axios.get(
                "https://api.publicapis.org/entries"
            );
            setApis(response.data.entries);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getApis();
        return () => setApis([]);
    }, []);

    console.log(apis);

    return (
        <div>
            {apis.map((api) => {
                return <ApiCard api={api} />;
            })}
        </div>
    );
};

export default ProjectsList;
