import { useEffect, useState } from 'react';
import Thread from '../components/Thread';
import axios from 'axios';
import Spinner from '../components/Spinner';

const Home = () => {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchThreads() {
      try {
        setLoading(true);
        const res = await axios.get('https://api.quotable.io/quotes/random?limit=10');
        if (res.status === 200) {
          setThreads(res.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchThreads();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      {loading && (
        <div className="p-10">
          <Spinner />
        </div>
      )}
      {threads.map((thread, i) => (
        <Thread key={i} {...thread} />
      ))}
    </div>
  );
};

export default Home;
