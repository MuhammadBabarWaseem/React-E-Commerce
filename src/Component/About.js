import React from 'react'
import AnimatedText from 'react-animated-text-content';

function About() {
    return (
        <div className='container'>

<img className='img-fluid mx-2 my-5' src="/assets/op.jpg"  alt="" />
            

            <AnimatedText
                type="words" // animate words or chars
                animation={{
                    x: '100px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                }}
                animationType="float"
                interval={0.06}
                duration={0.8}
                tag="p" 
                className="animated-paragraph fs-3 fw-semibold mx-5"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
            >
                MBW Collection is a website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.
            </AnimatedText>
        </div>
    )
}

export default About