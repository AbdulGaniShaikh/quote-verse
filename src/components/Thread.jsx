import { Link } from 'react-router-dom';
import { comment, dot, share } from '../assets/icons';
import user from './../assets/icons/user.png';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, isLiked, removePost } from '../redux/slices/likedPost';
import LikeIcon from './LikeIcon';
import ShareButtons from './ShareButtons';

const Thread = (props) => {
  const { _id, content, author, tags = [] } = props;
  const dispatch = useDispatch();
  const postIsLiked = useSelector((state) => isLiked(state, _id));

  const onLikeClick = () => {
    if (!postIsLiked) {
      dispatch(addPost({ _id, content, author, tags }));
    } else {
      dispatch(removePost(_id));
    }
  };
  return (
    <div className="flex p-4 w-full gap-3 border-b border-borderColor">
      <img src={user} alt="" className="size-9 object-cover aspect-square rounded-full" />
      <div className="flex flex-col gap-3">
        <div className="gap-4 font-medium">
          <p>{author}</p>
          <Link to={`/threads/${_id}`}>
            <p className="mt-1 font-normal">{content}</p>
          </Link>
        </div>
        <div className="flex gap-3 items-center justify-start">
          <div onClick={onLikeClick} className="action-icon">
            <div className={postIsLiked ? 'fill-[#ff0000] stroke-[#ff0000]' : 'fill-none stroke-white'}>
              <LikeIcon />
            </div>
          </div>

          <Link to={`/threads/${_id}`}>
            <img src={comment} alt="" className="action-icon" />
          </Link>
          <div className="relative share-button-div nav-icon">
            <img src={share} alt="" className="action-icon" />
            <div className="absolute bottom-full left-1/2 share-buttons">
              <ShareButtons />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-1 text-lightOnDark">
          {tags.map((tag, i) => {
            return (
              <>
                {i !== 0 && <img src={dot} alt="" />}
                <Link to={`/tags/${tag}`} key={i}>
                  {tag}
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Thread;
