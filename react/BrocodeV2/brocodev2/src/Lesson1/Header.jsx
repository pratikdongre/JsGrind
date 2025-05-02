import React from "react";
function Header() {
  return (
    <header>
      <h1 class="text-bg-danger font-bold text-amber-400">My Website</h1>
      <nav>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
