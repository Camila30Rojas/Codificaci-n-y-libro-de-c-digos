import {AbsoluteFill} from 'remotion';
import {FORMAT} from '../styles/formato';
import {SAFE_ZONES} from '../styles/zonas-seguras';
import {COLORS} from '../styles/colores';
import {TYPOGRAPHY} from '../styles/tipografia';

type InfograficoProps = {
  showSafeZones?: boolean;
};

export const Infografico = ({showSafeZones = false}: InfograficoProps) => (
  <AbsoluteFill style={{backgroundColor: COLORS.background}}>
    <div style={{
      alignItems: 'center',
      display: 'flex',
      height: FORMAT.height,
      justifyContent: 'center',
      padding: `0 ${SAFE_ZONES.horizontal}px`,
      width: FORMAT.width,
    }}>
      <span style={TYPOGRAPHY.placeholder}>Infográfico: pendiente</span>
    </div>
    {showSafeZones && (
      <AbsoluteFill style={{pointerEvents: 'none'}}>
        <div style={{
          borderBottom: `${SAFE_ZONES.bottom}px solid ${COLORS.safeZone}`,
          borderTop: `${SAFE_ZONES.top}px solid ${COLORS.safeZone}`,
          height: '100%',
          opacity: COLORS.safeZoneOpacity,
          width: '100%',
        }} />
      </AbsoluteFill>
    )}
  </AbsoluteFill>
);
