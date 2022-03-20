import { useCollection } from '../../hooks/useCollection';
import Avatar from '../avatar/Avatar';

// styles
import './OnlineUsers.css';

export default function OnlineUsers() {
  const { error, documents } = useCollection('users');

  return (
    <div className='user-list'>
      <h2>All users</h2>
      {error && <div className='error'>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className='user-list-item'>
            <span
              className='online-user'
              style={{ background: user.online ? '#0ebb50' : '#e60000' }}
            ></span>
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
