import List from "components/List";
import { PROFILE_LIST } from "constants/profile";
import { ProfileWrap, Title, ProfileList } from "./styled";

function Profile() {
  return (
    <ProfileWrap>
      <Title>Profile</Title>
      <ProfileList>
        {PROFILE_LIST.map((item, index) => {
          return <List key={index} title={item.title} value={item.value} />;
        })}
      </ProfileList>
    </ProfileWrap>
  );
}

export default Profile;
