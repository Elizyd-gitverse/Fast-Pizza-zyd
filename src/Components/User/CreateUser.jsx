import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { FullName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    if(!username) return 
    dispatch(FullName(username))
    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center'>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        className='input mt-3 mb-6'
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type='primary'>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
