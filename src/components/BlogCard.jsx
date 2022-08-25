import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import { toastWarnNotify } from '../helpers/toast';

const BlogCard = ({ title, imgurl, content, id, author }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

const handleDetail = () => {
  currentUser
  ? navigate('/detail/' + id)
  : toastWarnNotify('Please log in to see detail');
}

  return (
    <div className="card">
      <img className="card-img-top" src={imgurl} loading="lazy" alt="mgi" onClick={handleDetail} />
      <div className="card-body">
        {author? (
          <>
          <h6>Author : {author}</h6>
          </>
        ): (
          <h6>Author : Anonymus</h6>
        )}
        
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
      <p
          className="text-decoration-underline m-2"
          onClick={handleDetail}
        >
          Read More
        </p>
      <div className='d-flex text-center'>
      <i className="fa-solid fa-heart m-2" > 1</i>
      <i className="fa-solid fa-comment m-2" > 1</i>
      </div>
    </div>
  );
};

export default BlogCard;