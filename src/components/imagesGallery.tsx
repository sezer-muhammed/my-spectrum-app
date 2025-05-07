import React from 'react';
import {
    Provider, defaultTheme, Flex, View
} from '@adobe/react-spectrum';

// Use dynamic base path for images
const basePath = process.env.PUBLIC_URL || '';
const photoPlaceholders = [
    `${basePath}/images/1-SZR06477.jpg`,
    `${basePath}/images/2-SZR06176.jpg`,
    `${basePath}/images/2-SZR06441.jpg`,
    `${basePath}/images/3-SZR04626.jpg`,
    `${basePath}/images/3-SZR06429.jpg`,
    `${basePath}/images/4-SZR03968.jpg`,
    `${basePath}/images/4-SZR06380.jpg`,
    `${basePath}/images/5-SZR06279.jpg`,
    `${basePath}/images/6-SZR06108.jpg`,
    `${basePath}/images/7-SZR05940.jpg`,
    `${basePath}/images/8-SZR05939.jpg`,
    `${basePath}/images/9-SZR05673.jpg`,
    `${basePath}/images/10-SZR05370.jpg`,
    `${basePath}/images/11-SZR05234.jpg`,
    `${basePath}/images/12-SZR04964.jpg`,
    `${basePath}/images/13-SZR04958.jpg`,
    `${basePath}/images/14-SZR04819.jpg`,
    `${basePath}/images/15-SZR04626.jpg`,
    `${basePath}/images/16-SZR04597.jpg`,
    `${basePath}/images/17-SZR04275.jpg`,
    `${basePath}/images/18-SZR03971.jpg`,
    `${basePath}/images/19-SZR03968.jpg`,
    `${basePath}/images/20-SZR03503.jpg`,
    `${basePath}/images/21-SZR03439.jpg`,
    `${basePath}/images/22-SZR03411.jpg`,
    `${basePath}/images/23-SZR03072.jpg`,
    `${basePath}/images/24-IMG_8783.jpg`,
    `${basePath}/images/25-SZR02441.jpg`,
    `${basePath}/images/26-SZR02375.jpg`,
    `${basePath}/images/27-SZR02346.jpg`,
    `${basePath}/images/28-SZR02040.jpg`,
    `${basePath}/images/29-SZR02027.jpg`,
    `${basePath}/images/30-IMG-20240818-WA0034.jpg`,
    `${basePath}/images/31-SZR01045.jpg`,
    `${basePath}/images/32-SZR01199.jpg`,
    `${basePath}/images/33-SZR00640.jpg`,
    `${basePath}/images/34-SZR00417.jpg`,
    `${basePath}/images/35-SZR00239.jpg`,
    `${basePath}/images/36-SZR04620.jpg`,
    `${basePath}/images/37-SZR03989.jpg`,
    `${basePath}/images/38-SZR03820.jpg`,
    `${basePath}/images/39-SZR03614.jpg`,
    `${basePath}/images/40-SZR03548.jpg`,
    `${basePath}/images/41-SZR03701.jpg`,
    `${basePath}/images/42-SZR03690.jpg`,
    `${basePath}/images/43-SZR03681.jpg`,
    `${basePath}/images/44-SZR03661.jpg`,
    `${basePath}/images/45-SZR03596.jpg`,
    `${basePath}/images/46-SZR03230.jpg`,
    `${basePath}/images/47-SZR03155.jpg`,
    `${basePath}/images/48-SZR02950.jpg`,
    `${basePath}/images/49-SZR02842.jpg`,
    `${basePath}/images/50-SZR02648.jpg`,
    `${basePath}/images/51-SZR02606.jpg`,
    `${basePath}/images/52-SZR02600.jpg`,
    `${basePath}/images/53-SZR02170.jpg`,
];

// Example captions for demonstration
const photoCaptions: Record<string, string> = {
    '/images/1-SZR06477.jpg': `A close-up portrait of a goose with striking blue eyes and a vibrant orange beak, eagerly reaching up to receive a piece of bread from a human hand. The image captures the intricate details of the goose's textured feathers and the serrated edges of its beak, while the soft, blurred background highlights the interaction and creates a sense of intimacy and anticipation. The composition emphasizes the connection between human and animal, showcasing both curiosity and trust in a natural setting.`,
    '/images/2-SZR06176.jpg': 'A seagull soaring high in the blue sky.',
    '/images/3-SZR04626.jpg': 'A delicate white flower in focus.',
    // ...add more entries as needed...
};



export function ImagesGallery() {
    // Modal state for image preview
    const [modalImg, setModalImg] = React.useState<string | null>(null);
    const [isClosing, setIsClosing] = React.useState(false);
    const sortedPhotos = React.useMemo(() => [...photoPlaceholders].sort(), []);
    const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);

    // Handle fade-out animation
    React.useEffect(() => {
        if (!modalImg) setIsClosing(false);
    }, [modalImg]);

    // Clean up timeout if component unmounts or modal closes early
    React.useEffect(() => {
        return () => {
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
        };
    }, []);

    // Helper to handle image/modal click
    const handleImageClick = (src: string) => {
        if (modalImg === src) {
            setIsClosing(true);
            closeTimeout.current = setTimeout(() => setModalImg(null), 200);
        } else {
            setModalImg(src);
            setIsClosing(false);
        }
    };

    return (
        <Provider theme={defaultTheme} colorScheme="light">
            <div style={{ margin: '24px 0' }}>
                <Flex direction="column" gap="size-400" margin="size-400">
                    <View UNSAFE_className="masonry-gallery">
                        {sortedPhotos.map((src, index) => (
                            <figure key={index} className="gallery-figure">
                                <img
                                    src={src}
                                    alt={photoCaptions[src] ? photoCaptions[src] : `Photo ${index + 1}`}
                                    className="masonry-photo"
                                    onClick={() => handleImageClick(src)}
                                    style={{ cursor: 'pointer' }}
                                />
                            </figure>
                        ))}
                    </View>
                    {modalImg && (
                        <div
                            className={`modal-overlay${isClosing ? ' fade-out' : ''}`}
                            onClick={() => handleImageClick(modalImg)}
                            style={{ pointerEvents: isClosing ? 'none' : 'auto' }}
                        >
                            <div className="modal-content-layout-horizontal" onClick={e => e.stopPropagation()}>
                                <div className="modal-img-container">
                                    <img
                                        src={modalImg}
                                        alt="Large preview"
                                        className="modal-img"
                                    />
                                </div>
                                {photoCaptions[modalImg] && (
                                    <div
                                        style={{
                                            color: "#eee",
                                            fontSize: "1.1rem",
                                            textAlign: "left",
                                            background: "rgba(24,25,27,0.92)",
                                            borderRadius: "12px",
                                            padding: "18px 24px",
                                            marginLeft: "24px",
                                            maxWidth: "420px",
                                            minWidth: "220px"
                                        }}
                                    >
                                        {photoCaptions[modalImg]}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </Flex>
            </div>
            <style>
                {`
                .masonry-gallery {
                    column-count: 1;
                    column-gap: 16px;
                    background: none;
                    padding: 16px 0;
                    border-radius: 12px;
                }
                @media (min-width: 600px) {
                    .masonry-gallery {
                        column-count: 2;
                    }
                }
                @media (min-width: 900px) {
                    .masonry-gallery {
                        column-count: 4;
                    }
                }
                .gallery-figure {
                    margin: 0 0 24px 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: none;
                }
                .masonry-photo {
                    width: 100%;
                    margin-bottom: 8px;
                    border-radius: 16px;
                    border: 2px solid #000;
                    display: block;
                    background: #18191b;
                    box-sizing: border-box;
                    break-inside: avoid;
                    transition: transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s;
                }
                .gallery-caption {
                    color: #ccc;
                    font-size: 1rem;
                    text-align: center;
                    margin: 0 0 8px 0;
                    padding: 0 8px;
                }
                .masonry-photo:hover {
                    transform: scale(1.07);
                    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
                    z-index: 2;
                }
                /* Modal styles */
                .modal-overlay {
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0,0,0,0.85);
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: fadeInBg 0.2s;
                    animation-fill-mode: forwards;
                    opacity: 1;
                    transition: opacity 0.2s;
                }
                .modal-overlay.fade-out {
                    animation: fadeOutBg 0.2s;
                    animation-fill-mode: forwards;
                    opacity: 0;
                }
                .modal-content-layout-horizontal {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    max-width: 95vw;
                    max-height: 95vh;
                    width: 100%;
                    gap: 32px;
                }
                .modal-img-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    max-width: 60vw;
                    max-height: 70vh;
                    margin-bottom: 0;
                }
                .modal-img {
                    max-width: 60vw;
                    max-height: 60vh;
                    border-radius: 24px;
                    border: 4px solid #000;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.5);
                    background: #222;
                    animation: popIn 0.2s;
                }
                @media (max-width: 900px) {
                    .modal-content-layout-horizontal {
                        flex-direction: column;
                        gap: 0;
                    }
                    .modal-img-container {
                        max-width: 95vw;
                        max-height: 40vh;
                        margin-bottom: 12px;
                    }
                    .modal-img {
                        max-width: 95vw;
                        max-height: 40vh;
                    }
                }
                @keyframes fadeInBg {
                    from { opacity: 0; background: rgba(0,0,0,0); }
                    to { opacity: 1; background: rgba(0,0,0,0.85); }
                }
                @keyframes fadeOutBg {
                    from { opacity: 1; background: rgba(0,0,0,0.85); }
                    to { opacity: 0; background: rgba(0,0,0,0); }
                }
                @keyframes popIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                `}
            </style>
        </Provider>
    );
}
