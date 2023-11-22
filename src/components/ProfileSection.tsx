import DescriptionComponent from './ProfileSection/DescriptionComponent';
import ProfileCard from './ProfileSection/ProfileCard';
import ProfileHeader from './ProfileSection/ProfileHeader';
import ProfileIconSection from './ProfileSection/ProfileIconSection';

export default function ProfileSection() {
  return (
    <>
      <div className='flex flex-col z-20 p-5 items-center gap-1 justify-center relative top-14'>
        <ProfileHeader />
        <DescriptionComponent />
        <ProfileIconSection />
        <div className='w-auto mt-5 justify-center overflow-auto text-center z-10 flex flex-col gap-7 md:w-[450px]'>
          <ProfileCard href={'https://www.kevinsutandi.com'}>
            Photography Portfolio
          </ProfileCard>
          <ProfileCard href={'https://www.github.com/kevinsutandi'}>
            Github Profile (Coding Projects)
          </ProfileCard>
          <ProfileCard href={'https://www.instagram.com/38social.au/'}>
            Grow your business with <span className='font-bold'>38Social</span>
          </ProfileCard>
        </div>
      </div>
    </>
  );
}
