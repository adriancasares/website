---
name: My First post
date: 000
thumbnail: dark-mode.png
---
In January 2021, I released Canvas+ to the chrome web store. It's a chrome extension that improves your experience using Canvas, the LMS developed by Instructure. This blog post is a deep dive into the tech that makes it possible.

Firstly, here's some of the important extension links:

- [Source Code](http://github.com/adrWasTaken/CanvasPlus)
- [Website](https://canvasplus.adrwas.dev)
- [Install](https://chrome.google.com/webstore/detail/canvas%2B/kdkadcnebmokaadholinmnpjelphnghh)

### 🌱  The Idea

Before I made the first version of the extension, many of my teachers would use the modules feature for their Canvas courses.

![Behind%20Canvas+%20e7c79f0680d44581a09d001b4aa28db9/Untitled.png](Behind%20Canvas+%20e7c79f0680d44581a09d001b4aa28db9/Untitled.png)

Modules are essentially groups of pages, and that's how most teachers organize their content. They work pretty well, but some classes have the most recent modules at the very bottom of the page, meaning that by the end of the semester it would take a *long* time to find current assignments. One class of mine was so large that by the end of the school year, it took about a minute to reach the bottom, at least when using a trackpad. And so, the idea was born.

I coded the first version in about a day, after quickly learning the basics of Chrome extensions. 25 lines and the first version was complete.

```jsx
const html = document.getElementsByTagName("html")[0];
html.style.scrollBehavior = "smooth"; // For smoothness in scrollToBottom()

const moduleList = document.getElementById("context_modules");

// Getting the parent element this way as it is the least likely to change after a canvas update
const firstButton = document.getElementById("expand_collapse_all");
const headerBar = firstButton.parentElement;

const scrollDownButton = document.createElement("button");
scrollDownButton.classList = ["btn"];
scrollDownButton.id = "canvas_plus_scroll_down";
scrollDownButton.innerHTML = '<i class="icon-arrow-down" role="presentation"></i> Scroll to Bottom';
scrollDownButton.style.marginRight = "5px";
headerBar.insertBefore(scrollDownButton, firstButton);

scrollDownButton.addEventListener("click", function(){
  var lastPublished = null;
  for(canvasModule of moduleList.children){
    if(!canvasModule.classList.contains("locked")) lastPublished = canvasModule;
  }

  lastPublished.scrollIntoView();
}
```

If you couldn't tell by the code snippet, I was not very experienced with JavaScript or chrome extensions at that point. Much of the code was styling which I could have achieved with a CSS file.

This was pretty much the first version that got released, and even though I finished this in an afternoon, I spent about a week making a humble website for the project. This was everything for version 0.0.1. I forgot that there was only one feature in the first version... There was so little material that I advertised "more features to come"- I wasn't lying about that though.

### 🌿  Adding More Features

I kept my promise of more features. Five months later, as of version 0.2, the extension includes a search bar, dark mode, and faster links. All of these can be toggled using the extension popup. Of course, this is not a very long list all things considered. It's a pace of less than one addition per month, and I didn't even make the quick links feature.

I thought it would be worth noting that first of all, this is definitely a side project. More importantly, I'm personally persistent about quality assurance before hitting the publish button. The extension has 140 users, and that number will only keep growing when the school year starts back up. So whenever I'm making a feature, I'll sometimes test it for a month or longer to make sure it works day-to-day. I'm always really worried about an update fundamentally breaking Canvas, and my entire user base disappearing overnight.

With that said, let's talk about the juicy coding.

### 📖  Behind the scenes: Being a developer

Now that I had my idea and my code, it was time to release it, which took some research. If you want a boring article on the step-by-step process, [here you go](https://developer.chrome.com/docs/webstore/publish/), but I'll share my experience here.

For starters, you need to register as a Chrome Webstore Developer, which costs $5. It's a little weird that companies charge you to make software for them, but this is much better than Apple's $99/year price tag.

I bought the liscence, and I really wish I would have read this before buying it:

![https://i.imgur.com/AGZKdEs.png](https://i.imgur.com/AGZKdEs.png)

So yes, I did use my personal account to publish the extension. I would definetely prefer to have a dedicated account for the extension, so I might look into doing that later.

After making the account, submitting the extension is pretty easy... you just zip up the extension, enter some details, and submit it for review. You have to submit the extension every time you want to update it, so I've of course submitted the extension multiple times, and the response time seems to get exponentially faster... It went from four days to about a day, to about an hour, and most recently, my extension was approved in just 60 seconds.

### 🧭 Search Bar

The search box is without doubt the most universally liked feature. No matter your preferences, this tool will be hard to live without.

![Behind%20Canvas+%20e7c79f0680d44581a09d001b4aa28db9/image_(7).png](Behind%20Canvas+%20e7c79f0680d44581a09d001b4aa28db9/image_(7).png)

To make the search bar, I had to leverage the [Canvas REST API](https://canvas.instructure.com/doc/api/). 

```yaml
# psuedo code

- fetch & store user courses
- fetch & store colors of user courses

- loop through user courses:
	- fetch & store course pages
	- fetch course modules & store the list of module items
	- add the page and module items to a list for all results

- filter all the results real-time based on the query and display the filtered list
```

This took a few queries, and using promises, results could be loaded in a few seconds. The great thing about the REST API is that you don't have to manage authentication, at least in my use case. The search bar fetches data as soon as a Canvas page loads, so you're by definition already logged in. Searching would be much harder if you had to provide an API key to use it, but thankfully, this is not the case!

Your search results are also cached, so it will take a few seconds when you first install the extension, and thereafter it's lightning fast. Results are saved in two places, `sessionStorage` and chrome storage:

- `sessionStorage` stores strings of data (presumably) in RAM until the end of your session. This means that the data only exists on the tab where you set it. If you click on a link to another website (of a different domain), the data is gone (unless you opened it in a new tab). And of course, if you close the tab, your data is gone. So while `sessionStorage` would not work to store data long-term, it's much faster than chrome storage.
- Chrome storage isn't lightning fast, but it's not slow either. It stores objects of data on the disk, so obviously it's slower than `sessionStorage`, but it's much faster than re-fetching the data.

When caching search results, there is one issue that arises, which is updating the data. Teachers add new content multiple times per day, and if you can't find that content, search is useless. To combat this, theres a simple way the extension decides when to refetch the content:

- If data is in `sessionStorage`, immediately load it.
- If the data is not in `sessionStorage` but is in Chrome storage, immediately load it, and refresh in the background — any new content will appear whenever you open a new page.
- If the data is not stored anywhere, wait to fetch it.

This means that your search content is always up to date, and once loaded, typing in a query instantly finds results. However, it wasn't always like this. Search has been included in numerous versions where the process was not so streamlined.

The most common pitfall of past versions was searching modules. As mentioned earlier, modules are groups of pages, but in the API, the pages are not included, meaning getting modules of a course looks something like this:

![Behind%20Canvas+%20e7c79f0680d44581a09d001b4aa28db9/Untitled%202.png](Behind%20Canvas+%20e7c79f0680d44581a09d001b4aa28db9/Untitled%202.png)

Typical /modules API request, which doesn't include the items in the module.

It turns out you can just add `?include=items` to your query if you need the items, but of course, I didn't read this.

The early version of search would actually fetch the non-api modules page and sort through the HTML, which was not at all ideal. This system was very inconsistent, so I switched to a method that was even worse. The next system I used (which is technically the current one) fetches the modules of a course, then makes hundreds of queries to get the items in each module. This system was slow, inefficient, and it skipped over lots of content because of throttling.

Another issue was that for a while search was simply spaghetti-code. It doesn't directly affect the end user if the code is messy, but there were certainly issues that caused an inefficient system, a lot of times having to do with JavaScript's messy async system.

### 🏃‍♂️ Faster Links

Faster links isn't my feature... but it is a feature. I use a library called [QuickLink](https://github.com/GoogleChromeLabs/quicklink), which simply preloads pages in idle time. When I first tested it, I would get crazy speeds of 2x and 4x the usual, but something seems to have changed, because a test I did in May conculded only a 40% speed increase. Nonetheless, its still a usefull feature to have, but I do see potential for improvement.

The biggest challenge with improving speed is that I can only control the front-end of the website, and there are still many limitations to that. I think the best way to improve speed would be to employ client-side links. It seems like the biggest hurdle when it comes to speed is that the entire page has to load for every page, which can include images, large scripts, and complex styling. In theory, a client-side link would pre-fetch only the necesary data, then render it onto the page using JavaScript. Surprisingly, the Canvas API is really fast, so I think this could work well, assuming it's possible to do in a chrome extension.

A side benefit of this would be link previews, like the ones in google docs.

![Behind%20Canvas+%20e7c79f0680d44581a09d001b4aa28db9/Untitled%203.png](Behind%20Canvas+%20e7c79f0680d44581a09d001b4aa28db9/Untitled%203.png)

### 🌗 Dark Mode

Not everyone likes this feature, and even I personally am on the fence about it, but dark mode does what you would expect, it makes everything dark.

It uses a CSS file to override the default styles of Canvas, so you would think you could just inject it normally, as shown on the right, but dark mode is toggleable in the settings menu, meaning its injection is conditional. To achieve this, the CSS is injected programmatically.

![Behind%20Canvas+%20e7c79f0680d44581a09d001b4aa28db9/Untitled%204.png](Behind%20Canvas+%20e7c79f0680d44581a09d001b4aa28db9/Untitled%204.png)

There are other ways to inject programatically, but I simply add  a <style> tag using a content script:

```jsx
const link = document.createElement("link");
link.href = chrome.extension.getURL("src/inject/colors/dark.css"); /* File path must be added to manifest in web_accessible_resources */
link.type = "text/css";
link.rel = "stylesheet";

if(true /* If dark mode is turned on */) document.getElementsByTagName('html')[0].appendChild(link);
```

![Behind%20Canvas+%20e7c79f0680d44581a09d001b4aa28db9/Untitled%205.png](Behind%20Canvas+%20e7c79f0680d44581a09d001b4aa28db9/Untitled%205.png)

Injection was by far the easiest part of dark mode, though. Creating the CSS file took months to perfect. Canvas using entirely unique class names for some of its components, so it's hard to apply a dark theme to everything. The only workaround I thought of was to make CSS selectors based on the tags of a component, like this:

`ul[role="listbox"] li span`

Alltogether, `dark.css` is just over 300 lines, and it's pretty compact, though still readable. Right now a dim mode is in the works, and we (someone else is working with me on dim mode) were able to copy/paste and swap out the CSS variables to create a whole new look in 5 minutes.

### 🔬 A Closer Look at Canvas

While developing this extension, I've used the standard set of resources to write my code... StackOverflow, other chrome extensions, documentation, the usual. But something I only recently started looking at was [Instructure's GitHub](https://github.com/instructure).

I was surprised to find out that Canvas is open-source, as well as its iOS and Andriod apps. I haven't gone too in depth into [the repository](https://github.com/instructure/canvas-lms), but I do think it would be interesting to see how Canvas works.

Some quick stats:

- [First commit](https://github.com/instructure/canvas-lms/tree/8b8173dcc907d3a3ace327fb68aabd5e2d6f73fb) was in **January 2011**
- **45,000** commits since then
- **4,700** releases
- **4,000** stars
- **1,700** forks
- **245** contributors

Languages:

- **56%** Ruby (Backend)
- **36%** JavaScript (Frontend)
- **3%** HTML (Frontend)
- **1.7%** SCSS (Frontend)
- **1.3%** CoffeeScript (Frontend)
- **0.8%** Handlebars (Frontend)
- **0.5%** Other

From an outsider's perspective, I'm not really sure why Instructure chose Ruby. It's slower than average and personally the syntax looks dreadful, but I've never used the language... maybe it's amazing. 

For the frontend, Canvas uses [ReactJS](https://reactjs.org/), which is a library for making UI components. I think React is great, but it begs the question... why didn't they use [NextJS](https://nextjs.org/), which would allow for client-side links? Of course, Next is a fairly recent framework, but using it would really go a long way towards the user experience.

Other than that, I haven't looked too deeply into the code, since, as I mentioned, I don't know Ruby, but maybe I'll learn it some day and get back to you!

### 🏁 Conclusion

My extension has amazing features already, but I'm not ready to stop. I think I already have the best Canvas-related chrome extension, (yes, there are many) but I want to expand the userbase and impact as many people's school experience as possible. As things get back to normal, Canvas will become less integral in everyone's school life, but I think I'll still offer a valuable tool that put simply, makes learning better. 

As mentioned throughout the article and on GitHub, I have tons of plans for features, like client-side links, sidebar customization, email peeking, task manager integration, and more!

You can follow my progress on [GitHub](http://github.com/adrWasTaken/CanvasPlus), a star would be appreciated! ⭐