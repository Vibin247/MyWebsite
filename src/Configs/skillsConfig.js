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
        svgcomponent:HTML
    },
    {
        name: "CSS",
        svgcomponent: CSS3
    },
    {
        name: "SASS",
        svgcomponent: SASS
    },
    {
        name: "LESS",
        svgcomponent: LESS
    }
];

const frontEndSkills = [
    {
        name: "Javascript",
        svgcomponent: JS
    },
    {
        name: "Ember.js",
        svgcomponent: EmberSVG
    },
    {
        name: "React",
        svgcomponent: ReactSVG
    },
    {
        name: "JQuery",
        svgcomponent: Jquery
    }
];

const otherTechSkills = [
    {
        name: "C++",
        svgcomponent: Cpp
    },
    {
        name: "Java",
        svgcomponent: Java
    },
    {
        name: "PostgreSQL (SQL)",
        svgcomponent: Pgsql
    },
    {
        name: "Unity",
        svgcomponent: Unity
    },
    {
        name: "C#",
        svgcomponent: Csharp
    }
];

export {
    markUpAndStyles,
    frontEndSkills,
    otherTechSkills
}