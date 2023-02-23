import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const EditProfile = () => {
    const { logout, user,uploadFile,updateProfilePicture,updateEmail,updateDisplayName} = useAuth();
    const navigate = useNavigate();
    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [photo, setPhoto] = useState(null);
  
    console.log(user);
    
    function handleSubmit(e) {
      e.preventDefault();
      if(name !== user.displayName){
        updateDisplayName(name)
        console.log("Nombre");
      }
      if (email !== user.email) {
        updateEmail(email)
        console.log("Email");
      }
        if (photo) {
        updateProfilePicture(photo)
        console.log("Photo");
    
      }
    }

    async function handlePhotoChange(event) {
      setPhoto(event.target.files[0]);
      console.log(await uploadFile(photo,(user.uid + (photo && photo.name))))
      console.log("Photo:", photo);
    
    }
    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center ">
          <h1>Profile</h1>
          <div className="flex w-full h-full flex-col items-center p-2 md:w-1/2  gap-1 md:justify-center">
            {!user.photoURL ? (
              <div className="w-28 h-28">
                <svg
                  className="w-full h-full fill-slate-300 object-cover"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="inherit"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              <img className="rounded-full" src={user.photoURL} alt="photoUser" />
            )}
            

        {/* New fields and submit button */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="photo">Photo:</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
      
}

export default EditProfile