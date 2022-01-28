import { useState, useEffect } from "react";
import axios from "axios";
import ApiCard from "./ApiCard";
import ApiRandom from "./ApiRandom";
import { v4 as uuidv4 } from "uuid";
import ApiCategories from "./ApiCategories";

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

    const handleClick = (e) => {
        setShown(e.target.name);
    };
    return (
        <div>
            <div>
                {shown !== "list" && (
                    <button name="list" onClick={handleClick}>
                        Full Api List
                    </button>
                )}
                {shown !== "random" && (
                    <button name="random" onClick={handleClick}>
                        Random
                    </button>
                )}
                {shown !== "categories" && (
                    <button name="categories" onClick={handleClick}>
                        List By Category
                    </button>
                )}
                {shown !== "random-category" && (
                    <button name="random-category" onClick={handleClick}>
                        Random By Category
                    </button>
                )}
            </div>
            {shown === "random" && apis.length > 0 && <ApiRandom apis={apis} />}
            {shown === "list" &&
                apis.map((api) => {
                    return <ApiCard api={api} key={uuidv4()} />;
                })}
            {shown === "categories" && apis.length > 0 && (
                <ApiCategories apis={apis} random={false} />
            )}
            {shown === "random-category" && apis.length > 0 && (
                <ApiCategories apis={apis} random={true} />
            )}
        </div>
    );
};

export default ApiContainer;
