// This will be a table component, child of Presidents, parent to PresidentRow
import PresidentRow from "./PresidentRow";

export default function PresidentTable(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birth Year</th>
            <th>Alive</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {props.presidents.map((president, i) => {
            return (
              <PresidentRow
                key={i}
                first={president.first}
                last={president.last}
                year={president.year}
                passed={president.passed}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
