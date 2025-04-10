"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
  MotionValue,
} from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  // Tighter scroll range for 40rem container
  const rotate = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  // Optional: smoothen the transitions with springs
  const smoothRotate = useSpring(rotate, { damping: 20, stiffness: 100 });
  const smoothScale = useSpring(scale, { damping: 20, stiffness: 100 });
  const smoothTranslate = useSpring(translate, { damping: 20, stiffness: 100 });

  return (
    <div
      className="h-[40rem] flex items-center justify-center relative p-2 md:p-10"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Card
          rotate={smoothRotate}
          translate={smoothTranslate}
          scale={smoothScale}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY: translate,
      }}
    >
      <div className="h-full w-full overflow-hidden">{children}</div>
    </motion.div>
  );
};
