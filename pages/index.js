import Featured from '../components/Featured';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Videoplayer from '../components/Videoplayer';

const Home = () => {
  return (
    <div>
      <Featured />
      <Videoplayer/>
      <Section />
    </div>
  );
};



export default Home;