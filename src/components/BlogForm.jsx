import nBlog from '../assets/blok.png';

const BlogForm = ({ blog, setBlog, handleSubmit }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setBlog({ ...blog, [id]: value });
    console.log(blog);
  };

  return (
    <div>
      <div className="card bg-dark text-white">
        <img
          src={'https://picsum.photos/800/800'}
          className="card-img"
          alt="samp"
        />
        <div className="card-img-overlay register-form p-5 w-75">
          <div className="d-flex">
            <h1 className="form-title display-3">Add_New_Blog</h1>
            <img src={nBlog} alt="blokimg" width="75px" />
          </div>
          <form id="addblog" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter a title"
                required
                value={blog.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                id="imgurl"
                placeholder="Enter your image URL"
                required
                value={blog.imgurl}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Content</label>
              <textarea
                type="text"
                className="form-control"
                rows="6"
                id="content"
                placeholder="Enter your content"
                required
                value={blog.content}
                onChange={handleChange}
              />
            </div>
            <input
              type="submit"
              className="btn btn-primary form-control"
              value="Add"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
