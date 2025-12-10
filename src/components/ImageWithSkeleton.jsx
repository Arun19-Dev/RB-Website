import React, { useState } from 'react';
import './ImageWithSkeleton.css';

const ImageWithSkeleton = ({ src, alt, className = '', style = {} }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`image-skeleton-wrapper ${className}`} style={style}>
      {!isLoaded && !hasError && (
        <div className="skeleton-loader">
          <div className="skeleton-shimmer"></div>
        </div>
      )}
      {hasError ? (
        <div className="image-error">
          <span>Failed to load image</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`skeleton-image ${isLoaded ? 'loaded' : 'loading'}`}
          onLoad={handleLoad}
          onError={handleError}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
      )}
    </div>
  );
};

export default ImageWithSkeleton;
