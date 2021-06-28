import Home from "./../Pages/Home";
import Profile from "./../Pages/Profile";
import Professional from "./../Pages/Professional";
import Skills from "../Pages/Skills";

export const tabs = [
    {
      name:"home",
      display:"Home",
      component: Home
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
      display:"Skills",
      component: Skills
    }
];