function MonComposantPure({data}){
    const renderData = (data) => {
        return data.map(item => <li key={item.id}>{item.name}</li>);
    };
    return (
        <div> <h2>Liste de données :</h2>
            <ul>{renderData(data)}</ul>
        </div>
    );
}

export default MonComposantPure;