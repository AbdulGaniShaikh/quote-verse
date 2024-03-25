import { useEffect, useState } from 'react';
import { settings } from '../assets/icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const TrendingTopics = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTags() {
      try {
        setLoading(true);
        const res = await axios.get('https://api.quotable.io/tags?sortBy=quoteCount&order=desc');
        if (res.status === 200) {
          setTags(res.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchTags();
  }, []);
  return (
    <div className="flex flex-col gap-y-6 w-full p-12 justify-start">
      <div className="flex w-full items-center justify-between">
        <p className="text-xl font-bold">Trending topics</p>
        <img src={settings} alt="" className="select-none cursor-pointer action-icon" />
      </div>
      <Link to="/" className="text-blue">
        show all quotes
      </Link>

      <div className="flex flex-col gap-4">
        {loading && (
          <div className="self-center">
            <Spinner />
          </div>
        )}
        {tags.slice(0, 5).map((tag, i) => (
          <Topic key={i} {...tag} />
        ))}
      </div>
    </div>
  );
};

const Topic = ({ name, slug, quoteCount }) => {
  return (
    <Link to={`/tags/${slug}`} className="w-fit text-lightOnDark text-sm select-none cursor-pointer">
      <p>{name}</p>
      <p className="font-medium text-white">{slug}</p>
      <p>{quoteCount} quotes</p>
    </Link>
  );
};

export default TrendingTopics;
