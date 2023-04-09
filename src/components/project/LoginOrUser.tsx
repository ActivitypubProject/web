import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { useRouter } from 'next/router';
import Avatar from '../materials/Avatar';
import UserCard from '../materials/UserCard';
import Button from '../materials/Button';

interface User {
  name: string;
  avatar: string;
}

const LoginOrUser: NextPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    const accessToken = cookies['access_token'];
    if (accessToken) {
      fetch('/api/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const handleLogin = () => {
    router.push('/api/auth');
  };

  const handleLogout = () => {
    // 从cookie中删除访问令牌
    destroyCookie(null, 'access_token', {
      path: '/',
    });

    // 更新用户状态
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <UserCard userId={user.name} avatarUrl={user.avatar} onclick={handleLogout}></UserCard>
      ) : (
        <Button text='login' clickHandler={handleLogin}></Button>
      )}
    </div>
  );
};

export default LoginOrUser;