import SocialLink from "./SocialLink";
import {
  IoLogoGithub,
  IoMailUnreadOutline,
  IoLogoInstagram,
} from "solid-icons/io";

import { FiMail } from "solid-icons/fi";

export default function Bio() {
  return (
    <div className="px-20">
      <div className="md:flex flex-row gap-16 lg:gap-32 max-w-4xl mx-auto my-16">
        <div className="flex flex-col gap-6">
          <h3>Adrian Casares</h3>
          <p>
            My name is Monsieur Adrian Casares. I've been maintaining this
            website on and off since 2019, but most stuff you'll find is from
            2021 and onwards. I'm a student software engineer in high school,
            and I'm currently working on Canvas+ and Scorecard (both
            school-related chrome extensions). Right now, I make stuff hoping to
            make a small contribution to my interests. In the future, I'm
            interested in Artificial Intelligence -- We can eliminate damaging
            job shortages and decrease our dependence on the harmful parts of
            tech.
          </p>
        </div>
        <div className="mt-14 w-52 max-w-4xl">
          <p className="text-primary-accent pl-2 font-mono mb-2">find me</p>
          <SocialLink
            name="adriancasares"
            url="https://github.com/adriancasares/"
          >
            <IoLogoGithub />
          </SocialLink>
          <SocialLink name="email me" url="/email/">
            <FiMail />
          </SocialLink>
          <SocialLink
            name="adrian.main.character"
            url="https://instagram.com/adrian.main.character/"
          >
            <IoLogoInstagram />
          </SocialLink>
        </div>
      </div>
    </div>
  );
}
