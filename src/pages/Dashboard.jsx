import BlogCard from '../components/BlogCard';
import { GetBlog } from '../helpers/firebase';

const Dashboard = () => {
  const { isLoading, blogList } = GetBlog();

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        {isLoading ? (
          <div className="spinner-border text-primary m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          blogList?.map((item, id) => <BlogCard key={item.id} {...item} />)
        )}
      </div>
    </>
  );
};

export default Dashboard;