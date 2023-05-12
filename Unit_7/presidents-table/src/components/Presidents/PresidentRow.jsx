// This will be child to PresidentTable and imported into it.

export default function PresidentRow({ first, last, year, passed }) {
  let date = new Date().getFullYear();

  return (
    <>
      <tr>
        <td>{first}</td>
        <td>{last}</td>
        <td>{year}</td>
        <td>{passed === undefined ? "Yes" : "No"}</td>
        <td>{passed === undefined ? date - year : passed - year}</td>
      </tr>
    </>
  );
}
