import React, { useState } from "react";
import TeamHome from "./TeamHome";
import TeamNavbar from "./TeamNavbar";
import TeamCard from "./TeamCard";
import TeamLead from "./TeamLead";
import CoLead from "../assests/CoLead.jpg";
import TechLead from "../assests/Aniket.jpg";
import CoLeadAssist from "../assests/CoLeadAssist.jpg";
import Vaishnavi from '../assests/Vaishnavi.jpg'
import NonTechlead from '../assests/NonTeachLead.jpg'
import Adesh from "../assests/AdeshJain.jpg";
import AadeshSinghai from '../assests/AadeeshSinghai.png'
import AdityaPaliwal from '../assests/AdityaPaliwal.jpeg'
import Abhiraj from '../assests/AbhirajRai.jpg'
import Alok from '../assests/Alok.jpg'
import Anirudha from '../assests/AnirudhaBorkar.jpg'
import Anjali from '../assests/AnjaliShukla.jpg'
import Aryan from '../assests/AryanMishra.jpeg'
import Ashley from '../assests/AshleyMathias.jpg'
import Chavvi from '../assests/ChhaviSharma.jpg'
import Devansh from '../assests/DevanshMishra.jpg'
import Fardeen from '../assests/Fardeen.jpg'
import Ubed from '../assests/UbedKhan.jpg'
import Gourav from '../assests/Gourav2.jpg'
import Harish from '../assests/HarishSuthar.jpg'
import Harsh from '../assests/HarshGupta.jpeg'
import Kush from '../assests/Kush.png'
import Meet from '../assests/Meet.jpg'
import poorva from '../assests/poorva.jpg'
import Pratham from '../assests/PrathamJoshi.jpg'
import Prayut from '../assests/Prayut.jpeg'
import Rachit from '../assests/RachitJain.png'
import Ritik from '../assests/Ritik.jpg'
import Sanjeet from '../assests/Sanjeet.jpg'
import Savan from '../assests/Savan.webp'
import Sumesh from '../assests/Sumesh.jpeg'
import Shivanshi from '../assests/shivanshi.jpg'
import Trisha from '../assests/TrishaMishra.jpeg'
import Tanisha from '../assests/Tanisha.jpg'
import Tanishq from '../assests/tanishq.png'
import Tanushree from '../assests/Tanushree.jpg'
import VaishnaviSingh from '../assests/VaishnaviSingh.jpeg'
import Yuvraj from '../assests/Yuvraj.jpg'
import Vivek from '../assests/Vivek.jpg'
import Pushkar from '../assests/PushkarSingh.jpeg'
import { useTheme } from "../Context/ThemeContext";




const Team = () => {
  const teamData = [
 
      {
        "id": 6,
        "name": "Prahtam Joshi",
        "role": "Co-Lead",
        "description": "Focused and passionate about creative innovation",
        "img": Pratham,
        "group": "Lead",
        "instagram": "https://www.instagram.com/pratham.j07?igsh=NXRsOWpxMWxsZjdo",
        "linkedin": "https://www.linkedin.com/in/pratham-joshi-7b7516172?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        id: 2,
        name: "Abhivyakt Bhati",
        role: "Co-Lead Assistant",
        description: "Adventurous traveler, seeks new cultures",
        img: CoLeadAssist,
        group: "Lead",
        instagram: "https://www.instagram.com/chic_ice_cream",
        linkedin: "https://www.linkedin.com/in/abhivyakt-bhati/",
      },
      {
    
        id: 3,
        name: "Aniket Singh",
        role: "Tech Lead",
        description: "Pop music lover, enjoys concerts",
        img: TechLead,
        group: "Lead",
        GitHub: "https://github.com/aniketsingh1023",
        linkedin: "https://www.linkedin.com/in/aniket-singh-994b34274/",
    
      },
      {
        id: 4,
        name: "Aditya Kumar Joshi",
        role: "Non-Tech Lead",
        description: "Focused and innovative thinker",
        img: NonTechlead,
        group: "Lead",
        instagram: "https://www.instagram.com/aditya.joshi18",
        linkedin: "https://www.linkedin.com/in/aditya-kumar-joshi-3919bb255/",
      },
      {
        id: 1,
        name: "Hardik Saini",
        role: "Creative Head",
        description: "Adventurous traveler, seeks new cultures",
        img: CoLead,
        group: "Lead",
        instagram: "https://www.instagram.com/__hardiksaini_/profilecard/?igsh=aHl4bTlmZjB6M2lp",
        linkedin: "https://www.linkedin.com/in/hardik-saini-6a2511216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    
      },
      {
        "id": 5,
        "name": "Tanishq Thakur",
        "role": "Graphic Lead",
        "description": "A visionary designer, blending creativity with technical skill to craft visually compelling narratives.",
        "img": Tanishq,
        "group": "Graphics & AIML",
        "instagram": "https://www.instagram.com/tanishq.thakur.5/profilecard/?igsh=MW42ZmloZ292enNnOQ==",
        "linkedin": "https://www.linkedin.com/in/tanishq-thakur-7ba74623b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        "id": 7,
        "name": "Alok Jumde",
        "role": "Graphic Designer",
        "description": "Creative mind with a passion for visual storytelling",
        "img": Alok,
        "group": "Graphics & AIML",
        "instagram": "https://www.instagram.com/jumdealok_/profilecard/?igsh=MTFhM2VyNXZxdTBmYw==",
        "linkedin": "https://www.linkedin.com/in/alok-jumde-501060311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        id: 8,
        name: "Ubed Khan",
        role: "Graphic Designer",
        description: "Innovative and detail-oriented visual creator",
        img:Ubed,
        group: "Graphics & AIML",
        instagram: "https://www.instagram.com/ubed__pathann/profilecard/?igsh=MXJoaWd0NDV5aGFjMw==",
        linkedin: "https://www.linkedin.com/in/ubed-khan-93220a22a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        id: 9,
        name: "Harish Suthar",
        role: "Graphic Designer",
        description: "Creative designer with attention to detail",
        img: Harish,
        group: "Graphics & AIML",
        instagram: "https://www.instagram.com/harsshjangid/profilecard/?igsh=Y3Zra2xhYzQxYXBy",
        linkedin: "https://www.linkedin.com/in/harish-suthar-991597155/",
      },
      {
        id: 10,
        name: "Aadeesh Singhai",
        role: "Trendsetters Lead",
        description: "Innovative strategist and leader",
        img: AadeshSinghai,
        group: "TrendSetters",
        instagram: "https://www.instagram.com/_aadeeshsinghai_?igsh=cDhrZzJ6MnlyNDRs",
        linkedin: "https://www.linkedin.com/in/aadeesh-singhai/",
      },
      {
        id: 11,
        name: "Sanjeet Singh Bhadoriya",
        role: "Social Media Manager",
        description: "Social media expert with innovative strategies",
        img: Sanjeet,
        group: "TrendSetters",
        instagram: "https://www.instagram.com/hey.sanjeet?igsh=MTZ6em9tbTQwZHcxMg==",
        linkedin: "https://www.linkedin.com/in/sanjeet-singh-bhadoriya-245203296/",
      },
      {
        "id": 12,
        "name": "Chhavi Sharma",
        "role": "Trendsetter Team ",
        "description": "Dynamic and creative thinker, setting trends effortlessly",
        "img": Chavvi,
        "group": "TrendSetters",
        "instagram": "https://www.instagram.com/__chhavi06__/profilecard/?igsh=YjluZTZlYzNweW96",
        "linkedin": "https://www.linkedin.com/in/chhavi-sharma-9a8b1b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        "id": 13,
        "name": "Vaishnavi Singh",
        "role": "Social Media Manager ",
        "description": "Skilled in curating engaging content and managing social media trends",
        "img": VaishnaviSingh,
        "group": "TrendSetters",
        "instagram": "https://www.instagram.com/vaishnavviiisingh/profilecard/?igsh=MW5odHdncWlhcGlsNQ==",
        "linkedin": "https://www.linkedin.com/in/vaishnavi-singh-1770b5294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      },
      {
        id: 14,
        name: "Savan Lovanshi",
        role: "Trendsetter Team",
        description: "Creative and passionate team member, always exploring new ideas and trends.",
        img: Savan,
        group: "TrendSetters",
        instagram: "https://www.instagram.com/savan_lovanshi_/profilecard/?igsh=MTdwcTVodTE5MXhiaA==",
        linkedin: "https://www.linkedin.com/in/savan-lovanshi-2579b5255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        id: 15,
        name: "Trisha Mishra",
        role: "Trendsetters Team",
        description: "Creative and passionate team member, always exploring new ideas and trends.",
        img: Trisha,
        group: "TrendSetters",
        instagram: "https://www.instagram.com/trisha.m08/",
        linkedin: "https://www.linkedin.com/in/trisha-mishra-a95448273",
      },
      {
        id: 16,
        name: "Yuvraj Singh Sisodia",
        role: "EventScape Lead",
        description: "Leadership-driven and dedicated to creating impactful events and experiences.",
        img: Yuvraj,
        group: "EventScape",
        instagram: "https://www.instagram.com/_yuvrajsisodia/",
        linkedin: "https://www.linkedin.com/in/yuvraj-singh-sisodia",
      },
      {
        id: 17,
        name: "Sumesh Yadav",
        role: "EventScape",
        description: "Organized and detail-oriented, passionate about managing successful events.",
        img: Sumesh,
        group: "EventScape",
        instagram: "https://www.instagram.com/_th3_flash_/profilecard/?igsh=YmxpODZyNnBzMTU0",
        linkedin: "https://www.linkedin.com/in/sumesh-yadav-4093bb113?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        id: 18,
        name: "Kush Agrawal",
        role: "EventScape",
        description: "Dedicated team player and planner",
        img: Kush,
        group: "EventScape",
        instagram: "https://www.instagram.com/kush.1903/",
        linkedin: "https://www.linkedin.com/in/kush-agrawal-491ba2286/",
      },
      {
        id: 19,
        name: "Anjali Shukla",
        role: "EventScape",
        description: "Detail-oriented and efficient organizer",
        img: Anjali,
        group: "EventScape",
        instagram: "Nil",
        linkedin: "https://www.linkedin.com/in/anjali-shukla-4a1399290/",
      },
      {
        id: 20,
        name: "Ashley Mathias",
        role: "EventScape",
        description: "Creative and detail-focused, passionate about creating unforgettable event experiences.",
        img: Ashley,
        group: "EventScape",
        instagram: "https://www.instagram.com/ashleymathias__/",
        linkedin: "https://www.linkedin.com/in/ashley-mathias-7a5777316",
      },
      {
        id: 21,
        name: "Poorva Prajapat",
        role: "EventScape Team ",
        description: "Enthusiastic and dedicated team member, contributing to the success of every event.",
        img: poorva,
        group: "EventScape",
        instagram: "https://www.instagram.com/invites/contact/?igsh=1tjhgfmcc23ia&utm_content=4c6hfen",
        linkedin: "https://www.linkedin.com/in/poorva-prajapat-bb76b0212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
  {    id: 22,
        name: "Shivanshi Gupta",
        role: "WebD Team Lead",
        description: "I am the lead web developer, managing this project.",
        img: Shivanshi,
        group: "Tech",
        github:"https://github.com/2004shivanshi",
        linkedin: "https://www.linkedin.com/in/shivanshi-gupta-frontend-developer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 26,
      name: "Tanushree Malviya",
      role: "Cloud Lead",
      description: "Strategic thinker with a deep understanding of cloud technologies, passionate about innovation and problem-solving.",
      img: Tanushree,
      group: "Tech",
      instagram: "https://www.instagram.com/_tanu.shree563/profilecard/?igsh=MXFiOXd0Y3B0amNlZw==",
      linkedin: "https://www.linkedin.com/in/tanushree-malviya-901129268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 30,
      name: "Ritik Malviya",
      role: "DSA Lead",
      description: "Dedicated to mastering Data Structures and Algorithms, with a passion for problem-solving and optimizing code.",
      img: Ritik,
      group: "Tech",
      instagram: "https://www.instagram.com/ritik__malviya/profilecard/?igsh=MjU2dnI4bng2MWph",
      linkedin: "https://www.linkedin.com/in/ritikmalviya40?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 24,
      name: "Fardeen Khan",
      role: "WebD Team Member",
      description: "Skilled web developer with a focus on creating dynamic and user-friendly websites.",
      img: Fardeen,
      group: "Tech",
      instagram: "https://www.instagram.com/fardeennnnnnnnnnnnnn/",
      github: "https://github.com/Fardeennnnnnnnnnkhan",
      linkedin: "https://www.linkedin.com/in/fardeen-khan-077661290/",
    },

    {
      id: 25,
      name: "Tanisha Dhakad",
      role: "WebD Team Member",
      description: "Innovative and proactive team member, dedicated to building user-centric web applications.",
      img: Tanisha,
      group: "Tech",
      // instagram: "https://www.instagram.com/_tanisha.17_/profilecard/?igsh=MTg0NDZ1Nm8xZXB6YQ==",
      linkedin: "https://www.linkedin.com/in/tanishadhakad",
      github:"https://github.com/tanisha1707",
    },
 
      {
        id: 23,
        name: "Vaishnavi Verma",
        role: "WebD Team Member",
        description: "Passionate about creating innovative web solutions, committed to continuous learning and growth.",
        img: Vaishnavi,
        group: "Tech",
        // instagram: "https://www.instagram.com/vaish__navi06/profilecard/?igsh=MTliNGs2amY3czJycQ==",
        github: "https://github.com/vaishnavi-643",
        // linkedin: "https://www.linkedin.com/in/vaishnavi-verma-17195b252",
      },

 
      {
        id: 27,
        name: "Gourav Mandloi",
        role: "Cloud Team Member",
        description: "Detail-oriented and solutions-driven cloud team member, passionate about cloud computing and infrastructure.",
        img: Gourav,
        group: "Tech",
        instagram: "https://www.instagram.com/gourav.mandloi.33?igsh=aGE1MmsyNTAyb2hm",
        linkedin: "https://www.linkedin.com/in/gourav-mandloi-a4925b249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        id: 28,
        name: "Anirudha Borkar",
        role: "Cloud Team Member",
        description: "Cloud enthusiast with a strong focus on leveraging cloud technologies to solve complex challenges.",
        img: Anirudha,
        group: "Tech",
        instagram: "https://www.instagram.com/randomanirudha",
        linkedin: "https://www.linkedin.com/in/anirudha-borkar-4073512bb",
      },
      {
        id: 29,
        name: "Devansh Mishra",
        role: "Cloud Team Member",
        description: "Passionate about cloud technologies and eager to learn and implement scalable solutions.",
        img: Devansh,
        group: "Tech",
        instagram: "https://www.instagram.com/imdevanshmishra/profilecard/?igsh=Z3B1Zzl5aGdraDVp",
        linkedin: "https://www.linkedin.com/in/devansh-mishra-13106a248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        id: 31,
        name: "Aadeesh Jain",
        role: "DSA Team Member",
        description: "Enthusiastic about Data Structures and Algorithms, with a strong focus on building efficient solutions.",
        img: Adesh,
        group: "Tech",
        instagram: "https://www.instagram.com/aadeesh_29?igsh=c2JlbG9sYjJxZDlx",
        linkedin: "http://www.linkedin.com/in/aadeesh-jain-0272552b8",
      },
      {
        id: 32,
        name: "Aryan Mishra",
        role: "DSA Team Member",
        description: "Focused on enhancing problem-solving skills with a deep interest in Data Structures and Algorithms.",
        img: Aryan,
        group: "Tech",
        instagram: "https://www.instagram.com/aryan_x4",
        linkedin: "https://www.linkedin.com/in/aryan-mishra-3109b3265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        id: 33,
        name: "Vivek Raj Gupta",
        role: "AI-ML Lead",
        description: "Passionate about Artificial Intelligence and Machine Learning, focused on creating innovative solutions using AI technologies.",
        img: Vivek,
        group: "Graphics & AIML",
        instagram: "https://www.instagram.com/vivek_raj_gupta_/",
        linkedin: "https://www.linkedin.com/in/vivek-raj-gupta-coder/",
      },
      {
        id: 34,
        name: "Pushkar",
        role: "AI-ML Team",
        description: "Passionate about Artificial Intelligence and Machine Learning, focused on creating innovative solutions using AI technologies.",
        img: Pushkar,
        group: "Graphics & AIML",
        instagram: "https://www.instagram.com/pushkarsingh104?igsh=NGR5eWJpODgwbGVi",
        linkedin: "https://www.linkedin.com/in/pushkar-singh-0aa414304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appp",
      },
      {
        id: 35,
        name: "Rachit Jain",
        role: "Cinecraft Lead",
        description: "Creative leader with a passion for cinematic storytelling and visual arts, leading a talented team to craft impactful experiences.",
        img: Rachit,
        group: "CineCraft",
        instagram: "https://www.instagram.com/rachitjyn/profilecard/?igsh=MTh3ODNmdGlnZWRyYw==",
        linkedin: "https://www.linkedin.com/in/rachit-jain-579709173?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        id: 36,
        name: "Abhiraj Rai",
        role: "CineCraft Artist",
        description: "Creative storyteller with a passion for films",
        img: Abhiraj,
        group: "CineCraft",
        instagram: "https://www.instagram.com/chaubis_fps?igsh=MXd2Y2hhc29kaHhjNw==",
        linkedin: "https://www.linkedin.com/in/abhiraj-rai-323152326/",
      },
      {
        id: 37,
        name: "Prayut Dhoke",
        role: "CineCraft",
        description: "Dynamic and creative visual storyteller",
        img: Prayut,
        group: "CineCraft",
        instagram: "https://www.instagram.com/pramyut_/profilecard/?igsh=MXUyYWZkc292YmFzOA==",
        linkedin: "https://www.linkedin.com/in/prayut-dhoke-91959b32a/",
      },
      {
        id: 38,
        name: "Harsh Gupta",
        role: "CineCraft Team",
        description: "Passionate filmmaker and cinematographer",
        img: Harsh,
        group: "CineCraft",
        instagram: "Deactivated currently",
        // linkedin: "https://www.linkedin.com/in/harsh-gupta-0a9035311/",
      },
      {
        id: 39,
        name: "Aditya Paliwal",
        role: "CineCraft Member",
        description: "A dedicated team member with a keen interest in cinematic creation and digital media, contributing to creative projects.",
        img: AdityaPaliwal,
        group: "CineCraft",
        instagram: "https://www.instagram.com/aditya_paliwaal/profilecard/?igsh=MXF2cHZpd2t6eTJyZg==",
        linkedin: "https://www.linkedin.com/in/aditya-paliwal-8045b12b8",
      },
      {
        id: 40,
        name: "Meet Yaduwanshi",
        role: "CineCraft Member",
        description: "A dedicated team member with a keen interest in cinematic creation and digital media, contributing to creative projects.",
        img: Meet,
        group: "CineCraft",
        instagram: "https://www.instagram.com/aditya_paliwaal/profilecard/?igsh=MXF2cHZpd2t6eTJyZg==",
        linkedin: "https://www.linkedin.com/in/aditya-paliwal-8045b12b8",
      }
      
      
    ];
    

  const [selectedGroup, setSelectedGroup] = useState("Lead");

 
  const filteredTeam = teamData.filter(
    (member) => member.group === selectedGroup
  );
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <TeamHome />
      <TeamLead />
      <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen`}>
        <TeamNavbar setSelectedGroup={setSelectedGroup} />
  
        <section className="max-w-8xl mx-auto px-4 py-8">
          <h2 className={`text-4xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {filteredTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
  
};

export default Team;
