import React from 'react'

const TestimonialCard = ({ index, name, testimonialdata, color }) => {

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
            <div key={index} className={`bg-[${color}]  p-6 rounded-xl testimonial-card w-[340px] m-6 h-[400px] text-white`}>
                <div className="flex flex-col items-center mb-4">
                    <div className="w-24 h-24 bg-gray-700 rounded-full overflow-hidden mb-2">
                        <img
                            src="/placeholder.svg?height=100&width=100"
                            alt={name}

                            className="w-24 h-24 object-cover bg-[#23291C] rounded-full "
                        />
                    </div>
                    <h4 className="font-medium leading-4 tex-xl">{name}</h4>
                </div>
                <p className="text-[17px] px-6 text-center">
                    {testimonialdata}               </p>
            </div>
        </>
    )
}

export default TestimonialCard
