import BlogCard from '../components/BlogCard';
import { GetBlog } from '../helpers/firebase';
import Spin from '../assets/bouncing.svg'

const Dashboard = () => {
  const { isLoading, blogList } = GetBlog();

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        {isLoading ? (
          <div className='spinner m-5'>
            <img src={Spin} alt='sp'/>
          </div>
        ) : (
          blogList?.map((item, id) => <BlogCard key={item.id} {...item} />)
        )}
      </div>
    </>
  );
};

export default Dashboard;