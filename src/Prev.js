const Prev = ({task}) => {
    return (
    <div className="prev-task">
        <span className="name-prev">{task}</span>
        <button className="button-prev">✖</button>
    </div>)
}

export default Prev;