import proyectoSvg from "./proyecto/overview.svg";
import proyectoStraightSvg from "./proyecto/overviewStraight.svg";

import arrowUp from "./arrow-circle-up.svg";

export const images = {
    vidnote: {
        overview: require("./vidnote/overview.png"),
        overviewStraight: require("./vidnote/overview-straight.png"),
        login: require("./vidnote/login-2.png"),
        listNote: require("./vidnote/note-list-page.png"),
        takingNote1: require("./vidnote/note-page.png"),
        takingNote2: require("./vidnote/note-page-2.png"),
        viewNote: require("./vidnote/view-note-page.png"),
        searchPage: require("./vidnote/search-page.png"),
        chromeExtension: require("./vidnote/chrome-extension.jpg"),
    },
    proyecto: {
        overviewSvg: proyectoSvg,
        overview: require("./proyecto/overview.png"),
        overviewStraightSvg: proyectoStraightSvg,
        overviewStraight: require("./proyecto/overviewStraight.png"),
        login: require("./proyecto/app-login.png"),
        landingPage: require("./proyecto/landing-page.png"),
        massivePost: require("./proyecto/make-massive-post.png"),
        massivePostReady: require("./proyecto/massive-post-ready.png"),
        massivePortSelectHouse: require("./proyecto/massive-post-select-house.png"),
        pubSubBirthday: require("./proyecto/pub-sub-birthday.png"),
        warningMailling: require("./proyecto/warning-mailing.jpg"),
    },
    portrait: require("./Avatar-removebg.png"),
    arrowUp: arrowUp,
};
