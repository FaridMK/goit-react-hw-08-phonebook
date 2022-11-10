import { NavLink } from 'react-router-dom';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  h1: {
    fontWeight: 900,
    fontSize: 60,
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Phonebook</h1>

      <h2 style={styles.title}>
        Create your contact book{' '}
        <NavLink style={styles.link} to="/register">
          📲
        </NavLink>
      </h2>
    </div>
  );
}
