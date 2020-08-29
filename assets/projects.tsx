import ReactDOMServer from "react-dom/server";
import {
    BackendProject,
    Project,
    ProjectCategory,
} from "../components/project/ProjectModel";
import Link from "next/link";
import React from "react";

const enteredProjects: BackendProject[] = [
    {
        slug: "canaletto-penthouse",
        title: "Canaletto Penthouse",
        summary:
            "Exploring the new luxurious penthouse in London's Canaletto Tower",
        description: (
            <>
                <p>
                    We created a domino advertisement for a luxury penthouse in
                    the Canaletto Tower London. 6 domino artists from Austria,
                    Germany and the USA worked 4 days on a 25,000 dominoes
                    project, which was set up across the whole penthouse on the
                    27th floor.
                </p>
                <p>
                    The goal was to create a more interesting video than a
                    normal walkthrough, which was archived by the use of
                    dominoes. Special techniques such as walls, cubes and
                    pyramids were used to show the interior of the apartment. In
                    addition, the video shows a dog interacting with the domino
                    chain reaction.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: ["lOQy31N9g-E", "Mf76HYjH7X8"],
    },
    {
        slug: "bombardier-global-6000",
        title: "Bombardier Global 6000",
        summary: "Introducing a new cabin of the luxurious business jet",
        description: (
            <>
                <p>
                    We set up 3,000 dominoes in the new Bombardier Global 6000
                    aircraft to present the new premier cabin. The client chose
                    dominoes to show the smoothness and stability of the
                    aircraft. Two builders from Austrian Domino Art travelled to
                    Montreal, Canada, for one week to realise this project.
                </p>
                <p>
                    JBLP, a Montreal agency, initially contacted us and was
                    responsible for project coordination and all non-domino
                    parts including the film crew. At the European Business
                    Aviation Convention & Exhibition in Genova, Switzerland, the
                    final video was released. Watch it above.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: ["JbKIF0vSE_M"],
    },
    {
        slug: "el-hormiguero-kloss-skrein",
        title: "El Hormiguero #2",
        summary: "Surprising Karlie Kloss and Ed Skrein with a domino show",
        description: (
            <>
                <p>
                    We were part of a team that created a domino show for the
                    Spanish TV program El Hormiguero with over 150,000 dominoes.
                    A total of 8 domino builders worked on the chain reaction
                    for 5 days.{" "}
                    <a
                        href="http://www.sinnersdominoentertainment.com/"
                        target="_blank"
                    >
                        Sinners Domino Entertainment
                    </a>{" "}
                    was responsible for the organisation of the show.
                </p>
                <p>
                    The model Karlie Kloss and the actor Ed Skrein toppled the
                    first domino. The chain reaction was designed around the two
                    special guests, who introduced their new perfume. Special
                    effects such as pyrotechnical and light effects helped to
                    make the show mesmerising. In addition, a builders challenge
                    was included, where one of the builders needed to set up a
                    few dominoes live.
                </p>
            </>
        ),
        categories: [ProjectCategory.ENTERTAINMENT],
        videos: ["nKaHngY9X4E"],
    },
    {
        slug: "yorkshire-tea-biscuit-brew",
        title: "Yorkshire Tea Biscuit Brew",
        summary: "Using biscuits as dominoes to introduce a new tea flavour",
        description: (
            <>
                <p>
                    We organised and supervised a team building event together
                    with{" "}
                    <a
                        href="http://www.sinnersdominoentertainment.com/"
                        target="_blank"
                    >
                        Sinners Domino Entertainment
                    </a>{" "}
                    for Yorkshire tea. 34 employees from helped set up the 5,000
                    biscuits chain reaction at the company's headquarter in
                    Harrogate (United Kingdom). Besides the team building
                    aspect, the intention of the event was to market the new
                    biscuit brew.
                </p>
                <p>
                    After over 10 hours of setup and 120 cups of tea, the first
                    biscuit was toppled by Kate Halloran who invented the new
                    tea flavour. The remaining 4,999 biscuits formed an 800 feet
                    long chain throughout the entire office, including teapots,
                    cups, mousetraps and tea bags. It took about 3 minutes till
                    all biscuits were successfully toppled.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT, ProjectCategory.WORKSHOP],
        videos: ["tCnDUOClg6w"],
    },
    {
        slug: "dreamworks-25-years",
        title: "Dreamworks 25th Anniversary",
        summary: "Celebrating 25 years of DreamWorks with dominoes",
        description: (
            <>
                <p>
                    Together with{" "}
                    <a
                        href="https://www.youtube.com/user/DominoERDMANN"
                        target="_blank"
                    >
                        DominoERDMANN
                    </a>
                    , we set up 100,000 dominoes to celebrate 25 years of{" "}
                    <a
                        href="https://www.youtube.com/channel/UCY26xU0-avwTJ6F6TzUZVEw"
                        target="_blank"
                    >
                        DreamWorks
                    </a>
                    . The project marked yet another milestone of the long
                    cooperation with this company.
                </p>
                <p>
                    The chain reaction included highlights of 15 popular
                    animation films and series such as Shrek, Spirit, Trolls and
                    Madagascar. The video was shot in 42 different scenes and
                    displays various characters featured in these Dreamworks
                    productions. Watch the video above and also check out the
                    photos below.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: ["0l3qsRu4GF8"],
    },
    {
        slug: "netflix-productions",
        title: "Netflix Productions",
        summary: "Introducing series and films with 135,000 dominoes",
        description: (
            <>
                <p>
                    Together with{" "}
                    <a
                        href="https://www.youtube.com/user/DominoERDMANN"
                        target="_blank"
                    >
                        DominoERDMANN
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://www.youtube.com/channel/UCkLlZ_-Svn1YaeXLKf7LpWw"
                        target="_blank"
                    >
                        DominoJOJO
                    </a>
                    , we set up 135,000 dominoes for three different Netflix
                    productions:
                </p>
                <ul>
                    <li>
                        <a
                            href="https://www.netflix.com/at-en/title/80183187"
                            target="_blank"
                        >
                            Klaus
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.netflix.com/at-en/title/80237347"
                            target="_blank"
                        >
                            Go! Go! Cory Carson
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.netflix.com/at-en/title/80108159"
                            target="_blank"
                        >
                            Ask the StoryBots
                        </a>
                    </li>
                </ul>
                <p>
                    All projects were realised for the introduction of the
                    series and films on the streaming platform.
                </p>
                <p>
                    The dominoes showed different elements from the animated
                    productions, including the main character(s). The videos,
                    which are available above, were shot in multiple individuals
                    scenes at our own home studio. They were then edited in post
                    production to each look like one big chain reaction.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: ["_3byiCr46mQ", "n0oSZQDTfjE", "c8y9EPvqDAg"],
    },
    {
        slug: "diabetes-awareness-campaign",
        title: "Diabetes Awareness Campaign",
        summary:
            "Raising awareness for type 2 diabetes with the domino spiral of life",
        description: (
            <>
                <p>
                    We realised a project for Novo Nordisk's diabetes awareness
                    campaign. Together with{" "}
                    <a
                        href="http://www.sinnersdominoentertainment.com"
                        target="_blank"
                    >
                        Sinners Domino Entertainment
                    </a>{" "}
                    , we set up a domino spiral, which represents the "spiral of
                    life". For the video shoot, we worked with Annex Films, a
                    company that was involved in many big-budget productions
                    such as James Bond.
                </p>
                <p>
                    The goal of the campaign is to raise awareness of potential
                    risks for people with type 2 diabetes. As the risks occur,
                    the toppling of the dominoes starts to get out of control.
                    After making a correction, which is the affected people
                    talking to a doctor, the spiral continues to topple in a
                    controlled way as in the beginning.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: ["Pw3VPFKOydc"],
    },
    {
        slug: "uae-national-day-2018",
        title: "UAE National Day #2",
        summary:
            "Celebrating UAE's National Day with a world record breaking show",
        description: (
            <>
                <p>
                    We created a domino show to celebrate the National Day of
                    the United Arab Emirates. The project, which was realised
                    together with{" "}
                    <a
                        href="http://www.sinnersdominoentertainment.com"
                        target="_blank"
                    >
                        Sinners Domino Entertainment
                    </a>{" "}
                    , included a new Guinness World Record for the most dominoes
                    toppled in a circle field. Over 90,000 dominoes showed a
                    portrait of the founding father of the United Arab Emirates,
                    Sheikh Zayed.
                </p>
                <p>
                    The event took place at the Marina Mall in Abu Dhabi.
                    Visitors and customers could watch both the construction and
                    the toppling of the circle field. Over 1,000 people were
                    present when the first domino was toppled by a special
                    guest, his highness Highness Sheikh Mohammed Bin Sultan Bin
                    Khalifa Al Nahyan.
                </p>
            </>
        ),
        categories: [ProjectCategory.ENTERTAINMENT],
        videos: ["DsjeeZKudHE"],
    },
    {
        slug: "orf-magazin-eins",
        title: "ORF Magazin 1",
        summary: "Featuring Austrian Domino Art on Austrian TV",
        description: (
            <>
                <p>
                    We were featured in the TV show Magazin 1, a programme on
                    the Austrian Broadcasting Corporation's channel called ORF
                    1. ORF is Austria's largest media provider, operating four
                    national television and 12 radio channels. For this project
                    we set up around 6,000 dominoes in just one day with three
                    builders. The highlight was a big domino field at the end
                    showing the logo of the TV magazine.
                </p>
                <p>
                    The TV report showed us setting up and toppling the
                    dominoes, as well as provides some background information
                    about the project and Austrian Domino Art in general. Watch
                    the full coverage in the video above - it includes English
                    subtitles for the narrator and the interviews.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: ["0Jwes4Zo8Y0"],
    },
    {
        slug: "el-hormiguero-with-anastacia",
        title: "El Hormiguero #1",
        summary: "Producing a TV domino show together with Anastacia",
        description: (
            <>
                <p>
                    We were part of a team that created a domino show for the
                    Spanish TV program El Hormiguero with over 150,000 dominoes.
                    A total of 8 domino builders worked on the chain reaction
                    for 5 days.{" "}
                    <a
                        href="http://www.sinnersdominoentertainment.com/"
                        target="_blank"
                    >
                        Sinners Domino Entertainment
                    </a>{" "}
                    was responsible for the organisation of the show.
                </p>
                <p>
                    The setup included projects about the country Spain, the
                    show El Hormiguiro and Anastacia, who was represented in a
                    30,000 dominoes portrait. As Anastacia was the special guest
                    in this show she toppled the first domino. During the
                    falldown one of the builders had to complete a builders
                    challenge in order to make 5,000 dominoes topple. The
                    challenge was to set up some dominoes underwater.
                </p>
            </>
        ),
        categories: [ProjectCategory.ENTERTAINMENT],
        videos: ["O_tPKblLB70"],
    },
    {
        slug: "seattle-genetics",
        title: "Seattle Genetics",
        summary:
            "Representing the brand at a pharmaceutical fair and trade show",
        description: (
            <>
                <p>
                    Together with{" "}
                    <a href="https://www.dynamicdomino.com/" target="_blank">
                        Dynamic Domino
                    </a>{" "}
                    , we realised two projects containing 20,000 dominoes each
                    at trade fairs in the US. Both domino shows were carried out
                    for Seattle Genetics, an American biotechnology company.
                </p>
                <p>
                    The first project took place in Atlanta. Thousands of
                    visitors walked by and took a look at the project while it
                    was being built, which was especially demanding. The project
                    included several domino tricks, the Seattle Genetics logo
                    and a big domino wall as a highlight. After all dominoes
                    were set up, visitors could watch the toppling, which marked
                    the end of the fair. The 5,000 dominoes wall was toppled in
                    the grand finale, revealing an informative graph behind it.
                </p>
                <p>
                    The second project took place at ASCO in Chicago, which is a
                    pharmaceutical trade show. The domino show was designed and
                    realised in a similar style to the first one.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: ["kYUTjQ7opgU", "g3UUyhsbipg"],
    },
    {
        slug: "esc-congress",
        title: "ESC Congress",
        summary:
            "Toppling dominoes at the European Society of Cardiology Congress",
        description: (
            <>
                <p>
                    We realised a project for Novo Nordisk's presence at the
                    congress of the European Society of Cardiology (ESC).
                    Together with{" "}
                    <a
                        href="http://www.sinnersdominoentertainment.com"
                        target="_blank"
                    >
                        Sinners Domino Entertainment
                    </a>{" "}
                    , we set up 4 different domino projects. 3 domino artists
                    from Austria and Germany travelled to the fair in Paris to
                    realise the domino shows.
                </p>
                <p>
                    Visitors of the ESC congress could see the setup and
                    toppling of all projects live, which showcased topics
                    related to cardiology. Below you can find pictures of the
                    different domino shows, which included a total of 5,000
                    dominoes.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: [],
    },
    {
        slug: "uae-national-day-2017",
        title: "UAE National Day #1",
        summary: "Celebrating the national day of the United Arab Emirates",
        description: (
            <>
                <p>
                    Together with our colleagues from{" "}
                    <a
                        href="https://www.sinnersdominoentertainment.com/"
                        target="_blank"
                    >
                        Sinners Domino Entertainment
                    </a>{" "}
                    , we realised a domino show for the national holiday of the
                    United Arab Emirates in Dubai. More than 30,000 dominoes
                    were set up in domino fields in 3 different shopping malls:
                    City Centre Sharjah, Fujairah and Ajman.
                </p>
                <p>
                    The domino fields showed the national flag, the map of the
                    United Arab Emirates and a "Spirit of the Union" logo. 6
                    domino artists worked on building the fields which consisted
                    of about 10,000 dominoes each.
                </p>
            </>
        ),
        categories: [ProjectCategory.ENTERTAINMENT],
        videos: ["Tte30jbJP98"],
    },
    {
        slug: "turkish-domino-record",
        title: "Turkish Domino Record",
        summary: "Breaking the record for the most dominoes toppled in Turkey",
        description: (
            <>
                <p>
                    We organised a domino show with 300,000 dominoes in Bursa,
                    Turkey, together with{" "}
                    <a
                        href="http://www.sinnersdominoentertainment.com/"
                        target="_blank"
                    >
                        Sinners Domino Entertainment
                    </a>
                    . 12 builders set up a new Turkish Domino Record within 6
                    days. For this project, we involved builders from a total of
                    6 different countries (Austria, Germany, Netherlands,
                    Switzerland, USA and Canada).
                </p>
                <p>
                    The topic of the project was "The History of Turkey",
                    including projects like the sea battle with over 40,000
                    dominoes. The falldown took place on the national holiday of
                    Turkey (29th of October). Over 4 million people saw a new
                    Turkish Domino Record with 293,841 (out of 300,000) dominoes
                    toppled live on TV.
                </p>
            </>
        ),
        categories: [ProjectCategory.ENTERTAINMENT],
        videos: ["hqdr_bopQME"],
    },
    {
        slug: "pizza-hut-rewards",
        title: "Pizza Hut Rewards",
        summary: "Announcing a new reward system for loyal Pizza Hut customers",
        description: (
            <>
                <p>
                    We realised a 50,000 dominoes advertisement for the American
                    pizza company Pizza Hut. The project took place at the
                    American Airlines Center in Dallas, Texas and was built
                    together with 11 other domino artists from America and
                    Germany. Pizza Hut decided to celebrate their new rewards
                    program Hut Rewards with a guessing game, in which their
                    customers could guess the number of dominoes set up. The
                    winner got free pizza for life.
                </p>
                <p>
                    Our duties involved the setup and team-leading activities,
                    whereas{" "}
                    <a target="_blank" href="http://www.spricemachines.com/">
                        Steve Price (Sprice Machines)
                    </a>{" "}
                    and{" "}
                    <a href="http://www.hevesh5.com/" target="_blank">
                        Lily Hevesh (Hevesh5)
                    </a>{" "}
                    were in charge of the organisation. The setup included the
                    record for the biggest pizza ever built, 300 Pizza Hut pizza
                    boxes and about 59,000 dominoes in total.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: ["t5CItYv2uk8"],
    },
    {
        slug: "euroleague-final-four",
        title: "EuroLeague Final Four",
        summary: "Presenting Europe's top basketball clubs of the EuroLeague",
        description: (
            <>
                <p>
                    We and{" "}
                    <a
                        href="https://www.sinnersdominoentertainment.com/"
                        target="_blank"
                    >
                        Sinners Domino Entertainment
                    </a>{" "}
                    realised an individual domino show for the Turkish Airlines
                    EuroLeague Final Four in Belgrade (Serbia). Three builders
                    from Austria and Germany set up 20,000 dominoes in two days.
                </p>
                <p>
                    The Euro League Final Four is a basketball tournament where
                    the best basketball teams play against each other in two
                    semi-finals and a grand final. This year the teams qualified
                    were Real Madrid, o Fenerbahce Dogus Istanbul, CSKA Moscow
                    and Zalgiris Kaunas. One the falldown day, three well-known
                    influencers joined and the YouTuber Jeyx from Spain set off
                    the chain reaction using a basketball. Watch the video
                    above.
                </p>
            </>
        ),
        categories: [
            ProjectCategory.ADVERTISEMENT,
            ProjectCategory.ENTERTAINMENT,
        ],
        videos: ["S4ELjw2_aI4"],
    },
    {
        slug: "microsoft-mixer",
        title: "Microsoft Mixer",
        summary:
            "Celebrating the anniversary of the popular streaming platform",
        description: (
            <>
                <p>
                    We were part of the team that realised a domino show for
                    Microsoft's streaming platform{" "}
                    <a href="https://www.xbox.com/mixer" target="_blank">
                        Mixer
                    </a>
                    . Six domino artists from USA, Canada and Austria set up
                    over 25,000 dominoes under the supervision of lead builder
                    and organizer{" "}
                    <a
                        href="https://www.youtube.com/channel/UCHlP-un62ExatfZlxtXR9tA"
                        target="_blank"
                    >
                        Steve Price (Sprice Machines)
                    </a>
                    .
                </p>
                <p>
                    The project took place at the Microsoft Headquarters in
                    Seattle (USA). It featured the most popular video games and
                    was created to celebrate the one year anniversary of the
                    platform, where people could watch a live stream of the
                    complete setup. The first dominoes were set at noon and over
                    14 hours later at 2:33 a.m. the project was finished.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: ["LmBEb5Q3Ej4"],
    },
    {
        slug: "dreamworks-series-2018",
        title: "Dreamworks Series #2",
        summary: "Introducing four more DreamWorks series on Netflix",
        description: (
            <>
                <p>
                    Together with{" "}
                    <a
                        href="https://www.youtube.com/user/DominoERDMANN"
                        target="_blank"
                    >
                        DominoERDMANN
                    </a>
                    , we realised 4 more domino projects for{" "}
                    <a
                        href="https://www.youtube.com/channel/UCY26xU0-avwTJ6F6TzUZVEw"
                        target="_blank"
                    >
                        DreamWorksTV
                    </a>
                    . The aim was to introduce new Dreamworks series through
                    chain reactions.
                </p>
                <p>
                    <a
                        href="http://www.dreamworkstv.com/shows/dinotrux-supercharged/?show_tab=featured"
                        target="_blank"
                    >
                        Dinotrux Supercharged
                    </a>{" "}
                    was advertised with a 26,000 dominoes project, including the
                    series' most popular characters. As the second project,
                    34,000 dominoes were set up for{" "}
                    <a
                        href="https://www.netflix.com/at-en/title/80075595"
                        target="_blank"
                    >
                        Voltron Heroes & Villains
                    </a>
                    . Third, around 30,000 dominoes were toppled for{" "}
                    <a
                        href="https://www.netflix.com/at-en/title/80115432"
                        target="_blank"
                    >
                        Spirit riding free
                    </a>
                    . Finally, 25,000 dominoes show various dinosaurs and other
                    elements of{" "}
                    <a
                        href="https://www.netflix.com/at-en/title/80029196"
                        target="_blank"
                    >
                        Jurassic World
                    </a>
                    .
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: ["yPHtMPGs8bw", "q68M5J9jsUc", "za1duNIjHpI", "oY8tcs1Vl1Y"],
    },
    {
        slug: "dreamworks-series-2017",
        title: "Dreamworks Series #1",
        summary: "Launching new exciting series by DreamWorks on Netflix",
        description: (
            <>
                <p>
                    Together with{" "}
                    <a
                        href="https://www.youtube.com/user/DominoERDMANN"
                        target="_blank"
                    >
                        DominoERDMANN
                    </a>
                    , we realised 3 domino projects for{" "}
                    <a
                        href="https://www.youtube.com/channel/UCY26xU0-avwTJ6F6TzUZVEw"
                        target="_blank"
                    >
                        DreamWorksTV
                    </a>
                    . In particular, we helped manage, organise and build these
                    projects, which are used to advertise new series.
                </p>
                <p>
                    The first project was for{" "}
                    <a
                        href="https://www.netflix.com/at-en/title/80115432"
                        target="_blank"
                    >
                        Spirit Riding Free
                    </a>{" "}
                    and included 25,000 dominoes. 30,000 dominoes were used for
                    the second video{" "}
                    <a
                        href="https://www.netflix.com/at-en/title/80075595"
                        target="_blank"
                    >
                        Voltron Legendary Defender
                    </a>
                    . Finally, another project featuring 28,000 dominoes for the
                    series{" "}
                    <a
                        href="https://www.netflix.com/at-en/title/80075820"
                        target="_blank"
                    >
                        Trollhunters
                    </a>{" "}
                    was released.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: ["3hJ0pgfFjVU", "ge_HB3-PX-8", "Kpku1lBoiVw"],
    },
    {
        slug: "copetrol",
        title: "Copetrol",
        summary:
            "Rewinding the video for a special introduction of a new slogan",
        description: (
            <>
                <p>
                    We set up almost 50,000 dominoes for a TV advertisement in
                    Asunción, Paraguay. Together with{" "}
                    <a href="https://www.dynamicdomino.com/" target="_blank">
                        Dynamic Domino
                    </a>{" "}
                    , who organised and led the event, we created a huge city
                    with over 20,000 dominoes including the new advertising
                    slogan VAMOS. For the filming and the editing of the video,
                    we had to rebuild every single structure individually.
                </p>
                <p>
                    The last scene of the video was recorded at a gas station in
                    Asunción, Paraguay. The speciality of the advertisement is
                    the reverse effect: The dominoes don't topple but they build
                    up instead. Watch the final advertisement above.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: ["V-Fp80lwBXI"],
    },
    {
        slug: "book-presentation",
        title: "Book Presentation",
        summary: "Presenting a new book using the domino-effect",
        description: (
            <>
                <p>
                    We planned and realised a domino project for the launch of a
                    new book from French author Christophe Haag. It was produced
                    in our own black studio with around 4,000 dominoes, which
                    were all set up by hand. The book, which is called "La
                    Contagion émotionnelle", describes how our emotions affect
                    people around us.
                </p>
                <p>
                    The 4,000 dominoes project shows a smiling and a sad emoji
                    as well as the book's title and the author's name. Besides
                    the setup of the dominoes, which took one day, we were also
                    responsible for the video production. Watch the final video
                    above.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: ["4hOo0nc4OrA"],
    },
    {
        slug: "true-car",
        title: "TRUECar",
        summary:
            "Celebrating 1 million sold cars with an in-office domino setup",
        description: (
            <>
                <p>
                    Together with{" "}
                    <a href="http://www.spricemachines.com" target="_blank">
                        Sprice Machines
                    </a>{" "}
                    we set up 5,000 dominoes for TRUECar. The project's aim was
                    to celebrate 1 million sold cars on their platform. The
                    company offers a website for automotive pricing and
                    information for both new and used cars.
                </p>
                <p>
                    The chain reaction was built in the company's office, which
                    is located in Santa Monica (CA, USA). It featured some Rube
                    Goldberg elements, such as a car rolling down a ramp, as
                    well as more traditional domino elements. Watch the final
                    video above.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: ["2b4gqJIjoIo"],
    },
    {
        slug: "sony-music-entertainment",
        title: "Sony Music Entertainment",
        summary: "Introducing the slogan of a new music album",
        description: (
            <>
                <p>
                    We produced a domino advertisement for Sony Music
                    Entertainment, which was not only about setting up dominoes
                    but also included delivering video material to Sony.
                    Therefore, we created our own video studio in Austria,
                    especially for this project.
                </p>
                <p>
                    The advertisement introduced the new single{" "}
                    <a
                        href="https://sameplate.lnk.to/RoRansomFloetry"
                        target="_blank"
                    >
                        Floetry
                    </a>{" "}
                    from Ro Ransom . 5,000 dominoes were used in letters saying
                    "Mystery boy is everywhere", which is Ro's unique slogan.
                    The final video and some pictures are available below.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: ["Nx7O2FHdSmQ"],
    },
    {
        slug: "school-project",
        title: "School Project",
        summary: "Showing students tips and tricks for a domino art project",
        description: (
            <>
                <p>
                    We organised a workshop with 20,000 dominoes at a local
                    elementary school in Innsbruck, Austria. 4 builders from
                    Austrian Domino Art showed 60 students different domino
                    techniques and tricks. At the beginning we presented how to
                    build domino walls, pyramids and other domino structures.
                    Then, the students could build their own chain reactions
                    with help of our builders.
                </p>
                <p>
                    After the setup was finished we connected all parts and
                    toppled the chain reaction. Take a look at the setup of the
                    students in the pictures below.
                </p>
            </>
        ),
        categories: [ProjectCategory.WORKSHOP],
        videos: [],
    },
    {
        slug: "colour-changing-logo",
        title: "Colour-Changing Logo",
        summary:
            "Creating a special effect with dominoes that appear to change the colour",
        description: (
            <>
                <p>
                    In January 2017 we set up 3,000 dominoes for a advertisement
                    in Jakarta, Indonesia. Two builders from Austrian Domino Art
                    travelled to Indonesia for one week to realise the project.
                    The dominoes were set in one big circle field.
                </p>
                <p>
                    The circle should show one logo before the falldown and
                    another logo after the falldown. This so called color
                    changing effect was created by taping every single domino on
                    the upper side. The circle was filmed from a top angle to
                    ensure the best outcome of the effect at the toppling.
                </p>
            </>
        ),
        categories: [ProjectCategory.ADVERTISEMENT],
        videos: [],
    },

    {
        slug: "hugli-company-event",
        title: "Hügli Company Event",
        summary:
            "Presenting the key company values and celebrating a successful business year",
        description: (
            <>
                <p>
                    We set up 80,000 dominoes for the German brand Hügli in
                    Redolfzell, Germany. 8 builders created this huge chain
                    reaction in just 3 days for their annual conference on the
                    21st of December.{" "}
                    <a
                        href="http://www.sinnersdominoentertainment.com/"
                        target="_blank"
                    >
                        Sinners Domino Entertainment
                    </a>{" "}
                    organised the project and we helped to realise it.
                </p>
                <p>
                    The setup included products of the brand Hügli, which were
                    set up in huge fields and pyramids as you see in the
                    pictures below. The falldown was a huge success and 78,000
                    of 80,000 dominoes toppled.
                </p>
            </>
        ),
        categories: [ProjectCategory.ENTERTAINMENT],
        videos: [],
    },
    {
        slug: "frankfurt-book-fair",
        title: "Frankfurt Book Fair",
        summary:
            "Breaking the world record for the most books toppled in a domino fashion",
        description: (
            <>
                <p>
                    We set up a new Book Domino World Record with 10,200
                    original Guinness World Records books at the Frankfurt book
                    fair. 10 builders from Germany, Austria & Switzerland,
                    including us, worked 12 hours all night long to realise this
                    record. The project was organised by{" "}
                    <a
                        href="http://www.sinnersdominoentertainment.com/"
                        target="_blank"
                    >
                        Sinners Domino Entertainment
                    </a>
                    .
                </p>
                <p>
                    An official Guinness World Records adjudicator started the
                    chain reaction and every single book (10,200) toppled. All
                    books that were set up for the record were sold after the
                    project. The project was shared across media and marked the
                    start of the international book fair in Frankfurt, Germany.
                </p>
            </>
        ),
        categories: [
            ProjectCategory.ADVERTISEMENT,
            ProjectCategory.ENTERTAINMENT,
        ],
        videos: ["AMkgqMjP6GU"],
    },
    {
        slug: "university-of-bozen",
        title: "University of Bozen",
        summary:
            "Working together with students to break the book domino world record",
        description: (
            <>
                <p>
                    We set up a new book domino world record with 6,631 books at
                    the University of Bozen. We organized this project and
                    realised it together with students of the University of
                    Bozen. The setup took 3 days in total and the falldown was
                    over 5 minutes long.
                </p>
                <p>
                    The books were spread over 4 floors in the library of the
                    University and were mostly built on a carpeted floor. Only
                    books that were not needed anymore were used for the record.
                    6,620 of 6,631 books toppled in total: A new World Record!
                </p>
            </>
        ),
        categories: [ProjectCategory.WORKSHOP],
        videos: ["LvTQr_OysYE"],
    },
    {
        slug: "le-supermenti-superbrain",
        title: "Le Supermenti (Superbrain)",
        summary: "Creating a unique domino challenge for a national TV show",
        description: (
            <>
                <p>
                    We set up 10,000 dominoes for an Italian TV show on Rai 1 in
                    Milan, Italy. 4 builders created the chain reaction within 3
                    days, which included lots of domino tricks. The project was
                    organised together with{" "}
                    <a
                        href="http://www.sinnersdominoentertainment.com/"
                        target="_blank"
                    >
                        Sinners Domino Entertainment
                    </a>
                    .
                </p>
                <p>
                    One of the "Superbrains" had to guess the amount of dominoes
                    by just listening to the sound of the toppling. The
                    "Superbrain" was only able to take a short look at the
                    project before the falldown.
                </p>
            </>
        ),
        categories: [ProjectCategory.ENTERTAINMENT],
        videos: [],
    },
    {
        slug: "officially-amazing",
        title: "Officially Amazing",
        summary: "Breaking two world records on a BBC TV show production set",
        description: (
            <>
                <p>
                    We set up 275,000 dominoes under the topic "Enjoy Your Life"
                    in Büdingen, Germany. The chain reaction included 2 Guinness
                    World Records: The most dominoes toppled in a spiral (55,555
                    dominoes) and the most mini dominoes toppled (2,000
                    dominoes). The event was organised by{" "}
                    <a
                        href="http://www.sinnersdominoentertainment.com/"
                        target="_blank"
                    >
                        Sinners Domino Entertainment
                    </a>
                    .
                </p>
                <p>
                    The BBC recorded the falldown for their Guinness World
                    Records show "Officially Amazing". 12 builders including 2
                    builders from Austrian Domino Art realised the project
                    within one week. 272,297 out of 277,275 dominoes toppled –
                    watch the video of the TV show and the full falldown below.
                </p>
            </>
        ),
        categories: [ProjectCategory.ENTERTAINMENT],
        videos: ["RwG58QPMmpM", "1QtdPfz_faM"],
    },
];

const projects: Project[] = enteredProjects.map(
    (project: BackendProject, index: number) => ({
        ...project,
        description: ReactDOMServer.renderToStaticMarkup(project.description),
        number: index,
        thumbnail: `https://res.cloudinary.com/austriandominoart/image/upload/c_scale,dpr_auto,f_auto,q_auto:low,w_768/projects/${project.slug}/thumbnail.jpg`,
    })
);

const projectsMap: Map<string, Project> = new Map();
projects.forEach((project: Project) => {
    projectsMap.set(project.slug, project);
});

export const projectByNumber = (projectNumber: number): Project =>
    projects[projectNumber];

export const projectsByRange = (start: number, end: number): Project[] =>
    projects.slice(start, end);

export const projectBySlug = (slug: string): Project => projectsMap.get(slug);

export const projectSlugs = () => Array.from(projectsMap.keys());

export const projectCount = () => projects.length;
