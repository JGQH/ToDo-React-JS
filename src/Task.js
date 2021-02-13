const Task = params => {
    const name = params.name;
    const index = params.index;
    return (
        <div className="task">
            <span className="name-task">{`${index + 1} - ${name}`}</span>
            <div>
                <input type="checkbox" className="check-task"></input>
                <button className="delete-task" onClick={() => params.onClick(index)}>✖</button>
            </div>
        </div>
    );
}

export default Task