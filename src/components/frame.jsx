import { motion, useScroll } from "framer-motion";
const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};
const gridSquareVariant = { hidden: { opacity: 0 }, show: { opacity: 1 } };
const Frame = () => {
  const { scrollYProgress: completionProgress } = useScroll();
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        <motion.div
          variants={gridSquareVariant}
          className=" bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className=" w-20 h-20 bg-stone-100 rounded-lg "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2,
              repeat: Infinity,
            }}
          />
          <motion.div
            className=" w-20 h-20 bg-stone-100 rounded-full "
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2,
              repeat: Infinity,
            }}
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariant}
          className=" bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className=" w-1/3 h-1/3 bg-rose-500"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 5,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariant}
          className=" bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.button
            className=" bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "floralwhite",
              color: "black",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          >
            subscribe
          </motion.button>
        </motion.div>
        <motion.div
          variants={gridSquareVariant}
          className=" bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className=" w-1/3 h-1/3 bg-orange-500 cursor-grab rounded-lg"
            drag
            dragConstraints={{
              top: -125,
              left: 125,
              right: 125,
              bottom: -125,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariant}
          className=" bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div className=" w-40 aspect-square bg-gray-50/20 rounded-xl">
            <motion.div
              className=" w-full bg-gray-400 rounded-xl h-full origin-bottom"
              style={{ scaleY: completionProgress }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariant}
          className=" bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
      </motion.section>
    </div>
  );
};

export default Frame;
