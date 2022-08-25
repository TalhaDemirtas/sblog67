import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return <div className='p-5 text-center'>
  <i className="fa-solid fa-user">User</i>
  <br/><hr/><br/>
  <p>
  Merhaba {currentUser.displayName}
  </p>
  <p>
  email : {currentUser.email}
  </p>
  <br/><hr/>
  <i className="fa-solid fa-thumbs-up">__</i>
  <i className="fa-solid fa-heart" >__</i>
  <i className="fa-solid fa-comment" ></i>
</div>
};

export default Profile;