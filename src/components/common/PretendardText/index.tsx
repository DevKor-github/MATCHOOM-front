import { Text as RNText, TextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface PretendardTextProps extends TextProps {
  className?: string;
}

function PreText({ className, style, ...rest }: PretendardTextProps) {
  return (
    <RNText
      {...rest}
      style={style}
      className={twMerge('font-pretendard', className)}
    />
  );
}

export default PreText;
