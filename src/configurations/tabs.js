import Home from "./../Pages/Home";
import Profile from "./../Pages/Profile";
import Professional from "./../Pages/Professional";

export const tabs = [
    {
      name:"home",
      URL:"/home",
      display:"Home",
      component: Home
    },
    {
      name:"profile",
      URL:"/profile",
      display:"Profile",
      component: Profile
    },
    {
      name:"professional",
      URL:"/professional",
      display:"Professional",
      component: Professional
    }
];