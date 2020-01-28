import React from 'react';
import ReactDOM from 'react-dom';
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { INSIGHT_PROTOTYPE } from "./namespaces";

//External Component i18n bundles
import { i18nBundles as subComponentOneBundles } from "./components/subComponentOne";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                [INSIGHT_PROTOTYPE]: {
                    welcome: "Welcome to React and react-i18next"
                }
            },
            fr: {
                [INSIGHT_PROTOTYPE]: {
                    welcome: 'Bienvenue dans React et react-i18next'
                }
            }
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false,
            react: {
                wait: true,
            }
        }
    });

subComponentOneBundles.forEach(bundle => i18n.addResourceBundle(...bundle));

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
