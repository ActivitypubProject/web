import { FC } from "react";
import Avatar from "./Avatar";

interface userInfo {
  userId: string;
  avatarUrl: string;
  onclick: () => void;
}


const UserCard: FC<userInfo> = ({ userId, avatarUrl, onclick }) => {
  return (
    <div className='w-1/3 pl-12 flex rounded-full text-center items-center hover:cursor-pointer' onClick={onclick}>
      <div className='flex'>
        <div className="w-10">
          <Avatar src={avatarUrl}></Avatar>
        </div>
        <span className='text-white text-lg pl-6'>{userId}</span>
      </div>
      <div className='flex-auto'>
      </div>
    </div>
  )
}

export default UserCard;