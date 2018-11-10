import * as React from 'react';
import * as PropTypes from 'prop-types';
import {defaultAvatarPath} from '../../constants/avatarConfig';

interface AvatarProps {
  readonly avatarPath?: string;
  readonly avatarSize?: string;
  readonly avatarPos?: string;
}

export const Avatar: React.SFC<AvatarProps> = ({
  avatarPath,
  avatarSize,
  avatarPos,
}) => (
  <div className={avatarPos}>
    <img
      className={avatarSize}
      src={avatarPath || defaultAvatarPath}
    />
  </div>
);

this.Avatar.displayName = 'Avatar';
this.Avatar.propTypes = {
  avatarPath: PropTypes.string,
  class: PropTypes.string,
  avatarPos: PropTypes.string,
};
