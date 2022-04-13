import axios from 'axios';

const Projecten = ({ projects, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  console.log(projects)
  return (
    <div className="">
      <div className="card">
        <h2>Villa Maarkedal</h2>
      </div>
    </div>
  );
};

Projecten.getInitialProps = async ctx => {
  try {
    const res = await axios.get('https://evening-dusk-47039.herokuapp.com/api/projects');
    const projects = res.data;
    return { projects };
  } catch (error) {
    return { error };
  }
};

export default Projecten;
 