// src\components\ReusableButton.tsx    //zare_nk_040926_okk
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  DimensionValue,
} from 'react-native';
   
type Props = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  width?: DimensionValue;
  idDisabled?:boolean
};

const ReusableButton = ({
  title,
  onPress,
  backgroundColor = 'orange',
  textColor = 'brown',
  width = '80%',
  idDisabled=false,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button , { backgroundColor, width }]}
      onPress={onPress}
      activeOpacity={0.1}
      disabled={idDisabled}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ReusableButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
    alignSelf: 'center',
  } as ViewStyle,
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  } as TextStyle,
});