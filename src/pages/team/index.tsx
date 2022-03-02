import React from "react";
import { client } from "client";
import { TeamMember } from "components";
import { GetStaticPropsContext } from "next";
import { getNextStaticProps } from "@faustjs/next";

export default function Team() {
  const { useQuery } = client;
  const { generalSettings } = useQuery();
  const teamMembers = useQuery().teamMembers()?.nodes;

  return (
    <>
      <h1>{generalSettings.title}</h1>
      <p>{generalSettings.description}</p>
      <h2>Meet the team - {generalSettings.title}</h2>
      <main>
        {teamMembers.map((teamMember) => (
          <TeamMember key={teamMember.id ?? ""} teamMember={teamMember} />
        ))}
      </main>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: Team,
    client,
  });
}
