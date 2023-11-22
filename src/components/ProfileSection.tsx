import DescriptionComponent from './ProfileSection/DescriptionComponent';
import ProfileCard from './ProfileSection/ProfileCard';
import ProfileHeader from './ProfileSection/ProfileHeader';
import ProfileIconSection from './ProfileSection/ProfileIconSection';

export default function ProfileSection() {
  return (
    <div className='flex flex-col p-5 items-center gap-1 justify-center relative top-14 bg-gradient-to-b from-transparent to-white to-[20%] dark:to-slate-900'>
      <ProfileHeader />
      <DescriptionComponent />
      <ProfileIconSection />
      <div className='w-auto mt-5 z-10 justify-center text-center flex flex-col gap-7 md:w-[450px]'>
        <ProfileCard
          href={'https://www.kevinsutandi.com'}
          text={'Photography Website'}
        />
        <ProfileCard
          href={'https://www.github.com/kevinsutandi'}
          text={'GitHub Profile (Coding Portfolio)'}
        />
        <ProfileCard
          href={'https://www.instagram.com/38social.au/'}
          text={'38Social Instagram!!!'}
        />
      </div>
    </div>
  );
}
