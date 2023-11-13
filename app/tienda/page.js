'use client'

import React from "react";
import { Card, CardHeader, CardBody, Image, CardFooter, Button } from "@nextui-org/react";

const Tienda = () => {


    const list = [
        {
            title: "Yummy",
            img: "/images/1.jpg",
            price: "$5.50",
            
        },
        {
            title: "Asensia",
            img: "/images/2.jpg",
            price: "$3.00",
        },
        {
            title: "Seymour",
            img: "/images/3.jpg",
            price: "$10.00",
        },
        {
            title: "Bonnie",
            img: "/images/4.jpg",
            price: "$5.30",
        },
        {
            title: "Líria",
            img: "/images/5.jpg",
            price: "$15.70",
        },
        {
            title: "O.J.",
            img: "/images/6.jpg",
            price: "$8.00",
        },
        {
            title: "Spooky",
            img: "/images/7.jpg",
            price: "$7.50",
        },
        {
            title: "Freya",
            img: "/images/8.jpg",
            price: "$12.20",
        },
    ];

    return (
        <div className="container my-5" >
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
                    </Card>
                ))}

            </div>
        </div>
    )
           
}

export default Tienda


