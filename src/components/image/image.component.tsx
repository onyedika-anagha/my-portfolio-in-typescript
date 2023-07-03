import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";
import placeholderLight from "../../assets/img/placeholder.jpg";
import placeholderDark from "../../assets/img/default-image-placeholder2.jpg";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/theme/theme.selector";

function Image({ src, ...props }: LazyLoadImageProps) {
  const theme = useSelector(selectTheme),
    placeholder = theme === "dark" ? placeholderDark : placeholderLight;
  return (
    <LazyLoadImage
      src={src}
      {...props}
      placeholderSrc={placeholder}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.style.display = "none";
      }}
      // afterLoad={(e) => { console.log(e); }}
    />
  );
}

export default Image;
