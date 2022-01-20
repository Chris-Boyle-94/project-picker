import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ApiCard from "./ApiCard";

const ApiCategories = ({ apis }) => {
    const [categoriesList, setCategoriesList] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("Animals");

    const getCategories = async () => {
        try {
            const response = await axios.get(
                "https://api.publicapis.org/categories"
            );
            setCategoriesList(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCategories();
        return setCategoriesList([]);
    }, []);

    const handleClick = (e) => {
        setCurrentCategory(e.target.name);
    };

    const categoryApis = () => {
        return apis.filter((api) => {
            return api.Category === currentCategory;
        });
    };

    return (
        <div>
            {categoriesList.map((category) => {
                return (
                    <button
                        name={category}
                        key={category}
                        onClick={handleClick}
                    >
                        {category}
                    </button>
                );
            })}
            {categoryApis().map((api) => {
                return <ApiCard api={api} key={uuidv4()} />;
            })}
        </div>
    );
};

export default ApiCategories;
