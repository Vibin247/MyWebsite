import { ReactComponent as HTML } from "../SVGs/Logos/HTML.svg";
import { ReactComponent as CSS3 } from "../SVGs/Logos/Styles.svg";
import { ReactComponent as LESS } from "../SVGs/Logos/LESS.svg";
import { ReactComponent as SASS } from "../SVGs/Logos/SASS.svg";
import { ReactComponent as JS } from "../SVGs/Logos/JS.svg";
import { ReactComponent as EmberSVG } from "../SVGs/Logos/Ember.svg";
import { ReactComponent as ReactSVG } from "../SVGs/Logos/React.svg";
import { ReactComponent as Jquery } from "../SVGs/Logos/Jquery.svg";
import { ReactComponent as Cpp } from "../SVGs/Logos/Cpp.svg";
import { ReactComponent as Csharp } from "../SVGs/Logos/Csharp.svg";
import { ReactComponent as Java } from "../SVGs/Logos/Java.svg";
import { ReactComponent as Pgsql } from "../SVGs/Logos/Pgsql.svg";
import { ReactComponent as Unity } from "../SVGs/Logos/Unity.svg";

const markUpAndStyles = [
    {
        name: "HTML",
        stars: 4,
        svgcomponent:HTML
    },
    {
        name: "CSS",
        stars:4,
        svgcomponent: CSS3
    },
    {
        name: "SASS",
        stars:4,
        svgcomponent: SASS
    },
    {
        name: "LESS",
        stars:4,
        svgcomponent: LESS
    }
];

const frontEndSkills = [
    {
        name: "Javascript",
        stars: 4,
        svgcomponent: JS
    },
    {
        name: "Ember.js",
        stars:4,
        svgcomponent: EmberSVG
    },
    {
        name: "React",
        stars:2 ,
        svgcomponent: ReactSVG
    },
    {
        name: "JQuery",
        stars:3,
        svgcomponent: Jquery
    }
];

const otherTechSkills = [
    {
        name: "C++",
        stars:3 ,
        svgcomponent: Cpp
    },
    {
        name: "Java",
        stars:3 ,
        svgcomponent: Java
    },
    {
        name: "PostgreSQL (SQL)",
        stars:3 ,
        svgcomponent: Pgsql
    },
    {
        name: "Unity",
        stars:3 ,
        svgcomponent: Unity
    },
    {
        name: "C#",
        stars:2 ,
        svgcomponent: Csharp
    }
];

export {
    markUpAndStyles,
    frontEndSkills,
    otherTechSkills
}