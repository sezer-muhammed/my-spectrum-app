import React, { useState } from 'react';
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
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/xrbqlbwo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch {
      setError('Submission failed. Please try again.');
    }
    setSubmitting(false);
  };

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
          aria-label="Go to Home"
          onClick={() => window.location.href = process.env.PUBLIC_URL + '/'}
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

      {/* ───────── CONTACT CONTENT SPLIT: ABOUT + FORM ───────── */}
      <Flex direction={{ base: 'column', M: 'row' }} alignItems="stretch" justifyContent="center" flex={1} gap="size-400" UNSAFE_style={{ paddingTop: 'var(--spectrum-global-dimension-size-800)', paddingBottom: 'var(--spectrum-global-dimension-size-800)' }}>
        {/* About Me Section */}
        <View
          backgroundColor="gray-50"
          borderRadius="medium"
          padding="size-600"
          maxWidth="420px"
          width="100%"
          minWidth="size-3400"
          UNSAFE_style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
        >
          <Heading level={2} UNSAFE_className="text-gray-900" marginBottom="size-200">
            Let's Connect — Build the Future with Me
          </Heading>
          <Text UNSAFE_className="text-gray-800 text-base" marginBottom="size-200">
            I’m <b>Muhammed Sezer</b>, a passionate AI engineer and robotics innovator who loves blending technology with creativity. From building award-winning robots to leading AI projects that make a real-world impact, I bring energy, expertise, and a love for learning to every collaboration.
          </Text>
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
          <Text UNSAFE_className="text-gray-700 text-sm" marginBottom="size-100">
            Based in Pittsburgh, USA — open to global opportunities.
          </Text>
        </View>
        {/* Contact Form Section */}
        <View
          backgroundColor="gray-50"
          borderRadius="medium"
          padding="size-600"
          maxWidth="420px"
          width="100%"
          minWidth="size-3400"
          UNSAFE_style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
        >
          <Heading level={3} UNSAFE_className="text-gray-900" marginBottom="size-100">Contact Form</Heading>
          {submitted ? (
            <Text UNSAFE_className="text-green-700" marginBottom="size-200">Thank you! Your message has been sent.</Text>
          ) : (
            <form onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/xrbqlbwo">
              <Flex direction="column" gap="size-200">
                <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc', fontSize: 16 }} />
                <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc', fontSize: 16 }} />
                <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc', minHeight: 100, fontFamily: 'var(--spectrum-font-family)', fontSize: 'var(--spectrum-alias-font-size-default)' }} />
                {error && <Text UNSAFE_className="text-red-700">{error}</Text>}
                <Button type="submit" variant="cta" isDisabled={submitting} UNSAFE_className="text-xl font-bold px-10 py-6 bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg hover:scale-105 transition-transform">
                  {submitting ? 'Sending…' : 'Send Message'}
                </Button>
              </Flex>
            </form>
          )}
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
