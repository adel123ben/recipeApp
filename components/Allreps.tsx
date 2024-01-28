import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function Allreps() {
    return (
        <div>
             <div className="flex flex-col items-center">
             <h1 className="text-3xl mt-12 font-bold text-[#001E00]">Explore Recipes</h1>
            <div className="">
            <Card className="w-[350px] h-[184px] shadow-2xl border-0 mt-12 text-white rounded-lg overflow-hidden">
      <div className="relative">
        <img
          alt="Dessert"
          className="w-full  object-cover h-[184px]"
          height="150"
          src="https://realfood.tesco.com/media/images/RFO-1400x919-Greek-style-lamb-and-sweet-potato-salad-106a0325-fdaf-498f-8347-302a1078e9b9-0-1400x919.jpg"
          style={{
            aspectRatio: "350/150",
            objectFit: "cover",
          }}
          width="350"
        />
        <div className="absolute inset-0 " />
        <div className="absolute bottom-0 left-0 p-4">
          <h2 className="text-xl font-bold">Desserts from Heaven</h2>
          
          <Button className="mt-2 bg-[#bd1e59] hover:bg-[#a31645]">Go to</Button>
        </div>
      </div>
    </Card>
            </div>
           </div>
        </div>
    )
}