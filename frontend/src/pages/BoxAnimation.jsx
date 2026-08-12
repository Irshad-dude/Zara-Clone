import { motion } from "framer-motion";
export default function BoxAnimation(){
   const product =[
        {
            card :1
        },
        {
            card :2
        },
        {
            card :3
        },
        {
            card :4
        },
        {
            card :5
        },
        {
            card :6
        },
    ];
    const text = "COLLECTION".split("");
    return (
        <>
 <h1 className="text-6xl font-bold flex">
      {text.map((letter, index) => (
        <motion.span
          key={index}
          initial={{
            filter: "blur(6px)",
            opacity: 0.5,
          }}
          animate={{
            filter: ["blur(6px)", "blur(0px)"],
            opacity: [0.5, 1],
          }}
          transition={{
            duration: 1,
            
            delay: index * 0.15,
            ease: "linear",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </h1>
        </>
    );
}