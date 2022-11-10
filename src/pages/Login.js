import { LoginForm } from 'components/LoginForm/LoginForm';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Login() {
  return (
    <div style={styles.container}>
      <title style={styles.title}>Login</title>
      <LoginForm />
    </div>
  );
}
