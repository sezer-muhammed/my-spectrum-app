import React from 'react';
import { Heading, Flex, View } from '@adobe/react-spectrum';
import { ImagesGallery } from './imagesGallery.tsx';

export default function LibraryPage() {
  return (
    <View padding="size-200">
      <Heading level={2}>Full Image Library</Heading>
      <ImagesGallery />
    </View>
  );
}
