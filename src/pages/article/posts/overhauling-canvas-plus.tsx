import ArticleWrapper from "../ArticleWrapper";
import Heading from "../Heading";
import Image from "../Image";
import Split from "../Split";
import TextBlock from "../TextBlock";

export default function Article() {
  return (
    <ArticleWrapper id="overhauling-canvas-plus">
      <TextBlock>
        <p>
          The last major update to Canvas+ was over eight months ago, where I
          introduced a new search bar and the "More" drawer in the sidebar. For
          a while, I've been intrigued by a complete UI reskin. So here it is -
          Canvas+ version 1 is in the works.
        </p>
        <Heading id="approach">Approach</Heading>
        <p>
          I find the default Canvas UI very jarring and outdated: you can
          partially alleviate this issue with changes like sidebar colors, icon
          customization, dark mode, link colors etc, but any minor style change
          exists with the goal of preserving the original look and feel, which
          doesn't eliminate the core layout issues of Canvas+. My idea to solve
          the layout problems is to make a <b>Canvas client:</b> a way of
          accessing the same content under a completely different view. To power
          their mobile app, Canvas has a powerful API, so the way I see it, this
          is a scaled-up (and better) version of that app.
        </p>
        <p>
          As a bonus, it's much easier to use a component library when you're
          designing an entire page.
        </p>
        <p>
          <b>Existing Features - Some of which will be improved:</b>
        </p>
        <ul>
          <li>
            Dark Mode: designing the app myself means everything can be easily
            supported without any breaking updates.
          </li>
          <li>Custom colors on your sidebar</li>
          <li>
            Faster links: Previously I used an external library for prefetching
            (no, it wasn't TurboLinks), but there would often be "Too many
            requests" errors on link-heavy pages. The new version simply has a
            lot of caching, and will also soon do prefetching. Even with just
            caching, your experience is much smoother.
          </li>
          <li>Convenient email view, and now, email notifications</li>
          <li>Searching will be about the same, simply with an updated UI</li>
        </ul>
        <p>
          <b>Entirely New Features</b>
        </p>
        <ul>
          <li>
            New sidebar layout: the new sidebar will fully contain the course
            navigation, which means you won't have to load several new pages to
            go from the dashboard, to a class, to the assignments, and to the
            individual assignment you're looking for. Search partially fixed
            this problem but it's not realistic to always use.
          </li>
          <p>
            High contrast mode: Often, the color of text is hard to read behind
            a similar background or highlight. This is especially common in dark
            mode with colors like blue or purple. Now, all colors are clean and
            legible.
          </p>
          <p>
            Better battery life: Canvas uses ReactJS, so by using a faster
            framework, <b>in theory there will be faster performance.</b>
          </p>
        </ul>

        <Heading id="ui-plans">UI Plans</Heading>

        <p>
          The most important decisions in this project are in the UI, because
          honestly Canvas has fast enough load times — the biggest convenience I
          can offer is efficiency. It shouldn't take 5 page changes to get from
          point A to point B.
        </p>
        <Split
          left={
            <TextBlock>
              <p>
                Let's talk functionality. This is an image of the current Canvas
                sidebar. We have the leftmost portion, with buttons for:
              </p>
              <ul>
                <li>Account Settings</li>
                <li>Dashboard</li>
                <li>Groups</li>
                <li>Calendar</li>
                <li>Inbox</li>
                <li>History</li>
                <li>Help</li>
              </ul>
              <p>
                There's also a bottom button to expand this to show button
                labels. overall, it's using about 50% of the vertical space.
              </p>
              <p>
                To the right part of the sidebar, you're shown what "tab" of the
                course you're in. This should be pretty self explanatory, and
                about 30% of the vertical space here is used.
              </p>
              <p>Lastly, the breadcrumb at the top is actually useful.</p>
              <p>
                Look, overall I'm a fan of whitespace, but for the utility this
                provides it's using an unreasonable amount of space.
              </p>
            </TextBlock>
          }
          leftWidth="w-1/2"
          right={
            <Image src="default-sidebar.png" alt="Default Canvas sidebar" />
          }
          rightWidth="w-1/2"
        />
        <p>
          The new sidebar design provides an all-in-one view for all three of
          these.
        </p>

        <Image src="new-sidebar.png" alt="New Canvas sidebar" />

        <p>
          Alright, first of all, color is important; it's a big feature of
          Canvas+ and I can't just abandon it. Right now the sidebar matches
          your preferred color, or, you can chose one for each course, just like
          normal Canvas. I'll need to find a creative way to do gradients,
          because hover and text colors are not simply darker. I haven't even
          gotten an algorithm for solid colors yet- everything is hard coded for
          now.
        </p>

        <p>
          As for navigation, the necessary pages are at the very top.
          Personally, I don't need all the buttons canvas gives me, so they're
          hidden away in the "More" dropdown. This prototype doesn't have a
          dashboard link, but yeah, that'll be there too. I also remade the
          navigation system so that everything happens in one place. It works
          like the notion sidebar where everything is hidden behind a dropdown,
          which also means there's a built-in breadcrumb menu. Although, I'll
          probably add something at the top, like in notion.{" "}
        </p>

        <Image src="toolbar.png" alt="New toolbar" />

        <p>
          There's also the toolbar- this is in the corner of most pages and has
          utilities relevant to <b>that content.</b> Previous and next page are
          for pages or modules so you can navigate in chronological order. As
          for the other buttons:
        </p>
        <ul>
          <li>
            The reload is specifically for reloading all the content without the
            cache. This will probably work with the normal reload button too,
            but this is faster.
          </li>
          <li>
            The folder button lets you go to the home page of that course.
          </li>
          <li>
            The search button is for finding words the current page. There's
            also gonna be a canvas-wide search you can do elsewhere.
          </li>
          <li>
            The eye button is a view original button. You can either view the
            page in normal canvas or view with original colors— which I'll get
            to later.
          </li>
          <li>
            Lastly, you can chose between light/dark mode (or sync with your
            device) and see the buttons you've hidden.
          </li>
        </ul>

        <p>
          So, those are my UI plans. The sidebar and toolbar are mostly done. As
          for content, I'm still working on displaying all different types of
          URLs. For now, pages work and nothing else.
        </p>

        <p>
          In a future post I'll talk about the coding for this. Here's a sneak
          peak of a more technical feature. So, one problem, especially in dark
          mode, is that colors don't always contrast well. Here's an example:
        </p>

        <Split
          leftWidth="w-1/2"
          rightWidth="w-1/2"
          left={
            <Image
              src="bad-contrast-light.png"
              alt="Bad contrast in light mode"
            />
          }
          right={
            <Image
              src="bad-contrast-dark.png"
              alt="Bad contrast in dark mode"
              caption="The same thing, in dark mode :)"
            />
          }
        />

        <p>
          These colors are not readable. The fix to this I made a
          contrast-correction algorithm, based on a color's luminosity. It works
          in light mode, dark mode, with highlight color, and even observes
          mutations.
        </p>

        <p>This is what it looks like:</p>

        <Image src="improved-contrast.png" alt="Improved contrast" />

        <p>
          So that's Canvas+ so far. I might focus on Scorecard and some other
          projects just for a break. Either way, I'm sufficiently busy so that's
          all I have. Thanks for reading!
        </p>
      </TextBlock>
    </ArticleWrapper>
  );
}
