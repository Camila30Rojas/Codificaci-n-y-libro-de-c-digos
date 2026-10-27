import {Composition} from 'remotion';
import {Infografico} from './scenes/Infografico';
import {FORMAT} from './styles/formato';
import {SECONDS} from './styles/tiempos';

export const Root = () => (
  <Composition
    id="Infografico"
    component={Infografico}
    durationInFrames={SECONDS.placeholder * FORMAT.fps}
    fps={FORMAT.fps}
    width={FORMAT.width}
    height={FORMAT.height}
    defaultProps={{showSafeZones: false}}
  />
);
