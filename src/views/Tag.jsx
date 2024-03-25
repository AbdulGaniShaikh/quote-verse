import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Thread from '../components/Thread';
import axios from 'axios';
import Spinner from '../components/Spinner';

const Tag = () => {
  const { tag } = useParams();
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchThreads() {
      try {
        setLoading(true);
        const res = await axios.get(`https://api.quotable.io/quotes?tags=${tag}&sortBy=quoteCount&order=desc&limit=10`);
        if (res.status === 200) {
          setThreads(res.data.results);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchThreads();
  }, [tag]);
  return (
    <div>
      <div className="flex gap-[10px] p-3 items-center">
        <div onClick={() => navigate(-1)} className="cursor-pointer">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="font-bold">
          <p className="text-lightOnDark">Topic</p>
          <p className="text-lg"># {tag}</p>
        </div>
      </div>
      {loading && (
        <div className="p-10 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {threads.map((thread, i) => (
        <Thread key={i} {...thread} />
      ))}
    </div>
  );
};

export default Tag;
