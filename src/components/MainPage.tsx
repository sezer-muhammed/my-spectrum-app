import React from 'react';
import { Button, Flex, Heading, View, Text, Divider, IllustratedMessage, Image } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';
import photoPlaceholders from './photoPlaceholders.ts';

// Utility to get n random images
function getRandomImages(arr: string[], n: number) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

export default function MainPage() {
  const navigate = useNavigate();
  const images = getRandomImages(photoPlaceholders, 3);

  return (
    <Flex direction={{ base: 'column', M: 'row' }} height="100vh" width="100vw">
      {/* Left: Intro and About */}
      <View flex={1} backgroundColor="static-black" paddingX="size-400" paddingY="size-300" minWidth={"size-3600"} UNSAFE_style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Flex direction="column" gap="size-300" alignItems="center" justifyContent="center" height="100%">
          <Heading level={1} marginBottom="size-200" UNSAFE_style={{ color: '#fff' }}>Im Sezer</Heading>
          <Text UNSAFE_style={{ fontSize: '1.25rem', color: '#bdbdbd', textAlign: 'center', maxWidth: 700 }}>
            AI Engineer, Developer, and Photographer<br />
            Welcome to my personal website. Explore my work in artificial intelligence, software, and photography.
          </Text>
          <Divider size="S" marginY="size-200" />
          <IllustratedMessage>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style={{ marginBottom: 12 }}>
              <circle cx="35" cy="35" r="35" fill="#232326"/>
              <rect x="18" y="28" width="34" height="20" rx="4" fill="#18191b" stroke="#444" strokeWidth="2"/>
              <circle cx="35" cy="38" r="6" fill="#444" />
              <rect x="25" y="22" width="20" height="8" rx="2" fill="#232326" stroke="#444" strokeWidth="2"/>
            </svg>
            <Heading level={4}>About This Site</Heading>
            <Text>
              This is a showcase of my journey in AI, software, and photography. Built with Adobe React Spectrum for a modern, accessible, and beautiful experience.
            </Text>
          </IllustratedMessage>
        </Flex>
      </View>
      {/* Right: Photography Preview */}
      <View flex={1} backgroundColor="gray-900" paddingX="size-400" paddingY="size-300" minWidth={"size-3600"} UNSAFE_style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Flex direction="column" gap="size-300" alignItems="center" justifyContent="center" height="100%">
          <Heading level={3} marginTop="size-200" UNSAFE_style={{ color: '#fff' }}>Photography Preview</Heading>
          <Flex gap="size-300" justifyContent="center" wrap>
            {images.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Random gallery preview ${idx + 1}`}
                objectFit="cover"
                width="size-2400"
                height="size-2400"
                UNSAFE_style={{
                  aspectRatio: '1/1',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
                  background: '#111',
                  border: '3px solid #111',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  objectPosition: 'center',
                }}
              />
            ))}
          </Flex>
          <Button
            variant="cta"
            marginTop="size-300"
            onPress={() => navigate('/library')}
          >
            See Whole Library
          </Button>
        </Flex>
      </View>
    </Flex>
  );
}
