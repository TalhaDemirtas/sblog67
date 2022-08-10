import { useParams } from 'react-router-dom';
import { GetBlog } from '../helpers/firebase';

const Details = ({ imgurl, title, content }) => {
  const { blogList } = GetBlog();
  console.log(blogList);
  const { id } = useParams();

  return (
    <div className="card">
      <p className="card-text">{id}</p>
      <img className="card-img-top" src={imgurl} loading="lazy" alt="mgi" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default Details;
