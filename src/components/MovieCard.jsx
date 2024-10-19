import React from "react";
import {Card, CardHeader, CardBody, Image, Button, link} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function MovieCard({moviesInfo}) {

  function getMovieID(getID) {
    console.log(getID);
  }

  return (
    <motion.div animate={{y:0}} initial={{y:100}} whileHover={{ scale: 1.1, rotate:9 }} >
      <Card className="py-4 cursor-pointer">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{moviesInfo.original_language}</p>
        <small className="text-default-500">{moviesInfo.release_date}</small>
        <h4 className="font-bold text-large">{moviesInfo.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={`https://image.tmdb.org/t/p/w500${moviesInfo.poster_path}`}
          width={270}
        />
        <NavLink className="p-4 bg-slate-800 text-white mt-4 rounded-lg text-center" as={link} to={`/movies/${moviesInfo.id}`}>
            Details
        </NavLink>
      </CardBody>
    </Card>
    </motion.div>
  );
}
