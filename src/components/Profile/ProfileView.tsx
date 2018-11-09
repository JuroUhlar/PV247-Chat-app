import * as React from 'react';
import {Avatar} from './Avatar';

export const ProfileView: React.StatelessComponent = () => (
    <div>
        <div>
            <section className="user-profile">
                <div className="avatar-container user-profile-block">
                    <h1 className="user-profile-header">Your Profile</h1>
                    <Avatar
                        avatarSize="avatar "
                        avatarPath="http://modernurbandesigners.com/Lists/Staff/Attachments/9/female-avatar-square.jpg"
                    />
                    <button className="btn btn-default">
                        Change Avatar
                    </button>
                </div>
                <form className="account-details user-profile-block">
                    <div className="form-group">
                        <label
                            htmlFor="profileView-inputEmail">
                            Email
                        </label>
                        <input
                            id="profileView-inputEmail"
                            name="profileView-inputEmail"
                            type="text"
                            defaultValue="Jane@Doe.com"
                            disabled
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label
                            htmlFor="profileView-nickname">
                            Nickname
                        </label>
                        <input
                            name="profileView-nickname"
                            id="profileView-nickname"
                            type="text"
                            defaultValue="JaneD"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6">
                                <button
                                    className="btn btn-primary btn-block"
                                    type="button"
                                    disabled={false}
                                > Submit
                                </button>
                            </div>
                            <div className="col-sm-6">
                                <button
                                    className="btn btn-default btn-block"
                                    type="button"
                                    disabled={false}
                                > Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    </div>
);

ProfileView.displayName = 'ProfileView';
