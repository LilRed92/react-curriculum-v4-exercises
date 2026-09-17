import { NavLink } from 'react-router-dom';
import { BASE_PATH } from '../studentWork.jsx';

export default function Header({ user }) {
  // Active link styling helper
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? 700 : 400,
    textDecoration: isActive ? 'underline' : 'none',
    padding: '2px 6px',
    borderRadius: 6,
    backgroundColor: isActive ? '#eee' : 'transparent',
  });

  return (
    <header style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
      <h1 style={{ margin: 0 }}>Lesson 10 Routing Demo</h1>

      <nav style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <NavLink to={BASE_PATH} style={navLinkStyles} end>
          Home
        </NavLink>
        <NavLink to={`${BASE_PATH}/checkout`} style={navLinkStyles}>
          Checkout
        </NavLink>
        {user.isLoggedIn && (
          <NavLink to={`${BASE_PATH}/account`} style={navLinkStyles}>
            Account
          </NavLink>
        )}

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/History_API"
          target="_blank"
          rel="noreferrer"
        >
          History API (MDN)
        </a>
      </nav>

      <div style={{ marginTop: 8 }}>
        {user.isLoggedIn ? (
          <span>
            Logged in as <strong>{user.firstName}</strong>
          </span>
        ) : (
          <span>Not logged in</span>
        )}
      </div>
    </header>
  );
}
