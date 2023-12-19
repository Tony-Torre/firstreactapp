import React, { useState, useEffect } from "react";

const HookGetData = () => {
    const [jsData, setJsData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => {
                setJsData(data);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    }, []);

    return (
        <div>
            <h1>Dati da JSON</h1>
            {jsData.map((data) => (
                <div key={data.id}>
                    <p>ID: {data.id}</p>
                    <p>Title: {data.title}</p>
                </div>
            ))}
        </div>
    );
};

export default HookGetData;