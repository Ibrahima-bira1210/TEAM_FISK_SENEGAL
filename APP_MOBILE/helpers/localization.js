import * as Localization from 'expo-localization';
import i18n from 'i18n-js';


i18n.translations = {

    en: {
        title1: 'Report anonymously',
        title2: 'Send messages',
        title3: 'Join the fight against corruption',
        text1: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero hic nesciunt atque fuga numquam minima dolores quis ullam sequi',
        text2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero hic nesciunt atque fuga numquam minima dolores quis ullam sequi',
        text3: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero hic nesciunt atque fuga numquam minima dolores quis ullam sequi',
        welcome: "Welcome to",
        message: "Denounce corruption with confidence",
        goal1: "which offers you the opportunity ",
        goal2: "to report cases of corruption you have experienced.",
        go: "How does it work ?",
        titleGetOrg: "Report corruption",
        textGetOrg: "You have witnessed cases of corruption? \n Please report them in confidence.",
        infoText: "The whole process is anonymous.",
        reportTitle: "Hi ! Thank you for helping.",
        buttonScanCode: "Scan code",
        reportText: "What is the act of corruption of which you have been the victim?"
    },

    fr: {
        title1: 'Signalez anonymement',
        title2: 'Envoyez des messages',
        title3: 'Participez à la lutte contre la corruption',
        text1: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero hic nesciunt atque fuga numquam minima dolores quis ullam sequi',
        text2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero hic nesciunt atque fuga numquam minima dolores quis ullam sequi',
        text3: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero hic nesciunt atque fuga numquam minima dolores quis ullam sequi',
        welcome: 'Bienvenue sur',
        message: "Dénoncez la corruption en  toute sérénité",
        goal1: "qui vous ofrre la possibilité",
        goal2: "de signaler des cas de corruption vécus.",
        go:"Comment ça marche ?",
        titleGetOrg: "Signaler un cas",
        textGetOrg: "Vous avez été témoin de cas de corruption? \n Merci de les signaler en toute confidence.",
        infoText: "Tout le processus est anonyme.",
        reportTitle: "Merci de nous aider.",
        buttonScanCode: "Scanner un code",
        reportText: "Quel est l'acte de corruption dont vous avez été victime ?"
    }
}

i18n.fallbacks = true;

i18n.locale = Localization.locale;

export default i18n;