import { useState, useEffect } from "react";
import axios from "axios";
import ApiCard from "./ApiCard";
import ApiRandom from "./ApiRandom";
import { v4 as uuidv4 } from "uuid";

const ApiContainer = () => {
    const [apis, setApis] = useState([]);
    const [shown, setShown] = useState("random");

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

    const handleClick = (e) => {
        setShown(e.target.name);
    };
    return (
        <div>
            <div>
                <button name="list" onClick={handleClick}>
                    List
                </button>
                <button name="random" onClick={handleClick}>
                    Random
                </button>
            </div>
            {shown === "list" &&
                apis.map((api) => {
                    return <ApiCard api={api} key={uuidv4()} />;
                })}
            {shown === "random" && apis.length > 0 && <ApiRandom apis={apis} />}
        </div>
    );
};

export default ApiContainer;
