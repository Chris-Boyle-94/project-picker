import { useState } from "react";
import ApiCard from "./ApiCard";

const ApiRandom = ({ apis }) => {
    const randomStart = Math.floor(Math.random() * (apis.length + 1));
    const [selectedApi, setSelectedApi] = useState(apis[randomStart]);

    const handleClick = () => {
        const randomNum = Math.floor(Math.random() * (apis.length + 1));
        setSelectedApi(apis[randomNum]);
    };

    return (
        <div>
            <ApiCard api={selectedApi} />
            <button onClick={handleClick}>Give me a random api</button>
        </div>
    );
};

export default ApiRandom;
