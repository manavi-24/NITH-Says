'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import { HiOutlinePhotograph, HiOutlineVideoCamera } from 'react-icons/hi';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { app } from '../firebase';

import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';

export default function Input() {
  const { data: session } = useSession();
  const [fileUrl, setFileUrl] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUploading, setFileUploading] = useState(false);
  const [text, setText] = useState('');
  const [postLoading, setPostLoading] = useState(false); 
  const db = getFirestore(app);

  const imagePickRef = useRef(null);
  const videoPickRef = useRef(null);

  const handleSubmit = async () => {
    setPostLoading(true);
    const docRef = await addDoc(collection(db, 'posts'), {
      uid: session.user.uid,
      name: session.user.name,
      username: session.user.username,
      text,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
      file: fileUrl,
      fileType: fileType,

   
    });


    setPostLoading(false);
    setText('');
    setFileUrl(null);
    setSelectedFile(null);
    window.location.reload();
  };

  const addFileToPost = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileUrl(URL.createObjectURL(file));
      setFileType(file.type.startsWith('image/') ? 'image' : 'video');
    }
  };

  useEffect(() => {
    if (selectedFile) {
      uploadFileToStorage();
    }
  }, [selectedFile]);

  const uploadFileToStorage = () => {
    setFileUploading(true);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + "_" + selectedFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => {
        console.error(error);
        setFileUploading(false);
        setFileUrl(null);
        setSelectedFile(null);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFileUrl(downloadURL);
          setFileUploading(false);
        });
      }
    );
  };

  if (!session) return null;

  return (
    <div className='flex border-b border-gray-300  p-3 space-x-3 w-full'>
      <img
        src={session.user.image}
        alt='user-img'
        className='h-11 w-11 rounded-full cursor-pointer hover:brightness-95'
      />
      <div className='w-full divide-y divide-gray-200'>
        <textarea
          className='w-full border border-gray-300 rounded-lg outline-none tracking-wide min-h-[50px] text-gray-700 search_input p-3 bg-white bg-opacity-75 focus:outline-none focus:border-transparent shadow-lg resize-y'
          placeholder='Whats on your mind?'
          rows='2'
          value={text}
          onChange={(e) => setText(e.target.value)}  //capturing data
        ></textarea>
        {selectedFile && (
          fileType === 'image' ? (
            <img src={fileUrl} alt="image"  className={`w-full max-h-[250px] object-cover cursor-pointer
            ${fileUploading ? 'animate-pulse' : ''}`} />
          ) : (
            <video src={fileUrl} className={`w-full max-h-[250px] object-cover cursor-pointer
            ${fileUploading ? 'animate-pulse' : ''}`} controls />
          )
        )}
        <div className='flex items-center justify-between pt-2.5'>
          <div className='flex'>
            <div>
              <HiOutlinePhotograph
                className='h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 rounded-full cursor-pointer'
                onClick={() => imagePickRef.current.click()}
              />
              <input type="file" ref={imagePickRef} accept='image/*' onChange={addFileToPost} hidden />
            </div>
            <div>
              <HiOutlineVideoCamera
                className='h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 rounded-full cursor-pointer'
                onClick={() => videoPickRef.current.click()}
              />
              <input type="file" ref={videoPickRef} accept='video/*' onChange={addFileToPost} hidden />
            </div>
          </div>
          <button
            
            disabled={text.trim() === '' || postLoading || fileUploading}
            className='bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
