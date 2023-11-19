import { useState, useEffect } from 'react';

export const Profile = ({liffObject}) => {
    const [profile, setProfile] = useState(undefined); // 更新関数
    useEffect(() => { // コンポーネントのトップに記載する（第一引数、第二引数あり）
      if(liffObject.isLoggedIn()) { // Reactが元々持っている関数isLoggedIn（ログインしているか確認する関数）
        liffObject.getProfile().then((fetchedProfile) => {
          setProfile({
            displayName: fetchedProfile.displayName,
            pictureUrl: fetchedProfile.pictureUrl
          })
        })
      }
    }, [liffObject])
    if (!profile) return; // プロフィールが存在しなければ、何もしない
    return (
      <>
        <h1>{profile.displayName}</h1>
        <img
          className="avatar"
          src={profile.pictureUrl}
          alt={'Photo of ' + profile.displayName}
          style={{
            width: 90,
            height: 90
          }}
        />
      </>
    );
}
