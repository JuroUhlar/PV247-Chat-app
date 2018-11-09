import * as React from 'react';
import * as PropTypes from 'prop-types';
import {defaultAvatarPath} from '../../constants/avatarConfig';

interface AvatarProps {
  readonly avatarPath?: string;
  readonly avatarSize?: string;
}

export const Avatar: React.SFC<AvatarProps> = ({
  avatarPath,
  avatarSize,
}) => (
  <img className={avatarSize}> src={require(avatarPath || defaultAvatarPath)}</img>
);

this.Avatar.displayName = 'Avatar';
this.Avatar.propTypes = {
  avatarPath: PropTypes.string,
  class: PropTypes.string,
};
