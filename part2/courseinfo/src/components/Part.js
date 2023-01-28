const Part = ({ name, excercises }) => {
    return (
        <li>
            <p>{name}
                <span> {excercises}</span>
            </p>
        </li>
    )
}

export default Part