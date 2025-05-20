import { useEffect, useState } from 'react';
const API_URL =
  'https://64a72153096b3f0fcc811a0c.mockapi.io/vitaliy_galata/collection';

const HomePage = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [editText, setEditText] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    GET();
  }, []);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  async function GET() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch comments');
      const comments = await response.json();
      setComments(comments);
      setError('');
    } catch (error) {
      setError(error.message);
    }
  }

  async function POST(event) {
    event.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newCommentText }),
      });
      if (!response.ok) throw new Error('Failed to create comment');
      setNewCommentText('');
      setError('');
      GET();
    } catch (error) {
      setError(error.message);
    }
  }
  async function PATCH(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: editText }),
      });
      if (!response.ok) throw new Error('Failed to update comment');
      setError('');
      setEditText('');
      setEditingId(null);
      GET();
    } catch (error) {
      setError(error.message);
    }
  }

  async function DELETE(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete comment');
      GET();
      setError('');
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="container m-auto mt-5 p-5">
      <h2 className="text-xl font-bold mb-4">Комментарии</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <ul className="mb-6">
        {comments.map((comment) => (
          <li key={comment.id} className="mb-2 p-2 border rounded">
            {editingId === comment.id ? (
              <div className="flex gap-2">
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border p-1 flex-1"
                />
                <button
                  onClick={() => PATCH(comment.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer"
                >
                  Сохранить
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <span>{comment.text}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingId(comment.id);
                      setEditText(comment.text);
                    }}
                    className="bg-yellow-500 text-white px-3 py-1 rounded text-sm cursor-pointer"
                  >
                    Изменить
                  </button>
                  <button
                    onClick={() => DELETE(comment.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm cursor-pointer"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <h2>Добавить комментарий</h2>
      <form onSubmit={POST} className="flex gap-2">
        <input
          type="text"
          placeholder="Ваш текст"
          value={newCommentText}
          className="border p-2 flex-1"
          onChange={(e) => setNewCommentText(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Добавить комментарий
        </button>
      </form>
    </div>
  );
};

export default HomePage;
