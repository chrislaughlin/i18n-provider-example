import React, { Fragment } from 'react';
import {useTranslation} from "react-i18next";

const LanguageControls = () => {
    const { i18n } = useTranslation();
    return (
        <Fragment>
            <div>
                Current Language: {i18n.language}
            </div>
            <button
                onClick={() => i18n.changeLanguage('en')}
            >
                EN
            </button>
            <button
                onClick={() => i18n.changeLanguage('fr')}
            >
                FR
            </button>
        </Fragment>
    );
};

export default LanguageControls;

