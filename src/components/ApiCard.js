const ApiCard = ({ api }) => {
    const { API, Auth, Description, Link, Category, Cors, HTTPS } = api;
    return (
        <div>
            <a href={Link}>
                <strong>{API}</strong>
            </a>
            <p>
                <strong>Category:</strong> {Category}
            </p>
            <p>
                <strong>Auth:</strong> {Auth ? Auth : "None"}
            </p>
            <p>
                <strong>Cors:</strong> {Cors}
            </p>
            <p>
                <strong>HTTPS:</strong> {HTTPS ? "true" : "false"}
            </p>
            <p>
                <strong>Description:</strong> {Description}
            </p>
        </div>
    );
};

export default ApiCard;
