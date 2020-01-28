import React from 'react';
import { withTranslation} from 'react-i18next';

const Component = ({t}) => {
    return (
        <p>
            <div>Sub Component One</div>
            <div>{t('subComponentOne')}</div>
        </p>
    );
};

export default withTranslation('SUB_COMPONENT_ONE')(Component);

