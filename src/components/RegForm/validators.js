export const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
};

export const checkPasswordMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

export const checkRequiredFields = (fields) => {
  return fields.every((field) => field.trim()); // чтобы каждый элмен массива был не пустой
};

// /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

/*
    ^ — начало строки.
    (?=.*[A-Za-z]) — проверяет, что есть хотя бы одна буква (латинская, верхнего или нижнего регистра).
    (?=.*\d) — проверяет, что есть хотя бы одна цифра.
    [A-Za-z\d]{8,} — пароль должен состоять только из букв и цифр и содержать минимум 8 символов.
    $ — конец строки.
*/

/*
    passwordRegex.test(password) — метод test() проверяет, соответствует ли переданный пароль этому регулярному выражению.
    Если пароль проходит проверку, возвращается true, иначе — false.
*/
