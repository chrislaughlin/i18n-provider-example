import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { INSIGHT_PROTOTYPE } from "./namespaces";

const TranslationWithHook = () => {
    const { t } = useTranslation(INSIGHT_PROTOTYPE);

    return (
        <p>
            <div>Translation using react hook</div>
            <div>{t('welcome')}</div>
        </p>
    );
};

export default TranslationWithHook;

