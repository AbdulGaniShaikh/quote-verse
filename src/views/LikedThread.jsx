import { useSelector } from 'react-redux';
import Thread from '../components/Thread';
import { selectPost } from '../redux/slices/likedPost';

const LikedThread = () => {
  const threads = useSelector(selectPost);

  return (
    <div>
      {threads.map((thread, i) => (
        <Thread key={i} {...thread} />
      ))}
    </div>
  );
};

export default LikedThread;
