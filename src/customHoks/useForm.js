import { useState } from 'react';

export function useForm(initialState) {
  // console.log('initialState', initialState); // изначальное состояние для формы, переданное из App.jsx - {} для логина и {} для регистрации

  const [formData, setFormData] = useState(initialState);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return formData; // возвращаем данные формы при отправке
  };

  return { formData, handleChange, handleSubmit };
}
