/* 
    - Write a function that exports a single h6 element with a copyright.
    - Type in the current year.
    - Export the component.
    - Import the component within App.jsx
    - Mount at the bottom of the JSX being returned in App.jsx.

    Bonus: Make the year dynamic so it is not hard coded and will change after this year.
*/
function Footer() {
  let date = new Date();
  let currentYear = date.getFullYear();
  return (
    <footer>
      <h6>Copyright {currentYear} &copy;.</h6>
    </footer>
  );
}

export default Footer;
