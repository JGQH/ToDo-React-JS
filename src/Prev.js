const Prev = ({task, index, deletePrev}) => {
    return (
    <div className="prev-task">
        <span className="name-prev">{task}</span>
        <button className="button-prev" onClick={() => deletePrev(index)}>✖</button>
    </div>)
}

export default Prev;