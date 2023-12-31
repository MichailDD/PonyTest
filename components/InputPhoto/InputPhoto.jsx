import React, { useState } from 'react';
import s from './InputPhoto.module.css';
function InputPhoto(props) {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(URL.createObjectURL(file));
  };

  const handlePhotoRemove = () => {
    setPhoto(null);
  };

  return (
    <div className={s.blok__input}>
      {photo ? (
        <>
<<<<<<< HEAD:components/InputPhoto/InputPhoto.jsx
          <img src={photo} alt="Uploaded Photo" style={{ position: 'absolute', bottom: '-70px', width: '93px', height: '68px' }} />
          <img className={s.delete_icon} onClick={handlePhotoRemove} src={props.icon} alt="icon" />
=======
          <img
            src={photo}
            alt='Uploaded Photo'
            style={{ position: 'absolute', bottom: '-70px', width: '93px', height: '68px' }}
          />
          {/* <button onClick={handlePhotoRemove} style={{ position: 'absolute', bottom: '5px', right: '5px' }}>
          
          </button> */}
          <img className={s.delete_icon} onClick={handlePhotoRemove} src={props.icon} alt='icon' />
>>>>>>> danil:src/components/InputPhoto/InputPhoto.jsx
        </>
      ) : (
        <label
          className={s.blok__label}
          htmlFor='photoUpload'
          style={{ position: 'absolute', bottom: '0', cursor: 'pointer' }}>
          <img src={props.img} alt='' />
          Add file or drop files here
          <input
            type='file'
            id='photoUpload'
            accept='image/*'
            style={{ display: 'none' }}
            onChange={handlePhotoChange}
          />
        </label>
      )}
    </div>
  );
}

export default InputPhoto;
