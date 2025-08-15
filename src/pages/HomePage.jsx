import React, { useEffect, useMemo, useState } from 'react';

// !!! Укажи базовый URL своего API (без хвоста /api/v1 если он уже внизу)
const API_BASE = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export default function HomePafe() {
  const [positions, setPositions] = useState([]); // [{id, name}]
  const [loadingPositions, setLoadingPositions] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '+380',
    position_id: '',
    photo: null, // File
  });

  // --- загрузка позиций ---
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/positions`);
        const data = await res.json();
        if (!cancelled) {
          setPositions(Array.isArray(data.positions) ? data.positions : []);
        }
      } catch (e) {
        if (!cancelled) setMsg('Не удалось загрузить список позиций.');
      } finally {
        if (!cancelled) setLoadingPositions(false);
      }
    })();
    return () => (cancelled = true);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((s) => ({ ...s, [name]: files ? files[0] : value }));
  };

  // Базовые проверки на клиенте (мин длина имени, формат телефона/почты и JPEG)
  const validationError = useMemo(() => {
    if (form.name.trim().length < 2 || form.name.trim().length > 60)
      return 'Имя должно быть 2–60 символов.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return 'Некорректный email.';
    if (!/^\+380\d{9}$/.test(form.phone))
      return 'Телефон должен начинаться с +380 и содержать 12 цифр всего.';
    if (!form.position_id) return 'Выберите позицию.';
    if (!form.photo) return 'Загрузите фото.';
    if (form.photo && !/jpe?g$/i.test(form.photo.name))
      return 'Фото должно быть в формате .jpg/.jpeg.';
    if (form.photo && form.photo.size > 5 * 1024 * 1024)
      return 'Размер фото не должен превышать 5MB.';
    return '';
  }, [form]);

  // Доп.проверка минимальных размеров 70x70
  const checkImageSize = (file) =>
    new Promise((resolve) => {
      if (!file) return resolve(true);
      const img = new Image();
      img.onload = () => resolve(img.width >= 70 && img.height >= 70);
      img.onerror = () => resolve(false);
      img.src = URL.createObjectURL(file);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');

    if (validationError) {
      setMsg(validationError);
      return;
    }

    if (!(await checkImageSize(form.photo))) {
      setMsg('Минимальный размер фото — 70x70 px.');
      return;
    }

    setSubmitting(true);
    try {
      // 1) получаем одноразовый токен
      const tRes = await fetch(`${API_BASE}/token`, { method: 'POST' });
      const tData = await tRes.json();
      if (!tRes.ok || !tData?.token) {
        setMsg('Не удалось получить токен для регистрации.');
        setSubmitting(false);
        return;
      }

      // 2) собираем multipart/form-data
      const body = new FormData();
      body.append('name', form.name.trim());
      body.append('email', form.email.trim());
      body.append('phone', form.phone.trim());
      body.append('position_id', String(form.position_id));
      body.append('photo', form.photo);

      // 3) регистрация
      const uRes = await fetch(`${API_BASE}/users`, {
        method: 'POST',
        headers: { Token: tData.token }, // важно: именно Token
        body,
      });

      const uData = await uRes.json();

      if (uRes.status === 201 && uData?.success) {
        setMsg('✅ Пользователь успешно зарегистрирован.');
        // при необходимости — очистить форму
        setForm({
          name: '',
          email: '',
          phone: '+380',
          position_id: '',
          photo: null,
        });
      } else if (uRes.status === 409) {
        setMsg('Пользователь с таким email или телефоном уже существует.');
      } else if (uRes.status === 401) {
        setMsg('Токен просрочен. Попробуйте отправить снова.');
      } else if (uRes.status === 422) {
        setMsg(uData?.message || 'Ошибка валидации данных.');
      } else {
        setMsg(uData?.message || 'Неизвестная ошибка при регистрации.');
      }
    } catch (err) {
      setMsg('Ошибка сети: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', gap: 12, maxWidth: 420 }}
    >
      <label>
        Имя
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          minLength={2}
          maxLength={60}
          required
        />
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Телефон (+380XXXXXXXXX)
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+380XXXXXXXXX"
          required
        />
      </label>

      <label>
        Позиция
        <select
          name="position_id"
          value={form.position_id}
          onChange={handleChange}
          disabled={loadingPositions}
          required
        >
          <option value="" disabled>
            {loadingPositions ? 'Загрузка...' : 'Выберите позицию'}
          </option>
          {positions.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Фото (jpg/jpeg, ≤5MB, ≥70×70)
        <input
          name="photo"
          type="file"
          accept="image/jpeg,image/jpg"
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit" disabled={submitting}>
        {submitting ? 'Отправка...' : 'Зарегистрироваться'}
      </button>

      {msg && <div role="alert">{msg}</div>}
    </form>
  );
}
