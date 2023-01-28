import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([1,3,4,6,7,1,3,0]);

  const copy = [...points];
  const sortPoints = () => {
    const list = copy.map((item, index) => {
      return { anecdote: anecdotes[index], point: item }
    })
    const sortList = list.sort((a,b) => a.point > b.point ? 1 : -1);
    return sortList[sortList.length - 1].anecdote;
  };

  const onClick = () => {
    const randomNum = Math.floor((Math.random() * 8) + 1);
    setSelected(randomNum)
  }
  const vote = () => {
     copy[selected] += 1;
     setPoints(copy);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {points[selected]} votes </p>
      <button onClick={vote}>vote</button>
      <button onClick={onClick}>next anecdote</button>
      <h2>Anecdote with the most votes</h2>
      <p>{sortPoints()}</p>
    </div>
  )
}

export default App
