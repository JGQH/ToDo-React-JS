import { useEffect, useRef } from 'react';

const Task = ({name, index, prevs, available, onChange, deleteTask}) => {
    const checkbox = useRef(null);

    useEffect(() => {
        if(!available){
            checkbox.current.checked = false;
            onChange(index, false);
        }
    }, [available]);

    function checkDelete() {
        if(window.confirm(`Remove task "${name}"?`)) deleteTask(index);
    }

    return (
        <div className={available ? "active-task" : "inactive-task"}>
            <span className="name-task">{`${index + 1} - ${name} [Requires task(s): ${(prevs.length > 0) ? prevs.join(",") : "None"}]`}</span>
            <div className="buttons-task">
                <input ref={checkbox} type="checkbox" className="check-task" disabled={!available} onChange={evt => onChange(index, evt.target.checked)}></input>
                <button className="delete-task" onClick={checkDelete}>✖</button>
            </div>
        </div>
    );
}

export default Task