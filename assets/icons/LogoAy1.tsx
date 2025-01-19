import React from "react";
import Svg, { Path, Text, TSpan } from "react-native-svg"; // Import necessary components from react-native-svg

interface SvgAlteryouthLogoProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

const SvgAlteryouthLogo: React.FC<SvgAlteryouthLogoProps> = ({ color = "#fff", width = "100%", height = "100%" }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 42.49 9">
      <Path
        data-name="Path 2256"
        d="M9.46 3.807c-1.453.425-2.9.854-4.36 1.27a.98.98 0 01-.49 0C3.076 4.668 1.546 4.25 0 3.719c.683-.178 1.386-.306 2.047-.545a8.017 8.017 0 016 .059 11.605 11.605 0 001.411.386v.185"
        fill={color}
      />
      <Path
        data-name="Path 2257"
        d="M4.921 7.691a6.7 6.7 0 01-2.557-.429c-.451-.137-.791-1.55-.462-1.9a.371.371 0 01.25-.077.707.707 0 01.271.077 6.17 6.17 0 004.956.032c.563-.214.691 0 .688.544C8.06 7.17 8.062 7.207 6.844 7.49a6.678 6.678 0 01-1.925.2"
        fill={color}
      />
      <Path
        data-name="Path 2258"
        d="M.715 4.83c.136.055.121.174.127.276.045.715.084 1.426.13 2.138.016.24-.011.467-.308.462s-.388-.195-.35-.48c.089-.677.163-1.355.25-2.032.016-.133 0-.286.153-.365"
        fill={color}
      />
      <Text
        transform="translate(10.489 7)"
        fill={color}
        fontSize={6.5}
        fontFamily="Sans Serif"
        fontWeight="700"
        letterSpacing={-0.04}
      >
        <TSpan x={0} y={0}>
          {"alteryouth"}
        </TSpan>
      </Text>
    </Svg>
  );
};

export default SvgAlteryouthLogo;
