import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad, average, total, percentage }) => {
    
    return (
        <>
        <h2>statistics</h2>
        { total > 0 ? 
            <table>
                <tbody>
                    <StatisticLine text="good" value={good}/>
                    <StatisticLine text="neutral" value={neutral}/>
                    <StatisticLine text="bad" value={bad}/>
                    <StatisticLine text="all" value={total}/>
                    <StatisticLine text="average" value={average}/>
                    <StatisticLine text="positive" value={percentage}/>
                </tbody>
            </table> 
            : <p>No feedback given</p>
        }
    </>
    )
}

export default Statistics;