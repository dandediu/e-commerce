import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { directorySelectors } from 'store/directory';
import MenuItem from 'components/menu-item';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

Directory.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imageUrl: PropTypes.string,
      id: PropTypes.number,
      linkUrl: PropTypes.string,
    }),
  ),
};

const mapStateToProps = createStructuredSelector({
  sections: directorySelectors.selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
