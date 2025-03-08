function Email() {
  const email = 'vitaliy@gmail.com';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const check = emailRegex.test(email);
  return check ? email : null;
}

export default Email;
