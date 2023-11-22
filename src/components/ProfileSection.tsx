import DescriptionComponent from './ProfileSection/DescriptionComponent';
import ProfileCard from './ProfileSection/ProfileCard';
import ProfileHeader from './ProfileSection/ProfileHeader';
import ProfileIconSection from './ProfileSection/ProfileIconSection';

export default function ProfileSection() {
  return (
    <div className='flex flex-col items-center gap-1 justify-center relative top-28 bg-gradient-to-b from-transparent to-white to-[20%] dark:to-slate-900'>
      <ProfileHeader />
      <DescriptionComponent />
      <ProfileIconSection />
      <div className='w-[400px] mt-5 z-10 justify-center text-center flex flex-col gap-7'>
        <ProfileCard
          href={'https://www.kevinsutandi.com'}
          text={'Photography Website'}
        />
        <ProfileCard
          href={'https://www.github.com/kevinsutandi'}
          text={'GitHub Profile (Coding Portfolio)'}
        />
      </div>
    </div>
  );
}
