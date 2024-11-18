import { Text, TouchableOpacity } from 'react-native';
import { twMerge } from 'tailwind-merge';

const ButtonStyle = {
  selected: 'bg-green',
  unselected: 'bg-inputGray',
  selectedText: 'text-black',
  unselectedText: 'text-white',
};

const BoxButton = ({
  onPress,
  text,
  textStyle,
  isSelected = false,
}: {
  onPress: () => void;
  text: string;
  textStyle?: string;
  isSelected?: boolean;
}) => {
  return (
    <TouchableOpacity
      className={twMerge(
        'h-full w-full items-center justify-center rounded-xl bg-green',
        isSelected ? ButtonStyle.selected : ButtonStyle.unselected,
      )}
      onPress={onPress}
    >
      <Text
        className={twMerge(
          'text-base font-semibold',
          isSelected ? ButtonStyle.selectedText : ButtonStyle.unselectedText,
          textStyle,
        )}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default BoxButton;
