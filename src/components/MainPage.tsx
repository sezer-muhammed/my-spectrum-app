import React, { useState } from 'react';
import {
  Flex,
  View,
  Heading,
  Text,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  Item,
  Image,
  Button,
  ActionButton,
  Link,
  Grid,
  Well,
  IllustratedMessage,
  Content,
  Meter,
  Badge
} from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';
import photoPlaceholders from './photoPlaceholders.ts';
import { ImagesGallery } from './imagesGallery.tsx';


/**
 * pick N random images (non‑mutating helper)
 */
function getRandomImages(arr: string[], n: number) {
  return [...arr].sort(() => 0.5 - Math.random()).slice(0, n);
}

/**
 * Portfolio page – synced to resume
 */
export default function PortfolioPage() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<'about' | 'experience' | 'projects' | 'photography' | 'cv' | 'contact'>('about');
  const randomPhotos = getRandomImages(photoPlaceholders, 6);

  /* ───────── EXPERIENCE / PROJECT DATA ───────── */
  const EXPERIENCE = [
    {
      title: 'Software Team Lead – HubX',
      period: 'Jan 2025 – Present | İzmir, TR',
      bullets: [
        'Architected an internal GenAI Python package combining video, audio & text models with optimisation / fine‑tuning pipelines.',
        'Integrated automated evaluators to benchmark SotA models company‑wide.',
        'Led a cross‑functional squad streamlining deployment & performance monitoring.',
      ],
    },
    {
      title: 'Software Developer – Spacture AI',
      period: 'Jan 2024 – Dec 2024 | New York, US',
      bullets: [
        'Shipped image‑based person‑search backend achieving 97 % precision.',
        'Built body & face matching / clustering algorithms at multi‑million‑image scale.',
        'Engineered text‑to‑image search handling millions of pictures in real‑time.',
      ],
    },
    {
      title: 'Software Developer – ODTÜ TEKNOKENT',
      period: 'Sep 2023 – Jan 2024 | Ankara, TR',
      bullets: [
        'Delivered AI‑driven analytics for 10 000+ personnel & 400 companies monthly.',
        'Raised operational efficiency 8× through ML workflow automation.',
        'Produced trend‑analysis dashboards guiding future investment strategy.',
      ],
    },
    {
      title: 'Co‑Founder & ML/Robotics Engineer – Orion Robotics',
      period: 'Sep 2021 – Dec 2023 | Ankara, TR',
      bullets: [
        'Spearheaded end‑to‑end robotic products with integrated AI capabilities.',
        'Authored ROS2 packages; conducted rigorous H/W & S/W validation.',
        'Grew start‑up via strategic sales while nurturing a multidisciplinary team.',
      ],
    },
  ];

  /**
   * Project list supports two display modes:
   *  - youtube => show <iframe>
   *  - repo / article => show action button
   */
  const PROJECTS: {
    name: string;
    desc: string;
    url: string;
  }[] = [
    {
      name: 'Anadolu Agency GenAI',
      desc: 'Developed a system that combined generative AI models to automatically generate visual aids (infographics) from news articles, speeding up the creation process by 80%. Received a job offer from Anadolu Agency to further develop and implement the idea.',
      url: 'https://github.com/sezer-muhammed/Anadolu-Ajans--Medya-Teknolojileri-hackathon',
    },
    {
      name: 'Eflatun UAV',
      desc: 'Led the design and deployment of an autonomous UAV capable of tracking and following other UAVs. Built from scratch in 5 months, tested successfully, and participated in Teknofest 2023 Fighting UAV Competition. Sponsored by Intel, Nurus, Asisguard, and T-motor.',
      url: 'https://www.youtube.com/embed/mR1ZyvNBoeE',
    },
    {
      name: 'Eflatun AI',
      desc: 'Developed an AI model for vehicle and person recognition using bird\'s-eye view imagery. Achieved 1st place in TEKNOFEST 2022 Artificial Intelligence in Transportation Competition with an all-time record (Award: $6,500).',
      url: 'https://www.linkedin.com/posts/sbdikkaya_yapayzeka-ai-teknofest2022-activity-6972554212916277249-WBOl',
    },
    {
      name: 'FENER Mobile Robot',
      desc: 'Led the development of a modular mobile robot platform for autonomous applications (object following, mapping, path planning, payload transport). Fully open-sourced, secured funding from multiple programs, and won 1st place at Atılım University Entrepreneurship Competition 2022 (Award: $5,000).',
      url: 'https://www.youtube.com/embed/0V4-foeD8QQ',
    },
  ];

  const isYoutube = (link: string) => /youtube\.com\/embed/.test(link);

  /* ────────────  RENDER ──────────── */
  return (
    <Flex direction="column" minHeight="100vh" UNSAFE_className="bg-gray-950 text-gray-100">
      {/* ───────── HERO ───────── */}
      <View
        paddingY="size-100"
        backgroundColor="static-black"
        elementType="header"
        UNSAFE_className="shadow-md"
        UNSAFE_style={{
          minHeight: '1cm',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '2rem',
          paddingRight: '2rem',
        }}
      >
        <Heading
          level={1}
          UNSAFE_className="text-3xl font-bold"
          UNSAFE_style={{
            color: '#fff',
            textShadow: '0 1px 4px #000',
            margin: 0,
          }}
        >
          Muhammed Sezer
        </Heading>
        <Text
          UNSAFE_className="text-lg text-white"
          UNSAFE_style={{
            color: '#fff',
            margin: 0,
            fontWeight: 500,
            letterSpacing: '0.01em',
          }}
        >
          AI Engineer & Robotics
        </Text>
        <Flex gap="size-200" alignItems="center">
          <Button variant="cta" staticColor="white" onPress={() => navigate('/contact')}>
            Hire Me
          </Button>
          <ActionButton isQuiet staticColor="white" aria-label="View CV" onPress={() => setSelectedTab('cv')}>
            View CV
          </ActionButton>
        </Flex>
      </View>


      {/* ───────── MAIN NAV ───────── */}
      <Tabs
        aria-label="Main sections"
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(key as typeof selectedTab)}
        UNSAFE_className="w-full bg-gray-900"
      >
        <TabList
          UNSAFE_className="justify-center text-white"
          marginX="size-300"
          UNSAFE_style={{
            borderBottom: '2px solid rgba(255,255,255,0.1)',
            paddingLeft: 'var(--spectrum-global-dimension-size-200)',
            paddingRight: 'var(--spectrum-global-dimension-size-200)'
          }}
        >
          <Item key="about">About</Item>
          <Item key="experience">Experience</Item>
          <Item key="projects">Projects</Item>
          <Item key="photography">Photography</Item>
          <Item key="cv">CV</Item>
          <Item key="contact">Contact</Item>
        </TabList>

        <TabPanels UNSAFE_className="px-8 py-6 max-w-7xl mx-auto w-full" marginX="size-200">
          {/* ───────── ABOUT ───────── */}
          <Item key="about">
            <View backgroundColor="gray-50" borderRadius="medium" padding="size-400" marginBottom="size-400">
              <Flex direction={{ base: "column", M: "row" }} gap="size-400" alignItems="stretch" justifyContent="center">
                {/* Profile/Avatar and Contact */}
                <Flex direction="column" alignItems="center" gap="size-200" minWidth="size-2000" flexShrink={0}>
                  <View
                    width="size-2000"
                    height="size-2000"
                    overflow="hidden"
                    position="relative"
                    borderRadius="medium"
                    UNSAFE_style={{ borderRadius: '9999px' }}
                  >
                    <Image
                      src={photoPlaceholders[0]}
                      alt="Muhammed Sezer"
                      objectFit="cover"
                      width="100%"
                      height="100%"
                      UNSAFE_style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                        aspectRatio: '1/1'
                      }}
                    />
                  </View>
                  <Heading level={3} UNSAFE_className="text-gray-900 text-center">Muhammed Sezer</Heading>
                  <Text UNSAFE_className="text-gray-700 text-center" fontSize="size-300">
                    Istanbul, Turkey
                  </Text>
                  <Text UNSAFE_className="text-blue-700 text-center" fontSize="size-200" marginY="size-100">
                    "Building AI for real-world impact"
                  </Text>
                  <Flex gap="size-100" justifyContent="center" marginTop="size-100">
                    {/* Change variants to info */}
                    <Badge variant="info">5+ yrs exp</Badge>
                    <Badge variant="info">20+ Projects</Badge>
                    <Badge variant="info">6 Awards</Badge>
                  </Flex>
                  <Flex gap="size-200" justifyContent="center" marginTop="size-100">
                    <ActionButton aria-label="GitHub" onPress={() => window.open('https://github.com/sezer-muhammed', '_blank')}>
                      GitHub
                    </ActionButton>
                    <ActionButton aria-label="LinkedIn" onPress={() => window.open('https://www.linkedin.com/in/imsezer', '_blank')}>
                      LinkedIn
                    </ActionButton>
                    <ActionButton aria-label="YouTube" onPress={() => window.open('https://www.youtube.com/@IMSezer', '_blank')}>
                      YouTube
                    </ActionButton>
                  </Flex>
                  <Button
                    variant="cta"
                    marginTop="size-200"
                    onPress={() => window.open('mailto:muhammedsezer12@gmail.com')}
                  >
                    muhammedsezer12@gmail.com
                  </Button>
                  {/* Removed the "Open to Work" Badge Flex container */}
                </Flex>
                {/* Main Content */}
                <Flex direction="column" gap="size-200" flex={1}>
                  <Text UNSAFE_className="text-gray-800" fontSize="size-300" marginBottom="size-100">
                    AI engineer and robotics enthusiast with a passion for fusing research and real-world applications. Experienced in leading teams, building scalable systems, and winning national competitions.
                  </Text>
                  <Divider marginY="size-100" />
                  <Grid columns={{ base: "1fr", M: "1fr 1fr" }} gap="size-200" marginTop="size-200">
                    <View>
                      <Heading level={4} UNSAFE_className="text-gray-900" marginBottom="size-100">
                        🎓 Education
                      </Heading>
                      <Text UNSAFE_className="text-gray-800">
                        <strong>Middle East Technical University</strong> (2017–2023)<br />
                        B.Sc. in Electrical and Electronics Engineering<br />
                        <span className="text-xs">Top 0.01% Entrance Rank</span>
                      </Text>
                    </View>
                    <View>
                      <Heading level={4} UNSAFE_className="text-gray-900" marginBottom="size-100">
                        🌐 Languages
                      </Heading>
                      <Flex gap="size-100" alignItems="center">
                        <Badge variant="seafoam">Turkish (Native)</Badge>
                        <Badge variant="info">English (Advanced)</Badge>
                        <Badge variant="neutral">Russian (Basic)</Badge>
                      </Flex>
                    </View>
                  </Grid>
                  <Divider marginY="size-200" />
                  <Grid columns={{ base: "1fr", M: "1fr 1fr" }} gap="size-200">
                    <View>
                      <Heading level={4} UNSAFE_className="text-gray-900" marginBottom="size-100">
                        🛠️ Key Skills
                      </Heading>
                      <Flex wrap gap="size-100" marginBottom="size-200">
                        <Badge variant="info">Python</Badge>
                        <Badge variant="info">C/C++</Badge>
                        <Badge variant="info">JavaScript</Badge>
                        <Badge variant="info">PyTorch</Badge>
                        <Badge variant="info">TensorRT</Badge>
                        <Badge variant="info">NLP</Badge>
                        <Badge variant="info">CV</Badge>
                        <Badge variant="info">ROS2</Badge>
                        <Badge variant="info">MLOps</Badge>
                        <Badge variant="info">Django</Badge>
                        <Badge variant="info">FastAPI</Badge>
                      </Flex>
                      <Divider marginY="size-100" />
                      <Heading level={5} UNSAFE_className="text-gray-900" marginBottom="size-50">
                        🤝 Soft Skills
                      </Heading>
                      <Flex wrap gap="size-100">
                        <Badge variant="positive">Leadership</Badge>
                        <Badge variant="positive">Communication</Badge>
                        <Badge variant="positive">Teamwork</Badge>
                        <Badge variant="positive">Public Speaking</Badge>
                        <Badge variant="positive">Teaching</Badge>
                      </Flex>
                      <Divider marginY="size-200" /> {/* Added Divider */}
                      <Heading level={5} UNSAFE_className="text-gray-900" marginBottom="size-50"> 
                        Interests
                      </Heading>
                      <Flex wrap gap="size-100">
                        <Badge variant="yellow">Photography</Badge>
                        <Badge variant="yellow">Music</Badge>
                        <Badge variant="yellow">Travel</Badge>
                        <Badge variant="yellow">Open Source</Badge>
                      </Flex>
                    </View>
                    <View>
                      <Heading level={4} UNSAFE_className="text-gray-900" marginBottom="size-100">
                        🏆 Achievements
                      </Heading>
                      <Well UNSAFE_className="bg-gray-100" padding="size-200">
                        {/* Replace ul with Flex */}
                        <Flex direction="column" gap="size-150">
                          <Text UNSAFE_className="text-gray-800 text-sm">
                            • 2nd Place, Young Entrepreneurs Idea Marathon (UNICEF, 2023)
                          </Text>
                          <Text UNSAFE_className="text-gray-800 text-sm">
                            • 1st Place, Entrepreneurship Competition (Atılım University, 2022)
                          </Text>
                          <Text UNSAFE_className="text-gray-800 text-sm">
                            • 1st & 2nd Place, AI Competitions (Teknofest, 2022)
                          </Text>
                          <Text UNSAFE_className="text-gray-800 text-sm">
                            • 2nd Place, Undergraduate Research Projects (METU, 2020)
                          </Text>
                          <Text UNSAFE_className="text-gray-800 text-sm">
                            • Honorable Mention, TÜBİTAK, 2019
                          </Text>
                        </Flex>
                      </Well>
                      {/* Removed Divider and Interests section from here */}
                    </View>
                  </Grid>
                  <Divider marginY="size-200" />
                  <Heading level={4} UNSAFE_className="text-gray-900" marginBottom="size-100">
                    📚 Publications & Media
                  </Heading>
                  <Flex wrap gap="size-200" alignItems="center">
                    <Well backgroundColor="gray-100" borderRadius="medium" padding="size-200" UNSAFE_className="flex items-center gap-2">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#24292f" d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5Z"/></svg>
                      <Link href="https://github.com/sezer-muhammed/Anadolu-Ajans--Medya-Teknolojileri-hackathon" target="_blank">
                        Anadolu Agency GenAI (GitHub)
                      </Link>
                    </Well>
                    <Well backgroundColor="gray-100" borderRadius="medium" padding="size-200" UNSAFE_className="flex items-center gap-2">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#1DA1F2"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">TRT</text></svg>
                      <Link href="https://www.youtube.com/watch?v=Q2PWWyAS-D0" target="_blank">
                        TRT Radyo1 Interview
                      </Link>
                    </Well>
                    <Well backgroundColor="gray-100" borderRadius="medium" padding="size-200" UNSAFE_className="flex items-center gap-2">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" fill="#E53935" rx="2"/><polygon points="10,9 16,12 10,15" fill="#fff"/></svg>
                      <Link href="https://www.youtube.com/watch?v=9j8DhSR_5V0" target="_blank">
                        National TV Interview
                      </Link>
                    </Well>
                  </Flex>
                  {/* Example for future: <Accordion> for references/testimonials */}
                </Flex>
              </Flex>
            </View>
          </Item>

          {/* ───────── EXPERIENCE ───────── */}
          <Item key="experience">
            <Heading level={2} UNSAFE_className="text-white">Professional Experience</Heading>
            <Divider marginY="size-200" />
            <Grid columns={{ base: "1fr" }} gap="size-300" UNSAFE_className="mt-4">
              {EXPERIENCE.map(({ title, period, bullets }) => (
                <Well
                  key={title}
                  backgroundColor="gray-200" // Keep slightly darker background for visual separation
                  borderRadius="medium"
                  padding="size-300"
                  marginBottom="size-200"
                  UNSAFE_className="shadow-inner" // Removed space-y-100, handled by Flex gap
                >
                  <Heading level={4} UNSAFE_className="text-gray-900" marginBottom="size-100">{title}</Heading>
                  <Text UNSAFE_className="text-sm text-gray-700" marginBottom="size-200">{period}</Text>
                  {/* Replace ul with Flex */}
                  <Flex direction="column" gap="size-150">
                    {bullets.map((b) => (
                      <Text key={b} UNSAFE_className="text-sm text-gray-800">
                        • {b}
                      </Text>
                    ))}
                  </Flex>
                </Well>
              ))}
            </Grid>
          </Item>

          {/* ───────── PROJECTS ───────── */}
          <Item key="projects">
            <Heading level={2} UNSAFE_className="text-white">Selected Projects</Heading>
            <Divider marginY="size-200" />
            <Grid columns={{ base: "1fr", M: "1fr 1fr" }} gap="size-200">
              {PROJECTS.map(({ name, desc, url }) => (
                <Well
                  key={name}
                  marginBottom="size-200"
                  backgroundColor="gray-100" // Keep lighter background for project cards
                  borderRadius="medium"
                  padding="size-300"
                  UNSAFE_className="flex flex-col shadow-lg" // Keep flex-col for button alignment
                >
                  <Heading level={3} UNSAFE_className="text-gray-900" marginBottom="size-100">
                    {name}
                  </Heading>
                  <Divider size="S" marginY="size-100" />
                  {/* Main description */}
                  <Content marginY="size-100" flexGrow={1}> {/* Added flexGrow to push button down */}
                    <Text UNSAFE_className="text-gray-900" UNSAFE_style={{ fontWeight: 500, fontSize: 16 }}>
                      {desc}
                    </Text>
                  </Content>
                  {/* Conditional Media (YouTube iframe or nothing) */}
                  {isYoutube(url) ? (
                    <View
                      width="100%"
                      paddingTop="56.25%" // 16:9 Aspect Ratio
                      position="relative"
                      marginY="size-200"
                      UNSAFE_style={{ borderRadius: 8, overflow: 'hidden' }}
                    >
                      <iframe
                        src={url}
                        title={name}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          border: 0,
                          borderRadius: 8,
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </View>
                  ) : (
                    // No extra view needed for non-YouTube links, description is already above.
                    // Add some margin if needed before the button for non-YouTube cards
                    <View marginY="size-100" /> // Placeholder for potential spacing adjustment
                  )}
                  {/* Action Button - marginTop="auto" pushes it down if flexGrow is on Content */}
                  <Flex gap="size-100" marginTop="auto">
                    <Button
                      variant="primary"
                      onPress={() => window.open(url, '_blank')}
                    >
                      {isYoutube(url) ? 'Watch on YouTube' : url.includes('github.com') ? 'View Repository' : 'Visit Link'}
                    </Button>
                  </Flex>
                </Well>
              ))}
            </Grid>
          </Item>

          {/* ───────── PHOTOGRAPHY ───────── */}
          <Item key="photography">
            <Heading level={2} UNSAFE_className="text-white">Photography Gallery</Heading>
            <Divider marginY="size-200" />
            {/* Embed the full gallery here */}
            <ImagesGallery />
            {/* Removed "See Full Library" button */}
          </Item>

          {/* ───────── CV ───────── */}
          <Item key="cv">
            <Heading level={2} UNSAFE_className="text-white">
              Curriculum&nbsp;Vitae
            </Heading>
            <Divider marginY="size-200" />
            {/* Use dynamic base path for CV PDF */}
            {(() => {
              const basePath = process.env.PUBLIC_URL || '';
              return (
                <>
                  <View
                    backgroundColor="gray-50"
                    borderRadius="medium"
                    height="80vh"
                    overflow="auto"
                    UNSAFE_style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
                  >
                    <iframe
                      src={`${basePath}/cv.pdf`}
                      title="Muhammed Sezer CV"
                      style={{ width: '100%', height: '100%', border: 0 }}
                    />
                  </View>
                  <Flex justifyContent="center" marginTop="size-300">
                    <Button variant="primary" onPress={() => window.open(`${basePath}/cv.pdf`, '_blank')}>
                      Download&nbsp;as&nbsp;PDF
                    </Button>
                  </Flex>
                </>
              );
            })()}
          </Item>

          {/* ───────── CONTACT ───────── */}
          <Item key="contact">
            <Heading level={2} UNSAFE_className="text-white">Get In Touch</Heading>
            <Divider marginY="size-200" />
            <Text UNSAFE_className="text-white" marginBottom="size-300">
              Have a project or collaboration in mind? Let's connect!
            </Text>
            <Grid columns={{ base: "1fr", M: "1fr 1fr" }} gap="size-400" marginTop="size-400">
              <View
                backgroundColor="gray-50"
                borderRadius="medium"
                padding="size-400"
                minHeight="size-3400"
              >
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  gap="size-200"
                  UNSAFE_className="space-y-200"
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  <Heading level={3} UNSAFE_className="text-gray-900" marginTop="size-200">GitHub</Heading>
                  <Text UNSAFE_className="text-gray-800 text-center" marginBottom="size-200">
                    Open source projects and code contributions
                  </Text>
                  <Meter
                    value={75}
                    variant="positive"
                    label="Contribution Activity"
                    marginTop="size-200"
                    marginBottom="size-200"
                    width="80%"
                  />
                  <Button
                    variant="primary"
                    UNSAFE_className="bg-blue-700 text-white font-semibold"
                    onPress={() => window.open('https://github.com/sezer-muhammed', '_blank')}
                    marginTop="size-200"
                  >
                    Visit Profile
                  </Button>
                </Flex>
              </View>
              <View
                backgroundColor="gray-50"
                borderRadius="medium"
                padding="size-400"
                minHeight="size-3400"
              >
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  gap="size-200"
                  UNSAFE_className="space-y-200"
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <Heading level={3} UNSAFE_className="text-gray-900" marginTop="size-200">LinkedIn</Heading>
                  <Text UNSAFE_className="text-gray-800 text-center" marginBottom="size-200">
                    Professional experience and connections
                  </Text>
                  <View backgroundColor="gray-100" padding="size-200" borderRadius="medium" marginTop="size-200" width="100%">
                    <Text UNSAFE_className="text-gray-900" UNSAFE_style={{ fontWeight: 600 }}>
                      Profile Info
                    </Text>
                    <Divider size="S" marginY="size-100" />
                    <Text UNSAFE_className="text-gray-800 text-sm">
                      • Joined 2020
                    </Text>
                    <Text UNSAFE_className="text-gray-800 text-sm">
                      • 500+ connections
                    </Text>
                    <Text UNSAFE_className="text-gray-800 text-sm">
                      • Regular industry updates
                    </Text>
                  </View>
                  <Button
                    variant="primary"
                    UNSAFE_className="bg-blue-700 text-white font-semibold"
                    onPress={() => window.open('https://www.linkedin.com/in/imsezer', '_blank')}
                    marginTop="size-200"
                  >
                    Connect on LinkedIn
                  </Button>
                </Flex>
              </View>
            </Grid>
            <Flex direction="column" alignItems="center" marginTop="size-400">
              <Button
                variant="cta"
                UNSAFE_className="text-2xl font-bold px-10 py-6 bg-gradient-to-r from-blue-600 to-blue-400"
                onPress={() => window.open('mailto:muhammedsezer12@gmail.com')}
              >
                muhammedsezer12@gmail.com
              </Button>
            </Flex>
          </Item>
        </TabPanels>
      </Tabs>

      {/* ───────── FOOTER ───────── */}
      <View
        elementType="footer"
        paddingY="size-300"
        paddingX="size-200"
        backgroundColor="static-black"
        UNSAFE_className="text-center text-xs text-white mt-auto w-full shadow-md"
        position="static"
        marginTop="auto"
        // Remove marginX from footer
      >
        © {new Date().getFullYear()} Muhammed Sezer. Built with Adobe React Spectrum.
      </View>
    </Flex>
  );
}
