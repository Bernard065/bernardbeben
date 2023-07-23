import Link from "next/link"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


import Logo from "./Logo";
import { useRouter } from "next/router";



const CustomLink = ({ href, title, className }) => {
    const router = useRouter();
    //console.log(router)
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-orange-500 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  );
};


const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-mediun text-white text-lg flex items-center justify-between">
        <nav>
            <CustomLink href='/' title='Home' className='mr-4' />
            <CustomLink href='/about' title='About' className='mx-4' />
            <CustomLink href='/projects' title='Projects' className="mx-4" />
            <CustomLink href='/articles' title='Articles' className='ml-4' />
            
        </nav>
        
        <nav className="space-x-4">
            <Link 
                href='/' 
                target="{_blank"
                className="inline-block p-2 rounded-full hover:bg-orange-500 transition-colors ease-in-out duration-300"
            >
                    <TwitterIcon className="w-6 h-6 text-white" />
            </Link>
            <Link 
                href='/' 
                target="{_blank}"
                className="inline-block p-2 rounded-full hover:bg-orange-500 transition-colors ease-in-out duration-300"
            >   
                    <LinkedInIcon className="w-6 h-6 text-white" />
            </Link>
            <Link 
                href='/' 
                target="{_blank}"
                className="inline-block p-2 rounded-full hover:bg-orange-500 transition-colors ease-in-out duration-300"
            >
                    <GitHubIcon className="w-6 h-6 text-white" />
            </Link>
            {/* <Link
                href="/"
                target="_blank"
                className="inline-block p-2 rounded-full hover:bg-orange-500 transition-colors ease-in-out duration-300"
                >
                <MediumSVG className="w-6 h-6 text-white" />
            </Link> */}
            
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
        </div>
    </header>
  )
}

export default Navbar