import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
// import YouTubeVideo from '../components/DynamicVideo';

const YouTubeVideo = dynamic(() => import('../components/DynamicVideo'));

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  }
}

export default function DynamicImportPage() {
  const [isVisible, setVideoStatus] = useState(false);
  return (
    <div>
      <p>
        Mostrar Vídeo
        <input
          type="checkbox"
          onChange={() => {
            setVideoStatus(!isVisible);
          }}
        />
      </p>
      {isVisible && <YouTubeVideo />}      
    </div>
  )
}
