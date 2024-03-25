import { useState } from 'react';
import user from './../assets/icons/user.png';
import LikeIcon from './LikeIcon';

const Comment = ({ username = 'username', comment = 'comment' }) => {
  const [isLiked, setLiked] = useState(false);

  return (
    <div className="flex justify-center items-start py-4 pl-3 pr-4 gap-3">
      <img src={user} alt="" className="size-9 object-cover aspect-square rounded-full cursor-pointer select-none" />
      <div className="flex flex-col flex-1 items-start justify-center gap-1">
        <p className="font-medium text-lightOnDark">{username}</p>
        {comment}
      </div>
      <div
        onClick={() => {
          setLiked(!isLiked);
        }}
        className="action-icon self-center"
      >
        <div className={isLiked ? 'fill-[#ff0000] stroke-[#ff0000]' : 'fill-none stroke-white'}>
          <LikeIcon />
        </div>
      </div>
    </div>
  );
};

export default Comment;
