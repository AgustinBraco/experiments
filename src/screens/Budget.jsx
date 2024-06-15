import { Back, Switch } from '../components';
import { useRef, useEffect } from 'react';

export const Budget = () => {
  const nice = useRef(null);
  const fast = useRef(null);
  const cheap = useRef(null);

  const toggleActive = ref => ref.current.classList.toggle('active');
  const switchState = ref => ref.current.classList.contains('active');
  const removeActive = ref => ref.current.classList.remove('active');

  useEffect(() => {
    const handleToggleNice = () => {
      toggleActive(nice);
      if (switchState(fast) && switchState(cheap)) removeActive(fast);
    };

    const handleToggleFast = () => {
      toggleActive(fast);
      if (switchState(nice) && switchState(cheap)) removeActive(cheap);
    };

    const handleToggleCheap = () => {
      toggleActive(cheap);
      if (switchState(nice) && switchState(fast)) removeActive(nice);
    };

    if (nice.current) nice.current.addEventListener('click', handleToggleNice);
    if (fast.current) fast.current.addEventListener('click', handleToggleFast);
    if (cheap.current) cheap.current.addEventListener('click', handleToggleCheap);

    return () => {
      if (nice.current) nice.current.removeEventListener('click', handleToggleNice);
      if (fast.current) fast.current.removeEventListener('click', handleToggleFast);
      if (cheap.current) cheap.current.removeEventListener('click', handleToggleCheap);
    };
  }, []);

  return (
    <main id="Budget">
      <Back />

      <div>
        <Switch ref={nice} title="Bueno" name="Nice" icon="bxl-sketch" />
        <Switch ref={fast} title="Rápido" name="Fast" icon="bxs-timer" />
        <Switch ref={cheap} title="Barato" name="Cheap" icon="bxs-offer" />
      </div>
    </main>
  );
};
