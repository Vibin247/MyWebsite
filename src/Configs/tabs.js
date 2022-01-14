import WelcomePage from "./../Pages/WelcomePage";
import Profile from "./../Pages/Profile";
import Professional from "./../Pages/Professional";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";

export const tabs = [
    {
      name:"home",
      display:"Home",
      component: WelcomePage
    },
    {
      name:"profile",
      display:"Profile",
      component: Profile
    },
    {
      name:"professional",
      display:"Experience",
      component: Professional
    },
    {
      name:"skills",
      display:"Technical Skills",
      component: Skills
    },
    {
      name:"contact",
      display:"Contact me",
      component: Contact
    },
    // {
    //   name:"resume",
    //   display:"Resume"
    // }
];