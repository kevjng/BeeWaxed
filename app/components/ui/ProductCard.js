import { Card, CardBody, Image, CardFooter, Button } from "@nextui-org/react";

const list = [
    {
        title: "Yummy",
        desc: "",
        img: "/images/1.jpg",
        price: "$5.50",
        tipo: "luminosa",

    },
    {
        title: "Asensia",
        desc: "",
        img: "/images/2.jpg",
        price: "$3.00",
        tipo: "galaxia",
    },
    {
        title: "Seymour",
        desc: "",
        img: "/images/3.jpg",
        price: "$10.00",
        tipo: "lisa",
    },
    {
        title: "Bonnie",
        desc: "",
        img: "/images/4.jpg",
        price: "$5.30",
        tipo: "vintage",
    },
    {
        title: "Líria",
        desc: "",
        img: "/images/5.jpg",
        price: "$15.70",
        tipo: "clasic",
    },
    {
        title: "O.J.",
        desc: "",
        img: "/images/6.jpg",
        price: "$8.00",
        tipo: "luminosa",
    },
    {
        title: "Spooky",
        desc: "",
        img: "/images/7.jpg",
        price: "$7.50",
        tipo: "luminosa",
    },
    {
        title: "Freya",
        desc: "",
        img: "/images/8.jpg",
        price: "$12.20",
        tipo: "luminosa",
    },
];

const ProductCard = () => {
  return (
    <div>
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {list.map((item, index) => (
                  <Card shadow="md" key={index} isPressable onPress={() => console.log("item pressed")}>
                      <CardBody className="overflow-visible p-0">
                          <Image
                              shadow="sm"
                              radius="lg"
                              width="100%"
                              alt={item.title}
                              className="w-full object-cover h-[400px]"
                              src={item.img}
                          />
                      </CardBody>
                      <CardFooter className="text-small justify-between">
                          <b>{item.title}</b>
                          <p className="text-default-600">{item.price}</p>

                      </CardFooter>
                      <CardFooter className="text-small justify-center">
                          <Button className="m-2">
                              <p className="text-default-800">-</p>
                          </Button>
                          <Button className="m-2">
                              <p className="text-default-800">+</p>
                          </Button>
                      </CardFooter>
                      <CardFooter className="text-large justify-center">
                          <Button className="m-2">
                              <b className="text-default-800">
                                  Agregar
                              </b>
                          </Button>

                      </CardFooter>
                  </Card>
              ))}

          </div>
          

    </div>
  )
}

export default ProductCard