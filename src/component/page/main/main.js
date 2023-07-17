import Main from "../../template/main/main";
import Foto from '../../../img/Foto Diri.png';

export default function Index(){
    var data = {
        employee : {
            id : 1,
            name : "Muhammad Hafid",
            gender : "Male",
            age : "22",
            position : "Jr.Developer",
            summary : "Experienced as internship Web Developer for 1 year and able to develop database backup, monitoring website system, and handling technical issues. Currently working at PT Bumi Amartha Teknologi Mandiri as Graduate Development Program.",
            foto : Foto
        },  
        skill : [
            {
                id : 1,
                name : "Java"
            },
            {
                id : 2,
                name : "Springboot"
            },
            {
                id : 3,
                name : "React"
            }
        ],    
        tool : [
            {
                id : 1,
                name : "VS Code"
            },
            {
                id : 2,
                name : "MySQL Workbench"
            },
            {
                id : 3,
                name : "Android Studio"
            }
        ],
        experience : [
            {
                id : 1,
                name : "Graduate Development Program",
                place : "PT Bumi Amartha Teknologi Mandiri",
                summary : `            o Commands in SQL and database key.
                o Create databases using DML and DLL commands. 
                o Run and explored CRUD Queries (Create, Read, Update, and Delete). 
                o Implemented using Join, Order By, and Group By. 
                o Able to Implemented and present system design project. 
                o Able to used usage destructing arrays and objects.
                o Able to implementation and use basic JavaScript, ReactJS, and JSX. 
                o Able to understand and solving about var, let, const, tipe data Javascript, looping, 
                decision, ternary operator, function with or without return value, and arrow function.
                o Implementation about various composite data types (Array and Object). 
                o Able to apply push, pop, unshift, sort, reverse, filters, sort, map, and reduce. 
                o Implemented and testing using component, props, function, class, rendering and extraction component. 
                o Implementation and testing using and add local state, lifecycle, local state on class, 
                integration lifecycle method with library axios. 
                o Implementation and testing using prevent default, event binding, and giving arguments to events. 
                o Able to understand and solving about inline If and If-Else using logic operator. 
                `,
                start : "May 2023",
                end : "Present"
            }
        ],
        training : [
            {
                id : 1,
                name : "Graduate Development Program Bootcamp",
                place : "PT Bumi Amartha Teknologi Mandiri",
                summary : `• Learned and explored about basic programming (full stack).
                • Explored and learned about Java Fundamental (data types, variables, constants,
                statements, flow control, looping, void/non-void, array and list data structure).
                • Explored and learned about OOP Concept (apply programming elements classes
                and object, structure form, implement access modifiers, encapsulation and
                constructor, inheritance of properties, overriding and overloading, abstraction). 
                • Explored and learned about PL/SQL (advantage, type, structure block and the
                difference).
                • Explored and learned about Java Generic, Java Collection, Java Stream, and Java
                  Database Connectivity (JDBC). 
                • Learned about concept of Unit testing and versioning AAA (Arrange-Act-Assert).
                • Learned about concept of Software Development Life Cycle (SDLC)
                • Learned about concept of Entity Relationship Diagram (ERD).
                • Learned about concept of Unified Modeling Language (UML).
                • Learned about concept of Business Process Modeling Notation (BPMN).
                • Learned about concept of Model, view and controller (Model - View – Controller
                  and DAO).   
                `
            }
        ],
        certificate : [
            {
                id : 1,
                name : "Java",
                publisher : "SoloLearn"
            },
            {
                id : 2,
                name : "JavaScript",
                publisher : "SoloLearn"
            },
            {
                id : 3,
                name : "React",
                publisher : "SoloLearn"
            }
        ],
        education : [
            {
                id : 1,
                school : "Brawijaya University",
                description : "Sistem Informasi Bachelor Degree",
                start : "2019",
                end : "2023"
            }
        ]
    }
    return (
        <Main data={data}></Main>
    )
}