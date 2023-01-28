const Total = ({ parts }) => {

    const total = parts.reduce((a,b) => a.exercises + b.exercises, 0)

    return(
        <p>Number of exercises {total}</p>
    )
}

export default Total;