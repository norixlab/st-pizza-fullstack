'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Profile = () => {
  const router = useRouter();

  const logout = async () =>{
    try {
      await axios.get('/api/auth/logout');
      toast.success("Logout successful");
      router.push('/')
    } catch (error) {
      console.log(error.message);
      toast.error("Logout error")
    }
  }
  return (
      <>
          <div>Profile</div>
          <button onClick={logout}>Logout</button>
      </>
  );
}

export default Profile