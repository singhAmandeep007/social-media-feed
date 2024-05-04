import React, { useState, useRef, useEffect, PropsWithChildren } from "react";

type TRenderIfVisibleProps = {
  defaultHeight?: number;
  visibleOffset?: number;
  root?: HTMLElement | null;
  shouldObserverOnce?: boolean;
  className?: string;
};

export const RenderIfVisible: React.FC<PropsWithChildren<TRenderIfVisibleProps>> = ({
  defaultHeight = 300,
  visibleOffset = 1000,
  children,
  root = null,
  shouldObserverOnce = false,
  className,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const placeholderHeight = useRef<number>(defaultHeight);
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // set visibility with intersection observer
  useEffect(() => {
    const element = intersectionRef.current;
    if (element) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (window.requestIdleCallback) {
            window.requestIdleCallback(
              () => {
                if (shouldObserverOnce && entries[0].isIntersecting) {
                  setIsVisible(true);
                }
                if (!shouldObserverOnce) {
                  setIsVisible(entries[0].isIntersecting);
                }
              },
              {
                timeout: 600,
              }
            );
          }
        },
        { root, rootMargin: `${visibleOffset}px 0px ${visibleOffset}px 0px` }
      );
      // observe the element
      observerRef.current.observe(element);
      // disconnect the observer when the component unmounts
      return () => {
        if (element && observerRef.current) {
          observerRef.current.unobserve(element);
        }
      };
    }
  }, [root, visibleOffset, observerRef, intersectionRef, shouldObserverOnce]);

  // set height after render
  useEffect(() => {
    if (intersectionRef.current && isVisible) {
      placeholderHeight.current = intersectionRef.current.offsetHeight;
    }
  }, [isVisible, intersectionRef]);

  return (
    <div
      ref={intersectionRef}
      className={className}
    >
      {isVisible ? <>{children}</> : <div style={{ height: placeholderHeight.current }} />}
    </div>
  );
};
