import { Heading } from "@/components/base";

import { profile } from "@/data/profile/profile";

const Profile = () => {
  const responsiveClasses =
    "flex-col md:flex-row items-start gap-[0.4rem] md:gap-0 md:items-center md:min-h-[6.4rem] min-h-[12rem] h-0";

  return (
    <section className={`flex w-full justify-between ${responsiveClasses}`}>
      <Introduce />
      <Contact />
    </section>
  );
};

export default Profile;

const Introduce = () => {
  return (
    <div className="flex flex-col h-full justify-between items-start">
      <Heading size="h1">{`${profile.name}`}</Heading>
      <p className="text-md font-bold">{profile.description}</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-col min-h-[6.4rem] gap-[0.2rem] justify-center items-start">
      <p className="text-sm h-[1.2rem]">
        GitHub :{" "}
        {
          <a href={profile.contact.github} target="_blank" rel="noreferrer">
            {profile.contact.github}
          </a>
        }
      </p>
      <p className="text-sm h-[1.2rem]">
        Blog :{" "}
        {
          <a href={profile.contact.blog} target="_blank" rel="noreferrer">
            {profile.contact.blog}
          </a>
        }
      </p>
      <p className="text-sm h-[1.2rem]">E-Mail : {profile.contact.email}</p>
      <p className="text-sm h-[1.2rem]">Phone : {profile.contact.phone}</p>
    </div>
  );
};
