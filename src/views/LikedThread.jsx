import { useSelector } from 'react-redux';
import Thread from '../components/Thread';
import { selectPost } from '../redux/slices/likedPost';

const LikedThread = () => {
  const threads = useSelector(selectPost);

  return (
    <div>
      {threads.length === 0 && <p className="text-center p-16 text-lg font-medium">No liked post found</p>}
      {threads.map((thread, i) => (
        <Thread key={i} {...thread} />
      ))}
    </div>
  );
};

export default LikedThread;
