import axios from 'axios';
import Hero from '../components/Hero';

const Home = ({ projects, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div>
      <Hero />
    </div>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/api/projects');
    const projects = res.data;
    return { projects };
  } catch (error) {
    return { error };
  }
};

export default Home;