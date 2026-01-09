export const stories = [
    {
        id: 'george-simpson',
        title: 'George Simpson: The Scout',
        image: '/assets/images/simpson_hideout.png',
        excerpt: 'The legendary scout who survived a siege by Ute warriors on the rocky butte that now bears his name. His grave overlooks Trinidad to this day.',
        imageCredit: 'Historical Illustration / AI Generated',
        link: '#simpsons-rest',
        // Content handled by SimpsonsRest.js component
    },
    {
        id: 'bat-masterson',
        title: 'Bat Masterson',
        image: '/assets/images/black_jacks.png', // Using local placeholder
        excerpt: 'The famous lawman served as Marshal in Trinidad during the 1880s, keeping the peace in a rough frontier town.',
        imageCredit: 'Public Domain / Wikimedia Commons',
        link: '#story/bat-masterson',
        content: `
            <p><strong>William Barclay "Bat" Masterson</strong> is one of the most iconic figures of the American West, known as a buffalo hunter, army scout, gambler, and lawman. His time in Trinidad, Colorado, was a crucial chapter in his legendary career.</p>
            <p>In the early 1880s, Trinidad was a booming but volatile frontier town, struggling to transition from a rough outpost to a civilized city. The City Council, desperate for order, appointed Masterson as Town Marshal. Masterson's reputation as a gunfighter preceded him, and his presence alone was often enough to quell disturbances.</p>
            <p>During his tenure, he was known for being a "sportsman" as much as a lawman, often found at the gaming tables when off duty. He notably enforced the law with a strict hand against those who disturbed the peace, yet he was also criticized for his leniency towards his friends in the gambling community.</p>
            <p>One of his most famous episodes in the region involved his brother, Jim Masterson. When Jim was threatened in Dodge City, Bat took a leave of absence from Trinidad to go to his aid, a move that solidified his loyalty but strained his relationship with the Trinidad town council. He eventually moved on to become a sports writer in New York City, ending his days far from the dusty streets of Las Animas County, but his legacy as the "Marshal of Trinidad" remains etched in local lore.</p>
        `
    },
    {
        id: 'drop-city',
        title: 'Drop City',
        image: '/assets/images/drop_city.png',
        excerpt: 'Founded in 1965, Drop City was an artists community that became the first rural hippie commune in the United States.',
        imageCredit: 'Historical Recreation / AI Generated',
        link: '#story/drop-city',
        content: `
            <p>In 1965, a group of art students from the University of Kansas checked out of mainstream society and bought a plot of goat pasture near Trinidad, Colorado. They called it <strong>Drop City</strong>. It would go on to become the first rural hippie commune in the United States and a defining experiment of the counterculture era.</p>
            <p>The "Droppers," as they were called, sought to create a new civilization based on shared resources, art, and non-linear living. They are perhaps best known for their architecture: using scrap metal, bottle caps, and chopped-up car tops, they constructed geodesic domes inspired by Buckminster Fuller. These shimmering, patchwork structures became iconic symbols of the commune.</p>
            <p>Life at Drop City was a radical departure from the norm. They had no official leaders and practiced communal ownership. The community attracted international attention, drawing a steady stream of artists, writers, and curiosity seekers. However, the influx of visitors eventually overwhelmed the resources and the original vision. By the early 1970s, the original founders had moved on, and the commune was eventually abandoned.</p>
            <p>Today, the domes are gone, but Drop City's influence remains. It sparked a wave of rural communes across Southern Colorado and New Mexico and challenged the rigid social structures of 1960s America.</p>
        `
    },
    {
        id: 'ranching-heritage',
        title: 'Ranching Heritage',
        image: '/assets/images/ranching_heritage.png',
        excerpt: 'From the early Hispano settlers of the Purgatoire Valley to the Anglo cattle kings and immigrant farmers, agriculture is the backbone of Las Animas County.',
        link: '#ranching',
        imageCredit: 'Historical Collage / AI Generated'
        // Content handled by RanchingHeritage.js component
    },
    {
        id: 'pinon-canyon',
        title: 'The Fight for Pinon Canyon',
        image: '/assets/images/pinon_canyon.png',
        excerpt: 'When the Army proposed a massive expansion of the Pinon Canyon Maneuver Site, the community united under the banner "Not 1 More Acre" and won a historic victory.',
        link: '#pinon-canyon',
        imageCredit: 'Vintage Landscape / AI Generated'
        // Content handled by PinonCanyon.js component
    },
    {
        id: 'walsenburg-massacre',
        title: '1895 Italian Massacre',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Miners_Walsenburg_Colorado.jpg',
        excerpt: 'The "Walsenburg Massacre" in Huerfano County saw the death of Italian miners by vigilantes. This injustice fueled the labor movement that would eventually explode in the Southern Colorado Coalfield Wars.',
        imageCredit: 'Public Domain / Wikimedia Commons',
        link: '#story/walsenburg-massacre',
        content: `
            <p>Before the infamous Ludlow Massacre of 1914, there was the <strong>Walsenburg Massacre of 1895</strong>. This tragic event in neighboring Huerfano County served as a grim precursor to the violent Coalfield Wars that would engulf Southern Colorado.</p>
            <p>In March 1895, a group of Italian miners were accused of murdering a saloon keeper named Abner Huerfano. Despite a lack of concrete evidence, anti-immigrant sentiment ran high. As the accused men were being transported, a vigilante mob, reportedly led by local officials and business owners, intercepted them. Four Italians—Stanislaus Vittone, Francesco Ronchietto, Pietro Robero, and Antonio Colorghio—were shot and killed on the roadside.</p>
            <p>The Italian government actually intervened, demanding justice and reparations, creating an international diplomatic incident. The event deeply scarred the Italian-American community in Trinidad and Walsenburg. It cemented a deep distrust of local authorities and company guards, a sentiment that would fuel the unionization efforts of the United Mine Workers of America a decade later.</p>
            <p>While often overshadowed by Ludlow, the 1895 massacre was the "spark" that showed immigrant miners they could not rely on the law for protection, setting the stage for the armed conflicts to come.</p>
        `
    },
    {
        id: 'camp-trinidad',
        title: 'The Great Escape: Camp Trinidad',
        image: '/assets/images/camp_trinidad.png',
        excerpt: 'In 1943, Camp Trinidad housed German POWs. Three Japanese-American sisters from the nearby Amache internment camp, while working on a local farm, helped two German officers escape in a plot that stunned the nation.',
        imageCredit: 'Historical Recreation / AI Generated',
        link: '#story/camp-trinidad',
        content: `
            <p>During World War II, the quiet plains of Las Animas County were home to <strong>Camp Trinidad</strong>, a Prisoner of War camp housing thousands of German soldiers, including many high-ranking officers from Rommel's Afrika Korps.</p>
            <p>The camp was known for its lax security compared to others, but one event shocked the nation. In 1943, two German officers managed to escape. Their flight was aided by an unlikely source: three Japanese-American sisters—Tsuruko, Haruko, and Shizuko—who were internees at the nearby Granada War Relocation Center (Amache).</p>
            <p>The sisters had been granted work release to labor on a local farm near the POW camp. There, they fraternized with the German prisoners who were also working the fields. A romance reportedly blossomed, leading the sisters to provide the officers with maps, clothes, and supplies. The escapees were eventually recaptured near the Mexican border, and the sisters were put on trial for treason in a highly publicized commercial.</p>
            <p>The incident highlighted the strange and tragic intersections of war: German enemies treated with relative freedom, while loyal American citizens of Japanese descent were imprisoned, their paths crossing in the beet fields of Colorado.</p>
        `
    },
    {
        id: 'prohibition-agents',
        title: 'Fallen Agents of Prohibition',
        image: '/assets/images/prohibition_agents.png',
        excerpt: 'In 1930, the bootlegging wars claimed the lives of federal agents. Dale Kearney was murdered in Aguilar, and Ray Sutton disappeared without a trace near Raton, NM, while working the Trinidad beat.',
        imageCredit: 'Historical Recreation / AI Generated',
        link: '#story/prohibition-agents',
        content: `
            <p>Prohibition in the 1920s and 30s turned the rugged canyons between Trinidad, Colorado, and Raton, New Mexico, into a bootlegger's paradise. The "Sugarite Canyon" run was notorious for moonshine stills and midnight smuggling runs. Enforcing the law in this wild terrain was a deadly assignment.</p>
            <p><strong>Agent Dale F. Kearney</strong> was the first to fall. A zealous prohibition agent, he was ambushed and shot to death in Aguilar, a small mining town just north of Trinidad, in 1930. His murder sent shockwaves through the service, but the violence wasn't over.</p>
            <p>Just months later, <strong>Agent Ray Sutton</strong> arrived to continue the investigation. He vanished without a trace while patrolling the pass between Trinidad and Raton. Despite massive search parties and federal investigations, his body was never found. Rumors persisted for decades that he had been murdered and his body disposed of in an old mine shaft or a coke oven.</p>
            <p>These unsolved crimes remain a dark chapter in Las Animas County history, a testament to the lawlessness that once ruled the high mesas during the "Noble Experiment."</p>
        `
    },
    {
        id: 'historic-businesses',
        title: "Historic Businesses of Trinidad",
        description: "Explore the enduring legacy of the businesses that built Trinidad. From 1870s newspapers to the saloons of the Wild West, discover the 12 establishments that have stood the test of time.",
        // Fix: Use a valid existing image or placeholder
        image: "/assets/images/first_national_bank.png",
        link: "#businesses",
        // Content handled by HistoricBusinesses.js component
    },
    {
        id: 'santa-fe-trail',
        title: 'Santa Fe Trail',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Santa_Fe_Trail_ruts_near_Fort_Union_NM.jpg/640px-Santa_Fe_Trail_ruts_near_Fort_Union_NM.jpg',
        excerpt: 'Trinidad was a vital stop on the Mountain Branch of the Santa Fe Trail, welcoming weary travelers before the Raton Pass.',
        imageCredit: 'Public Domain / Wikimedia Commons',
        link: '#story/santa-fe-trail',
        content: `
            <p>Long before it was a city, Trinidad was a campsite—a crucial pause on the <strong>Mountain Branch of the Santa Fe Trail</strong>. This commercial highway connected Missouri to Santa Fe, New Mexico, and was the lifeline of the American southwest for decades.</p>
            <p>Travelers choosing the Mountain Branch faced the daunting climb over Raton Pass. Trinidad, nestled at the foot of the pass along the Purgatoire River, offered water, grass for livestock, and a last chance to rest before the grueling ascent. The trail brought not just goods, but people: Kearney's Army of the West marched through here in 1846 to claim New Mexico for the United States.</p>
            <p>The trail shaped the very layout of the town. Main Street and Commercial Street essentially follow the ruts of the old wagons. Today, you can still see physical traces of the trail in the landscape, a reminder of the thousands of oxen, mules, and pioneers who walked this path seeking fortune and a new life in the West.</p>
        `
    }
];
