import { useEffect, useState } from "react";
import pro1 from "../../../Assets/Images/Pro1.jpeg";
import pro2 from "../../../Assets/Images/Pro2.jpeg";
import notificationService from "../../../Service/NotifyService";
import useTitle from "../../../Utils/UseTitle";
import "./Home.css";

function Home(): JSX.Element {
    useTitle("Northwind | Home")
    const randomNumber = Math.floor(Math.random() * 2 + 1);
    const desserts = [
        { id: 1, name: "Apple Pie", price: 15 },
        { id: 2, name: "Ice Cream", price: 10 },
        { id: 3, name: "Brownie", price: 5 },
        { id: 4, name: "Pancakes", price: 20 }
    ];
    const [message, setMessage] = useState<string>("Test");
    const [message2, setMessage2] = useState<string>("Test");
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

    function displaySale(): void {
        notificationService.success("All Our Products are now in 50%");
    }
    function displaySale2(): void {
        setMessage("Sale in the desserts department 20%");
    }
    function displaySale3(): void {
        setMessage2("hi");
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => {
            clearInterval(intervalId); // Clean-up when component unmounts
        };
    }, []);

    return (
        <div className="Home">
            <h2>Welcome To NorthWind Traders Website !</h2>
            <p>{time}</p>
            {randomNumber === 1 && <img src={pro1} alt="Product 1" />}
            {randomNumber === 2 && <img src={pro2} alt="Product 2" />}
            <p>Our desserts </p>
            {desserts.map(item => <span key={item.id}>{item.name} - {item.price} | </span>)}
            <br />
            <button onClick={displaySale}>Sale</button>
            <hr />
            <button onClick={displaySale2}>Sale2</button>
            <p>{message}</p>
            <hr />
            <button onClick={displaySale3}>Sale3</button>
            <p>{message2}</p>
        </div>
    );
}

export default Home;