import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return <div>
  <div className='d-flex p-5 justify-content-center'>
  Merhaba {currentUser.displayName}, blog sitesine hoş geldin
  </div>
</div>
};

export default Profile;
