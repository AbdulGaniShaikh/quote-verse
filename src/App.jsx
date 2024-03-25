import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContent from './views/MainContent';
import Home from './views/Home';
import ThreadWithComments from './views/ThreadWithComments';
import LikedThread from './views/LikedThread';
import Tag from './views/Tag';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainContent />}>
            <Route path="" element={<Home />} />
            <Route path="/threads/:_id" element={<ThreadWithComments />} />
            <Route path="/liked" element={<LikedThread />} />
            <Route path="/tags/:tag" element={<Tag />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
