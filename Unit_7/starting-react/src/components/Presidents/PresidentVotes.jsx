import DisplayTotals from "./DisplayTotals";
function PresidentVotes() {
  const votes = [
    { name: "Abe Lincoln", count: 139033 },
    { name: "Stephen Douglas", count: 115509 },
  ];

  return (
    <>
      <h1>Presidents: </h1>
      {/* Need to map votes into DisplayTotals */}
      {votes.map((pres, index) => (
        <DisplayTotals id={index} name={pres.name} count={pres.count} />
      ))}
    </>
  );
}

export default PresidentVotes;
