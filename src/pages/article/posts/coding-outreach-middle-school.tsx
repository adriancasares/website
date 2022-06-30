import ArticleWrapper from "../ArticleWrapper";
import Heading from "../Heading";
import Image from "../Image";
import Split from "../Split";
import TextBlock from "../TextBlock";

export default function Article() {
  return (
    <ArticleWrapper id="coding-outreach-middle-school">
      <TextBlock>
        <p>
          Hello! Once again it's been a long while since posting, but I've found
          myself wanting to talk about my ideas in one concentrated place. This
          time around, I probably won't stick to a schedule and rather focus
          quantity over length.
        </p>
        <p>
          Three weeks ago, Malcolm Roalson and I went to a middle school (I
          won't disclose more than that for privacy) as guest speakers to do
          outreach for computer science. I'm using this post as a reflection of
          what we achieved and what we're doing in the future!
        </p>
        <Heading id="the-presentation">The Presentation</Heading>
        <p>
          We had some options for which classes we'd present to, and went with a
          project-based "App Creators" elective and an Intro to Coding class.
          This is exactly what we were looking for in our presentation- the
          first crowd would be more engaged but not necesarily interested, while
          the second crowd would be much more challenging, but have more room to
          inspire. For both classes, the teacher advised something more
          interactive than a slideshow, which was our first challenge.
        </p>
        <p>
          At first, our plan was <b>very long</b>, and pretty much aimed to
          cover a ton of CS topics, like robotics, artificial intelligence, web
          development, etc. Maybe this would be fun for us, but the exhaustive
          plan wasn't relatable to the average middle schooler. In our second
          iteration, we condensed most of this into <b>one graphic</b>, and
          planned activities for the rest of the afternoon.
        </p>
        <Image src="cs-topic-graphic.png" alt="Graphic of CS Topics" />
        <p>
          So, now we're at the drawing board for what to talk about. Firstly, we
          knew the most substantial stuff to say would be{" "}
          <b>
            <i>our personal</i>
          </b>{" "}
          experiences with coding, so we started there.
        </p>
        <Image src="what-have-we-made.png" alt="Showing off Canvas+ stats" />
        <Image
          src="relife-video.png"
          alt="Videos of Relife by Malcolm Roalson"
        />
        <p>
          This was a shorter segment by design, since we didn't want to lose
          anyone that fast. For the rest of the presentation, we decided to
          focus on <b>emerging AI technology,</b> for a few reasons:
        </p>
        <ul>
          <li>
            It's a buzz word that people would be familiar with from movies,
            news, etc.
          </li>
          <li>It's an easy demo which can be scary or exciting.</li>
        </ul>
        <p>
          So now, the challenge on our hands was to make interactive activites
          about such a high-level concept. The first idea we came up with was an{" "}
          <b>ethics discussion,</b> something we were both familiar with from
          our own classes. The big advantage of this is how easy participation
          is: basically, you present the audience with a prompt and have them
          move between two ends of the room based on where they stand. The left
          side of the room was "Strongly Agree" and the right side was "Strongly
          Disagree". This forces everyone to at formulate a basic opinion, and
          asking people for their reasoning leads to a lot of back and forth.
          The prompts were:
        </p>
        <ul>
          <li>Computers should replace jobs w/ harsh working conditions.</li>
          <li>Computers should replace jobs in general. </li>
          <li>A self driving car should decide who's safety to prioritize.</li>
          <li>We can trust ourselves more than we trust AI.</li>
        </ul>
        <p>
          This went exactly how we expected - there was a lot of back and forth
          because <b>everyone had a voice and opinion.</b> Usually we were
          cutting the discussion off to move on, but even when a question was
          less engaging, we could always call on people without any deflections.
          Of course, bringing starbursts helped too.
        </p>
        <Split
          leftWidth="w-1/2"
          left={
            <p>
              We felt like we had hit a gold mine with this activity, but we
              still needed more stuff to pass the time. We knew we wanted a
              second activity, but decided to have people sit back down so we
              could talk about AI first. We started with this with a graphic
              recapping AI ethics, including some stuff we didn't cover, shown
              to the right.
            </p>
          }
          rightWidth="w-1/2"
          right={
            <Image
              src="ai-ethical-dilemmas.png"
              alt="Graphic showing the ethical dilemmas of AI."
            />
          }
        />

        <Split
          leftWidth="w-3/5"
          left={
            <div className="flex flex-col gap-8">
              <p>
                Next, we showed a ton of headlines for AI, showing the good and
                the bad, and took a specific emphasis on showing the Replika
                app, which Gabriel Keller (who I should mention was planning on
                presenting with us, but got COVID) found. We showed the app
                store page and discussed the danger of AI companions. If you're
                curious, we talked about the issues with profiting off of
                people's emotional dependence, and the barriers of a bot having
                real empathy. Not to mention, the app has "Infrequent/Mild
                Sexual Content and Nudity"; not sure what that's about.
              </p>
              <p>
                We also touched on the difference between supervised and
                unsupervised learning, mostly so we could include some examples.
                We simply said stuff like recognizing people's faces in photos
                is <b>supervised,</b> since the model's job is to categorize
                photos into explicit sets. Stuff like social media and product
                recommendations are <b>unsupervised,</b> where we leave the AI
                to notice the patterns for us.
              </p>
            </div>
          }
          rightWidth="w-2/5"
          right={
            <Image
              src="replika.png"
              alt="Screenshot of Replika, a dating and emotional support AI."
            />
          }
        />

        <Split
          leftWidth="w-1/2"
          left={
            <p>
              Our last activity was a <b>Turing Test.</b> Again, more of an
              activity than a lecture for the sake of being relatable to someone
              who doesn't care very much. The concept is simple, we show the
              class a fake identity (with a computer-generated picture, of
              course), and the job of one volunteeer is to answer a question{" "}
              <b>as them.</b> Given the same info, the GPT-3 playground will
              also try to impersonate the identity. The class wins if most of
              them guess the human correctly! OpenAI has a preset menu for the
              playground, which was very useful for keeping it moving! Everyone
              really enjoyed this activity and the suspense of each reveal was
              engaging for the whole class. You could tell a lot about people's
              <b>expectations for the AI;</b> some thought the AI would only be
              able to form a simple sentence while others were expecting more
              deception.
            </p>
          }
          rightWidth="w-1/2"
          right={
            <Image
              src="turing-test-ellen.png"
              alt="Turing test slide for Ellen Alvarez."
            />
          }
        />

        <p>
          I'll throw in the responses for one of the questions below.
          Unfortunately, I couldn't fetch the <b>exact</b> OpenAI response from
          the presentation, but I kept rolling until I got a close one.
        </p>

        <Split
          leftWidth="w-1/3"
          left={
            <Image
              src="turing-student-response.jpeg"
              alt="Turing Test Student Response"
              caption="Student Response: I would sacrifice 2 children to save 5 adults, saving the most people. (as you can see there was a mistake halfway through, context matters!)"
            />
          }
          rightWidth="w-2/3"
          right={
            <Image
              src="open-ai-response.png"
              alt="Turing Test OpenAI Response"
              caption="OpenAI Response"
            />
          }
        />

        <Heading id="reflection">Reflection</Heading>

        <p>
          We really enjoyed our time at this middle school! It was very fun
          planning and our two crowds were equally fun to teach. The first
          class, App Creators, was clearly much more engaged- the 8th graders
          were out for an end-of-year celebration which made the audience much
          smaller, but we could tell everyone had a lot more to say and was
          generally more interested. The second class, Intro to Coding, had such
          a variety of students. Some were not engaged at all- on their phones,
          skipping, sleeping, you name it. Others were talking way more than
          usual, which was rewarding to hear. Day 2 was a tougher crowd for
          sure, but we trusted the process and this is for sure something we're
          looking forward to expanding next school year.
        </p>
      </TextBlock>
    </ArticleWrapper>
  );
}
