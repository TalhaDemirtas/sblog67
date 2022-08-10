import { useNavigate } from "react-router-dom";

const BlogCard = ({ title, imgurl, content, id }) => {
  const navigate = useNavigate();

  return (
      <div className="card">
        <img className="card-img-top" src={imgurl} loading="lazy" alt="mgi"/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
            <button className="btn btn-primary" onClick={() => {
              navigate('/details/'+ id)}}>Read More</button>
          </div>
      </div>
  );
};

export default BlogCard;

// 
// blogList?.)