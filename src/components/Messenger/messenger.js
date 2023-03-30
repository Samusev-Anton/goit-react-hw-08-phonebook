import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = {
  current: io('http://localhost:3030'),
};

export const Messanger = () => {
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    socket.current.on('changeOnline', data => {
      setOnlineUsers(data);
    });
    return () => {
      socket.current.off('disconnect', {});
    };
  }, []);

  useEffect(() => {
    socket.current.on('currentMessage', data => {
      setMessageList([...messageList, data]);
    });
    socket.current.on('changeOnline', data => {
      setOnlineUsers(data);
    });
  }, [messageList]);

  const handleNameClick = e => {
    e.preventDefault();
    socket.current.emit('addUser', { name: user });
  };
  const handleMessageClick = e => {
    e.preventDefault();
    socket.current.emit('newMessage', {
      author: user,
      text: message,
    });
    setMessageList([
      ...messageList,
      {
        author: user,
        text: message,
      },
    ]);
  };

  return (
    <>
      <h1>Hello!</h1>
      <p>user online: {onlineUsers}</p>
      <form>
        <label>
          Enter your name
          <input
            value={user}
            type="text"
            onChange={e => setUser(e.currentTarget.value)}
          />
        </label>
        <button onClick={handleNameClick}>Submit</button>
      </form>
      <form>
        <label>
          Enter your message
          <input
            value={message}
            type="text"
            onChange={e => setMessage(e.currentTarget.value)}
          />
        </label>
        <button onClick={handleMessageClick}>Submit</button>
      </form>
      <ul>
        {messageList.map((item, idx) => (
          <li key={idx}>
            <span>{item.author}</span>:<span>{item.text}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
