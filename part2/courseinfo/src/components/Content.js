import Part from "./Part"

const Content = ({ parts }) => {
    const sum = parts.reduce((a, b) => ({exercises: a.exercises + b.exercises}));

    return (
        <>
            <ul >
                {parts.map(part => 
                    <Part key={part.id} 
                        name={part.name} 
                        excercises={part.exercises}
                    />   
                )}
            </ul>
            <p>Total {sum.exercises}</p>
        </>
    )
}

export default Content