import ArticleWrapper from "../ArticleWrapper";
import TextBlock from "../TextBlock";
import { Link } from "solid-app-router";
import Heading from "../Heading";
import Image from "../Image";
import highlight from "highlight.js";
import CodeBlock from "../CodeBlock";
import Split from "../Split";
import InlineCode from "../InlineCode";
export default function Article() {
  return (
    <ArticleWrapper id="gradients-and-macos">
      <TextBlock>
        <p>
          Wow it's been a while! I don't show timestamps of my home page but
          after a dormant 3.5 months, it's clear this isn't working. I decided
          to switch up the format (yes, after one post) to posting articles
          regularly which less of an emphasis on length and polish. I value
          quality, but if I'm creating outlines and multiple drafts for my
          posts, nothing really gets done. So onto the post! Inspired by{" "}
          <Link href="https://maliciousfiles.github.io/blog/">
            <a>MaliciousFiles</a>
          </Link>
          , I'll aim to post about every week with a project update.
        </p>

        <Heading id="canvas-plus-recap">A week in recap: Canvas+</Heading>

        <p>
          Making Canvas+ is still my main project for now. I've been itching to
          do something full stack or at least something different, but walking
          around school and being thanked and given suggestions is really great,
          so I'm sticking with this for now. I can see from across the room when
          people are using the extension, and that's pretty cool too.
        </p>

        <p>
          This week we released a small update. It had actually been about 6
          weeks since our last major update, but trust me, we're still working
          hard at the next major update, 0.4. My hope when releasing our 0.3
          update, which included a custom sidebar color, is that people would
          notice the new color and ask questions. Unfortunately, this didn't
          really pan out. At my school, the canvas color is only slightly
          different from the Canvas+ default of #1b7ecf. The solution?{" "}
          <b>Gradient sidebars.</b> The update has only been out for a week, so
          I haven't really been able to see the long-term effects of this, but a
          gradient sidebar is certainly more noticeable than an off-blue.
        </p>

        <p>
          Everyone with an unchanged sidebar would be prompted to "Finish
          Setting Up", allowing them to change their appearance (I figured
          people who hadn't changed their sidebar color probably hadn't changed
          there appearance), but more importantly, it selected a random gradient
          for them.
        </p>

        <p>
          I was really happy with how this feature turned out! Not many people
          had asked for it, but the response was overwhelmingly positive. You
          can really make some cool stuff with this. Here's some of my
          favorites:
        </p>

        <Image src="gradient-sidebars.png" alt="Gradient Sidebars" />

        <p>
          Of course, there's literally trillions of gradient combinations, and
          I've seen some amazing ones from other people. I don't think this is
          in any other Canvas extension, and certainly not in the same place as
          all our other great features.
        </p>

        <p>
          Adding gradient sidebars was also a great opportunity to improve the
          capabilities of the sidebar color picker. Instead of having to go to
          another website to chose a custom color, it's right there, alongside
          gradients. I used <InlineCode>react-color</InlineCode> to get this
          done, so huge props to that developer. I decided to use a modified
          sketch color picker, but you can use the pickers from almost every big
          app: Chrome, Photoshop, you name it. This turned out to be a great
          small update - gradients are one of my favorite features right now!
        </p>

        <Split
          leftWidth="w-1/2"
          left={
            <Image
              src="color-picker-old.png"
              alt="Color Picker (Before)"
              caption="Color Picker (Before)"
            />
          }
          rightWidth="w-1/2"
          right={
            <Image
              src="color-picker-new.png"
              alt="Color Picker (After)"
              caption="Color Picker (After)"
            />
          }
        />
        <p>
          In other Canvas+ news we've seen some insane growth this week. In a
          three day period, we gained over 200 users, making our user count
          nearly 650! Even better, the chrome web store takes a while to update
          the numbers, so we may be looking at around 700 by the end of this
          weekend!
        </p>

        <p>
          The current happening of the project are really exciting, but so is
          the future! We've been planning some exciting new features which I'll
          talk about later in this post.
        </p>

        <Heading id="switching-to-macos">Switching to MacOS</Heading>

        <p>
          This is generally a coding blog, but generally I think what device you
          have is really important to your developer experience. I've made a big
          180 on my "tech stack" in the last year, and in the last 2 weeks have
          consolidated my workflow to two main devices.
        </p>

        <p>
          <b>October 2020</b>
        </p>

        <ul>
          <li>MacBook Air</li>
          <li className="pl-6">
            2019 (Purchased 2020), Quad-core i5, 8GB memory, 256GB storage
          </li>
          <li className="pl-6">Used for school, zoom, and Final Cut Pro</li>
          <li>Custom Built PC</li>
          <li className="pl-6">
            Purchased 2019, AMD Ryzen 5 2400G, 16GB memory, 256GB storage,
            integrated graphics
          </li>
          <li className="pl-6">Used for coding and gaming</li>
          <li>iPhone 6</li>
          <li>2nd gen AirPods</li>
          <li>iPad Pro</li>
          <li className="pl-6">2018, 11", 64GB storage with LTE</li>
        </ul>

        <p>
          <b>October 2021</b>
        </p>

        <ul>
          <li>MacBook Air</li>
          <li className="pl-6">
            2020 (Purchased 2021), M1, 16GB memory, 512GB storage
          </li>
          <li className="pl-6">
            Used for school, zoom, coding, gaming, designing, and everything
            else
          </li>
          <li>Custom Built PC</li>
          <li className="pl-6">
            Purchased 2019, AMD Ryzen 5 2400G, 16GB memory, 256GB storage,
            integrated graphics
          </li>
          <li className="pl-6">
            Used for anything I can't do on macOS (haven't needed it yet)
          </li>
          <li>iPhone 12 (Base model)</li>
          <li>2nd gen AirPods</li>
        </ul>

        <p>
          Consolidating my workflow from 5 devices to 3 (Again, am not using the
          PC much) has been really amazing and productive. I'm almost all apple
          devices at this point which I can guarantee is more useful and price
          effective than you'd think.
        </p>

        <p>
          I upgraded my laptop 2 weeks ago, which is why I'm mentioning all this
          now. During online school, I was pretty much forced to plug it (my old
          laptop) in all day - that slight performance boost was really
          important when on zoom calls. This <b>destroyed</b> my battery health.
          I took my old MacBook to the apple store and was shown a graph
          claiming its near defective; my battery was lasting 3 hours on a good
          day.
        </p>

        <p>
          Replacing the battery was $200. Given my device's good trade in value
          and some other unused devices, it made more financial sense to upgrade
          to the M1 chip. Not only was I getting the better chip and battery
          life, I was able to upgrade the RAM and storage at a low price (at
          least compared to their exorbitant markups)
        </p>

        <Image alt="MacBook Air Order" src="macbook-air-delivered.jpeg" />

        <p>
          Let's talk about Apple's education discount. Until September 27th,
          they had offer called "Buy a Mac or iPad for college. Get AirPods."
          This is already a great offer in my opinion - Anyone hesitant to buy
          AirPods can get them for free and get the normal $100 discount on a
          Mac.
        </p>

        <Image alt="Apple AirPods Discount" src="apple-airpods-discount.png" />

        <p>
          However, the true value of this discount comes when you abuse it. For
          me, it was a no brainer to use the discount as I'd get $100 off my
          purchase. But I already had AirPods (ironically from using the
          discount on my old MacBook), so why am I mentioning this discount?
          Apple prices their AirPods discount in a weird way - instead of giving
          you them for free, they charge you for the AirPods and deduct $159
          from the price of whatever else your buying, be that a Mac or and
          iPad.
        </p>

        <p>
          I'd assume this is to prevent people returning the computer and
          getting free AirPods, but the flip side of this is that{" "}
          <b>you can refund the AirPods and keep your $159 discount.</b> That
          means with tax savings, <b>this discount will save you almost $300</b>
          . That's crazy from a company like Apple. And you didn't hear it from
          me, but Apple doesn't ask for any verification if you order online. Be
          wary though, according to Apple store employees:
        </p>

        <ul>
          <li>You'll need identification to use the discount in person.</li>
          <li>
            If you bring either of the devices to the Apple store for something
            (refunding the AirPods in this case), there have been instances
            where Apple has asked for identity verification.
          </li>
          <li>
            Using the discount if you're not eligible <b>is</b> illegal, so use
            it at your own risk.
          </li>
        </ul>
        <p>
          Luckily, I'm eligible, but be careful with this - Don't rely on this
          trick if you couldn't afford the device without it and know the risks
          you're taking if you're not eligible.
        </p>

        <p>
          Enough about the purchase though! What do I think? One word:
          <b>breakthrough</b>. There's never been any laptop like this. Here's
          some of your questions, answered.
        </p>

        <p>
          <b>Battery life?</b> Generally around 10 hours, but you can get longer
          or shorter. Generally I'm using Adobe products for about 2 hours, VS
          code or a Jetbrains product for an hour, and safari for the rest. Like
          any computer, there's a lot of apps that drain your battery life. I
          haven't tested chrome much, but being a safari user definitely bumps
          my battery life up quite a lot. (Yes, I don't use Canvas+ unless I'm
          coding it. Safari is much more efficient than browsers like chrome or
          edge and I'd rather not do constant browser switching when I'm working
          on a buggy feature) I've started using the web versions of a lot of
          apps - Notion, Discord, and SpanishDict are the ones that come to
          mind. I've gone 30 minutes on 100% running Adobe InDesign. I'm really
          torn on whether that's a bug. I've drained 10% in the last 2 hours, so
          it's possible that said battery percentage was acurate.
        </p>

        <p>
          <b>Rosetta? Intel Apps?</b> Rosetta allows you to translate intel apps
          into M1-compatible apps. It works great. You're prompted to
          automatically install it once, and after that, you don't need to do
          anything. Everything just works. Optimized and intel apps are about
          half and half. According to activity monitor, Chrome, Photoshop,
          Illustrator, Indesign, Lightroom, Adobe XD, Jetbrains Toolbox,
          IntelliJ IDEA, PyCharm, Webstorm, Visual Studio Code, Zoom, Notion,
          and Spotify are all "Apple" apps. The only app I use that's not
          optimized is Discord. That's a pretty big hit, battery life could be
          so much better with optimization, but it's still decent. Those are all
          the apps I use, and of course all apple apps are optimized. The one
          thing I'd note is that even if an app is optimized, it may not be very
          efficient. Notion comes to mind. (Notion Desktop is straight up broken
          for me but I think that's unrelated)
        </p>

        <p>
          <b>Performance?</b> Performance is great! Everything is truly instant.
          I'm extremely confident with this device's longevity. If you're ever
          doubting M1's performance, watch{" "}
          <Link href="https://www.youtube.com/watch?v=XS7Hc6RqClI">
            <a>this video</a>
          </Link>
          . Only when you're running iOS simulations, (at the time unoptimized)
          JetBrains apps, have at least a dozen other apps open, and 200 safari
          tabs, do you start lagging. Can your intel laptop do that?
        </p>

        <p>
          <b>Ports?</b> Not having USB-A is annoying at times, but USB-A is also
          a bad port, and simply a symptom of the industry not moving forward.
          I'm glad my Mac has USB-C, it's what lets it be so thin (and lets be
          honest even without the thickness problem USB-A ports are really
          ugly). I'm hoping more manufacturers (yes, including apple) move
          towards USB-C, but for now, I am carrying adapters with me.
        </p>

        <p>
          <b>Why MacOS?</b> I've been puzzled at how often I get this question.
          I truly think that unless you're gaming, MacOS is the superior
          operating system (and those games have to be heavy, Minecraft runs
          great on a Mac). Here's 5 things I love about the OS:
        </p>

        <ol>
          <li>
            If you have an iPhone, the two devices work amazing in tandem. You
            can text on your computer, save passwords between them for free,
            sync photos for free, transfer safari tabs for free, and so much
            more. If I get a login code sent to my phone, safari will autofill
            it. If I can a login code via email or google authenticator, I can
            copy in on my phone and paste it on my MacBook. It's such a nice
            thing to have.
          </li>
          <li>
            Windows has ads all over the operating system! (Mainly the start
            menu) If I'm paying $100 for your operating system, you really don't
            need to make <i>more money</i> from me.
          </li>
          <li>
            MacOS comes with a full productivity suite! Sure, pages has a lot of
            flaws, and I'm certainly not a frequent user of it (although Keynote
            is pretty nice), but windows can even open Microsoft's own file
            formats out the box!
          </li>
          <li>
            Windows 11 does a lot of work to address this, but since 99.9% of
            people are still using Windows 10, I think it's fair to argue
            against it. Put simply, Windows is{" "}
            <b>
              <i>terrible</i>
            </b>{" "}
            at design consistency. Go in the settings app, and you're one click
            away from the control panel made over a decade ago. If an app bugs
            out, you're instantly back to Windows 7! Windows 10 is boxy and
            outdated, and even with Windows 11, the OS is still plagued by their
            inconsistency problem.
          </li>
          <li>
            In MacOS, everything just works. This is practically Apple's second
            slogan, but it's really true. There's no blue screen, updating feels
            much more seamless than on windows, and in general, my user
            experience has been much cleaner.
          </li>
        </ol>

        <p>
          I'd genuinely recommend an M1 Mac to anyone who isn't gaming oriented
          (with the exception of Minecraft), especially when the AirPods
          discount comes back. I was thinking about holding off for the MacBook
          Pro event (in literally two days), but ultimately the M1 is such a
          killer chip that it's sufficient for 99% of people. And think about
          how expensive a MacBook Pro would be including my upgrades, without
          the AirPods discount. I'm hoping I made the right purchase decision,
          but Apple could pleasantly surprise me.
        </p>

        <Heading id="conclusion">Conclusion</Heading>

        <p>
          There's so much more I wanted to talk about here, but this is getting
          really long and I could probably have ended up doubling the word count
          on this.{" "}
          <b>
            The one thing I'll leave off with is three random ideas I had this
            week, feel free to steal them (as long as its open source):
          </b>
        </p>

        <ul>
          <li>
            Gift card/credit card combo to make people more comfortable giving
            to the unhoused. I think it's a shame that we're reluctant to do it,
            but I understand people's concern, and making some sort of digital
            solution to this would be great. I'm obviously not very versed in
            credit card tech, but giving some sort of card that works at certain
            vendors but not other would go a long way to helping those
            communities. Don't take it the wrong way! This is meant to increase
            people's charitable actions by giving them the peace of mind they
            want.
          </li>
          <li>
            Open source editor that works with every file type: every single
            one. I'm talking google docs, excel, powerpoint, PNG, PSD, SVG, code
            files like .java and .json, video files and projects like MP4 and
            PRPROJ. I wasn't kidding when I said everything.
          </li>
          <li>
            Browser extension for safari that converts chrome extensions into
            safari add-ons. I'll talk more about this next week but I know a ton
            of people would appreciate this and so many people would be able to
            make the leap to safari.
          </li>
        </ul>
        <p>
          I hope I can do this every week, I generally have a lot of random
          ideas, but they may not be as good as these, some of them I had
          thought of a little more than a week ago.
        </p>
        <p>
          That's all for this week, I'll probably set up email notifications
          next week, but for now, you probably found this on my discord status.
        </p>
      </TextBlock>
    </ArticleWrapper>
  );
}
