import { useForm } from 'react-hook-form';
import { Input } from '../CustomForms/Input';
import { Select } from '../CustomForms/Select';
import { Checkbox } from '../CustomForms/Checkbox';
import { Textarea } from '../CustomForms/Textarea';
import './CustomForm.css';

function ReactHoockForm() {
  const {
    register, // функция для регистрации полей формы - связывает поле с React Hook Form, чтобы валидировать его и считывать значения
    handleSubmit, // функция для обработки отправки формы
    formState: { errors }, // Получаем ошибки валидации
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Имя"
        placeholder="Введите ваше имя"
        // defaultValue="Введите ваше имя"
        {...register('name', {
          required: 'Обязательное поле',
          minLength: {
            value: 3,
            message: 'Минимум 3 символа',
          },
        })}
      />
      {errors.name && <span className="error">{errors.name.message}</span>}
      <Select
        label="Возраст"
        {...register('age', { required: 'Выберите возраст' })}
      />
      <Checkbox
        label="Подписаться на рассылку"
        {...register('subscribe', { required: true })}
      />
      {errors.subscribe && <span className="error">Обязательное поле</span>}
      <Textarea
        label="Комментарий"
        {...register('comment', {
          required: 'Комментарий обязателен',
          minLength: {
            value: 50,
            message: 'Минимум 50 символов',
          },
          maxLength: {
            value: 5000,
            message: 'Максимум 5000 символов',
          },
        })}
      />
      {errors.comment && (
        <span className="error">{errors.comment.message}</span>
      )}

      <button type="submit">Отправить</button>
    </form>
  );
}

export default ReactHoockForm;
