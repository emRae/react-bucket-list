import React from 'react';

const Nav = () => {
	render(
		<nav class="cyan">
		  <div class="container nav-wrapper">
		    <a href="/" class="brand-logo"> Bucket Lists </a>
		    <ul id="nav-mobile" class="right hide-on-med-and-down">
		      <li><a href="/notes">All Bucket Lists</a></li>
		    </ul>
		  </div>
		</nav>
	)
}

export default Nav;