//! too difficult to make it reusable component when adding motion to the TechCard component,
//! so for now just import the container and item as variants

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function FadeInStaggered() {
  return (
    <></>
    // <motion.div
    //   className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
    //   variants={staggerContainer}
    //   initial="hidden"
    //   whileInView="visible"
    //   viewport={{ once: true }}
    // >
    //   {backendTech.map((tech) => (
    //     <MotionTechCard
    //       key={tech.text}
    //       variants={staggerItem}
    //       src={tech.src}
    //       alt={tech.alt}
    //       text={tech.text}
    //     />
    //   ))}
    // </motion.div>
  );
}

export default FadeInStaggered;
