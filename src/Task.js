const Task = params => {
    const name = params.name;
    const index = params.index;
    const prevs = params.prevs;
    const available = params.available;
    return (
        <div className={available ? "active-task" : "inactive-task"}>
            <span className="name-task">{`${index + 1} - ${name} [Requires task(s): ${(prevs.length > 0) ? prevs.join(",") : "None"}]`}</span>
            <div className="buttons-task">
                <input type="checkbox" className="check-task" disabled={!available} onChange={evt => params.onChange(index, evt.target.checked)}></input>
                <button className="delete-task" onClick={() => params.onClick(index)}>✖</button>
            </div>
        </div>
    );
}

export default Task