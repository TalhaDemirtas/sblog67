import { useParams } from 'react-router-dom';
import { DelBlog, GetBlog } from '../helpers/firebase';
import { useNavigate } from 'react-router-dom';
import { toastWarnNotify } from '../helpers/toast';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';         

const Details = () => {
  const { blogList } = GetBlog();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const details = blogList?.find?.(blog=> blog.id === id);
  const adminId = import.meta.env.VITE_adminId;
  const handleEdit = () => {
    if (currentUser.uid==adminId) {
      navigate('/updateblog/'+id);
      toastWarnNotify("Ready for edit :)")
    } else {
      toastWarnNotify("You don't have authorization for edit")
    }}
  const handleDelete = () => {
    if (currentUser.uid==adminId) {
      DelBlog(id); navigate(-1)
    } else {
      toastWarnNotify("You don't have authorization for delete")
    }}

  return (
    <div className="d-flex flex-column justify-content-center p-5">
      <img className='detail-img img-fluid' src={details?.imgurl} loading="lazy" alt="mgi" />
        <h5>{details?.title}</h5>
        <p>{details?.content}</p>
        <div className="btn-group" role="group" aria-label="gr">
        <button type="button" className="btn btn-secondary" onClick={() => {navigate(-1)}}>Main Page</button>
        <button type="button" className="btn btn-secondary" onClick={handleEdit}>Edit</button>
        <button type="button" className="btn btn-secondary" onClick={handleDelete}>Delete</button>
        {currentUser.uid==adminId && <h1>Admin</h1>}
        </div>
    </div>
  );
};

export default Details;
