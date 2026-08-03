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
        {/* <div className ="grid grid-cols-3 gap-4 mt-270">
        {product.map((data)=>(
             <motion.div  key={data.card}
    initial={{
        opacity:0,
        y:100,
        scale:0.7
    }}

    whileInView={{
        opacity:1,
        y:0,
        scale:1
    }}

    transition={{
        duration:1,
        ease:"easeOut"
    }}

    viewport={{
        once:false
    }}

    className=" flex gap-4 rounded-xl mt- p-6 w-100 h-80 bg-blue-200  shadow-xl"
>

{data.card}

</motion.div>
))};
</div> */}
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