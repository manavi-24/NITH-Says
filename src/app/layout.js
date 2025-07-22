import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";
import SessionWrapper from "@/components/SessionWrapper";
import CommentModal from "@/components/CommentModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NITH Says",
  description: "Share Your Thoughts",
};

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  
  return (
  <SessionWrapper>
    <html lang="en">
  
      <body className={inter.className} >
    
      <div className="main">
            <div className="gradient"></div>
      </div>
        <div className="flex  max-w-7xl mx-auto  ">
       
       
          <div className="hidden sm:inline h-screen sticky top-0 w-55">
            <Sidebar />
          </div>
          <div className='w-5xl mx-auto '>{children}</div>
          <div className="lg:flex-col p-3 h-screen hidden lg:flex w-[24rem] sticky top-0 overflow-y-auto scrollbar-hide  "> 
          
          <div className='sticky top-0  py-2'>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 border border-gray-300 rounded-3xl text-sm w-full px-4 py-2"
            ></input>
            </div>
            <div className="">
            <News />
            </div>
           
            
          </div>
        
        </div>
        <CommentModal/>
      
      </body>
    </html>
    </SessionWrapper>
    
  );
}
