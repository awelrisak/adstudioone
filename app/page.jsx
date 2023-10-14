import Image from "next/image";

import FilePreviewer from "@/components/FilePreviewer";

export default function Home() {
  return (
    <div
     className="max-w-[95%]"
    >
    
      <h2 
         className="text-white text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
        Perfecting Mobile Banners
      </h2>
      
      <p className="mb-4 text-gray-300 tracking-tight font-light md:text-lg lg:text-xl">
        Experience the Impact of Proper Resizing and Pixel Density
      </p>
      
        <FilePreviewer />
        
        <article
          className="h-fit mt-10 mx-auto flex flex-col gap-4"
        >
         <h2
           className="text-2xl text-white font-bold  tracking-tight"
         >
           Demystifying Banner Design: What 390x75 Really Means
         </h2>
           <section
             className="section"
           >
              <h3
                 className="section-header"
              >
               Introduction:
              </h3>
              <p
                className="section-body"
              >
                Banner design can be a creative and exciting task, but sometimes, even the simplest instructions can lead to misunderstandings. If you're a designer working on mobile banners, you might have come across the numbers "390x75." It seems straightforward, right? Not quite. In this article, we'll break down what "390x75" really means, why <a href="https://prezlab.com/a-beginners-guide-to-aspect-ratio/" target="_blanket" className="underline leading-7 text-white font-normal tracking-tight">aspect ratios</a> matter, and what pixel density has to do with it.
              </p>
           </section>
           
            <section
             className="section"
           >
              <h3
                 className="section-header"
              >
               Understanding the Numbers:
              </h3>
              <p
                className="section-body"
              >
                Imagine you're given a canvas size of 390x75 pixels. These numbers are not just about an aspect ratio like 390:75. They represent the actual dimensions of your canvas. It's like having a canvas that's 390 pixels wide and 75 pixels tall. 
              </p>
           </section>
           
           <section
             className="section"
           >
              <h3
                 className="section-header"
              >
               Aspect Ratio vs. Actual Size:
              </h3>
              <p
                className="section-body"
              >
                Aspect ratio is about the relationship between width and height. In our case, the aspect ratio is indeed 390:75, which simplifies to 13:1 (you can cancel down the fraction). This aspect ratio tells you how wide the banner is compared to its height. However, it doesn't mean you have a lot of room to work with in terms of height. In reality, you have only 75 pixels of height to use.

              </p>
           </section>
           
           <section
             className="section"
           >
              <h3
                 className="section-header"
              >
               Pixel Density Matters:
              </h3>
              <p
                className="section-body"
              >
                When designing banners for different devices, you'll hear about <a href="https://medium.com/@peternowell/pixel-density-demystified-a4db63ba2922" target="_blanket" className="underline leading-7 text-white font-normal tracking-tight">pixel density</a>. This is crucial because it affects how your banner appears on screens. Pixel density refers to how many pixels, or tiny dots, fit into a specific space. High-density screens have more pixels packed into an inch, making images appear sharper. Low-density screens have fewer pixels, making images appear less sharp.
              </p>
           </section>
           
           <section
             className="section"
           >
              <h3
                 className="section-header"
              >
               How It Affects Design:
              </h3>
              <p
                className="section-body"
              >
                Now, let's put it all together. If you design a banner with a 390:75 aspect ratio without considering the 75-pixel height, it might look great on a big canvas. But when it's displayed on a mobile screen with limited vertical space, problems arise. Tiny text or details that looked good on the big canvas become unreadable on the small screen.
              </p>
           </section>
           
           <section
             className="section"
           >
              <h3
                 className="section-header"
              >
               Common Questions 🤔:
              </h3>
              <p
                className="section-body"
              >
                - <span className="font-bold">Q</span>: Why is 390x75 different from 390:75?<br />
  - <span className="font-bold">A</span>: 390x75 specifies the actual canvas size, while 390:75 is just the aspect ratio. <br />

- <span className="font-bold">Q</span>: What should I do with pixel density?<br />
  - <span className="font-bold">A</span>: Consider that some screens have more pixels in the same space, so design details that remain clear on both high and low-density screens.
              </p>
           </section>
           
           <section
             className="section"
           >
              <h3
                 className="section-header"
              >
               Conclusion:
              </h3>
              <p
                className="section-body"
              >
                So, the next time you're creating a mobile banner with a canvas size of 390x75, remember that it's not just about the aspect ratio. It's about the real estate you have on the screen. Be mindful of pixel density to ensure that your beautiful designs look great on all devices, no matter how small the space. Happy designing! 🎨📱
              </p>
           </section>
           
           
           
        </article>
    </div>
  );
}
