function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const present = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You Soured <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(present)}%).
      </p>
      <p className="highscore">( High-score: {highscore} points )</p>

      <button className="btn btn-ui" onClick={()=>dispatch({type:"restart"})}>Restart Quiz!</button>;
    </>
  );
}

export default FinishScreen;
