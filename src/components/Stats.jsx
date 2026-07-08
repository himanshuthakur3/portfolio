import { motion } from "framer-motion";

function Stats() {

    const data = [
        {
            number:"3+",
            title:"Projects"
        },

        {
            number:"150+",
            title:"DSA Problems"
        },

        {
            number:"2+",
            title:"Months Internship"
        },

        {
            number:"100%",
            title:"Passion"
        }
    ]

  return (

<section className="bg-[#020617] py-20">

<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">

{
    data.map((item,index)=>(
        <motion.div
        key={index}
        whileHover={{scale:1.08}}
        className="bg-[#0f172a] rounded-2xl p-8 text-center shadow-lg"
        >

<h2 className="text-5xl text-cyan-400 font-bold">
{item.number}
</h2>

<p className="text-gray-300 mt-3">
{item.title}
</p>

        </motion.div>
    ))
}

</div>

</section>

  );
}

export default Stats;