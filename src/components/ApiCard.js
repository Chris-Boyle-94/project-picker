const ApiCard = ({ api }) => {
    const { API, Auth, Description, Link } = api;
    return (
        <div>
            <a href={Link}>
                <strong>{API}</strong>
            </a>
            <p>
                <strong>Auth:</strong> {Auth}
            </p>
            <p>
                <strong>Description:</strong> {Description}
            </p>
        </div>
    );
};

export default ApiCard;
