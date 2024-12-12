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
      <div className="pt-20 gap-4 grid grid-cols-3">
      <Items icon={C} title={"C"} desc={"Strengthen your understanding of procedural programming, memory management, and system-level programming with C."} />
        <Items icon={py} title={"Python"} desc={"Master versatile programming concepts, scripting, and problem-solving with Python's simple syntax and powerful libraries."} />
        <Items icon={java} title={"Java"} desc={"Develop expertise in object-oriented programming, multi-threading, and core Java concepts for robust application development."} />
        <Items icon={cpp} title={"C++"} desc={"Strengthen knowledge in object-oriented programming, STL, memory management, and performance-driven application design."} />
        <Items icon={sql} title={"MySQL"} desc={"Master querying, manipulating, and managing data in relational databases using SQL commands like SELECT, JOIN, and GROUP BY."} />
        <Items icon={dsa} title={"Data Structures"} desc={"Learn to design, implement, and optimize data structures like arrays, linked lists, stacks, queues, trees, and graphs for efficient problem-solving."} />
      </div>
    </div>
  );
};

export default Topics;
