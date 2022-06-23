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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vestibulum, sapien eget fermentum facilisis, ipsum nisi mattis
            metus, eget congue quam nibh porttitor quam. Nullam tincidunt et
            nisl quis mattis. Donec a eleifend turpis. Phasellus vitae augue
            pellentesque velit maximus finibus in in lacus. Morbi vel nisi vitae
            purus tempus feugiat a et lacus. Donec congue dapibus felis, ac
            lobortis turpis fringilla eget. Duis nec venenatis lectus, et ornare
            nisi. Integer eleifend nulla vel porttitor varius. Duis est massa,
            pellentesque non interdum sagittis, bibendum non risus.
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
