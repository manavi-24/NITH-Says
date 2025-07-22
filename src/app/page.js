import Feed from "@/components/Feed";
import Input from "@/components/Input";

export default function Home() {
  return (
    <div className='max-w-xl mx-auto border-r border-l min-h-screen '>
    <div className='py-2 px-3 sticky top-0 z-50 border-b border-gray-300 bg-gray-50 '>
      <h2 className='text-2xl sm:text-2xl text-black-600 p-2 font-extrabold  '>Top Stories</h2>
    </div>
    <Input />
    <Feed />
  </div>
  );
}
