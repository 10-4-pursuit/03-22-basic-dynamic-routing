import { useParams } from 'react-router-dom';

function UserProfile() {
  let { username } = useParams();
  return <h1>Hello {username}!</h1>
}
export default UserProfile;