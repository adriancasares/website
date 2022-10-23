import ArticleWrapper from "../ArticleWrapper";
import Heading from "../Heading";
import Image from "../Image";
import InlineCode from "../InlineCode";
import Split from "../Split";
import TextBlock from "../TextBlock";

export default function Article() {
  return (
    <ArticleWrapper id="new-club-website">
      <TextBlock>
        <p>
          Alright, so as of this year I'm a captain of the Programming in
          Practice club at my school, and so far one of the big things I've
          spearheaded is the new website. I used a ton of tools to make it, most
          of which were new to me, so I thought I'd write a post about it. Some
          of the features include:
        </p>
        <ul>
          <li>Server side rendering</li>
          <li>Code/content separation</li>
          <li>Text messages to members</li>
          <li>Cool animations</li>
        </ul>
        <Heading id="old-website">Old Website</Heading>
        <p>
          So where had we gone wrong with the old website? First of all, we used
          wordpress, which as I understand is quickly falling out of favor. In
          terms of design, it's easy to fall into a trap of excessive form over
          function. In other words, the old website was an eyesore of
          information.
        </p>
        <Image
          border={true}
          src="old-website.png"
          alt="Old website"
          caption="The Wayback machine didn't load the CSS- the site looked a little better with a dark theme but this is the gist."
        />
        <p>
          In general with a website builder, I find it's also hard to edit
          content without design distractions, which brings me to code/content
          separation. I designed the new website so editing the content of the
          website was as easy as possible by isolating it from the design or
          function of the website. The goal of this is to keep information up to
          date, which was the main problem with the old website.
        </p>
        <Heading id="astro">Astro</Heading>
        <p>
          I often promise myself I'll diversify my projects and not just start
          another frontend project, but I always end up breaking that promise.
          With every new project, I make leaps and bounds in terms of my
          skillset, and I'm always learning a new tool which lets me work
          faster. So, naturally I tried out tons of new tools for this project.
        </p>
        <p>
          My initial plan for this website was for it to be static, so my first
          decision was to use Astro. I quickly diverged from this as I kept
          needing more features, but Astro is still a good fit.
        </p>
        <p>
          Astro has a good reputation for static-site generation, but the hype
          centers around the <b>Island Architechture</b>. This lets you fully
          separate parts of your code, which has tons of uses. First, you can
          have different hydration settings for each island. For example, your
          interactive footer might only hydrate when you scroll to it, while
          your header might hydrate immediately. I also see Islands being used
          to separate vanilla javascript and CSS to maintain some organization.
        </p>
        <Image src="astro-islands.png" alt="Island Architechture" />
        <p>
          Although Astro happens to solve a lot of problems with vanilla
          HTML/CSS/Javascript, the seasoned web developer will always chose a
          framework, and the awesome thing with Astro is you can use mutliple.
          For our website, we use Astro components (which are essentially
          vanilla HTML with SSR) for headers and some text blocks, and React for
          the rest (buttons, interactive scroll, etc).
        </p>
        <p>
          This feature is so cool because <b>it just works.</b> I can definetely
          see myself using this in the future because mutliple frameworks used
          to be slow and clunky, and now they're the complete opposite.
        </p>
        <Heading id="strapi">Strapi</Heading>
        <p>
          The next problem was the afformentioned code/content separation.
          Pretty much, we're looking for a no-code way to update content, which
          is called a content management system (CMS). Wordpress is an example
          of a CMS, and obviously that didn't work, so what we needed was a{" "}
          <b>headless CMS</b>. While a tool like Wordpress manages the
          everything, from the code under the hood to the design, a headless CMS
          is only focused on content and/or theme. This lets us have a lot more
          control over form and function than any other option.
        </p>
        <Image
          border={true}
          src="strapi-features.png"
          alt="Strapi feature list"
          caption="Strapi has a lot of features."
        />
        <p>
          Without further ado, Strapi. They market themselves as a
          build-your-own API more than a CMS, but we use it as a CMS. It's a
          free, self-hosted, open-source web app that lets you make your own
          content types and fetch them with an API.
        </p>
        <Split
          left={
            <Image src="strapi-type-builder.png" alt="Strapi type builder" />
          }
          leftWidth="w-1/2"
          right={
            <p>
              This is the types builder. You can have single types, which I
              think of as global variables. Our only single type is{" "}
              <b>header</b>, which stores the current title, a short
              decsription, image, etc. of the website. We mainly use collection
              types, which are just lists of objects. The screenshot above shows
              captains, but we also have collections for meeting dates,
              description paragrahs, and users. The users collection is just a
              list of people who can edit the website, which is fully handled by
              Strapi. We don't have to worry about logins, password resets, or
              anything like that. All we do is assign permissions and the rest
              is done for us.
            </p>
          }
          rightWidth="w-1/2"
        />
        <Split
          left={
            <Image src="strapi-api-response.png" alt="Strapi API response" />
          }
          leftWidth="w-1/2"
          right={
            <p>
              All the website has to do is access the API route and load the
              content during the render. Once it's set up it's so easy to use. I
              will say that when setting up Strapi, it basically downloads the
              code and runs the web app on your computer. Everything is
              editable, and evidently Strapi wants you to build other parts of
              your API with their architechture. However, we don't do this. We
              have api.lasapip.com for Strapi, and "lasapip.com/api" routes for
              everything else, which is mostly text message related.
            </p>
          }
          rightWidth="w-1/2"
        />
        <p>
          To host Strapi, we took Wordpress off our existing DigitalOcean
          droplet and added a Docker container with Strapi and an SQLite
          database (the default suggested by Strapi). I got to learn some about
          Docker from this, but I also had other people handle this for me who
          were more experienced. Docker is an industry standard at this point,
          so I'm sure I'll be using it more in the future, and also, if you want
          to learn more, there's no shortage of help on the internet.
        </p>
        <Heading id="frontend">The Frontend</Heading>
        <p>
          I'll go section by section to detail how I made the website. Firstly,
          though, the two important libraries in all of this are{" "}
          <InlineCode>tailwind-css</InlineCode> and{" "}
          <InlineCode>react-icons</InlineCode>. They're awesome, and I use them
          in almost all of my web projects. TailwindCSS lets you write CSS in
          your class names, which is convenient but also helps you keep
          consistency, especially with colors. React Icons just compiles a bunch
          of icon packs into a single libary of React components, which is super
          convenient. And obviously, React is the framework of choice when not
          using Astro components (again, those are just plain HTML). React and
          Tailwind are both becoming industry standards, so I won't cover them
          too much.
        </p>
        <Split
          left={<Image src="header.png" alt="Website header" />}
          leftWidth="w-1/2"
          right={
            <p>
              The header is what will eventually feature a slideshow of images
              with a nice gradient into the next section, but for now we have a
              title, description, and call to action. This is mostly an Astro
              component besides the button, which just means it's lightweight
              because it's not interactive.
            </p>
          }
          rightWidth="w-1/2"
        />
        <Split
          left={
            <Image
              src="why-join-paragraphs.jpeg"
              alt="Reasons to join paragraphs"
            />
          }
          leftWidth="w-1/2"
          right={
            <p>
              The "why join" paragraphs are just a list of text blocks made cool
              with parallax scrolling. Usually parallax means either elements
              with different sroll speeds for a 3D effect, or running animations
              based on your scroll position. These are frequently seen on the
              Apple website, and I wanted to try it out. In actuallity, this
              effect is pretty simple, but it gives off the same feeling. Either
              way, animation is chronically difficult to express in a still
              image, so if you want to see it for yourself, it's at{" "}
              <a href={"https://lasapip.com/"}>https://lasapip.com</a>. There's
              a scroll listener to adjust the opacity and slightly move the text
              based on your position, but most of the work is done by{" "}
              <InlineCode>position: sticky</InlineCode> elements with large
              padding. The text stays at the top of the screen for a while as
              you scroll until it's gone, and then it's replaced by the next
              text block.
            </p>
          }
          rightWidth="w-1/2"
        />
        <Image src="meetings.png" alt="Meetings section" border={true} />
        <p>
          The meetings section is pretty simple, and there's also plenty of room
          for improvement, like showing a "No Next Meeting Yet!" text when
          relevant, or adding support for non-meeting events, but for now it
          works. The Load More button has a cool animation that I achieved with{" "}
          <InlineCode>framer-motion</InlineCode>. I used this library throughout
          the project for some flair animations. For example, scrolling down,
          the "1, 2, 3" of the paragraphs section moves to a horizontal layout
          as you scroll, all possible with Framer Motion. They focus a lot on
          trans-positional animation: animating an element to move from two
          completely different parts of the page is a piece of cake. Also, out
          of the box the animations are very bouncy (which started said trend in
          web design). That just makes the website more fun while at the same
          time feeling more professional.
        </p>
        <Split
          left={
            <div className="flex flex-col gap-4">
              <Image src="more-stuff.jpeg" alt="More stuff section" />
              <Image src="captains.jpeg" alt="Captains section" />
            </div>
          }
          leftWidth="w-1/2"
          right={
            <p>
              More stuff is coming to the "more stuff" section, but for now it
              just shows Captains. The pill-shaped button animates into the
              content when you click on it. I was really wanting to make
              something like Apple's Dyanmic Island in terms of animation, but
              the text was stretching during the animation, so I settled. Either
              way, it does it's job at concealing the content until you want to
              see it, and it works as a footer.
            </p>
          }
          rightWidth="w-1/2"
        />
        <Heading id="conclusion">Conclusion</Heading>
        <p>
          Lastly, I use Vercel to host the website, which replaces the default
          static generation with server side rendering. Basically, instead of
          compiling the website into the same HTMl until the website code is
          updated, Vercel compiles the website every time it's accessed, which
          keeps the content up to date. Honestly, that doesn't make a huge
          difference, I use Vercel because it's free and easy to use. Deployment
          is much faster than GitHub pages or Firebase (which is how I host this
          website, deployment can take up to 5 minutes). Lastly, theres a ton of
          free features like serverless functions and image optimization which I
          ended up using. I'll cover that in a future post, because it took just
          as long as the website to make.
        </p>
      </TextBlock>
    </ArticleWrapper>
  );
}
