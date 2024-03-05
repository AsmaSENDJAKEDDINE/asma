import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import icon0 from "./../../assets/landing/teacher.svg"


export default function programs() {
  
  const data = [
    {
      icon: icon0,
      text: "english",
    },
    {
      icon: icon0,
      text: "english",
    },
    {
      icon: icon0,
      text: "english",
    },
    {
      icon: icon0,
      text: "english",
    },
    {
      icon: icon0,
      text: "english",
    },
    {
      icon: icon0,
      text: "english",
    },
    {
      icon: icon0,
      text: "english",
    },
    {
      icon: icon0,
      text: "english",
    },
    
  ];
  
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        <CarouselItem className="p-2 bg-gray-200 md:basis-1/2 lg:basis-1/4">
          <img src={icon0} />
          <p>hello</p>
        </CarouselItem>

        <CarouselItem className="p-2 bg-gray-200 md:basis-1/2 lg:basis-1/4">
          <img src={icon0} />
          <p>hello</p>
        </CarouselItem>
        <CarouselItem className="p-2 bg-gray-200 md:basis-1/2 lg:basis-1/4">
          <img src={icon0} />
          <p>hello</p>
        </CarouselItem>
        <CarouselItem className="p-2 bg-gray-200 md:basis-1/2 lg:basis-1/4">
          <img src={icon0} />
          <p>hello</p>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
