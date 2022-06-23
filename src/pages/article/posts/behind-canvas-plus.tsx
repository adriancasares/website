import ArticleWrapper from "../ArticleWrapper";
import TextBlock from "../TextBlock";
import { Link } from "solid-app-router";
import Heading from "../Heading";
import Image from "../Image";
export default function Article() {
  return (
    <ArticleWrapper id="behind-canvas-plus">
      <TextBlock>
        <p>
          In January 2021, I released Canvas+ to the chrome web store. It's a
          chrome extension that improves your experience using Canvas, the LMS
          developed by Instructure. This blog post is a deep dive into the tech
          that makes it possible. Firstly, here's some of the important
          extension links:
        </p>
        <p>Firstly, here's some of the important extension links:</p>
        <ul>
          <li>
            <Link href="https://github.com/canvasplus/extension">
              <a>Source Code</a>
            </Link>
          </li>
          <li>
            <Link href="https://canvasplus.org">
              <a>Website</a>
            </Link>
          </li>
          <li>
            <Link href="https://chrome.google.com/webstore/detail/canvas%2B/kdkadcnebmokaadholinmnpjelphnghh">
              <a>Install</a>
            </Link>
          </li>
        </ul>

        <Heading id="the-idea">The Idea</Heading>

        <p>
          Before I made the first version of the extension, many of my teachers
          would use the modules feature for their Canvas courses.
        </p>

        <Image
          src="modules.png"
          alt="A screenshot of the modules feature"
          postId="behind-canvas-plus"
        />

        <p>
          Modules are essentially groups of pages, and that's how most teachers
          organize their content. They work pretty well, but some classes have
          the most recent modules at the very bottom of the page, meaning that
          by the end of the semester it would take a *long* time to find current
          assignments. One class of mine was so large that by the end of the
          school year, it took about a minute to reach the bottom, at least when
          using a trackpad. And so, the idea was born.
        </p>

        <p>
          I coded the first version in about a day, after quickly learning the
          basics of Chrome extensions. 25 lines and the first version was
          complete.
        </p>
      </TextBlock>
    </ArticleWrapper>
  );
}
