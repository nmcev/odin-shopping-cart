import 'react-slideshow-image/dist/styles.css'

const About = () => {
    return (
        
        <div className='flex items-center justify-center py-40 dark:bg-dark'>
         <div className='h-full max-w-screen-sm mx-4'>

                <div className='flex flex-col items-center justify-center w-full h-full pb-8'>
                    <h1 className='text-3xl text-dark font-bold font-poppins dark:text-creamy'>About</h1>
                </div>
                
                <div className='flex flex-col items-start  w-full h-full gap-y-8 '>

                    <p className='text-dark font-Nunito text-14 dark:text-creamy'>
                        <span className='text-md font-bold '>Hello, I&apos;m <span className=' font-regPoppins'>Muha</span> </span>
                        . This is the last project that I have done with <span className=' text-purple-400 font-poppins'>The Odin Project</span> on The Front End Development Course especially on ReactJS section. 
                        I have learned a lot of things about ReactJS.
                    </p>

                    <section>
                    <h2 className='text-xl text-dark font-bold font-poppins pt-8 text dark:text-creamy'>What I have learned</h2>
                    <p className='text-dark font-Nunito dark:text-creamy'>
                    This Project taught me a lot of knowledge about ReactJS, especially about React Router and React Hooks,  I also know how to use the useContext hook and React Router to make a single-page application.
                    </p>
                    <p className='text-dark font-Nunito dark:text-creamy'>
                        I also get familiar with TailwindCSS, a CSS framework that I use to style this project. 
                        And how to make a responsive website using TailwindCSS.
                    </p>
                    </section>

                    <section>
                        <h2 className='text-xl text-dark font-bold font-poppins dark:text-creamy'>What is this?</h2>
                        <p className='text-dark font-Nunito dark:text-creamy'>
                            This is a website that I built based on the TOP curriculum. It&apos;s a shopping cart website where you can add a product to the cart, remove it, and also change the quantity of the product. You can also see the total price of the product that you have added to the cart.
                        </p>
                    </section>

                   <section>
                     <h2 className='text-xl text-dark font-bold font-poppins dark:text-creamy'>Why Candles?</h2>
                     <p className='text-dark font-Nunito dark:text-creamy'>
                     You may wonder why I chose candles as the product. The reason is, the last period I was willing to buy one for its amazing smell. so I picked it as a product because it is fabulous.
                     </p>
                    </section>
                    
                    <section>
                        <p className='text-dark font-Nunito leading-7 dark:text-creamy'>
                            Thanks to <a  className=' underline-offset-2 underline' href="https://unsplash.com/@nixcreative">Tyler Nix</a> for the background image on the home page,
                            and <a className=' underline-offset-2 underline' href='https://unsplash.com/@pratiksha_mohanty'>Pratiksha Mohanty</a> for the image on the <code className=' bg-zinc-200  dark:bg-slate-500 text-sm py-1'>allProducts</code> page.
                        </p>
                    </section>

                    <section>
                        <p className='text-dark font-Nunito text-start dark:text-creamy'>
                            If you want to see the code, you can check it on my <a className=' underline-offset-2 underline' href='https://github.com/nmcev/odin-shopping-cart'>Github</a>.
                        </p>
                    </section>


                </div>
            </div>

        </div>
            
    )
}
export default About