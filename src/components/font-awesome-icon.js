import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

/* Add any additional icons to the library */
library.add(fab, fas);

const Icon = ({ ...props }) => {
    const icon = [props.data.prefix, props.data.icon];
    const iconClassName = `icons ${props.data.iconClassName}`;
    return (
        <a href={props.data.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
                icon={icon}
                className={iconClassName}
                title={props.data.name}
                size="3x"
            />
        </a>
    );
};

export default Icon;

Icon.propTypes = {
    data: PropTypes.exact({
        name: PropTypes.string,
        prefix: PropTypes.string,
        icon: PropTypes.string,
        iconClassName: PropTypes.string,
        url: PropTypes.string,
    }),
};

Icon.defaultProps = {
    data: {
        name: '',
        prefix: '',
        icon: '',
        iconClassName: '',
        url: '',
    },
};
