import React from 'react';
import Navbar from './Navbar';
import Items from './Items';
import C from "../images/c.svg"
import py from "../images/python.svg"
import java from "../images/java.svg"
import cpp from "../images/cpp.svg"
import sql from "../images/sql.svg"
import dsa from "../images/dsa.svg"

const Topics = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20 gap-4 grid grid-cols-2">
        <Items icon={C} title={"C"} desc={"Strengthen your understanding of procedural programming, memory management, and system-level programming with C."} />
        <Items icon={py} title={"C"} desc={"Strengthen your understanding of procedural programming, memory management, and system-level programming with C."} />
        <Items icon={java} title={"C"} desc={"Strengthen your understanding of procedural programming, memory management, and system-level programming with C."} />
        <Items icon={cpp} title={"C"} desc={"Strengthen your understanding of procedural programming, memory management, and system-level programming with C."} />
        <Items icon={sql} title={"C"} desc={"Strengthen your understanding of procedural programming, memory management, and system-level programming with C."} />
        <Items icon={dsa} title={"C"} desc={"Strengthen your understanding of procedural programming, memory management, and system-level programming with C."} />
      </div>
    </div>
  );
};

export default Topics;
