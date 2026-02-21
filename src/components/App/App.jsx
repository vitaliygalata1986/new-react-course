import LoginForm from '../LoginForm/LoginForm';
import RegistrForm from '../Registration/Registration';
import { ProfileForm } from '../ProfileForm/ProfileForm';
import { useForm } from '../../customHoks/useForm';

function App() {
  const loginData = useForm({});
  const registerData = useForm({});
  const profileData = useForm({});

  // console.log(loginData); // {formData: {…}, handleChange: ƒ} - данные для логина

  const handleSubmit = (e, formType) => {
    e.preventDefault();
    if (formType === 'login') {
      console.log('Login Data:', loginData.formData);
    } else if (formType === 'register') {
      console.log('Register Data:', registerData.formData);
    } else formType === '';
    {
      console.log('Иные данные', profileData.formData);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <LoginForm
        {...loginData}
        handleSubmit={(e) => handleSubmit(e, 'login')}
      />
      <h2>Registration</h2>
      <RegistrForm
        {...registerData}
        handleSubmit={(e) => handleSubmit(e, 'register')}
      />
      <p>---------------</p>
      <ProfileForm
        {...profileData}
        handleSubmit={(e) => handleSubmit(e, 'profile')}
      />
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=5FVkpOwipuI&t=1s 8-10
