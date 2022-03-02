import Image from "next/image";
import { TeamMember as TeamMemberTypes } from "client";

interface TeamMemberProps {
  teamMember: TeamMemberTypes;
}

export default function TeamMember({ teamMember }: TeamMemberProps) {
  const teamMemberImg = teamMember?.profilePic?.mediaItemUrl;

  return (
    <>
      <Image
        src={teamMemberImg}
        alt={teamMember?.profilePic?.altText}
        width={teamMember?.profilePic?.mediaDetails.width}
        height={teamMember?.profilePic?.mediaDetails.height}
      />
      <h2>{teamMember?.fullName}</h2>
      <div dangerouslySetInnerHTML={{ __html: teamMember?.bio ?? "" }} />
    </>
  );
}
