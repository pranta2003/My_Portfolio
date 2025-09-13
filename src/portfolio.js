/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation


// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pranta Kumer Pandit",
  title: "Hi all, I'm Pranta",
  subTitle: emoji(
    "A passionate Competitive Programmer and Learner of MERN Developing 🚀 having an experience of building Web with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1AlROCKK71Tlo08VHVDDo8O3V4XALwuL-/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pranta2003",
  linkedin: "https://www.linkedin.com/in/Pranta-Kumer-Pandit/",
  gmail: "prantakumerpandit@gmail.com",
  gitlab: "https://gitlab.com/pranta2003",
  facebook: "https://www.facebook.com/pranta.kumer.pandit",
  medium: "https://medium.com/@prantakumerpandit",
  stackoverflow: "https://stackoverflow.com/users/31478235/pranta-kumer-pandit",
  instagram: "https://www.instagram.com/__ishan_pkp/?igsh=MXE3b2pmY3AyeTRkOA%3D%3D#",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
   
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
  skillName: "C",
  fontAwesomeClassname: "fas fa-code"
},
{
  skillName: "C++",
  fontAwesomeClassname: "fas fa-code"
},
{
  skillName: "Java",
  fontAwesomeClassname: "fab fa-java"
},

{
  skillName: "Linux",
  fontAwesomeClassname: "fab fa-linux"
},

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bangladesh University of Business and Technology",
      logo: require("./assets/images/bubtLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2023 - July 2027",
      desc: "Participated in the research of our University course and profoundly learning about this.Ranked top 15% in the computer program. Took courses about Software Engineering, Web Security, Operating Systems, ...",

    },
    {
      schoolName: "Notre Dame Collage, Mymensingh",
      logo: require("./assets/images/ndcLogo.png"),
      subHeader: "Higher Secondery Certificate (HSC)",
      duration: "July 2019 - March 2021",
      desc: "Rank Top 10% in the HSC exam in our Section-2. Science Department. ",
      descBullets: ["Was a member of the Programming Club of our collage."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
     {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
   
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

 // Work Experience
const workExperiences = {
  display: true,
  experience: [
    { role: "For Future ." }
  ]
};
    
    
  


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Small Projects That Have a Big Impact",
  projects: [
    {
      image: require("./assets/images/Quiz_AppLogo.png"),
      projectName: "Quiz_App",
      projectDesc: "A web-based quiz application that allows users to test their knowledge across multiple topics. Features include timed quizzes, score tracking, and an interactive leaderboard.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://Quiz_app.me/"
        }
        // You can add extra buttons here.
      ]
    },
  
    {
      image: require("./assets/images/chronomateLogo.png"), // <-- add your own image
      projectName: "Chronomate",
      projectDesc: "A modern Python-based smartwatch software combining advanced timekeeping, health tracking, exclusive games, and customizable watch faces. Designed for tech enthusiasts seeking both utility and entertainment.",
      footerLink: [
        {
          name: "Project Details",
          url: "#" // you can replace with a GitHub repo or website
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "BUIPC Participant 2024",
      subtitle:
        "Selected as a participant in the BUBT Intra Programming Contest (BUIPC) 2024 among top students of the university.",
      image: require("./assets/images/buipcLogo.png"), // <-- put your BUIPC logo here
      imageAlt: "BUIPC Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/19ybc_IGxtDBVMyq2b5gPA7J_bjUzZB_5/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "For future",
  displayMediumBlogs: false,
  blogs: [
    { url: "https://example.com/my-post", title: "My first post" }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "I will add this in Future.",
    
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: "For Future",
  subtitle: "Tech talks and more will be available here.",
  podcast: [
    {
      title: "Will be added.",
      link: "#"
    }
    // more episodes…
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+8801518963617",
  email_address: "prantakumerpandit@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
