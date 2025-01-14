import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import image1 from "../../assets/1.jpg"
import image2 from "../../assets/2.jpg"
import image3 from "../../assets/3.jpg"
import image4 from "../../assets/4.jpg"
import image5 from "../../assets/5.jpg"

export function CarouselDemo() {
 
  const images = [image1, image2, image3, image4, image5]

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
