import React from 'react';
import {
    I18nextProvider
} from 'react-i18next';

// import i18n from './i18n';
import Component from "./Component";
import i18n from "i18next";

const NAME_SPACE = 'SUB_COMPONENT_ONE';

const i18nBundles = [
    ['en',
        NAME_SPACE,
        {
            subComponentOne: 'This is the sub component one'
        }
    ],
    [
        'fr',
        NAME_SPACE,
        {
            subComponentOne: 'Ceci est le sous-composant'
        }
    ]
]

const SubComponentOne = () => {
    return (
        <Component/>
    )
}

export default SubComponentOne;
export {
    i18nBundles
}
