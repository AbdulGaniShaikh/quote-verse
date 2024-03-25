import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Thread from '../components/Thread';
import Comment from '../components/Comment';
import user from './../assets/icons/user.png';
import Spinner from '../components/Spinner';

const defaultComments = [
  {
    username: 'Robert Francis',
    comment: 'Very True💯',
    isLiked: false
  },
  {
    username: 'Robert Francis',
    comment: 'Very True💯',
    isLiked: false
  }
];

const ThreadWithComments = () => {
  const { _id } = useParams();
  const [thread, setThread] = useState({});
  const [comments, setComments] = useState(defaultComments);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  useEffect(() => {
    if (!_id) {
      return;
    }
    async function fetchThread() {
      try {
        setLoading(true);
        const res = await axios.get(`https://api.quotable.io/quotes/${_id}`);
        if (res.status === 200) {
          setThread(res.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchThread();
  }, [_id]);
  return (
    <div>
      <div className="flex gap-[10px] p-3 items-center">
        <div onClick={() => navigate(-1)} className="cursor-pointer">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <h1 className="font-medium">Comments</h1>
      </div>
      <Thread {...thread} />

      <div>
        {loading && (
          <div className="p-10 flex items-center justify-center">
            <Spinner />
          </div>
        )}
        {comments.map((comment, i) => {
          return <Comment {...comment} key={i} id={i} />;
        })}
        <AddComment addComment={addComment} />
      </div>
    </div>
  );
};

const AddComment = ({ addComment = () => {} }) => {
  const [val, setVal] = useState('');
  const textAreaRef = useRef(null);
  const onClick = () => {
    if (val.trim() === '') return;
    addComment({ username: 'Robert Downey Jr.', comment: val });
    setVal('');
  };
  const onChange = (e) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
  }, [val]);
  return (
    <div className="flex justify-center items-start py-4 pl-3 pr-4 border-t border-borderColor">
      <img src={user} alt="" className="size-9 object-cover self-start aspect-square rounded-full" />
      <div className="flex-1">
        <textarea
          alt="post-data"
          type="text"
          name="post-data"
          id="post-data"
          value={val}
          onChange={onChange}
          placeholder="Add your comment here..."
          className="focus:outline-none w-full pl-3 pr-4 text-sm resize-none bg-red-400 darkBg mt-2"
          ref={textAreaRef}
        ></textarea>
      </div>
      <p onClick={onClick} className="text-[#57CDFF] cursor-pointer">
        POST
      </p>
    </div>
  );
};

export default ThreadWithComments;
