import Link from "next/link";
import { AiFillInstagram, AiFillMail, AiOutlineMail, AiOutlinePhone, AiOutlineTwitter } from "react-icons/ai";


const Footer = () => {
  return (
    <div className=' mt-10 text-center'>
      <p className=" font-semibold text-lg lg:text-xl text-slate-600 dark:text-slate-50"> © YOUnique 2022</p>
      <div className=' text-2xl flex justify-center -gap-1 text-slate-700 dark:text-slate-50'>
        <a className=" mx-3.5" href="https://twitter.com/YOUnique__06" target="_blank" rel="noopener noreferrer" ><AiOutlineTwitter /></a> 
        <a className=" mx-3.5" href="https://www.instagram.com/younique.06/" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
        <a className=" mx-3.5" href="mailto:youniquestore06@gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail /></a>
      </div>
        <div className=" text-slate-500 text-sm lg:text-base">
            <p> Need 
            <Link href="/support"><strong><a className=" underline cursor-pointer text-slate-600 dark:text-slate-50"> Support </a></strong></Link>
            regarding product contact<strong>( <a href="tel:9726698451" className=" text-slate-600 underline dark:text-slate-50">+91-9726698451</a>)</strong> </p>
        </div>
    </div>
  );
};

export default Footer;
