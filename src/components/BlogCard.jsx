import ImgBlank from '../assets/no-data.png'

const BlogCard = ({ title, imgurl, content, id }) => {

  return (
    <div
      className="blog-card"
    >
      {/* <img
        loading="lazy"
        src={ImgBlank}
        alt="blog-card"
      /> */}
      <div className="d-flex align-items-baseline justify-content-between p-1">
        <h5>{title}</h5>
      </div>
      <div className="d-flex align-items-baseline justify-content-between p-1">
        <img src={imgurl} loading="lazy" alt="blog-card-img"/>
      </div>
      <div className="d-flex align-items-baseline justify-content-between p-1">
        <h5>{content}</h5>
      </div>
    </div>
  );
};

export default BlogCard;