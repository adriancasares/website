import { Link } from "solid-app-router";
import ArticleWrapper from "../ArticleWrapper";
import Heading from "../Heading";
import Image from "../Image";
import InlineCode from "../InlineCode";
import TextBlock from "../TextBlock";

export default function Article() {
  return (
    <ArticleWrapper id="behind-canvas-plus">
      <TextBlock>
        <p>
          I turned off my old website a few months ago, and when I wrote my{" "}
          <Link href="https://www.adriancasares.com/blog/coding-outreach-middle-school">
            <a>last post</a>
          </Link>
          , I had the perfect opportunity for a redesign. I rushed into the
          coding with SolidJS, TailwindCSS, and Vite. This provided a fast and
          modern developer experience but wasn't the best fit for my needs.
        </p>

        <Heading id="old-website">Old Website</Heading>

        <p>
          Last summer, I was booting up my blog (again!) and chose NextJS for my
          framework. I think that's always a solid choice, but I was
          disappointed by its static site generation. Truthfully, this was a
          poor approach in the first place. I thought GitHub Pages was the only
          free hosting option! My eyes are now wide open to all the services
          supporting server-side rendering.
        </p>

        <p>
          My project was as simple as it gets: A NextJS site with as few
          dependencies as I could afford. No CSS library or even Typescript. I
          used markdown to write posts, CSS modules to style the surrounding
          website, and <InlineCode>npm run build && npm run export</InlineCode>{" "}
          to deploy with GitHub actions.
        </p>

        <b>Pros:</b>
        <li>
          <ul>Simple and beginner-friendly</ul>
        </li>

        <b>Cons:</b>
        <ul>
          <li>Libraries like framer-motion don't work with static sites</li>
          <li>Hooks like useEffect are convoluted in React</li>
          <li>No Typescript</li>
          <li>No CSS Library (CSS modules are the worst!)</li>
        </ul>

        <p>
          My website collected a lot of dust because of the developer
          experience, and it was frustrating being limited by static sites.
        </p>

        <Heading id="time-for-an-update">Time for an Update</Heading>

        <p>
          Without even thinking about it, I started working in SolidJS. I had
          used it the last few weeks on a Canvas+ overhaul (stay tuned!) and was
          in love with the framework.{" "}
        </p>

        <ul>
          <li>It takes inspiration from React, so it has a readable syntax.</li>
          <li>
            Hooks like <InlineCode>createEffect</InlineCode> are much simpler
            than the react counterparts.
          </li>
          <li>SolidJS is blazingly fast in benchmarks.</li>
        </ul>

        <p>Here's what I had in mind for my website:</p>

        <ul>
          <li>Clean and colorful UI</li>
          <li>Free hosting</li>
          <li>More powerful posts than markdown</li>
        </ul>

        <Heading id="project-setup">Project Setup</Heading>

        <p>
          Let's get this website running! I started with a{" "}
          <Link href="https://github.com/adriancasares/solid-vite-boilerplate">
            <a>custom-made</a>
          </Link>{" "}
          template for SolidJS with Vite and added TailwindCSS, which I love. A
          library like Solid has a small ecosystem, but Tailwind has its own
          plugin system I can include effortlessly.
        </p>

        <p>
          In <InlineCode>index.tsx</InlineCode>, I set up my routing components
          with <InlineCode>solid-app-router</InlineCode>.
        </p>

        <Image
          src="app-router.png"
          alt="Routing components with solid-app-router"
        />

        <p>
          Notice that my articles have paths ending{" "}
          <InlineCode>/:id</InlineCode>. This means the Article component is
          shown for any route beginning with <InlineCode>/blog</InlineCode>, and
          the <InlineCode>id</InlineCode> becomes a variable in my Article
          component with <InlineCode>useParams</InlineCode>.
        </p>

        <Image src="post-params.png" alt="Using useParams in a post." />

        <p>
          I get the <InlineCode>id</InlineCode> parameter and use it to fetch
          the corresponding component file, as shown below.
        </p>

        <Image
          src="posts-as-components.png"
          alt="Each post is a SolidJS component."
          caption="Having each post as a SolidJS component grants more creative freedom should I need it."
        />

        <p>
          <InlineCode>solid-app-router</InlineCode> has other utilities,
          including Link components and the <InlineCode>navigate</InlineCode>{" "}
          function. I used these to make the page transition with a fade. One
          thing I wasn't able to figure out was a 404 page. For now, going to a
          non-existent route just shows a blank screen.
        </p>

        <Image src="page-transition.gif" alt="Page transition" />

        <p>
          To pull this off, I wrapped the{" "}
          <InlineCode>ArticlePreview</InlineCode> component in an anchor tag,
          AKA a link. Using <InlineCode>event.preventDefault()</InlineCode>, the
          link will use the
          <InlineCode>navigate</InlineCode> function to change pages once the
          animation plays. Although the anchor tag doesn't handle navigation, it
          shows “Open Link in New Tab” when right-clicked, so it's still
          important to include!
        </p>

        <Image src="link-prevent-default.png" alt="Links use preventDefault" />

        <Heading id="writing-posts">Writing Posts</Heading>

        <p>
          As mentioned, every post is an individual component. I always use my
          <InlineCode>ArticleWrapper</InlineCode> for organization, but in
          theory, I could style the page however I want. Anyways, this component
          does three things:
        </p>

        <ul>
          <li>Provide a fallback text in case of errors</li>
          <li>
            Provide <InlineCode>ArticleContext</InlineCode>, which image
            components use to find their files.
          </li>
          <li>Display the title, author, date, and back button.</li>
        </ul>

        <p>
          Inside the wrapper, I also include a TextBlock, which I made to handle
          vertical spacing and padding.
        </p>

        <Image src="text-block.png" alt="Text block component" />

        <p>
          Inside the text block, everything is more familiar: lots of paragraph
          tags and the occasional list. I also made some media components,
          including:
        </p>

        <ul>
          <li>Inline code and syntax-highlighted code blocks.</li>
          <li>Images</li>
          <li>Headings (I might add the bookmark button later)</li>
          <li>Width dividers</li>
        </ul>

        <Heading id="hosting">Hosting</Heading>

        <p>
          Viola! That's all the fun stuff, now to get it online! For all my
          websites so far, <b>I've wished I did this step way sooner.</b>{" "}
          Generally, everything on the web works on{" "}
          <InlineCode>localhost</InlineCode> but breaks in production. This
          time, generating the static site worked perfectly, I thought.
        </p>

        <p>
          One command to get this directory with no extra work. Great! I set up
          a GitHub actions workflow and connected my domain.{" "}
        </p>

        <Image src="gh-actions-output.png" alt="Github Actions Output" />

        <p>
          As my page loads in, everything looks right. I always had issues with
          images and styling in NextJS, but not with Solid! I navigate to an
          article and reload to see this screen:{" "}
        </p>

        <Image src="404-github-pages.png" alt="Github Pages 404 Screen" />

        <p>
          Turns out there's no <InlineCode>blog.html</InlineCode> page, meaning
          anything except for <InlineCode>index.html</InlineCode> would cause a
          404 error. Because of client-side links, you could still view the page
          so long as you didn't reload, but this is a horrible compromise for
          link sharing. One option was to rename{" "}
          <InlineCode>index.html</InlineCode> to{" "}
          <InlineCode>404.html</InlineCode>, which replaces the default 404
          page. I instead decided to use firebase hosting, which meant a cleaner
          build process. Firebase lets me redirect all my routes into
          <InlineCode>index.html</InlineCode>, meaning I don't have to deal with
          renaming extra files.{" "}
        </p>

        <Image
          src="firebase-json.png"
          alt="Firebase JSON File"
          caption="firebase.json"
        />

        <p>
          My one concern is that firebase deployment takes even longer than
          GitHub pages, as shown below. I can accept a sacrifice to my
          convenience for a better website, so the setup is done!
        </p>

        <Image
          src="github-actions-workflow-time.png"
          alt="Github Actions Workflow Time"
        />

        <Heading id="conclusion">Conclusion</Heading>

        <p>
          I loved the developer experience of this! SolidJS makes all the
          difference and pairs great with the other libraries I used. I was
          restricted by the small ecosystem, and although I don’t mind doing
          more coding, designing a server-side rendering system was unreasonable
          for a project of this size. Unfortunately, I missed out on link
          previews and a larger ecosystem, but in all likelihood, I'll redesign
          this again.
        </p>

        <p>
          That's all from me. I'll sign off with my new list of pros and cons:
        </p>

        <p>Pros:</p>

        <ul>
          <li>Great developer experience </li>
          <li>More freedom when writing posts</li>
          <li>Simple design</li>
        </ul>

        <p>Cons:</p>

        <ul>
          <li>Small developer ecosystem</li>
          <li>Boring! Could have tried something new</li>
          <li>Statically generated</li>
        </ul>
      </TextBlock>
    </ArticleWrapper>
  );
}
