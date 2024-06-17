import { useEffect } from 'react';
import { Back } from '../components';

export const Parallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scale = 1 + window.scrollY / 500;
      const move = scale * 6.5;

      const background = document.getElementById('Window').style;
      const text = document.querySelector('.ParallaxText').style;

      background.transform = `scale(${scale})`;
      background.filter = `blur(${scale}px)`;
      text.top = `${move}%`;
      text.left = `${move}%`;
      text.transform = `scale(${scale})`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main id="Parallax">
      <Back />

      <p className="ParallaxText">Parallax</p>
      <div id="Window" className="ParallaxWindow"></div>
      <div className="ParallaxBackground"></div>
    </main>
  );
};
