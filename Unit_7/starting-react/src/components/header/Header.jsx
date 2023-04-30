function Header() {
  // We can create any logic we like inside the function and before the return.
  let name = "Mathew";

  return (
    <header>
      <h1>Welcome to {name}'s first React app!</h1>
    </header>
  );
}

export default Header;
