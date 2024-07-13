import { Card } from "@/components";
import { CybersafeLogo, GDevLogo, MyToolsLogo, PicTrimLogo } from "@/components/icons";
import Particles from "@/components/particles";
import Image from "next/image";
import Link from "next/link";
import { DiDart } from "react-icons/di";
import { FaDiscord, FaFacebookF, FaFigma, FaGitAlt, FaGithub, FaGitlab, FaGooglePlay, FaInstagram, FaJava, FaLinkedinIn, FaSkype, FaSourcetree, FaTelegramPlane } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiCocos, SiDart, SiFlutter, SiKotlin, SiSqlite, SiTypescript } from "react-icons/si";



const socialNetwork = [
  {
    id: 1,
    name: "Telegram",
    icon: FaTelegramPlane,
    iconLink: "/sn-icon/telegram.svg",
    url: "https://t.me/ducnv0712",
  },
  {
    id: 2,
    name: "Skype",
    icon: FaSkype,
    iconLink: "/sn-icon/skype.svg",
    url: "https://join.skype.com/invite/yEAt1WGlfx0P",
  },
  {
    id: 3,
    name: "Linkedin",
    icon: FaLinkedinIn,
    iconLink: "/sn-icon/linkedin.svg",
    url: "https://www.linkedin.com/in/dducnv/",
  },
  {
    id: 4,
    name: "Github",
    icon: FaGithub,
    iconLink: "/sn-icon/github.svg",
    url: "https://github.com/dducnv",
  },
  {
    id: 5,
    name: "Discord",
    icon: FaDiscord,
    iconLink: "/sn-icon/github.svg",
    url: "https://discordapp.com/users/711211764653752341",
  },
  {
    id: 6,
    name: "Facebook",
    icon: FaFacebookF,
    iconLink: "/sn-icon/facebook.svg",
    url: "https://www.facebook.com/dduc.nv0712/",
  },
  {
    id: 7,
    name: "Instagram",
    icon: FaInstagram,
    iconLink: "/sn-icon/instagram.svg",
    url: "https://www.instagram.com/dduc.nv/",
  },
  {
    id: 8,
    name: "Google Play",
    icon: FaGooglePlay,
    iconLink: "",
    url: "https://play.google.com/store/apps/dev?id=5117725144849190078",
  },
  {
    id: 9,
    name: "Google Developer Profile",
    icon: GDevLogo,
    iconLink: "",
    url: "https://g.dev/ducnv",
  },
];

const skills = [
  {
    id: 1,
    name: "Dart",
    icon: SiDart,
    iconLink: "",
  },
  {
    id: 2,
    name: "Flutter",
    icon: SiFlutter,
    iconLink: "",
  },
  {
    id: 3,
    name: "Kotlin",
    icon: SiKotlin,
    iconLink: "",
  },
  {
    id: 4,
    name: "Java",
    icon: FaJava,
    iconLink: "",
  },
  {
    id: 5,
    name: "TypeScript",
    icon: SiTypescript,
    iconLink: "",
  },
  {
    id:9,
    name:"SQLite",
    icon:SiSqlite,
    iconLink:"",
  },
  {
    id:9,
    name:"Git",
    icon:FaGitAlt,
    iconLink:"",
  },
  {
    id:10,
    name:"GitHub",
    icon:FaGithub,
    iconLink:"",
  },
  {
    id:11,
    name:"GitLab",
    icon:FaGitlab,
    iconLink:"",
  },
  {
    id:11,
    name:"Sourcetree",
    icon:FaSourcetree,
    iconLink:"",
  },
  {
    id: 6,
    name: "Cocos Creator",
    icon: SiCocos,
    iconLink: "",
  },
  {
    id: 7,
    name: "Firebase",
    icon: IoLogoFirebase,
    iconLink: "",
  },
  {
    id: 8,
    name: "Figma",
    icon: FaFigma,
    iconLink: "",
  },
]

const spotifyListLink = [
  [
    "https://open.spotify.com/embed/playlist/6Y9zIXXDYmyVmX1j0UKJSR?utm_source=generator",
    "https://open.spotify.com/embed/playlist/6tRU2zQeMP3RW2fKIyJgVm?utm_source=generator",
  ]
  ,
  [
    "https://open.spotify.com/embed/playlist/3NyCoSuHEW78lZaZh5EBdM?utm_source=generator",
    "https://open.spotify.com/embed/playlist/4GddeUnys7W4kjrGN5Fl2F?utm_source=generator",
  ],
  [
    "https://open.spotify.com/embed/playlist/2mZ6XbMoHGSpHlRymx98iS?utm_source=generator",
    "https://open.spotify.com/embed/playlist/2cWwEO3v250A1ucT4Lve9E?utm_source=generator",
  ]
];

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <nav className="flex px-5 md:px-16 py-5 border-b-2 border-b-black dark:border-b-white">
        <Link href={"/"} className="ibm-mono-font font-semibold">
          dducnv.dev
        </Link>
      </nav>
      <section className="flex justify-center items-center pt-20 ">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:h-44 md:w-44 relative rounded-full overflow-hidden">
            <Image
              src="/avatar.jpg"
              className=" object-contain"
              alt="Picture of the author"
              fill
            />
          </div>
          <h1 className="text-3xl md:text-4xl mt-5 be-vietnam-pro font-bold">Duc Nguyen Van</h1>
          <p className="text-sm md:text-lg mt-2 ibm-mono-font">Mobile App Developer</p>
          <div className="flex flex-wrap space-x-4  gap-3 md:gap-0  item-center mt-10 justify-center px-16">
            {
              skills?.map((item) => (
                <item.icon
                  title={item.name}
                  key={item.id}
                  className="w-4 h-4 md:w-8 md:h-8 " />
              ))
            }
          </div>

        </div>
      </section>
      <section className=" border-b-2 border-b-black dark:border-b-white pb-20 ">
        <div
          title="Code time"
          className="mt-10 w-full overflow-x-auto">
          <figure
            className="w-full m-auto flex justify-center dark:hidden"
          >
            <embed
              src="https://wakatime.com/share/@dducnv/419251c3-3fd9-46c0-9830-63a8b435611b.svg" />
          </figure>
          <figure
            className="w-full m-auto justify-center hidden dark:flex"
          ><embed src="https://wakatime.com/share/@dducnv/91429af5-34d7-4673-9a2a-480f1cfcc591.svg" />
          </figure>
        </div>
      </section>
      <section className="px-5 md:px-16 md:flex justify-between w-full items-center py-5 border-b-2 border-b-black dark:border-b-white ">
        <h3 className="mb-5 md:mb-0">Reach to me:</h3>
        <div className="flex flex-wrap  gap-4">
          {socialNetwork?.map((item) => (
            <Link
              target={"_blank"}
              rel="noopener noreferrer"
              className=" hover:scale-110 duration-150 active:scale-90"
              key={item.id}
              href={item.url}
            >
              <item.icon className="w-6 h-6 md:w-6 md:h-6" />
            </Link>
          ))}
        </div>
      </section>
      <section className=" md:flex">
        <div className="md:w-1/3">
          <Card>
            <Link
              className="flex justify-center items-center w-full h-full py-20"
              target={"_blank"}
              href={"https://mytools.dducnv.dev"}>
              <MyToolsLogo
                className=" w-24 h-24 md:w-48 md:h-48 fill-black dark:fill-white"
              />
            </Link>
          </Card>
        </div>
        <div className="md:w-1/3  border-y-2 border-x-0 md:border-y-0 md:border-x-2 border-black dark:border-white ">
          <Card>
            <Link
              className="flex justify-center items-center w-full h-full py-20"
              target={"_blank"}
              href={"https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.cyber_safe"}>
              <CybersafeLogo
                className=" w-24 h-24 md:w-48 md:h-48 fill-black dark:fill-white"
              />
            </Link>
          </Card>
        </div>
        <div className="md:w-1/3 ">
          <Card>
            <Link
              className="flex justify-center items-center w-full h-full py-20"
              target={"_blank"}
              href={"https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.pic_trim_app"}>
              <PicTrimLogo
                className=" w-24 h-24 md:w-48 md:h-48 fill-black dark:fill-white "
              />
            </Link>
          </Card>

        </div>
      </section>
      {/* <section className="">
        {spotifyListLink.map((links, index) => (
          <div className="md:flex border-b-2 border-b-black dark:border-b-white" key={index}>
            {
              links.map((item, index) => (
                <div key={index}
                className="md:w-1/2 border-r-2 border-b-black dark:border-b-white p-5"
                >
                  <iframe
                    src={item}
                    width="100%"
                    height="375"
                    className="border-none rounded-none"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="eager"
                  />
                </div>
              ))
            }
          </div>
        ))}

      </section> */}
    </main>
  );
}
