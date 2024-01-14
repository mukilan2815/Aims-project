import React from 'react'
import { faTrainSubway } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-bluecolor p-4 ">
        <FontAwesomeIcon icon={faTrainSubway} className="text-xl font-color" />
        <h1 className="text-2xl font-color font-bold ml-2">AIMS Server</h1>
      </div>
    </div>
  );
}

export default Navbar