import { useState, useEffect, useRef } from 'react'
import TestimonialCard from './TestimonialCard'

const testimonials = [
    {
        color: "#7A9164",
        name: "John Doe",
        index: 1,
        testimonialdata: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quos incidunt facere necessitatibus vero excepturi fuga ipsam maiores tempore, assumenda, sit cum possimus a cupiditate tenetur voluptas unde, id sed."
    },
    {
        color: "#7A9164",
        name: "Jane Smith",
        index: 2,
        testimonialdata: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quos incidunt facere necessitatibus vero excepturi fuga ipsam maiores tempore, assumenda, sit cum possimus a cupiditate tenetur voluptas unde, id sed."
    },
    {
        color: "#7A9164",
        name: "Bob Johnson",
        index: 3,
        testimonialdata: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quos incidunt facere necessitatibus vero excepturi fuga ipsam maiores tempore, assumenda, sit cum possimus a cupiditate tenetur voluptas unde, id sed."
    },
    {
        color: "#475738",
        name: "Alice Williams",
        index: 4,
        testimonialdata: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quos incidunt facere necessitatibus vero excepturi fuga ipsam maiores tempore, assumenda, sit cum possimus a cupiditate tenetur voluptas unde, id sed."
    },
    {
        color: "#475738",
        name: "Charlie Brown",
        index: 5,
        testimonialdata: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quos incidunt facere necessitatibus vero excepturi fuga ipsam maiores tempore, assumenda, sit cum possimus a cupiditate tenetur voluptas unde, id sed."
    },
    {
        color: "#475738",
        name: "David Wilson",
        index: 6,
        testimonialdata: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quos incidunt facere necessitatibus vero excepturi fuga ipsam maiores tempore, assumenda, sit cum possimus a cupiditate tenetur voluptas unde, id sed."
    }
];


const TestimonialGrid = () => {

    const scrollContainerRef = useRef(null)
    // State to track if user is hovering over the container
    const [isHovering, setIsHovering] = useState(false)

    // Auto-scrolling effect
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current
        if (!scrollContainer) return

        let animationFrameId;
        let lastTimestamp;
        const scrollSpeed = 0.2 // pixels per millisecond

        const scroll = (timestamp) => {
            if (!lastTimestamp) lastTimestamp = timestamp

            // Don't scroll if user is hovering
            if (!isHovering) {
                const elapsed = timestamp - lastTimestamp
                scrollContainer.scrollLeft += scrollSpeed * elapsed

                // Reset to beginning when reaching the end
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 10) {
                    scrollContainer.scrollLeft = 0
                }
            }

            lastTimestamp = timestamp
            animationFrameId = requestAnimationFrame(scroll)
        }

        animationFrameId = requestAnimationFrame(scroll)

        return () => {
            cancelAnimationFrame(animationFrameId)
        }
    }, [isHovering])

    const scrollbarHideStyles = `
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `

    const hoverCard = `
         .testimonial-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

    `

    return (
        <>
            <style jsx global>
                {hoverCard}
            </style>
            <div className="relative bg-white w-full h-full">

                <img className='absolute inset-0' src="/testimonials/diagonal.svg" alt="" />

                <div className="flex flex-col items-center justify-center w-full h-full ">
                    {/* =========================
                    Main Testimonial Section
                ========================= */}
                    <div className="relative mb-44 flex testimonial-card shadow-2xl flex-col  top-[120px] bg-gradient-to-br from-[#5e6457] from-20% to-[#e1e4de] to-45%  border border-[#F3FFE7] rounded-xl bg-black/80 items-start w-[360px] md:w-[800px] justify-end md:justify-center h-[390px] md:h-[250px]">
                        <div className="flex flex-col mb-8 md:mb-0 w-[360px] md:w-[400px] items-center justify-center">

                            <img className='bg-black w-28 h-28 rounded-full' src="" alt="" />
                            <span className="font-bold text-lg text-black p-2 text-center ">John Dohn</span>
                        </div>

                        <div className="md:absolute w-full md:w-[50%] h-[150px] md:h-full rounded-xl  text-center flex items-center justify-center right-0 bg-[#F3FFE7]">
                            <span className="p-1 md:p-16 font-medium ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci at est doloribus dignissimos debitis eius ea. Ipsa, consectetur, neque deserunt ratione, necessitatibus ut eum beatae molestias sed iste at! Officia.</span>
                        </div>
                    </div>


                    <div className="flex items-center gap-4 w-fit h-1 pb-14">
                        {/* <br className="bg-[#22370D] w-[8px] h-[1px]" /> */}
                        {/* <br className="bg-[#22370D] w-[8px] h-[1px]" /> */}
                        {/* <br className="bg-[#22370D] w-[8px] h-[1px]" /> */}
                        <div className="bg-[#22370D] w-[50px] h-[2px]"> </div>
                        <div className="bg-[#22370D] w-[50px] h-[2px]"> </div>
                        <div className="bg-[#22370D] w-[50px] h-[2px]"> </div>
                    </div>

                    {/* testimonialCards cards */}

                    <div className="flex flex-wrap justify-center items-center w-full h-max ">
                        {testimonials.map((t) => (
                            <TestimonialCard

                                key={t.index}
                                color={t.color}
                                name={t.name}
                                index={t.index}
                                testimonialdata={t.testimonialdata}
                            />
                        ))}
                    </div>


                </div>

                {/* SEE MORE SECTION */}

                <section className="py-16 bg-white relative overflow-hidden">
                    <style jsx >
                        {scrollbarHideStyles}
                    </style>


                    <div className="px-4 relative z-10">
                        <div className="flex items-center justify-center w-full gap-1 mb-10">
                            <div className="bg-[#252A34] w-[40px] h-[2px]"> </div>
                            <h2 className="text-4xl font-serif text-[#252A34]  font-medium text-center ">
                                See More
                            </h2>
                            <div className="bg-[#252A34] w-[40px] h-[2px]"> </div>
                        </div>


                        <div className="relative w-full">
                            <div className="flex  overflow-x-auto  scrollbar-hide -mx-4 px-4 space-x-6"
                                ref={scrollContainerRef}
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                style={{ scrollBehavior: "smooth" }}
                            >
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="flex-shrink-0  flex items-center justify-betweeen text-[#FFFFFF]  w-96 bg-[#0E1705]/85 pt-8 p-6 rounded-xl shadow-lg ">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="w-[80px] h-[80px] bg-[#ffffff] rounded-full overflow-hidden mr-3">
                                                <img
                                                    src=""
                                                    alt="John Doe"
                                                    className=" rounded-full"
                                                />
                                            </div>
                                            <h4 className="text-center mt-2 mr-3 font-bold">John Doe</h4>
                                        </div>
                                        <p className="text-sm flex-1 text-center ">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum sem quis eros posuere,
                                            vitae tempor tellus porta. Sed ultricies libero quis sem porttitor lacinia. Nunc a ultricies ex.
                                        </p>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


                <div className="bg-[#606758] w-full h-[20px]"></div>
                <div className="bg-[#22370D] w-full h-[25px]"></div>
            </div >

        </>
    )
}

export default TestimonialGrid
