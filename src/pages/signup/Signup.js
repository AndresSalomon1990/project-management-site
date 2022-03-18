import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// styles
import './Signup.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, isPending, error } = useSignup();

  const handleFileChange = (e) => {
    // reset state
    setThumbnail(null);

    let selected = e.target.files[0];

    // check that there is a selected file
    if (!selected) {
      setThumbnailError('Please select a file');
      return;
    }

    // check the file selected is an image
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image');
      return;
    }

    // check image size
    if (selected.size > 100000) {
      setThumbnailError('Image file size must be less than 100kb');
      return;
    }

    // reset error
    setThumbnailError(null);

    setThumbnail(selected);
    console.log('thumbnail updated');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        <span>email:</span>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          type='text'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
      </label>
      <label>
        <span>profile thumbnail:</span>
        <input type='file' onChange={handleFileChange} required />
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      {!isPending && <button className='btn'>Sign up</button>}
      {isPending && (
        <button className='btn' disabled>
          Loading
        </button>
      )}
      {error && <div className='error'>error</div>}
    </form>
  );
}
