export const CONTENT_VIEW_ROUTE = '/content';

export const PROFILE_VIEW_ROUTE = `${CONTENT_VIEW_ROUTE}/profile-view`;

export const CHANNEL_VIEW_ROUTE = `${CONTENT_VIEW_ROUTE}/channel-view`;
export const SPECIFIC_CHANNEL_VIEW_ROUTE = (channelId: Uuid) => `${CHANNEL_VIEW_ROUTE}-${channelId}`;

export const LOGIN_ROUTE = '/';

