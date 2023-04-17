import theme from '@/styles/theme';
import { FidgetSpinner } from 'react-loader-spinner';

interface LoadingSpinnerProps {
  visible: boolean;
}

const LoadingSpinner = ({ visible }: LoadingSpinnerProps) => (
  <FidgetSpinner
    visible={visible}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{
      margin: '0 auto',
      display: 'block',
    }}
    wrapperClass="dna-wrapper"
    ballColors={[theme.colors.primary, theme.colors.primary, theme.colors.primary]}
    backgroundColor={theme.colors.primary}
  />
);

export default LoadingSpinner;
