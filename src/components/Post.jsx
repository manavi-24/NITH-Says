import Link from 'next/link';
import { HiDotsHorizontal } from 'react-icons/hi';
import Icons from './Icons';

export default function Post({ post, id }) {
  return (
    <div className='flex p-3 border-b border-gray-300  hover:bg-gray-50  transition duration-300 ease-in-out'>
      <img
        src={post?.profileImg}
        alt='user-img'
        className='h-11 w-11 rounded-full mr-4'
      />
      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-1 whitespace-nowrap'>
            <h4 className='font-bold text-sx truncate'>{post?.name}</h4>
            <span className='text-xs truncate'>@{post?.username}</span>
          </div>
          <HiDotsHorizontal className='text-sm' />
        </div>

        <Link href={`/posts/${id}`}>
          <p className='text-gray-800 text-sm my-3'>{post?.text}</p>
        </Link>

        {/* Conditionally render image or video based on file type */}
        {post?.file && (post?.fileType === 'image' ? (
          <Link href={`/posts/${id}`}>
            <img src={post?.file} className='rounded-2xl mr-2' />
          </Link>
        ) : (
          <Link href={`/posts/${id}`}>
            <video className='rounded-2xl mr-2' controls={true}>
              <source src={post?.file} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </Link>
        ))}
       <Icons id={id} uid={post.uid} />
      </div>
    </div>
  );
}
