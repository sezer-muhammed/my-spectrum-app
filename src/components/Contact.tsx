import React from 'react';
import {
  Flex,
  View,
  Heading,
  Text,
  Button,
  ActionButton,
  Divider
} from '@adobe/react-spectrum';

const basePath = process.env.PUBLIC_URL || '';

export default function ContactPage() {
  return (
    <Flex direction="column" minHeight="100vh" UNSAFE_className="bg-gray-950 text-gray-100">
      {/* ───────── HEADER ───────── */}
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
        <View
          role="button"
          tabIndex={0}
          aria-label="Go to Home"
          onClick={() => window.location.href = process.env.PUBLIC_URL + '/'}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.location.href = process.env.PUBLIC_URL + '/'; }}
          UNSAFE_style={{ display: 'inline-block', cursor: 'pointer' }}
        >
          <Heading
            level={1}
            UNSAFE_className="text-3xl font-bold hover:text-blue-400 transition-colors"
            UNSAFE_style={{
              color: '#fff',
              textShadow: '0 1px 4px #000',
              margin: 0,
            }}
          >
            Muhammed Sezer
          </Heading>
        </View>
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
          <Button variant="primary" staticColor="white" onPress={() => window.location.href = process.env.PUBLIC_URL + '/'}>
            Home
          </Button>
          <Button variant="cta" staticColor="white" onPress={() => window.open('mailto:muhammedsezer12@gmail.com')}>
            Hire Me
          </Button>
          <ActionButton isQuiet staticColor="white" aria-label="View CV" onPress={() => window.open(`${basePath}/cv.pdf`, '_blank')}>
            View CV
          </ActionButton>
        </Flex>
      </View>

      {/* ───────── CONTACT CONTENT ───────── */}
      <Flex direction="column" alignItems="center" justifyContent="center" flex={1} paddingY="size-800">
        <View
          backgroundColor="gray-50"
          borderRadius="medium"
          padding="size-600"
          maxWidth="700px"
          width="100%"
          UNSAFE_style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
        >
          <Heading level={2} UNSAFE_className="text-gray-900" marginBottom="size-200">
            Let's Connect — Build the Future with Me
          </Heading>
          <Text UNSAFE_className="text-gray-800 text-base" marginBottom="size-200">
            I’m <b>Muhammed Sezer</b>, a passionate AI engineer and robotics innovator who loves blending technology with creativity. From building award-winning robots to leading AI projects that make a real-world impact, I bring energy, expertise, and a love for learning to every collaboration.
          </Text>
          <Flex direction="row" gap="size-300" marginBottom="size-200" wrap>
            <View flex>
              <Heading level={4} UNSAFE_className="text-gray-900" marginBottom="size-100">I made projects for:</Heading>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, color: '#222', marginBottom: 12 }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '6px 12px', border: '1px solid #e5e7eb' }}><b>Anadolu Agency</b></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px 12px', border: '1px solid #e5e7eb' }}><b>Turkish Court of Accounts</b></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px 12px', border: '1px solid #e5e7eb' }}><b>Ministry of National Education</b></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px 12px', border: '1px solid #e5e7eb' }}><b>Teknofest</b></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px 12px', border: '1px solid #e5e7eb' }}><b>Middle East Technical University</b></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px 12px', border: '1px solid #e5e7eb' }}><b>Mefa Rubber</b></td>
                  </tr>
                </tbody>
              </table>
            </View>
            <View flex>
              <Heading level={4} UNSAFE_className="text-gray-900" marginBottom="size-100">Achievements</Heading>
              <ul style={{ margin: '0 0 0 18px', color: '#222', fontSize: 15 }}>
                <li>1st Place, TEKNOFEST AI Competition 2022</li>
                <li>1st Place, Entrepreneurship Competition</li>
                <li>2nd Place, Young Entrepreneurs Idea Marathon</li>
                <li>Multiple national awards in AI & robotics</li>
              </ul>
            </View>
          </Flex>
          <Divider marginY="size-200" />
          <Heading level={4} UNSAFE_className="text-gray-900" marginBottom="size-100">When you work with me</Heading>
          <ul style={{ margin: '0 0 16px 18px', color: '#222', fontSize: 15 }}>
            <li>Your project gets a creative, research-driven approach—blending AI, robotics, and real-world problem solving.</li>
            <li>You benefit from experience delivering for top organizations, from Anadolu Agency to the Ministry of National Education.</li>
            <li>You get clear, proactive communication and a collaborative mindset—no matter your technical background.</li>
            <li>You receive solutions that are robust, scalable, and tailored to your unique needs.</li>
            <li>You work with someone who cares about results, innovation, and your long-term success.</li>
          </ul>
          <Divider marginY="size-200" />
          <Flex direction="row" gap="size-200" alignItems="center" justifyContent="center" marginBottom="size-200" wrap>
            <Button
              variant="cta"
              UNSAFE_className="text-xl font-bold px-10 py-6 bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg hover:scale-105 transition-transform"
              onPress={() => window.open('mailto:muhammedsezer12@gmail.com')}
            >
              <span role="img" aria-label="Email" style={{marginRight: 8}}>📧</span> Email Me
            </Button>
            <Button
              variant="primary"
              UNSAFE_className="bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition-colors"
              onPress={() => window.open('https://www.linkedin.com/in/imsezer', '_blank')}
            >
              <span role="img" aria-label="LinkedIn" style={{marginRight: 8}}>💼</span> LinkedIn
            </Button>
            <Button
              variant="primary"
              UNSAFE_className="bg-gray-800 text-white font-semibold shadow hover:bg-gray-900 transition-colors"
              onPress={() => window.open('https://github.com/IMSezer', '_blank')}
            >
              <span role="img" aria-label="GitHub" style={{marginRight: 8}}>💻</span> GitHub
            </Button>
          </Flex>
          <Text UNSAFE_className="text-gray-700 text-sm" marginBottom="size-100">
            Based in Pittsburgh, USA — open to global opportunities.
          </Text>
        </View>
      </Flex>

      {/* ───────── FOOTER ───────── */}
      <View
        elementType="footer"
        paddingY="size-300"
        paddingX="size-200"
        backgroundColor="static-black"
        UNSAFE_className="text-center text-xs text-white mt-auto w-full shadow-md"
        position="static"
        marginTop="auto"
      >
        © {new Date().getFullYear()} Muhammed Sezer. Built with Adobe React Spectrum.
      </View>
    </Flex>
  );
}
