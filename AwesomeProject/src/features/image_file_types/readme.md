https://kinsta.com/blog/svg-vs-png/

## 1.  SVG - scalable vector graphics
 scalable : SVGs can be resized up or down without damaging the quality of the image (i.e. different height and width)

 Vector : Most image file types contain pixels. Vectors are essentially pieces of code that render an image in real-time, converting it to the pixels you see on your screen. Vectors are pieces of code written in XML

 Graphics : SVG is also an image file type like PNG.

###### Pros ::
    1. SVG images are scalable. You can design it at any resolution, and it will size up or down without damaging the quality or    becoming pixelated
    2. SVGs always look crisp and beautiful due to never experiencing quality loss
    3. so SVGs are better for responsive
    4. As SVGs are just code, their file size is minimal and well-optimized. SVG optimizers also exist to make them even more manageable
    5. SVGs support animation
    6. SVGs support transperancy


###### Cons ::
    1. you can run into compatibility issues rendering them on older browsers and devices
    2. SVGs must be rendered by the browser when the page is loaded, so using an excess of them or a large file with many vectors can slow the device becuase of high computation (CPU incentive)
    3. they don’t work as well with complex images involving many colors and shapes

#### use cases ::
    --  we can use it for animations, logos, icons, graphs and diagrams, and other simple images.

---------------*------------------------*----------------------------*------------------------------

## 2. PNG - Portable network graphics

    --- PNG is a raster image file type, similar to most common image formats. That means that it consists of pixels, the same small dots displayed on your monitor or screen. While this makes it easy to display, it also means image quality is dependent on the resolution — how many pixels are in the image

    - PNGS/JPEGS are raster graphic, An image stored in raster form is sometimes called a bitmap

###### Pros ::
    1. PNG uses lossless compression that leaves it looking crisper than lossy compression JPEGs. However, this does come at a larger file size cost, and it can’t compare to vector images


###### Cons ::
    1. You cannot resize PNG files without losing quality. You need to plan carefully when designing raster graphics and make sure it’s the right size
    2. PNGs are very large due to their lossless compression
    3. PNG does not support animation

###### Use cases :: 
    1. PNGs are suitable for displaying detailed images, artwork, and photography — everything a vector image can’t handle. Anything with hundreds of colors and a large resolution should likely be a PNG
    2. When you’re not sure whether a platform will handle the newer, less supported SVG file type, PNG is the way to go

---------------*------------------------*----------------------------*------------------------------

## 2. JPEG - Joint photographic Experts Group

###### Cons ::
    1. Uses Lossy compression
    2. so might be pixlated
    3. relatively large file size
    4. Not scalable