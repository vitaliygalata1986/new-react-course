function WelcomeMessage({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Добро пожаловать</h1>;
  }
  return null;
}

export default WelcomeMessage;
