import React from "react"


export function AvatarPicture({ user, size }) {
    // console.log(props);
    let classSize = '';
    if (size === '24px') classSize = 'small'
    else if (size === '110px') classSize = 'large'
    const bgColor = user.avatarColor ? user.avatarColor : '#e4e5e7';
    // if (isGrey) bgColor = '#e4e5e7'
    const name = user.username || user.fullname || user.name;
    // console.log(user);
    // console.log(user.username);

    return (
        <div className="user-avatar-picture">
            {!user.imgUrl &&
                <div className={`user-avatar ${classSize}`} style={{ backgroundColor: bgColor, width: size, height: size }}>
                    <p>{name[0].toUpperCase()}</p>
                </div>
            }
            {user.imgUrl &&
                <div className="user-picture" style={{ width: size, height: size }}>
                    <img src={`${user.imgUrl}`} alt={<p>{name[0].toUpperCase()}</p>} />
                </div>
            }
        </div>
    )
}