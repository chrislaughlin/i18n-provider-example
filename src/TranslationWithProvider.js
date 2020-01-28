import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';
import { INSIGHT_PROTOTYPE } from "./namespaces";

const TranslationWithProvider = ({t}) => {
    return (
        <p>
            <div>Translation using provider passed prop</div>
            <div>{t('welcome')}</div>
        </p>
    );
};

export default withTranslation(INSIGHT_PROTOTYPE)(TranslationWithProvider);

