import { useState } from 'react';
import {
  validatePassword,
  checkPasswordMatch,
  checkRequiredFields,
} from '../RegForm/validators';
import './RegForm.css';

function RegForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [selectedYear, setSelectedYear] = useState('');
  const [requiredFieldsError, setRequiredFieldsError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setRequiredFieldsError(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setRequiredFieldsError(false);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(validatePassword(newPassword));
    setPasswordMatch(checkPasswordMatch(newPassword, confirmPassword));
    setRequiredFieldsError(false);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordMatch(checkPasswordMatch(password, newConfirmPassword));
    setRequiredFieldsError(false);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setRequiredFieldsError(false);
  };

  const years = Array.from(
    { length: 40 },
    (_, i) => new Date().getFullYear() - i
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFieldsFilled = checkRequiredFields([
      name,
      email,
      password,
      confirmPassword,
      selectedYear,
    ]);

    const isFormValid = allFieldsFilled && isPasswordValid && passwordMatch;

    console.log(allFieldsFilled); // false

    if (!isFormValid) {
      setRequiredFieldsError(true);
      setShowSuccessMessage(false);
      return;
    }

    setRequiredFieldsError(false);
    setShowSuccessMessage(true);

    const formData = {
      name,
      email,
      password,
      confirmPassword,
      selectedYear,
    };

    alert(JSON.stringify(formData, null, 2));

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setIsPasswordValid(true);
    setConfirmPassword('');
    setSelectedYear('');
    setRequiredFieldsError(false); 
  };

  return (
    <div className="section">
      <h1>Форма регистрации</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя"
          onChange={handleNameChange}
          className={requiredFieldsError && !name ? 'error' : ''}
        />
        <input
          type="email"
          placeholder="email"
          onChange={handleEmailChange}
          className={requiredFieldsError && !email ? 'error' : ''}
        />
        <input
          type="password"
          placeholder="Пароль"
          onChange={handlePasswordChange}
          className={requiredFieldsError && !password ? 'error' : ''}
        />
        {!isPasswordValid && (
          <div className="error-message">
            Пароль должен состоять из латинских букв и цифр, а также быть не
            менее 8 символов
          </div>
        )}

        {!passwordMatch && (
          <div className="error-message">Пароли пока не совпадают</div>
        )}

        <input
          type="password"
          placeholder="Подтвердите пароль"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ color: passwordMatch ? 'green' : 'red' }}
          className={
            requiredFieldsError && !confirmPassword
              ? 'error'
              : passwordMatch
              ? ''
              : 'error'
          }
        />

        <select
          value={selectedYear}
          onChange={handleYearChange}
          className={requiredFieldsError && !selectedYear ? 'error' : ''}
        >
          <option value="">Дата окончания учебного заведения:</option>
          {years.map((year) => (
            <option key={year.toString()} value={year}>
              {year}
            </option>
          ))}
        </select>

        {requiredFieldsError && (
          <div className="error-message">Проверьте заполнение полей формы</div>
        )}
        {showSuccessMessage && (
          <div className="success-message">Данные успешно отправлены</div>
        )}
        <button type="submit">Отправить</button>
        <button type="reset" onClick={handleReset}>
          Очистить форму
        </button>
      </form>
    </div>
  );
}

export default RegForm;

// Этот код создаёт массив years, содержащий последние 40 лет, начиная с текущего года и двигаясь назад
// Мы передаём объект { length: 40 }, который создаёт массив длиной 40. Этот массив содержит 40 "пустых" элементов.
// (_, i) => new Date().getFullYear() - i Это функция, которая будет вызвана для каждого элемента массива:
/*
    new Date().getFullYear() возвращает текущий год.
    i — это индекс элемента в массиве (от 0 до 39).
    new Date().getFullYear() - i даёт нам текущий год минус i, что создаёт убывающую последовательность лет.
*/
/*
    const years = Array.from(
      { length: 40 },
      (_, i) => new Date().getFullYear() - i
    );
*/

/*
    Если первый параметр не используется в функции, разработчики часто называют его _ (подчёркивание), чтобы показать, что он не важен.
*/

/*
  [
    2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 
    2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 
    2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 
    2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 
    1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986
 ]
  */

/*
    Метод Array.from() создаёт новый массив из:
    Массивоподобного объекта (например, у которого есть свойство length).
    Итерируемого объекта (например, Set, Map, NodeList и др.).
 */

/*
    В методе JSON.stringify() третий аргумент управляет форматированием вывода.
    JSON.stringify(value, replacer, space)
        - value – объект, который нужно преобразовать в JSON-строку.
        - replacer – функция или массив для фильтрации полей (может быть null, если не нужно фильтровать).
        - space – количество пробелов для форматирования.
*/

/*
    null означает, что нет функции replacer, т.е. все свойства объекта formData включаются в JSON.
    2 означает, что JSON будет отформатирован с отступами в 2 пробела (для читаемости).
*/
