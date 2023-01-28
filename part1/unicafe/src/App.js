import { useState } from "react"
import Button from "./components/Button"
import Statistics from "./components/Statistics"

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good - bad) <= 0 ? 0 : (good - bad) / total
  const percentage = good <= 0 ? 0 : (good/total) * 100

  const onClickGood = () => {
    setGood(good + 1)
  }
  const onClickNeutral = () => {
    setNeutral(neutral + 1)
  }
  const onClickBad = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1> give feedback </h1>
      <Button onClick={onClickGood} text="good"/>
      <Button onClick={onClickNeutral} text="neutral"/>
      <Button onClick={onClickBad} text="bad"/>

      <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
        setGood = {setGood}
        setNeutral = {setNeutral}
        setBad = {setBad}
        average = {average}
        total = {total}
        percentage = {percentage}
        />

    </div>
  );
}

export default App;
