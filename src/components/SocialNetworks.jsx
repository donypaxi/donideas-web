import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

import { Link } from "react-router-dom";


export const SocialNetworks = () => {
  return (
    <>
        <div className="flex justify-between gap-5 ">
            {/* <Link className="hover:text-slate-400 hover:scale-125 duration-200" to="https://www.instagram.com/donypaxi/" target="_blank">
               <BsInstagram/>
            </Link> */}
            <Link className="hover:text-slate-400 hover:scale-125 duration-200" to="https://www.facebook.com/profile.php?id=100093994751962" target="_blank">
              <BsFacebook/>
            </Link>
            {/* <Link className="hover:text-slate-400 hover:scale-125 duration-200" to="https://github.com/donypaxi" target="_blank">
              <BsGithub/>
            </Link> */}
            {/* <Link className="hover:text-slate-400 hover:scale-125 duration-200" to="https://bit.ly/3LRSKDu" target="_blank">
              <BsLinkedin/>
            </Link> */}
            <Link className="hover:text-slate-400 hover:scale-125 duration-200" to="https://www.tiktok.com/@coronelbolognesi2007" target="_blank">
              <FaTiktok/>
            </Link>
        </div>
    </>
    
  )
}
