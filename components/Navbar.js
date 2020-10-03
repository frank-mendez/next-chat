import Link from 'next/link';
const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <a class='navbar-brand' href='#'>
        Next Chat
      </a>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>

      <div class='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul class='navbar-nav mr-auto'>
          <li class='nav-item'>
            <Link href='/'>
              <a class='nav-link'>Home</a>
            </Link>
          </li>
          <li class='nav-item'>
            <Link href='/about'>
              <a class='nav-link'>About</a>
            </Link>
          </li>
          <li class='nav-item'>
            <Link href='/contact'>
              <a class='nav-link'>Contact</a>
            </Link>
          </li>
        </ul>
        <form class='form-inline my-2 my-lg-0'>
          <input
            class='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button class='btn btn-outline-success my-2 my-sm-0' type='submit'>
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
