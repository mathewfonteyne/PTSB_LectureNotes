/* 
   - Create a <p> tag that notes where you grew up. 
    - Use variables for city and state.
  - Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
  - Export the component.
  - Import the component into App.jsx and mount it between the Header and Footer components.
*/
import "./AboutMe.css";
function AboutMe() {
  let city = "Rye";
  let state = "NH";
  let styles = {
    ul: {
      textAlign: "right",
      color: "green",
    },
    p: {
      fontSize: "20pt",
    },
  };
  return (
    <div>
      <p style={styles.p}>
        I'm from {city}, {state}. The last three places I've visited are:
      </p>
      {/* <ul style={{ textAlign: "left", color: "blue" }}> */}
      <ul style={styles.ul}>
        <li>The Press Room</li>
        <li>Market Basket</li>
        <li>The dog park</li>
      </ul>
    </div>
  );
}
export default AboutMe;
