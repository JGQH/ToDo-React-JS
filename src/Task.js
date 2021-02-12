const Task = params => {
    const name = params.name;
    const index = params.index;
    return (
        <p>{`${index} - ${name}`}</p>
    );
}

export default Task