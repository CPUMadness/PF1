import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Daniel',
    lastName:  'Snodgrass',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Information Technology Student',
    avatar:    '/images/avatar.jpg',
    location:  'America/New_York',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'. Remove this shit
    languages: ['English']  // optional: Leave the array empty if you don't want to display languages
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/CPUMadness',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/daniel-snodgrass-022277244/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:danny060902@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as an ${person.role}`,
    headline: <>Welcome to my Portfolio</>,
    subline: <>I'm Daniel Snodgrass, a senior majoring in <b>Information Technology at the University of Central Florida</b>.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Daniel is a Florida-based Information Technology student interested in learning more about his lifelong passion, all things computers. His focus in helping clients with technology needs is recognized by peers, and leaders alike.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Brown & Brown ',
                timeframe: 'May 2025 - June 2025',
                role: 'Technology Solutions',
                achievements: [
                    <>3 month long internship. With the team, we researched into bettering the tech experience of 17,000 teammates globally. Resigned from internship early due to health issues.</>,
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                   /* {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    } */
                ]
            },
            {
                company: 'Chick-fil-A',
                timeframe: '2022 - Present',
                role: 'Kitchen Crew Member',
                achievements: [
                    <>With my team, we accomplished average hourly sales of over $4,500, maintained order speeds of 3 minutes, and ensured a throughput of over 100 vehicles per hour.</>,
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                   /* {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    } */
                ]
            },
            {
                company: 'Daytona State College',
                timeframe: 'April 2021 - June 2021',
                role: 'IT Helpdesk Analyst',
                achievements: [
                    <>At Daytona State College, my colleagues and I were responsible for technical support for a student body of 29,000 and 500 faculty members. All of my support tickets and inquiries consisted of using the Microsoft Azure Active Directory (now Entra ID), Office 365, ServiceNow, and Cisco VOIP.</>,
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Central Florida',
                description: <><b>2022 - Present | </b> Bachelor of Science in Information Technology</>,
            },
            {
                name: 'Daytona State College',
                description: <><b>2020 - 2020 |</b> Associate of Art</>,
            }
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about things...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Projects',
    title: 'My projects',
    description: `Projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, home, about, blog, work, gallery };
