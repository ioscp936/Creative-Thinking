import React from 'react';
import { PropShape, VisualCountMechanic } from '../data/puzzles/types';

interface PropIllustrationProps {
  shape: PropShape;
  color?: string;
  size?: number;
  label?: string;
}

export const PropIllustration: React.FC<PropIllustrationProps> = ({
  shape,
  color,
  size = 64,
  label,
}) => {
  const s = size;
  const ink = '#141417';

  const renderShape = () => {
    switch (shape) {
      case 'apple':
        return (
          <g>
            <path d="M32 18 C22 16 14 24 14 35 C14 48 23 56 32 54 C41 56 50 48 50 35 C50 24 42 16 32 18 Z" fill={color || '#EF4444'} stroke={ink} strokeWidth="2.5" />
            <path d="M32 18 C32 12 36 8 40 8" stroke={ink} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M33 13 C38 8 45 10 44 16 C39 17 35 16 33 13 Z" fill="#22C55E" stroke={ink} strokeWidth="2" />
            <path d="M21 27 C20 31 20 34 22 37" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" fill="none" />
          </g>
        );
      case 'pear':
        return (
          <g>
            <path d="M32 14 C26 14 24 22 23 28 C18 33 16 41 18 47 C20 53 26 55 32 55 C38 55 44 53 46 47 C48 41 46 33 41 28 C40 22 38 14 32 14 Z" fill={color || '#84CC16'} stroke={ink} strokeWidth="2.5" />
            <path d="M32 14 L34 7" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />
            <path d="M33 11 C38 8 42 10 41 14 C37 14 34 13 33 11 Z" fill="#22C55E" stroke={ink} strokeWidth="2" />
          </g>
        );
      case 'banana':
        return (
          <g>
            <path d="M16 44 C26 52 46 46 50 20 C48 16 44 16 42 20 C38 35 26 40 16 38 C12 38 12 42 16 44 Z" fill={color || '#FACC15'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
          </g>
        );
      case 'sun':
        return (
          <g>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <line
                key={deg}
                x1="32"
                y1="6"
                x2="32"
                y2="12"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
                transform={`rotate(${deg} 32 32)`}
              />
            ))}
            <circle cx="32" cy="32" r="16" fill={color || '#FBBF24'} stroke={ink} strokeWidth="2.5" />
            <circle cx="27" cy="30" r="2" fill={ink} />
            <circle cx="37" cy="30" r="2" fill={ink} />
            <path d="M27 36 Q32 40 37 36" stroke={ink} strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>
        );
      case 'cloud':
        return (
          <path d="M18 44 H47 C52 44 55 40 55 35 C55 30 51 27 46 27 C45 20 39 16 32 16 C25 16 20 21 19 27 C14 27 10 31 10 36 C10 40 13 44 18 44 Z" fill={color || '#FFFFFF'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
        );
      case 'raincloud':
        return (
          <g>
            <path d="M17 38 H47 C52 38 55 34 55 30 C55 25 51 22 46 22 C45 15 39 11 32 11 C25 11 20 16 19 22 C14 22 10 25 10 30 C10 35 13 38 17 38 Z" fill={color || '#64748B'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <line x1="22" y1="43" x2="19" y2="51" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="32" y1="44" x2="29" y2="53" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="42" y1="43" x2="39" y2="51" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        );
      case 'moon':
        return (
          <path d="M40 12 C28 12 18 22 18 34 C18 46 28 54 40 54 C44 54 48 53 50 51 C41 49 34 42 34 33 C34 24 41 16 49 14 C46 13 43 12 40 12 Z" fill={color || '#FDE047'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
        );
      case 'star':
        return (
          <polygon points="32,8 39,23 55,25 43,37 46,54 32,46 18,54 21,37 9,25 25,23" fill={color || '#FBBF24'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
        );
      case 'cat':
        return (
          <g>
            <polygon points="18,26 16,12 28,20" fill="#FB923C" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <polygon points="46,26 48,12 36,20" fill="#FB923C" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <ellipse cx="32" cy="36" rx="18" ry="15" fill={color || '#FDBA74'} stroke={ink} strokeWidth="2.5" />
            <circle cx="25" cy="34" r="2.3" fill={ink} />
            <circle cx="39" cy="34" r="2.3" fill={ink} />
            <polygon points="30,39 34,39 32,42" fill="#EC4899" />
            <line x1="12" y1="36" x2="20" y2="37" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
            <line x1="52" y1="36" x2="44" y2="37" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
          </g>
        );
      case 'dog':
        return (
          <g>
            <ellipse cx="15" cy="34" rx="6" ry="11" fill="#92400E" stroke={ink} strokeWidth="2.5" />
            <ellipse cx="49" cy="34" rx="6" ry="11" fill="#92400E" stroke={ink} strokeWidth="2.5" />
            <circle cx="32" cy="34" r="16" fill={color || '#D97706'} stroke={ink} strokeWidth="2.5" />
            <ellipse cx="32" cy="39" rx="8" ry="6" fill="#FDE68A" />
            <circle cx="26" cy="30" r="2.2" fill={ink} />
            <circle cx="38" cy="30" r="2.2" fill={ink} />
            <ellipse cx="32" cy="37" rx="3.5" ry="2.5" fill={ink} />
          </g>
        );
      case 'mouse':
        return (
          <g>
            <circle cx="20" cy="21" r="8" fill="#CBD5E1" stroke={ink} strokeWidth="2.5" />
            <circle cx="44" cy="21" r="8" fill="#CBD5E1" stroke={ink} strokeWidth="2.5" />
            <ellipse cx="32" cy="38" rx="15" ry="13" fill={color || '#94A3B8'} stroke={ink} strokeWidth="2.5" />
            <circle cx="27" cy="35" r="2" fill={ink} />
            <circle cx="37" cy="35" r="2" fill={ink} />
            <circle cx="32" cy="42" r="2.8" fill="#F43F5E" />
          </g>
        );
      case 'owl':
        return (
          <g>
            <ellipse cx="32" cy="36" rx="16" ry="18" fill={color || '#8B5CF6'} stroke={ink} strokeWidth="2.5" />
            <circle cx="25" cy="29" r="6" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
            <circle cx="39" cy="29" r="6" fill="#FFFFFF" stroke={ink} strokeWidth="2" />
            <circle cx="25" cy="29" r="2.5" fill={ink} />
            <circle cx="39" cy="29" r="2.5" fill={ink} />
            <polygon points="30,34 34,34 32,39" fill="#F59E0B" stroke={ink} strokeWidth="1.5" />
          </g>
        );
      case 'egg':
        return (
          <path d="M32 10 C21 10 15 27 15 39 C15 49 22 55 32 55 C42 55 49 49 49 39 C49 27 43 10 32 10 Z" fill={color || '#FEF3C7'} stroke={ink} strokeWidth="2.5" />
        );
      case 'chick':
        return (
          <g>
            <circle cx="32" cy="34" r="17" fill="#FDE047" stroke={ink} strokeWidth="2.5" />
            <circle cx="26" cy="31" r="2.2" fill={ink} />
            <circle cx="38" cy="31" r="2.2" fill={ink} />
            <polygon points="29,36 35,36 32,41" fill="#F97316" stroke={ink} strokeWidth="1.5" />
            <path d="M28 17 Q32 11 36 17" stroke={ink} strokeWidth="2" fill="none" />
          </g>
        );
      case 'fish':
        return (
          <g>
            <polygon points="46,32 57,22 57,42" fill="#38BDF8" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <ellipse cx="29" cy="32" rx="18" ry="12" fill={color || '#0EA5E9'} stroke={ink} strokeWidth="2.5" />
            <circle cx="20" cy="29" r="2.3" fill={ink} />
          </g>
        );
      case 'frog':
        return (
          <g>
            <circle cx="22" cy="22" r="6" fill="#4ADE80" stroke={ink} strokeWidth="2.5" />
            <circle cx="42" cy="22" r="6" fill="#4ADE80" stroke={ink} strokeWidth="2.5" />
            <ellipse cx="32" cy="38" rx="18" ry="14" fill={color || '#22C55E'} stroke={ink} strokeWidth="2.5" />
            <circle cx="22" cy="22" r="2.2" fill={ink} />
            <circle cx="42" cy="22" r="2.2" fill={ink} />
            <path d="M24 40 Q32 45 40 40" stroke={ink} strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>
        );
      case 'tree':
        return (
          <g>
            <rect x="27" y="38" width="10" height="17" rx="2" fill="#92400E" stroke={ink} strokeWidth="2.5" />
            <circle cx="32" cy="26" r="16" fill={color || '#22C55E'} stroke={ink} strokeWidth="2.5" />
          </g>
        );
      case 'bush':
        return (
          <path d="M14 48 H50 C54 48 56 44 56 40 C56 35 52 32 48 32 C47 23 40 18 32 18 C24 18 18 23 17 31 C12 32 9 35 9 40 C9 45 11 48 14 48 Z" fill={color || '#16A34A'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
        );
      case 'rock':
        return (
          <polygon points="14,48 10,34 22,18 42,16 54,32 50,48" fill={color || '#94A3B8'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
        );
      case 'key':
        return (
          <g>
            <circle cx="21" cy="32" r="10" fill={color || '#FBBF24'} stroke={ink} strokeWidth="2.5" />
            <circle cx="21" cy="32" r="3.5" fill="#F7F7F5" stroke={ink} strokeWidth="2" />
            <path d="M31 32 H53 M45 32 V40 M51 32 V39" stroke={ink} strokeWidth="3.5" strokeLinecap="round" />
          </g>
        );
      case 'chest':
        return (
          <g>
            <rect x="12" y="22" width="40" height="28" rx="5" fill={color || '#B45309'} stroke={ink} strokeWidth="2.5" />
            <line x1="12" y1="34" x2="52" y2="34" stroke={ink} strokeWidth="2.5" />
            <rect x="28" y="30" width="8" height="9" rx="2" fill="#FBBF24" stroke={ink} strokeWidth="2" />
          </g>
        );
      case 'door':
        return (
          <g>
            <rect x="17" y="10" width="30" height="45" rx="3" fill={color || '#A16207'} stroke={ink} strokeWidth="2.5" />
            <circle cx="40" cy="34" r="3" fill="#FBBF24" stroke={ink} strokeWidth="1.8" />
          </g>
        );
      case 'balloon':
        return (
          <g>
            <path d="M32 45 C32 51 29 53 31 58" stroke={ink} strokeWidth="2" fill="none" />
            <ellipse cx="32" cy="27" rx="15" ry="18" fill={color || '#EC4899'} stroke={ink} strokeWidth="2.5" />
            <path d="M25 18 Q23 23 24 27" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" opacity="0.6" fill="none" />
          </g>
        );
      case 'fire':
        return (
          <path d="M32 10 C38 20 48 25 48 38 C48 48 41 54 32 54 C23 54 16 48 16 38 C16 28 24 22 26 14 C29 19 31 15 32 10 Z" fill={color || '#F97316'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
        );
      case 'water':
        return (
          <path d="M32 10 C32 10 48 28 48 39 C48 48 41 54 32 54 C23 54 16 48 16 39 C16 28 32 10 32 10 Z" fill={color || '#38BDF8'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
        );
      case 'ice':
        return (
          <g>
            <rect x="14" y="16" width="36" height="34" rx="6" fill={color || '#BAE6FD'} stroke={ink} strokeWidth="2.5" />
            <line x1="22" y1="24" x2="30" y2="32" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="34" y1="22" x2="42" y2="30" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        );
      case 'magnet':
        return (
          <g>
            <path d="M18 16 V34 C18 44 24 50 32 50 C40 50 46 44 46 34 V16" stroke={color || '#EF4444'} strokeWidth="9" strokeLinecap="butt" fill="none" />
            <path d="M18 16 V34 C18 44 24 50 32 50 C40 50 46 44 46 34 V16" stroke={ink} strokeWidth="2" fill="none" />
            <rect x="13" y="14" width="10" height="7" fill="#E2E8F0" stroke={ink} strokeWidth="2" />
            <rect x="41" y="14" width="10" height="7" fill="#E2E8F0" stroke={ink} strokeWidth="2" />
          </g>
        );
      case 'flashlight':
        return (
          <g>
            <rect x="12" y="25" width="26" height="14" rx="3" fill="#334155" stroke={ink} strokeWidth="2.5" />
            <polygon points="38,23 52,18 52,46 38,41" fill="#FBBF24" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
          </g>
        );
      case 'clock':
        return (
          <g>
            <circle cx="32" cy="34" r="19" fill="#FFFFFF" stroke={ink} strokeWidth="2.5" />
            <line x1="32" y1="34" x2="32" y2="22" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="32" y1="34" x2="41" y2="34" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        );
      case 'book':
        return (
          <g>
            <rect x="14" y="15" width="36" height="36" rx="4" fill={color || '#3B82F6'} stroke={ink} strokeWidth="2.5" />
            <line x1="22" y1="15" x2="22" y2="51" stroke={ink} strokeWidth="2.5" />
            <rect x="27" y="23" width="16" height="6" rx="1.5" fill="#FFFFFF" />
          </g>
        );
      case 'box':
        return (
          <g>
            <rect x="13" y="18" width="38" height="32" rx="4" fill={color || '#D97706'} stroke={ink} strokeWidth="2.5" />
            <line x1="13" y1="28" x2="51" y2="28" stroke={ink} strokeWidth="2.5" />
          </g>
        );
      case 'car':
        return (
          <g>
            <path d="M12 38 L18 24 H44 L52 38 Z" fill={color || '#2563EB'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <rect x="10" y="36" width="44" height="10" rx="4" fill={color || '#3B82F6'} stroke={ink} strokeWidth="2.5" />
            <circle cx="20" cy="48" r="5" fill="#1E293B" stroke={ink} strokeWidth="2" />
            <circle cx="44" cy="48" r="5" fill="#1E293B" stroke={ink} strokeWidth="2" />
          </g>
        );
      case 'cake':
        return (
          <g>
            <rect x="14" y="30" width="36" height="22" rx="4" fill="#FDE68A" stroke={ink} strokeWidth="2.5" />
            <path d="M14 34 Q20 40 26 34 Q32 40 38 34 Q44 40 50 34" fill="none" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
            <rect x="30" y="18" width="4" height="12" fill="#60A5FA" stroke={ink} strokeWidth="1.5" />
          </g>
        );
      case 'candle':
        return (
          <g>
            <rect x="26" y="26" width="12" height="28" rx="2" fill="#FEF3C7" stroke={ink} strokeWidth="2.5" />
            <path d="M32 10 C36 16 37 21 32 24 C27 21 28 16 32 10 Z" fill="#F97316" stroke={ink} strokeWidth="2" />
          </g>
        );
      case 'coin':
        return (
          <g>
            <circle cx="32" cy="32" r="18" fill="#FBBF24" stroke={ink} strokeWidth="2.5" />
            <circle cx="32" cy="32" r="12" fill="none" stroke="#B45309" strokeWidth="2" />
          </g>
        );
      case 'diamond':
        return (
          <g>
            <polygon points="20,16 44,16 54,28 32,52 10,28" fill={color || '#38BDF8'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <line x1="10" y1="28" x2="54" y2="28" stroke={ink} strokeWidth="2" />
          </g>
        );
      case 'trophy':
        return (
          <g>
            <path d="M18 14 H46 V28 C46 37 40 42 32 42 C24 42 18 37 18 28 Z" fill="#FBBF24" stroke={ink} strokeWidth="2.5" />
            <rect x="29" y="42" width="6" height="8" fill="#F59E0B" stroke={ink} strokeWidth="2" />
            <rect x="22" y="50" width="20" height="5" rx="2" fill="#78350F" stroke={ink} strokeWidth="2" />
          </g>
        );
      case 'button_red':
        return (
          <g>
            <circle cx="32" cy="32" r="22" fill="#EF4444" stroke={ink} strokeWidth="2.5" />
            <circle cx="32" cy="30" r="16" fill="#F87171" opacity="0.45" />
          </g>
        );
      case 'button_green':
        return (
          <g>
            <circle cx="32" cy="32" r="22" fill="#10B981" stroke={ink} strokeWidth="2.5" />
            <circle cx="32" cy="30" r="16" fill="#34D399" opacity="0.45" />
          </g>
        );
      case 'umbrella':
        return (
          <g>
            <path d="M10 34 C10 20 20 14 32 14 C44 14 54 20 54 34 Z" fill={color || '#6366F1'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M32 34 V49 C32 53 37 54 38 50" stroke={ink} strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
        );
      case 'bone':
        return (
          <path d="M18 26 C14 23 10 27 12 32 C10 37 14 41 18 38 H46 C50 41 54 37 52 32 C54 27 50 23 46 26 Z" fill="#F8FAFC" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
        );
      case 'cheese':
        return (
          <g>
            <polygon points="12,46 52,46 48,20 12,32" fill="#FACC15" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="24" cy="38" r="3" fill="#CA8A04" />
            <circle cx="38" cy="34" r="3.5" fill="#CA8A04" />
          </g>
        );
      case 'milk':
        return (
          <g>
            <path d="M24 14 H40 L44 24 V52 H20 V24 Z" fill="#FFFFFF" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <rect x="20" y="30" width="24" height="12" fill="#93C5FD" stroke={ink} strokeWidth="2" />
          </g>
        );
      case 'flower':
        return (
          <g>
            <line x1="32" y1="34" x2="32" y2="54" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" />
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <circle key={deg} cx="32" cy="18" r="7" fill={color || '#F472B6'} stroke={ink} strokeWidth="2" transform={`rotate(${deg} 32 28)`} />
            ))}
            <circle cx="32" cy="28" r="7" fill="#FACC15" stroke={ink} strokeWidth="2" />
          </g>
        );
      case 'leaf':
        return (
          <path d="M14 48 C14 26 28 14 50 14 C50 36 38 50 14 48 Z" fill={color || '#22C55E'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
        );
      case 'bell':
        return (
          <g>
            <path d="M32 12 C22 12 18 20 18 32 L14 42 H50 L46 32 C46 20 42 12 32 12 Z" fill="#FBBF24" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="32" cy="46" r="4.5" fill="#D97706" stroke={ink} strokeWidth="2" />
          </g>
        );
      case 'heart':
        return (
          <path d="M32 52 C32 52 12 39 12 24 C12 17 17 13 23 13 C27 13 30 15 32 19 C34 15 37 13 41 13 C47 13 52 17 52 24 C52 39 32 52 32 52 Z" fill={color || '#EF4444'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
        );
      case 'bomb':
        return (
          <g>
            <circle cx="32" cy="36" r="16" fill="#1E293B" stroke={ink} strokeWidth="2.5" />
            <path d="M36 20 Q42 12 48 14" stroke={ink} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="49" cy="14" r="3.5" fill="#F97316" />
          </g>
        );
      case 'bulb':
        return (
          <g>
            <path d="M32 12 C22 12 16 19 16 28 C16 34 20 39 24 42 L25 48 H39 L40 42 C44 39 48 34 48 28 C48 19 42 12 32 12 Z" fill={color || '#FDE047'} stroke={ink} strokeWidth="2.5" />
            <rect x="26" y="48" width="12" height="6" rx="2" fill="#94A3B8" stroke={ink} strokeWidth="2" />
          </g>
        );
      case 'rocket':
        return (
          <g>
            <path d="M32 8 C24 18 22 30 22 40 H42 C42 30 40 18 32 8 Z" fill={color || '#F8FAFC'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M22 32 L14 42 L22 40 Z" fill="#EF4444" stroke={ink} strokeWidth="2" strokeLinejoin="round" />
            <path d="M42 32 L50 42 L42 40 Z" fill="#EF4444" stroke={ink} strokeWidth="2" strokeLinejoin="round" />
            <circle cx="32" cy="25" r="4.5" fill="#38BDF8" stroke={ink} strokeWidth="2" />
            <path d="M27 40 L32 54 L37 40 Z" fill="#F97316" stroke={ink} strokeWidth="2" strokeLinejoin="round" />
          </g>
        );
      case 'planet':
        return (
          <g>
            <circle cx="32" cy="32" r="14" fill={color || '#6366F1'} stroke={ink} strokeWidth="2.5" />
            <ellipse cx="32" cy="33" rx="24" ry="7" transform="rotate(-18 32 33)" fill="none" stroke="#FBBF24" strokeWidth="3" />
          </g>
        );
      case 'prism':
        return (
          <g>
            <polygon points="32,12 12,48 52,48" fill={color || '#BAE6FD'} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <line x1="6" y1="30" x2="24" y2="30" stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="41" y1="29" x2="58" y2="23" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="42" y1="32" x2="58" y2="32" stroke="#22C55E" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="43" y1="35" x2="58" y2="41" stroke="#3B82F6" strokeWidth="2.2" strokeLinecap="round" />
          </g>
        );
      case 'hourglass':
        return (
          <g>
            <rect x="18" y="10" width="28" height="4" rx="2" fill="#92400E" stroke={ink} strokeWidth="2" />
            <rect x="18" y="50" width="28" height="4" rx="2" fill="#92400E" stroke={ink} strokeWidth="2" />
            <path d="M22 14 H42 L32 32 L42 50 H22 L32 32 Z" fill="#E0F2FE" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <polygon points="26,48 38,48 32,38" fill={color || '#F59E0B'} />
          </g>
        );
      default:
        return <circle cx="32" cy="32" r="18" fill={color || '#3B82F6'} stroke={ink} strokeWidth="2.5" />;
    }
  };

  return (
    <div className="inline-flex flex-col items-center select-none">
      <svg width={s} height={s} viewBox="0 0 64 64" className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.12)]" aria-hidden="true">
        {renderShape()}
      </svg>
      {label && (
        <span className="mt-0.5 rounded-md bg-white/95 dark:bg-slate-800 px-1.5 py-0.5 text-[11px] font-bold text-stone-900 dark:text-slate-100 border border-stone-300 dark:border-slate-600 shadow-xs whitespace-nowrap">
          {label}
        </span>
      )}
    </div>
  );
};

interface VisualDiagramProps {
  visualKind: VisualCountMechanic['visualKind'];
  variant: number;
}

export const VisualDiagram: React.FC<VisualDiagramProps> = ({ visualKind, variant }) => {
  const ink = '#141417';

  switch (visualKind) {
    case 'tshirt_holes': {
      const holes = Math.min(3, Math.max(1, variant));
      const positions = [
        { cx: 120, cy: 105 },
        { cx: 155, cy: 128 },
        { cx: 130, cy: 145 },
      ].slice(0, holes);
      return (
        <svg viewBox="0 0 280 180" className="w-full max-w-[280px] h-auto" aria-label="Torn T-shirt diagram">
          <path
            d="M85 24 L112 24 C118 38 162 38 168 24 L195 24 L235 60 L214 86 L192 70 V158 H88 V70 L66 86 L45 60 Z"
            fill="#60A5FA"
            stroke={ink}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {positions.map((pos, idx) => (
            <ellipse
              key={idx}
              cx={pos.cx}
              cy={pos.cy}
              rx="13"
              ry="10"
              fill="#F7F7F5"
              stroke={ink}
              strokeWidth="2.5"
              strokeDasharray="3 2"
            />
          ))}
        </svg>
      );
    }

    case 'nested_triangles': {
      const slices = variant === 1 ? 2 : variant === 2 ? 3 : 4;
      const topX = 140;
      const topY = 20;
      const baseLeft = 40;
      const baseRight = 240;
      const baseY = 160;
      const dividers: number[] = [];
      for (let i = 1; i < slices; i++) {
        dividers.push(baseLeft + ((baseRight - baseLeft) * i) / slices);
      }
      return (
        <svg viewBox="0 0 280 180" className="w-full max-w-[280px] h-auto" aria-label="Nested triangles diagram">
          <polygon
            points={`${topX},${topY} ${baseLeft},${baseY} ${baseRight},${baseY}`}
            fill="#FEF3C7"
            stroke={ink}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {dividers.map((dx, i) => (
            <line key={i} x1={topX} y1={topY} x2={dx} y2={baseY} stroke={ink} strokeWidth="2.5" />
          ))}
        </svg>
      );
    }

    case 'nested_squares': {
      const n = variant === 2 ? 3 : 2;
      const size = 120;
      const startX = 80;
      const startY = 30;
      const cell = size / n;
      return (
        <svg viewBox="0 0 280 180" className="w-full max-w-[280px] h-auto" aria-label="Nested squares grid">
          <rect x={startX} y={startY} width={size} height={size} fill="#EFF6FF" stroke={ink} strokeWidth="3" />
          {Array.from({ length: n - 1 }).map((_, idx) => {
            const offset = cell * (idx + 1);
            return (
              <g key={idx}>
                <line x1={startX + offset} y1={startY} x2={startX + offset} y2={startY + size} stroke={ink} strokeWidth="2.5" />
                <line x1={startX} y1={startY + offset} x2={startX + size} y2={startY + offset} stroke={ink} strokeWidth="2.5" />
              </g>
            );
          })}
        </svg>
      );
    }

    case 'parking_number': {
      const nums = variant === 2 ? ['16', '06', '68', '88', 'CAR', '98'] : ['16', '06', '68', '88', 'CAR', '98'];
      const altNums = variant === 2 ? ['1L', '0L', '69', '89', 'CAR', '99'] : nums;
      const display = variant === 2 ? ['91', '0L', '69', '89', 'CAR', '99'] : nums;
      const spots = variant === 2 ? ['17', '07', '69', '89', 'CAR', '99'] : ['16', '06', '68', '88', 'CAR', '98'];
      void altNums;
      void display;
      return (
        <svg viewBox="0 0 320 140" className="w-full max-w-[320px] h-auto" aria-label="Upside-down parking lot">
          <rect x="10" y="25" width="300" height="90" rx="8" fill="#E2E8F0" stroke={ink} strokeWidth="2.5" />
          {spots.map((val, idx) => {
            const x = 15 + idx * 48;
            return (
              <g key={idx}>
                <line x1={x} y1="25" x2={x} y2="115" stroke="#94A3B8" strokeWidth="2" />
                {val === 'CAR' ? (
                  <g transform={`translate(${x + 4}, 38)`}>
                    <rect x="2" y="10" width="38" height="44" rx="7" fill="#2563EB" stroke={ink} strokeWidth="2" />
                    <rect x="7" y="18" width="28" height="14" rx="3" fill="#BAE6FD" />
                  </g>
                ) : (
                  <text
                    x={x + 24}
                    y="80"
                    textAnchor="middle"
                    fontSize="20"
                    fontWeight="700"
                    fontFamily="JetBrains Mono, monospace"
                    fill={ink}
                  >
                    {val}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      );
    }

    case 'mirror_clock': {
      const hourAngle = ((variant % 12) / 12) * 360;
      return (
        <svg viewBox="0 0 280 180" className="w-full max-w-[280px] h-auto" aria-label="Mirror clock">
          <circle cx="140" cy="90" r="64" fill="#FFFFFF" stroke={ink} strokeWidth="3" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="140"
              y1="32"
              x2="140"
              y2="40"
              stroke={ink}
              strokeWidth={deg % 90 === 0 ? '3' : '1.8'}
              transform={`rotate(${deg} 140 90)`}
            />
          ))}
          <line x1="140" y1="90" x2="140" y2="42" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
          <line
            x1="140"
            y1="90"
            x2="140"
            y2="52"
            stroke="#EF4444"
            strokeWidth="4"
            strokeLinecap="round"
            transform={`rotate(${hourAngle} 140 90)`}
          />
          <circle cx="140" cy="90" r="4.5" fill={ink} />
        </svg>
      );
    }

    case 'cube_stack': {
      // Render isometric cube grid for 2 layers (4 cubes), 3 layers (10 cubes), or 4 layers (20 cubes)
      const layers = variant === 1 ? 2 : variant === 2 ? 3 : 4;
      const cubes: Array<{ gx: number; gy: number; gz: number }> = [];
      for (let z = 0; z < layers; z++) {
        const span = layers - z;
        for (let x = 0; x < span; x++) {
          for (let y = 0; y < span - x; y++) {
            cubes.push({ gx: x, gy: y, gz: z });
          }
        }
      }
      // Sort back-to-front for clean isometric occlusion
      cubes.sort((a, b) => a.gz - b.gz || a.gx + a.gy - (b.gx + b.gy));
      const scale = layers === 4 ? 17 : layers === 3 ? 21 : 26;
      const originX = 140;
      const originY = layers === 4 ? 132 : 122;

      return (
        <svg viewBox="0 0 280 180" className="w-full max-w-[280px] h-auto" aria-label="Isometric cube stack">
          {cubes.map((c, idx) => {
            const px = originX + (c.gx - c.gy) * scale * 0.88;
            const py = originY + (c.gx + c.gy) * scale * 0.45 - c.gz * scale * 0.96;
            const w = scale * 0.88;
            const h = scale * 0.45;
            const d = scale * 0.96;
            return (
              <g key={idx}>
                <polygon
                  points={`${px},${py - d} ${px + w},${py + h - d} ${px},${py + 2 * h - d} ${px - w},${py + h - d}`}
                  fill="#FDE68A"
                  stroke={ink}
                  strokeWidth="1.6"
                />
                <polygon
                  points={`${px - w},${py + h - d} ${px},${py + 2 * h - d} ${px},${py + 2 * h} ${px - w},${py + h}`}
                  fill="#F59E0B"
                  stroke={ink}
                  strokeWidth="1.6"
                />
                <polygon
                  points={`${px + w},${py + h - d} ${px},${py + 2 * h - d} ${px},${py + 2 * h} ${px + w},${py + h}`}
                  fill="#D97706"
                  stroke={ink}
                  strokeWidth="1.6"
                />
              </g>
            );
          })}
        </svg>
      );
    }

    case 'overlapping_circles':
      return (
        <svg viewBox="0 0 280 180" className="w-full max-w-[280px] h-auto" aria-label="Overlapping Venn circles">
          <circle cx="115" cy="74" r="46" fill="#3B82F6" fillOpacity="0.22" stroke={ink} strokeWidth="2.5" />
          <circle cx="165" cy="74" r="46" fill="#EF4444" fillOpacity="0.22" stroke={ink} strokeWidth="2.5" />
          <circle cx="140" cy="116" r="46" fill="#10B981" fillOpacity="0.22" stroke={ink} strokeWidth="2.5" />
        </svg>
      );

    case 'stairs_steps': {
      const steps = Math.min(7, Math.max(3, variant));
      let d = 'M40 155 ';
      const stepW = 190 / steps;
      const stepH = 120 / steps;
      for (let i = 0; i < steps; i++) {
        const y = 155 - (i + 1) * stepH;
        const x1 = 40 + i * stepW;
        const x2 = 40 + (i + 1) * stepW;
        d += `V${y} H${x2} `;
        void x1;
      }
      d += 'V155 Z';
      return (
        <svg viewBox="0 0 280 180" className="w-full max-w-[280px] h-auto" aria-label="Staircase steps">
          <path d={d} fill="#CBD5E1" stroke={ink} strokeWidth="3" strokeLinejoin="round" />
        </svg>
      );
    }

    case 'hex_honeycomb': {
      // 3-ring honeycomb = 19 hexagons (or 2-ring = 7 hexagons)
      const rings = variant === 2 ? 2 : 3;
      const r = rings === 2 ? 24 : 16;
      const cx0 = 140;
      const cy0 = 90;
      const hexes: Array<{ cx: number; cy: number; ring: number }> = [];
      for (let q = -(rings - 1); q <= rings - 1; q++) {
        for (let s = -(rings - 1); s <= rings - 1; s++) {
          const t = -q - s;
          const dist = Math.max(Math.abs(q), Math.abs(s), Math.abs(t));
          if (dist < rings) {
            const cx = cx0 + r * Math.sqrt(3) * (q + s / 2);
            const cy = cy0 + r * 1.5 * s;
            hexes.push({ cx, cy, ring: dist });
          }
        }
      }
      const hexPts = (cx: number, cy: number, rad: number) =>
        [0, 1, 2, 3, 4, 5]
          .map((i) => {
            const a = (Math.PI / 180) * (60 * i - 30);
            return `${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`;
          })
          .join(' ');
      return (
        <svg viewBox="0 0 280 180" className="w-full max-w-[280px] h-auto" aria-label="Honeycomb grid">
          {hexes.map((h, i) => (
            <polygon
              key={i}
              points={hexPts(h.cx, h.cy, r - 1)}
              fill={h.ring === 0 ? '#F59E0B' : h.ring === 1 ? '#FDE68A' : '#FEF3C7'}
              stroke={ink}
              strokeWidth="2"
            />
          ))}
        </svg>
      );
    }

    case 'chessboard_squares': {
      const n = variant === 4 ? 4 : 3;
      const size = 128;
      const step = size / n;
      const x0 = (280 - size) / 2;
      const y0 = (180 - size) / 2;
      const cells: Array<{ r: number; c: number }> = [];
      for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) cells.push({ r, c });
      }
      return (
        <svg viewBox="0 0 280 180" className="w-full max-w-[280px] h-auto" aria-label={`${n}x${n} chessboard grid`}>
          {cells.map(({ r, c }) => (
            <rect
              key={`${r}-${c}`}
              x={x0 + c * step}
              y={y0 + r * step}
              width={step}
              height={step}
              fill={(r + c) % 2 === 0 ? '#FFFFFF' : '#CBD5E1'}
              stroke={ink}
              strokeWidth="2"
            />
          ))}
        </svg>
      );
    }

    case 'intersecting_lines': {
      // 4 or 5 lines in general position (all pairs intersect inside viewport)
      const count = variant === 5 ? 5 : 4;
      const lineDefs = [
        { x1: 30, y1: 42, x2: 250, y2: 142 },
        { x1: 30, y1: 140, x2: 250, y2: 45 },
        { x1: 75, y1: 16, x2: 195, y2: 164 },
        { x1: 185, y1: 16, x2: 95, y2: 164 },
        { x1: 24, y1: 94, x2: 256, y2: 88 },
      ].slice(0, count);
      return (
        <svg viewBox="0 0 280 180" className="w-full max-w-[280px] h-auto" aria-label="Intersecting straight lines">
          <rect x="20" y="14" width="240" height="152" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          {lineDefs.map((l, idx) => (
            <line
              key={idx}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke={idx === 4 ? '#2563EB' : ink}
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          ))}
        </svg>
      );
    }

    default:
      return null;
  }
};
