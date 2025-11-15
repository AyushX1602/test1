/**
 * Stripe-Inspired Color System
 * 
 * Usage:
 * import { stripeColors } from './styles/stripe-colors';
 * className={stripeColors.primary}
 */

export const stripeColors = {
  // Primary Colors
  primary: '#635BFF',
  primaryHover: '#5348E8',
  primaryLight: '#B19EFF',
  primaryDark: '#4C44D4',
  
  // Gradient Accent
  gradientFrom: '#635BFF',
  gradientTo: '#00D4FF',
  gradientCss: 'linear-gradient(135deg, #635BFF 0%, #00D4FF 100%)',
  gradientHover: 'linear-gradient(135deg, #5348E8 0%, #00BFE8 100%)',
  
  // Status Colors
  success: '#00B86B',
  successLight: '#E6F9F2',
  successDark: '#008F54',
  
  error: '#FF5B5B',
  errorLight: '#FFE8E8',
  errorDark: '#E63946',
  
  info: '#3297FF',
  infoLight: '#E6F3FF',
  infoDark: '#1976D2',
  
  warning: '#FFC542',
  warningLight: '#FFF8E6',
  warningDark: '#F59E0B',
  
  // Text Colors
  textDark: '#32325D',
  textMuted: '#6B7C93',
  textLight: '#A3ACB9',
  
  // Background Colors
  bgPrimary: '#FFFFFF',
  bgSecondary: '#F6F9FC',
  bgTertiary: '#E0E6ED',
  bgCard: '#FFFFFF',
  
  // Dark Mode
  dark: {
    bgPrimary: '#0A0E27',
    bgSecondary: '#1A1F36',
    bgTertiary: '#2D3446',
    bgCard: '#1A1F36',
    textDark: '#FFFFFF',
    textMuted: '#8792A2',
    textLight: '#6B7C93',
    border: '#2D3446',
  },
  
  // Priority Colors (for AI recommendations)
  priority: {
    critical: '#FF5B5B',
    high: '#FFC542',
    medium: '#3297FF',
    low: '#00B86B',
  },
  
  // Chart Colors
  chart: {
    positive: '#00B86B',
    negative: '#FF5B5B',
    neutral: '#FFC542',
    series1: '#635BFF',
    series2: '#00D4FF',
    series3: '#B19EFF',
    series4: '#3297FF',
    series5: '#00B86B',
  },
  
  // Sentiment Colors
  sentiment: {
    positive: '#00B86B',
    neutral: '#FFC542',
    negative: '#FF5B5B',
  },
};

// Tailwind-compatible class utilities
export const stripeTailwind = {
  // Primary
  'bg-primary': 'bg-[#635BFF]',
  'bg-primary-hover': 'bg-[#5348E8]',
  'bg-primary-light': 'bg-[#B19EFF]',
  'text-primary': 'text-[#635BFF]',
  'border-primary': 'border-[#635BFF]',
  
  // Success
  'bg-success': 'bg-[#00B86B]',
  'bg-success-light': 'bg-[#E6F9F2]',
  'text-success': 'text-[#00B86B]',
  'border-success': 'border-[#00B86B]',
  
  // Error
  'bg-error': 'bg-[#FF5B5B]',
  'bg-error-light': 'bg-[#FFE8E8]',
  'text-error': 'text-[#FF5B5B]',
  'border-error': 'border-[#FF5B5B]',
  
  // Info
  'bg-info': 'bg-[#3297FF]',
  'bg-info-light': 'bg-[#E6F3FF]',
  'text-info': 'text-[#3297FF]',
  'border-info': 'border-[#3297FF]',
  
  // Text
  'text-dark': 'text-[#32325D]',
  'text-muted': 'text-[#6B7C93]',
  'text-light': 'text-[#A3ACB9]',
  
  // Background
  'bg-secondary': 'bg-[#F6F9FC]',
  'bg-tertiary': 'bg-[#E0E6ED]',
};

// Gradient generator
export const stripeGradient = (from: string = stripeColors.gradientFrom, to: string = stripeColors.gradientTo) => 
  `linear-gradient(135deg, ${from} 0%, ${to} 100%)`;

// Box shadow utilities
export const stripeShadows = {
  sm: '0 1px 3px rgba(99, 91, 255, 0.08)',
  md: '0 4px 12px rgba(99, 91, 255, 0.12)',
  lg: '0 8px 24px rgba(99, 91, 255, 0.16)',
  xl: '0 12px 40px rgba(99, 91, 255, 0.2)',
  card: '0 2px 8px rgba(50, 50, 93, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)',
  cardHover: '0 8px 24px rgba(50, 50, 93, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08)',
};
